#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import shutil
import subprocess
from collections import defaultdict
from dataclasses import asdict, dataclass, field
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "AS"
ANALYSIS_DIR = ROOT / "analysis"
TEXT_DIR = ANALYSIS_DIR / "text"


DATE_PATTERNS = [
    re.compile(r"(?P<month>\d{1,2})[._](?P<day>\d{1,2})[._](?P<year>\d{2,4})"),
    re.compile(r"(?P<month>\d{1,2})_(?P<day>\d{1,2})"),
]


@dataclass
class DocumentRecord:
    date: str
    kind: str
    source_pdf: str
    extracted_txt: str
    pages: int | None = None


@dataclass
class MeetingRecord:
    date: str
    docs: list[DocumentRecord] = field(default_factory=list)


def infer_kind(name: str) -> str:
    lower = name.lower()
    if "email vote" in lower and "agenda" in lower:
        return "email_vote_agenda"
    if "email vote" in lower:
        return "email_vote_minutes"
    if "agenda" in lower:
        return "agenda"
    return "minutes"


def normalize_date(name: str) -> str:
    for pattern in DATE_PATTERNS:
        match = pattern.search(name)
        if not match:
            continue
        month = int(match.group("month"))
        day = int(match.group("day"))
        year_str = match.groupdict().get("year")
        if year_str is None:
            year = 2026 if month == 1 else 2025
        else:
            year = int(year_str)
            if year < 100:
                year += 2000
        return f"{year:04d}-{month:02d}-{day:02d}"
    raise ValueError(f"Could not parse date from {name}")


def page_count(pdf_path: Path) -> int | None:
    pdfinfo = shutil.which("pdfinfo")
    if not pdfinfo:
        return None
    result = subprocess.run(
        [pdfinfo, str(pdf_path)],
        check=True,
        capture_output=True,
        text=True,
    )
    for line in result.stdout.splitlines():
        if line.startswith("Pages:"):
            return int(line.split(":", 1)[1].strip())
    return None


def extract_text(pdf_path: Path, txt_path: Path) -> None:
    txt_path.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(["pdftotext", str(pdf_path), str(txt_path)], check=True)


def main() -> None:
    ANALYSIS_DIR.mkdir(exist_ok=True)
    TEXT_DIR.mkdir(exist_ok=True)

    meetings: dict[str, MeetingRecord] = defaultdict(lambda: None)
    inventory: list[MeetingRecord] = []

    for pdf_path in sorted(SOURCE_DIR.glob("*.pdf")):
        date = normalize_date(pdf_path.stem)
        kind = infer_kind(pdf_path.name)
        meeting_dir = TEXT_DIR / date
        txt_name = f"{kind}.txt"
        txt_path = meeting_dir / txt_name
        extract_text(pdf_path, txt_path)

        record = DocumentRecord(
            date=date,
            kind=kind,
            source_pdf=str(pdf_path.relative_to(ROOT)),
            extracted_txt=str(txt_path.relative_to(ROOT)),
            pages=page_count(pdf_path),
        )
        if meetings.get(date) is None:
            meetings[date] = MeetingRecord(date=date)
            inventory.append(meetings[date])
        meetings[date].docs.append(record)

    inventory.sort(key=lambda item: item.date)
    payload = {"meetings": [asdict(item) for item in inventory]}
    (ANALYSIS_DIR / "inventory.json").write_text(json.dumps(payload, indent=2))


if __name__ == "__main__":
    main()
