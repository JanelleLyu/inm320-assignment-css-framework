// ============================================================
// INM320 - CSS Framework Assignment
// Custom JavaScript for the dashboard page
// Adds a project row from the modal form.
// ============================================================

(function () {
  "use strict";

  const form = document.getElementById("projectForm");
  const tableBody = document.querySelector(".app-table tbody");
  const modalElement = document.getElementById("projectModal");

  // Bootstrap modal instance for the "Add project" dialog
  const projectModal = modalElement ? new bootstrap.Modal(modalElement) : null;

  // The header search is a plain demo field: keep Enter from reloading the page.
  const searchForm = document.querySelector(".search-box");
  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  }

  /**
   * Build one table row for a new project.
   * Values are inserted with textContent so user input
   * can never be executed as HTML.
   */
  function buildProjectRow(name, budget, stage) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("th");
    nameCell.scope = "row";
    // Company mark and member avatar use the same markup as the static rows
    const badge = document.createElement("img");
    badge.className = "company-mark-img";
    badge.src = "assets/icons/proj/proj-sketch.svg";
    badge.width = 20;
    badge.height = 20;
    badge.alt = "New project company mark";

    nameCell.append(badge, document.createTextNode(name));

    const membersCell = document.createElement("td");
    const avatarGroup = document.createElement("span");
    avatarGroup.className = "member-avatars";
    const avatar = document.createElement("img");
    avatar.className = "member-avatar";
    avatar.src = "assets/img/avatar-2.png";
    avatar.width = 20;
    avatar.height = 20;
    avatar.alt = "Team member avatar";
    avatarGroup.appendChild(avatar);
    membersCell.appendChild(avatarGroup);

    const budgetCell = document.createElement("td");
    budgetCell.textContent = "$" + Number(budget).toLocaleString("en-CA");

    const completionCell = document.createElement("td");

    // Percentage label above the progress bar
    const label = document.createElement("p");
    label.className = "completion-label mb-1";
    label.textContent = stage + "%";

    const progress = document.createElement("div");
    progress.className = "progress";
    progress.setAttribute("role", "progressbar");
    progress.setAttribute("aria-label", name + " completion");
    progress.setAttribute("aria-valuenow", stage);
    progress.setAttribute("aria-valuemin", "0");
    progress.setAttribute("aria-valuemax", "100");

    const bar = document.createElement("div");
    bar.className = "progress-bar";
    bar.style.width = stage + "%";
    progress.appendChild(bar);
    completionCell.append(label, progress);

    row.append(nameCell, membersCell, budgetCell, completionCell);
    return row;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    // Native browser validation, styled by Bootstrap
    if (!projectModal) {
      return;
    }

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const name = document.getElementById("projectName").value.trim();
    const budget = document.getElementById("projectBudget").value;
    const stage = document.getElementById("projectStage").value;

    tableBody.appendChild(buildProjectRow(name, budget, stage));

    form.reset();
    form.classList.remove("was-validated");
    projectModal.hide();
  });
})();
