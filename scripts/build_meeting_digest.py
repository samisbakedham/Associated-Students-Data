#!/usr/bin/env python3
from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ANALYSIS_DIR = ROOT / "analysis"
TEXT_DIR = ANALYSIS_DIR / "text"

KEYWORD_RE = re.compile(
    r"\b("
    r"budget|finance|funding|unallocated|undesignated|reimbursement|retroactive|"
    r"honoraria|proxy|quorum|conflict of interest|recus|closed session|brown act|"
    r"judicial|legal code|constitution|bylaw|violation|illegal|investigat|audit|"
    r"resign|appoint|appointment|remove|removal|travel|contract|reserve"
    r")\b",
    re.IGNORECASE,
)

ACTION_RE = re.compile(
    r"^(Motion to .*|A Bill .*|A Resolution .*|Resolution .*|Bill .*|Resignation .*|Appointment .*|Passed.*|FAILED.*)$",
    re.IGNORECASE,
)


def iter_lines(path: Path) -> list[str]:
    text = path.read_text(errors="replace")
    return [line.strip() for line in text.splitlines()]


def collect_digest(meeting_dir: Path) -> dict:
    docs = {}
    for txt_path in sorted(meeting_dir.glob("*.txt")):
        docs[txt_path.stem] = txt_path

    source = docs.get("minutes") or docs.get("email_vote_minutes") or docs.get("agenda") or docs.get("email_vote_agenda")
    lines = iter_lines(source)

    actions: list[str] = []
    keyword_hits: list[str] = []
    funding_lines: list[str] = []

    for line in lines:
        if not line or len(line) < 6:
            continue
        if ACTION_RE.match(line):
            actions.append(line)
        if KEYWORD_RE.search(line):
            keyword_hits.append(line)
        lower = line.lower()
        if "$" in line or "transfer " in lower or "allocate " in lower or "funding" in lower:
            funding_lines.append(line)

    return {
        "date": meeting_dir.name,
        "source": str(source.relative_to(ROOT)),
        "actions": actions[:120],
        "keyword_hits": keyword_hits[:200],
        "funding_lines": funding_lines[:120],
        "documents": {name: str(path.relative_to(ROOT)) for name, path in docs.items()},
    }


def main() -> None:
    payload = {"meetings": []}
    for meeting_dir in sorted(TEXT_DIR.iterdir()):
        if meeting_dir.is_dir():
            payload["meetings"].append(collect_digest(meeting_dir))
    (ANALYSIS_DIR / "meeting_digests.json").write_text(json.dumps(payload, indent=2))


if __name__ == "__main__":
    main()
