<<<<<<< HEAD
// scripts/index.js

// ハンバーガーメニュー開閉処理（全ページ共通）
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburgerMenu");
  const sideMenu = document.getElementById("sideMenu");

  if (hamburger && sideMenu) {
    hamburger.addEventListener("click", function () {
      sideMenu.classList.toggle("open");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const partyGrid = document.querySelector(".party-grid");
  const searchInput = document.querySelector(".search-bar");
  const filterDropdown = document.querySelector(".filter-dropdown");
  const sortButtons = document.querySelectorAll(".sort-tabs button");

  let currentPage = 1;
  const itemsPerPage = 20;
  let filteredParties = [];

  const allParties = JSON.parse(localStorage.getItem("myParties")) || [];

  function renderParties() {
    partyGrid.innerHTML = "";
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = filteredParties.slice(start, end);

    currentItems.forEach(party => {
      const card = document.createElement("div");
      card.className = "party-card-horizontal";

      card.innerHTML = `
        <img src="${party.logo || 'logo1.png'}" class="party-logo-horizontal" alt="ロゴ">
        <div class="party-info">
          <div class="party-header">
            <h2 class="party-title">
              <a href="party.html?id=${party.id}">${party.name}</a>
            </h2>
            <button class="follow-button">フォロー</button>
          </div>
          <p class="party-description">${party.description}</p>
          <div class="party-actions">
            <span>❤️ 0</span>
            <span>💬 0</span>
          </div>
        </div>
      `;

      partyGrid.appendChild(card);
    });
  }

  function applyFilters() {
    const keyword = searchInput.value.toLowerCase();
    const genre = filterDropdown.value;

    filteredParties = allParties.filter(p => {
      const matchKeyword = p.name.toLowerCase().includes(keyword) || p.description.toLowerCase().includes(keyword);
      const matchGenre = !genre || (p.genre === genre); // ジャンル機能が未実装でも対応可
      return matchKeyword && matchGenre;
    });

    currentPage = 1;
    renderParties();
  }

  searchInput?.addEventListener("input", applyFilters);
  filterDropdown?.addEventListener("change", applyFilters);

  sortButtons?.forEach(btn => {
    btn.addEventListener("click", function () {
      sortButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const type = btn.textContent;

      if (type === "人気順") {
        filteredParties.sort((a, b) => (b.likes || 0) - (a.likes || 0));
      } else if (type === "新着順") {
        filteredParties.sort((a, b) => (b.id || 0) - (a.id || 0));
      } else if (type === "急上昇順") {
        filteredParties.sort(() => Math.random()); // 仮のロジック
      }

      currentPage = 1;
      renderParties();
    });
  });

  // 初期化
  filteredParties = allParties;
  renderParties();
=======
// scripts/index.js

// ハンバーガーメニュー開閉処理（全ページ共通）
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburgerMenu");
  const sideMenu = document.getElementById("sideMenu");

  if (hamburger && sideMenu) {
    hamburger.addEventListener("click", function () {
      sideMenu.classList.toggle("open");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const partyGrid = document.querySelector(".party-grid");
  const searchInput = document.querySelector(".search-bar");
  const filterDropdown = document.querySelector(".filter-dropdown");
  const sortButtons = document.querySelectorAll(".sort-tabs button");

  let currentPage = 1;
  const itemsPerPage = 20;
  let filteredParties = [];

  const allParties = JSON.parse(localStorage.getItem("myParties")) || [];

  function renderParties() {
    partyGrid.innerHTML = "";
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = filteredParties.slice(start, end);

    currentItems.forEach(party => {
      const card = document.createElement("div");
      card.className = "party-card-horizontal";

      card.innerHTML = `
        <img src="${party.logo || 'logo1.png'}" class="party-logo-horizontal" alt="ロゴ">
        <div class="party-info">
          <div class="party-header">
            <h2 class="party-title">
              <a href="party.html?id=${party.id}">${party.name}</a>
            </h2>
            <button class="follow-button">フォロー</button>
          </div>
          <p class="party-description">${party.description}</p>
          <div class="party-actions">
            <span>❤️ 0</span>
            <span>💬 0</span>
          </div>
        </div>
      `;

      partyGrid.appendChild(card);
    });
  }

  function applyFilters() {
    const keyword = searchInput.value.toLowerCase();
    const genre = filterDropdown.value;

    filteredParties = allParties.filter(p => {
      const matchKeyword = p.name.toLowerCase().includes(keyword) || p.description.toLowerCase().includes(keyword);
      const matchGenre = !genre || (p.genre === genre); // ジャンル機能が未実装でも対応可
      return matchKeyword && matchGenre;
    });

    currentPage = 1;
    renderParties();
  }

  searchInput?.addEventListener("input", applyFilters);
  filterDropdown?.addEventListener("change", applyFilters);

  sortButtons?.forEach(btn => {
    btn.addEventListener("click", function () {
      sortButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const type = btn.textContent;

      if (type === "人気順") {
        filteredParties.sort((a, b) => (b.likes || 0) - (a.likes || 0));
      } else if (type === "新着順") {
        filteredParties.sort((a, b) => (b.id || 0) - (a.id || 0));
      } else if (type === "急上昇順") {
        filteredParties.sort(() => Math.random()); // 仮のロジック
      }

      currentPage = 1;
      renderParties();
    });
  });

  // 初期化
  filteredParties = allParties;
  renderParties();
>>>>>>> dfed7edfbdee1c45ca74b1d55fd7e2a7816ded5b
});