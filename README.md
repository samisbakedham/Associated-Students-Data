# Associated Students Senate Records Review

This repository collects Associated Students UCSB Senate source documents and the reporting work built from them.

## What this repo is for

- preserve Senate agendas and minutes used for review
- publish a documented summary of what happened in the Senate
- maintain student-news-style article drafts that can be adapted for a public site
- keep lightweight local scripts for extracting and reviewing the PDFs

## Repo layout

### Source documents

- [`AS/`](/Users/wonda/Documents/GitHub/Associated%20Students%20Data/AS)
- This folder contains the Senate agendas, minutes, and email-vote PDFs used in the review.

### Public-facing written outputs

- [`analysis/associated_students_senate_report.md`](/Users/wonda/Documents/GitHub/Associated%20Students%20Data/analysis/associated_students_senate_report.md)
- Comprehensive report covering the period reviewed, major themes, and documented red flags.

- [`analysis/senate_watch_article_drafts.md`](/Users/wonda/Documents/GitHub/Associated%20Students%20Data/analysis/senate_watch_article_drafts.md)
- One article draft per dated meeting or email vote.

### Local analysis helpers

- [`scripts/extract_as_docs.py`](/Users/wonda/Documents/GitHub/Associated%20Students%20Data/scripts/extract_as_docs.py)
- Extracts text from the PDFs and builds a dated inventory.

- [`scripts/build_meeting_digest.py`](/Users/wonda/Documents/GitHub/Associated%20Students%20Data/scripts/build_meeting_digest.py)
- Builds machine-readable meeting digests from the extracted text.

### Ignored generated files

The following are generated locally and are intentionally ignored by git:

- `analysis/text/`
- `analysis/inventory.json`
- `analysis/meeting_digests.json`

These files are useful for local review but are not the primary public deliverables.

## Public vs local content

### Intended to publish

- source PDFs in `AS/`, if you want the repo to function as a primary-source archive
- the written report
- the article drafts
- the helper scripts

### Intended to stay local

- extracted plain text
- generated inventories and digests
- OS clutter such as `.DS_Store`

## Notes for future agents and developers

- The strongest documented story in this archive is governance, transparency, and finance-process failure, not proven embezzlement.
- Do not overstate criminal conclusions unless new evidence exists outside these PDFs.
- If new PDFs are added, rerun the extraction scripts before updating the report or article drafts.
- Keep generated analysis output out of git unless there is a specific reason to publish it.

## Current core outputs

- 1 comprehensive report
- 23 meeting or email-vote article drafts
- source extraction scripts for reproducible review
