window.SITE_DATA = {
  stats: [
    {
      value: "23",
      label: "dated records",
      note: "Regular meetings plus email-vote records from May 21, 2025 through January 28, 2026."
    },
    {
      value: "7",
      label: "major red-flag patterns",
      note: "Retroactive fixes, weak budget detail, repeated conflict warnings, opaque approvals, closed sessions, and more."
    },
    {
      value: "5",
      label: "closed-session flashpoints",
      note: "Finance minutes, student fees, IV Arts funds, BCU structure, and association spending."
    },
    {
      value: "$43.3k",
      label: "largest midyear office request noted",
      note: "President Metzger requested $11,300 in honoraria and $32,000 in special-project funding on January 21, 2026."
    }
  ],
  powerMap: [
    {
      name: "Le Anh Metzger",
      role: "President",
      signal: "Office budgets, project spending, executive director search, food-security proposals",
      detail:
        "The President’s office repeatedly surfaced in project spending debates and requested an additional $43,300 on January 21, 2026."
    },
    {
      name: "Enri Lala",
      role: "Internal Vice President / meeting chair",
      signal: "Agenda control, committee appointments, procedure, closed sessions",
      detail:
        "The IVP chaired meetings, moved business across the agenda, shaped committee leadership decisions, and was central to floor procedure."
    },
    {
      name: "Attorney General office",
      role: "Taylor Iden, then Natalia Pascher",
      signal: "Conflict-of-interest guidance, legal-code interpretation, advisory-opinion disputes",
      detail:
        "The AG repeatedly warned senators about conflicts, appointment risk, and legal uncertainty, then changed hands midyear."
    },
    {
      name: "Finance leadership",
      role: "Finance Committee, Jenny Jiang, Nadine Malhis, recurring finance actors",
      signal: "Allocations, honoraria, rollover, itemized-budget fights",
      detail:
        "Finance debates touched nearly every major spending conflict, from student programs to internal office growth."
    },
    {
      name: "Judicial Council",
      role: "External check on Senate procedure",
      signal: "Directives, advisory requests, appointment fallout",
      detail:
        "Judicial Council decisions and advisory requests repeatedly shaped Senate arguments over legality and process."
    },
    {
      name: "Financial Operations / staff",
      role: "Administrative pipeline",
      signal: "Backlog, fiscal-close uncertainty, system transition",
      detail:
        "Staff and operations figures acknowledged incomplete books, backlog, and system-transition issues that limited visibility."
    }
  ],
  relationships: [
    "Senate leadership controlled agenda flow while also influencing committee leadership appointments.",
    "Finance Committee recommendations often fed directly into Senate allocations, but senators repeatedly challenged the quality of supporting documentation.",
    "The Attorney General’s office acted as the main legal referee, yet senators still disagreed over what legal code required.",
    "Judicial Council remained the fallback authority whenever appointment or procedure disputes outgrew floor debate.",
    "Operational staff controlled the underlying finance and reimbursement pipeline, which meant visibility failures had institutional, not just political, causes."
  ],
  redFlags: [
    {
      title: "Retroactive approvals became routine",
      level: "high",
      dates: "May 28, May 31, June 4, July 9, January 7",
      body:
        "The archive shows repeated retroactive corrections to appointments, minutes, reimbursements, and funding requests. That weakens the line between public approval and after-the-fact repair."
    },
    {
      title: "Financial visibility was openly described as broken",
      level: "high",
      dates: "December 3, January 28",
      body:
        "Speakers and staff described a system where spending, appointments, and approvals were too hard to track and in some cases not final because of backlog or system transition."
    },
    {
      title: "Itemized budgets and multiple quotes were often missing or late",
      level: "medium",
      dates: "October 1, November 5, November 12, December 3, January 7",
      body:
        "Senators repeatedly asked for itemized budget sheets, supporting quotes, and clearer funding sources before passing or considering requests."
    },
    {
      title: "Conflict-of-interest warnings kept returning",
      level: "medium",
      dates: "June 4, October 1, October 15, November 12, December 3, January 7",
      body:
        "The Attorney General’s office repeatedly warned senators about voting on matters that could affect their own positions, honoraria, committees, or close associates."
    },
    {
      title: "Bulk approval of minutes and allocations was treated as a structural weakness",
      level: "high",
      dates: "November 12, January 21, January 28",
      body:
        "Senators themselves criticized a workflow where minutes and allocations could enter the approval folder and pass quickly without real scrutiny."
    },
    {
      title: "Closed sessions clustered around money, fees, and internal power",
      level: "medium",
      dates: "October 8, October 29, November 5, December 3, January 14",
      body:
        "Finance minutes, student fees, IV Arts funds, BCU structuring, and association spending all went behind closed doors at various points."
    },
    {
      title: "Midyear internal spending expansions raised accountability questions",
      level: "medium",
      dates: "October 22, January 21",
      body:
        "The Senate approved or considered additional money for its own operations and offices, including AG honoraria and the President’s request for $43,300 in additional funding."
    }
  ],
  arc: [
    {
      title: "Phase 1: Spring repair",
      body:
        "The term opened with standing rules and finance continuity, then quickly fell into Judicial Council fallout, retroactive fixes, and questions about how to legally correct earlier actions."
    },
    {
      title: "Phase 2: Summer rewrite",
      body:
        "Summer meetings pushed legal-code revisions and committee structure reforms while still depending on exceptions and cleanup motions to keep things moving."
    },
    {
      title: "Phase 3: Fall escalation",
      body:
        "By fall, fights over honoraria, amendments, minutes, and committee power were inseparable from the Senate’s spending decisions."
    },
    {
      title: "Phase 4: Transparency crisis",
      body:
        "December and January made the system problem explicit: multiple speakers argued that students could not easily know who held power or where money was actually going."
    }
  ],
  actions: [
    {
      title: "Read before you react",
      body:
        "Use the tracker below to tie every claim back to a meeting date and a source document. Attention is strongest when it is precise."
    },
    {
      title: "Ask for the missing records",
      body:
        "If you want stronger claims than this archive allows, the next documents to pursue are expenditure logs, requisitions, reimbursement records, conflict forms, and fiscal-close reports."
    },
    {
      title: "Track office growth",
      body:
        "Pay attention to new positions, honoraria changes, and budget expansions for internal offices. Those were major pressure points in this term."
    },
    {
      title: "Watch how process shapes outcomes",
      body:
        "Agenda control, committee referrals, email votes, and bulk approvals often mattered as much as the headline motions themselves."
    }
  ],
  meetings: [
    {
      date: "2025-05-21",
      displayDate: "May 21, 2025",
      type: "meeting",
      title: "New Senate opens term with standing rules and a finance extension",
      dek: "The 76th Senate started by defining procedure, extending finance continuity, and approving its first appointments.",
      summary:
        "The first meeting set the institutional baseline: standing rules, finance continuity, and transition. It was procedural, but it mattered because the Senate’s later fights all built on these rules.",
      tags: ["governance", "finance", "appointments"],
      signals: ["standing rules", "finance continuity"],
      docs: {
        minutes: "AS/5.21.2025 76th Senate Meeting Minutes.pdf",
        agenda: "AS/76th ASUCSB Senate Agenda 5_21.pdf"
      }
    },
    {
      date: "2025-05-28",
      displayDate: "May 28, 2025",
      type: "meeting",
      title: "Transparency complaints and Judicial Council fallout hit the floor early",
      dek: "A packed meeting mixed public complaints about financial transparency with disputes over old minutes, retroactive action, and compliance.",
      summary:
        "This was one of the earliest signs that the Senate would spend major energy on institutional self-repair. Students and senators were already arguing about visibility, legality, and retroactive correction.",
      tags: ["transparency", "judicial", "retroactive", "governance"],
      signals: ["Judicial Council directive", "quorum concerns", "financial transparency complaints"],
      docs: {
        minutes: "AS/05.28.25 Senate Meeting Minutes.pdf",
        agenda: "AS/76th ASUCSB Senate Agenda 5_28.pdf"
      }
    },
    {
      date: "2025-05-31",
      displayDate: "May 31, 2025",
      type: "email vote",
      title: "An email vote moved policy changes and thousands of dollars at once",
      dek: "Resolutions on controls and finance leadership traveled alongside direct fund transfers and IV Arts-related action.",
      summary:
        "The email-vote format let the Senate move quickly, but it also concentrated consequential policy and money decisions in a channel most students would never casually monitor.",
      tags: ["email-vote", "finance", "policy", "iv-arts"],
      signals: ["fund transfers", "email vote visibility"],
      docs: {
        minutes: "AS/5.31.25 Senate Email Vote Minutes.pdf"
      }
    },
    {
      date: "2025-06-04",
      displayDate: "June 4, 2025",
      type: "meeting",
      title: "Retroactive fixes and conflict warnings dominated a marathon June meeting",
      dek: "The Senate debated retroactive funding, Judicial Council fallout, travel liability, and conflict-of-interest rules all in one session.",
      summary:
        "June 4 is one of the key source meetings for understanding this term. It shows how legal confusion, funding pressure, and weak process kept colliding in real time.",
      tags: ["retroactive", "conflict", "finance", "travel", "judicial"],
      signals: ["AG conflict guidance", "retroactive funding", "travel liability"],
      docs: {
        minutes: "AS/06.04.2025 Senate Meeting Minutes.pdf",
        agenda: "AS/76th ASUCSB Senate Agenda 6_4.pdf"
      }
    },
    {
      date: "2025-07-09",
      displayDate: "July 9, 2025",
      type: "meeting",
      title: "Summer Senate wrestled with legality, IV Arts, and retroactive banquet funding",
      dek: "Even in summer session, the Senate kept returning to exceptions, advisory opinions, and after-the-fact approvals.",
      summary:
        "The July 9 meeting shows how normalization of one-time exceptions can become a governing pattern, especially once regular committee pipelines have weakened.",
      tags: ["summer", "retroactive", "iv-arts", "advisory-opinion"],
      signals: ["retroactive transaction", "legality request"],
      docs: {
        minutes: "AS/07.09.2025 Senate Meeting Minutes.pdf",
        agenda: "AS/76th ASUCSB Senate Agenda 7_9.pdf"
      }
    },
    {
      date: "2025-07-30",
      displayDate: "July 30, 2025",
      type: "meeting",
      title: "Legal-code rewrites advanced while leadership questions stayed unresolved",
      dek: "Election code, fellowship language, and office rules moved forward, but appointment tensions did not disappear.",
      summary:
        "July 30 looked legislative on the surface, but it still carried the deeper question of who gets to lead, who gets appointed, and how the rules are actually enforced.",
      tags: ["legal-code", "elections", "appointments", "governance"],
      signals: ["BCU election code", "leadership dispute"],
      docs: {
        minutes: "AS/7.30.2025 Senate Meeting Minutes.pdf",
        agenda: "AS/76th ASUCSB Senate Agenda 7_30.pdf"
      }
    },
    {
      date: "2025-08-20",
      displayDate: "August 20, 2025",
      type: "meeting",
      title: "The Senate passed summer reforms but tabled bigger office questions",
      dek: "BCU election changes, controls-and-compliance action, and fellowship updates moved, while other institutional questions were deferred.",
      summary:
        "August 20 is one of the cleaner reform meetings: a reminder that this Senate was not only fighting, it was also rewriting parts of the institution in response to earlier failures.",
      tags: ["reform", "controls", "elections", "fellowship"],
      signals: ["controls and compliance", "BCU code update"],
      docs: {
        minutes: "AS/08.20.25 Senate Meeting Minutes.pdf",
        agenda: "AS/76th ASUCSB Senate Agenda 8_20.pdf"
      }
    },
    {
      date: "2025-09-10",
      displayDate: "September 10, 2025",
      type: "meeting",
      title: "Student-program proposals stalled while a $10,000 event allocation moved",
      dek: "Peer mentorship and language revitalization struggled in committee, while Senate unallocated money was used to back a student event.",
      summary:
        "This meeting showed the recurring gap between political appetite for programs and the Senate’s ability to move them cleanly through its own procedure.",
      tags: ["student-programs", "event-funding", "retroactive", "committee"],
      signals: ["up to $10,000 event allocation", "retroactive internal election"],
      docs: {
        minutes: "AS/9.10.25 Senate Meeting Minutes .pdf",
        agenda: "AS/_76th ASUCSB Senate Agenda 9_10.pdf"
      }
    },
    {
      date: "2025-10-01",
      displayDate: "October 1, 2025",
      type: "meeting",
      title: "Fall opened with committee rewrites and renewed appointment tension",
      dek: "The Senate returned to advocacy structure, finance membership, quarterly reports, and conflicts around who should vote on what.",
      summary:
        "October 1 marks the beginning of a fall quarter where structural reform and internal politics were impossible to separate.",
      tags: ["fall", "appointments", "honoraria", "committee-reform"],
      signals: ["conflict-of-interest questions", "ad hoc appointments"],
      docs: {
        minutes: "AS/10.01.2025 Senate Meeting Minutes.pdf",
        agenda: "AS/76th ASUCSB Senate 10_1 Meeting Agenda.pdf"
      }
    },
    {
      date: "2025-10-08",
      displayDate: "October 8, 2025",
      type: "meeting",
      title: "Finance Committee minutes triggered a Brown Act-framed closed session",
      dek: "The meeting took up legal-code cleanup and then went behind closed doors to discuss finance minutes.",
      summary:
        "This is one of the strongest public-accountability meetings in the archive because the Senate itself treated finance minutes as sensitive enough for closed session.",
      tags: ["closed-session", "finance", "brown-act", "transparency"],
      signals: ["closed session on finance minutes", "retroactive appointments"],
      docs: {
        minutes: "AS/10.08.2025 Senate Meeting Minutes .pdf",
        agenda: "AS/76th ASUCSB 10_8 Senate Meeting Agenda.pdf"
      }
    },
    {
      date: "2025-10-15",
      displayDate: "October 15, 2025",
      type: "meeting",
      title: "Quarterly reporting reform passed while AG staffing money stayed contested",
      dek: "The Senate adopted recurring association reports and kept circling the question of how much internal office growth it should fund.",
      summary:
        "The meeting produced a concrete transparency reform, but it also exposed how difficult it was for the body to cleanly handle new honoraria and staffing requests.",
      tags: ["reporting", "attorney-general", "honoraria", "reform"],
      signals: ["quarterly states of the association", "AG funding request"],
      docs: {
        minutes: "AS/10.15.2025 Senate Meeting Minutes.pdf",
        agenda: "AS/76th ASUCSB Senate Agenda 10_15.pdf"
      }
    },
    {
      date: "2025-10-22",
      displayDate: "October 22, 2025",
      type: "meeting",
      title: "The Senate spent on itself: dinners, rooms, and AG honoraria",
      dek: "A spending-heavy meeting approved food, room reservations, and more money for the Attorney General’s office.",
      summary:
        "This is one of the clearest examples of the Senate financing its own operating structure while students and senators were simultaneously debating internal spending discipline.",
      tags: ["senate-spending", "honoraria", "operations", "finance"],
      signals: ["$7,800 for food", "$6,149 for room reservations", "$3,600 AG honoraria"],
      docs: {
        minutes: "AS/10.22.2025 Senate Meeting Minutes.pdf",
        agenda: "AS/76th ASUCSB Senate Agenda 10_22.pdf"
      }
    },
    {
      date: "2025-10-29",
      displayDate: "October 29, 2025",
      type: "meeting",
      title: "Executive director search launched as senators closed the room on fees",
      dek: "Leadership formation, student-fee discussions, and internal committee funding all landed in the same night.",
      summary:
        "October 29 ties personnel power and money together: the Senate began shaping a major administrative search while also debating funds and closing discussion on fee issues.",
      tags: ["executive-search", "closed-session", "student-fees", "unallocated"],
      signals: ["executive director search committee", "closed session on student fees"],
      docs: {
        minutes: "AS/10.29.2025 Senate Meeting Minutes.pdf",
        agenda: "AS/76th ASUCSB Senate Agenda 10_29.pdf"
      }
    },
    {
      date: "2025-11-05",
      displayDate: "November 5, 2025",
      type: "meeting",
      title: "Basic Needs urgency met Senate process skepticism",
      dek: "Students needed fast food support, but senators kept running into budget detail, quote, and process questions.",
      summary:
        "November 5 is a strong example of sympathetic student-facing policy colliding with the Senate’s own weak documentation and approval systems.",
      tags: ["basic-needs", "itemized-budgets", "closed-session", "finance"],
      signals: ["$15,000 grocery vouchers", "questions over burrito program budget"],
      docs: {
        minutes: "AS/11.05.2025 Senate Meeting Minutes.pdf",
        agenda: "AS/76th ASUCSB Senate Agenda 11_5.pdf"
      }
    },
    {
      date: "2025-11-12",
      displayDate: "November 12, 2025",
      type: "meeting",
      title: "The Senate openly questioned whether anyone really reviews allocations",
      dek: "Honoraria concerns, AI policy, committee allocations, and criticism of the minutes-and-allocations process all collided in one meeting.",
      summary:
        "If you want one meeting that explains why students should watch Senate procedure, this is it. The body effectively admitted its approval pipeline was too easy to game or rush.",
      tags: ["honoraria", "ai", "minutes-allocations", "transparency"],
      signals: ["$3,000 committee allocations", "minutes approval criticism"],
      docs: {
        minutes: "AS/11.12.2025 Senate Meeting Minutes.pdf",
        agenda: "AS/76th ASUCSB Senate Agenda 11_12.pdf"
      }
    },
    {
      date: "2025-11-19",
      displayDate: "November 19, 2025",
      type: "meeting",
      title: "Honoraria reform moved forward as the Senate mixed advocacy and institutional cleanup",
      dek: "A modernization bill, judicial request, and policy resolutions shared the floor with more committee-structure work.",
      summary:
        "This meeting shows the Senate trying to stabilize core systems while still acting as a political body on broader student issues.",
      tags: ["honoraria", "judicial", "policy", "institutional-reform"],
      signals: ["modernize honoraria referred to finance", "judicial advisory request"],
      docs: {
        minutes: "AS/11.19.2025 Senate Meeting Minutes.pdf",
        agenda: "AS/76th ASUCSB Senate Agenda 11_19.pdf"
      }
    },
    {
      date: "2025-11-28",
      displayDate: "November 28, 2025",
      type: "email vote",
      title: "A late-November email vote advanced the executive director search",
      dek: "The search committee’s draft job description moved while senators also sought judicial guidance on a constitutional question.",
      summary:
        "Important administrative decisions continued to move through email channels, reinforcing the visibility gap between Senate process and student awareness.",
      tags: ["email-vote", "executive-search", "judicial"],
      signals: ["executive director job description", "advisory-opinion request"],
      docs: {
        agenda: "AS/76th ASUCSB Senate Email Vote Agenda 11_28.pdf"
      }
    },
    {
      date: "2025-11-29",
      displayDate: "November 29, 2025",
      type: "email vote minutes",
      title: "Email-vote minutes confirmed the executive director action",
      dek: "The record formalized the search-committee step and the legal request that accompanied it.",
      summary:
        "The content is brief, but the workflow matters: core administrative choices were still happening in spaces most students would not naturally see.",
      tags: ["email-vote", "executive-search", "documentation"],
      signals: ["formalized late-November email vote"],
      docs: {
        minutes: "AS/11.29.25 Senate Email Vote.pdf"
      }
    },
    {
      date: "2025-12-03",
      displayDate: "December 3, 2025",
      type: "meeting",
      title: "December 3 laid bare the association’s transparency crisis",
      dek: "Speakers described broken minutes systems, unclear appointments, weak financial visibility, and a Senate that could not easily know its own ground truth.",
      summary:
        "This is arguably the single most important meeting in the archive. It exposed the mechanics of opacity rather than just arguing about symptoms.",
      tags: ["transparency", "appointments", "reserves", "closed-session", "honoraria"],
      signals: ["digitization push", "appointment fight", "closed session on IV Arts and staff reorg"],
      docs: {
        minutes: "AS/12.03.2025 Senate Meeting Minutes.pdf"
      }
    },
    {
      date: "2026-01-07",
      displayDate: "January 7, 2026",
      type: "meeting",
      title: "Winter opened with honoraria reform, new allocations, and an AG transition",
      dek: "The Senate modernized honoraria, funded multiple student initiatives, and swapped Attorneys General.",
      summary:
        "January 7 combines internal reform with real resource allocation. It is one of the term’s most productive meetings, but it still ends with retroactive appointments and office turnover.",
      tags: ["honoraria", "funding", "appointments", "attorney-general"],
      signals: ["modernize honoraria passed", "speech forensics funding", "AG office changed hands"],
      docs: {
        minutes: "AS/1.07.2026 Senate Meeting Minutes.pdf",
        agenda: "AS/76th ASUCSB Senate Agenda 1_7.pdf"
      }
    },
    {
      date: "2026-01-14",
      displayDate: "January 14, 2026",
      type: "meeting",
      title: "Student safety, AI, dinners, and association spending all landed together",
      dek: "The Senate addressed public policy, internal code cleanup, weekly dinner funding, and then moved into closed session over BCU structure and spending.",
      summary:
        "This meeting shows the two faces of the Senate at once: outward-facing political action and inward-facing debates over how the institution spends and governs.",
      tags: ["student-safety", "ai", "closed-session", "senate-spending"],
      signals: ["$7,000 for weekly dinners", "closed session on BCU structure and spending"],
      docs: {
        minutes: "AS/01.14.2026 Senate Meeting Minutes .pdf",
        agenda: "AS/76th ASUCSB Senate Agenda 1_14.pdf"
      }
    },
    {
      date: "2026-01-21",
      displayDate: "January 21, 2026",
      type: "meeting",
      title: "The President asked for $43,300 more and turned the meeting into a budget test",
      dek: "Policy items moved, but the big story was a major midyear request for honoraria and special-project money.",
      summary:
        "January 21 is the clearest office-budget accountability meeting in the archive. It puts productivity claims, internal spending, and resource limits directly on the table.",
      tags: ["president-budget", "honoraria", "ai", "policy"],
      signals: ["$11,300 additional honoraria", "$32,000 special projects request"],
      docs: {
        minutes: "AS/1.21.26 Senate Meeting Minutes.pdf",
        agenda: "AS/76th ASUCSB Senate Agenda 1_21.pdf"
      }
    },
    {
      date: "2026-01-28",
      displayDate: "January 28, 2026",
      type: "meeting",
      title: "A BCU spending analysis finally quantified the inward-versus-student-facing debate",
      dek: "A new report on honoraria, rollover, and internal spending gave the Senate its clearest comparative picture yet, even as staff warned the books were not final.",
      summary:
        "This meeting turns months of frustration into a usable accountability framework. It does not prove corruption, but it does show exactly why students should keep asking how money is actually being used.",
      tags: ["audit", "rollover", "honoraria", "transparency", "budget-cycle"],
      signals: ["BCU spending analysis", "fiscal-close backlog warning"],
      docs: {
        minutes: "AS/01.28.2026 Senate Meeting Minutes.pdf",
        agenda: "AS/76th ASUCSB Senate Agenda 1_28.pdf"
      }
    }
  ]
};
