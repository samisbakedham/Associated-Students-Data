(function () {
  const data = window.SITE_DATA;
  const filters = ["all", "transparency", "finance", "honoraria", "appointments", "closed-session", "policy", "student-programs"];
  let activeFilter = "all";
  let searchTerm = "";

  const statsGrid = document.getElementById("stats-grid");
  const powerGrid = document.getElementById("power-grid");
  const relationshipList = document.getElementById("relationship-list");
  const flagGrid = document.getElementById("flag-grid");
  const arcGrid = document.getElementById("arc-grid");
  const actionGrid = document.getElementById("action-grid");
  const filterBar = document.getElementById("filter-bar");
  const meetingGrid = document.getElementById("meeting-grid");
  const meetingResults = document.getElementById("meeting-results");
  const meetingSearch = document.getElementById("meeting-search");

  function encodePath(path) {
    return encodeURI(path);
  }

  function titleCase(text) {
    return text
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }

  function renderStats() {
    statsGrid.innerHTML = data.stats
      .map(
        (item) => `
          <article class="stat-card">
            <div class="stat-value">${item.value}</div>
            <h3>${item.label}</h3>
            <p>${item.note}</p>
          </article>
        `
      )
      .join("");
  }

  function renderPower() {
    powerGrid.innerHTML = data.powerMap
      .map(
        (item) => `
          <article class="power-card">
            <p class="power-role">${item.role}</p>
            <h3>${item.name}</h3>
            <p class="power-signal">${item.signal}</p>
            <p>${item.detail}</p>
          </article>
        `
      )
      .join("");

    relationshipList.innerHTML = data.relationships
      .map((item) => `<span class="relationship-pill">${item}</span>`)
      .join("");
  }

  function renderFlags() {
    flagGrid.innerHTML = data.redFlags
      .map(
        (item) => `
          <article class="flag-card flag-${item.level}">
            <div class="flag-topline">
              <span class="flag-level">${item.level}</span>
              <span class="flag-dates">${item.dates}</span>
            </div>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </article>
        `
      )
      .join("");
  }

  function renderArc() {
    arcGrid.innerHTML = data.arc
      .map(
        (item) => `
          <article class="arc-card">
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </article>
        `
      )
      .join("");
  }

  function renderActions() {
    actionGrid.innerHTML = data.actions
      .map(
        (item) => `
          <article class="action-card">
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </article>
        `
      )
      .join("");
  }

  function renderFilters() {
    filterBar.innerHTML = filters
      .map(
        (filter) => `
          <button class="filter-chip ${filter === activeFilter ? "active" : ""}" type="button" data-filter="${filter}">
            ${filter === "all" ? "All" : titleCase(filter)}
          </button>
        `
      )
      .join("");

    filterBar.querySelectorAll("[data-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;
        renderFilters();
        renderMeetings();
      });
    });
  }

  function getFilteredMeetings() {
    return data.meetings.filter((meeting) => {
      const matchesFilter = activeFilter === "all" || meeting.tags.includes(activeFilter);
      const haystack = [
        meeting.displayDate,
        meeting.type,
        meeting.title,
        meeting.dek,
        meeting.summary,
        ...meeting.tags,
        ...meeting.signals
      ]
        .join(" ")
        .toLowerCase();
      const matchesSearch = !searchTerm || haystack.includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }

  function docLinks(docs) {
    if (!docs) return "";
    return Object.entries(docs)
      .map(([kind, path]) => {
        if (!path) return "";
        return `<a href="${encodePath(path)}" target="_blank" rel="noreferrer">${titleCase(kind)}</a>`;
      })
      .join("");
  }

  function renderMeetings() {
    const meetings = getFilteredMeetings();
    meetingResults.textContent = `${meetings.length} records shown`;
    meetingGrid.innerHTML = meetings
      .map(
        (meeting) => `
          <article class="meeting-card">
            <div class="meeting-meta">
              <span>${meeting.displayDate}</span>
              <span class="meeting-type">${meeting.type}</span>
            </div>
            <h3>${meeting.title}</h3>
            <p class="meeting-dek">${meeting.dek}</p>
            <p class="meeting-summary">${meeting.summary}</p>
            <div class="tag-row">
              ${meeting.tags.map((tag) => `<span class="tag">${titleCase(tag)}</span>`).join("")}
            </div>
            <div class="signal-row">
              ${meeting.signals.map((signal) => `<span class="signal">${signal}</span>`).join("")}
            </div>
            <div class="doc-row">
              ${docLinks(meeting.docs)}
            </div>
          </article>
        `
      )
      .join("");
  }

  function setupSearch() {
    meetingSearch.addEventListener("input", (event) => {
      searchTerm = event.target.value.trim();
      renderMeetings();
    });
  }

  function setupReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
  }

  renderStats();
  renderPower();
  renderFlags();
  renderArc();
  renderActions();
  renderFilters();
  renderMeetings();
  setupSearch();
  setupReveal();
})();
