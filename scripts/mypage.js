<<<<<<< HEAD
// scripts/mypage.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("partyForm");
    const partyNameInput = document.getElementById("partyName");
    const partyDescInput = document.getElementById("partyDescription");
    const partyLogoInput = document.getElementById("partyLogo");
    const myPartiesContainer = document.getElementById("myParties");
  
    let myParties = JSON.parse(localStorage.getItem("myParties")) || [];
  
    function saveParties() {
      localStorage.setItem("myParties", JSON.stringify(myParties));
    }
  
    function renderParties() {
      myPartiesContainer.innerHTML = "";
      myParties.forEach((party, index) => {
        const card = document.createElement("div");
        card.className = "party-card";
  
        card.innerHTML = `
          <img src="${party.logo || 'logo1.png'}" class="party-logo" alt="ロゴ">
          <h3><a href="party.html?id=${party.id}">${party.name}</a></h3>
          <p>${party.description}</p>
          <button class="edit-btn" data-index="${index}">編集</button>
          <button class="delete-btn" data-index="${index}">削除</button>
        `;
  
        myPartiesContainer.appendChild(card);
      });
    }
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const newParty = {
        id: Date.now(),
        name: partyNameInput.value.trim(),
        description: partyDescInput.value.trim(),
        logo: partyLogoInput.value.trim()
      };
  
      if (!newParty.name || !newParty.description) return;
  
      myParties.push(newParty);
      saveParties();
      form.reset();
      renderParties();
    });
  
    myPartiesContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("delete-btn")) {
        const index = e.target.dataset.index;
        myParties.splice(index, 1);
        saveParties();
        renderParties();
      } else if (e.target.classList.contains("edit-btn")) {
        const index = e.target.dataset.index;
        const party = myParties[index];
  
        partyNameInput.value = party.name;
        partyDescInput.value = party.description;
        partyLogoInput.value = party.logo;
  
        myParties.splice(index, 1); // 編集対象を一度削除（上書き保存）
        saveParties();
        renderParties();
      }
    });
  
    renderParties();
  });
=======
// scripts/mypage.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("partyForm");
    const partyNameInput = document.getElementById("partyName");
    const partyDescInput = document.getElementById("partyDescription");
    const partyLogoInput = document.getElementById("partyLogo");
    const myPartiesContainer = document.getElementById("myParties");
  
    let myParties = JSON.parse(localStorage.getItem("myParties")) || [];
  
    function saveParties() {
      localStorage.setItem("myParties", JSON.stringify(myParties));
    }
  
    function renderParties() {
      myPartiesContainer.innerHTML = "";
      myParties.forEach((party, index) => {
        const card = document.createElement("div");
        card.className = "party-card";
  
        card.innerHTML = `
          <img src="${party.logo || 'logo1.png'}" class="party-logo" alt="ロゴ">
          <h3><a href="party.html?id=${party.id}">${party.name}</a></h3>
          <p>${party.description}</p>
          <button class="edit-btn" data-index="${index}">編集</button>
          <button class="delete-btn" data-index="${index}">削除</button>
        `;
  
        myPartiesContainer.appendChild(card);
      });
    }
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const newParty = {
        id: Date.now(),
        name: partyNameInput.value.trim(),
        description: partyDescInput.value.trim(),
        logo: partyLogoInput.value.trim()
      };
  
      if (!newParty.name || !newParty.description) return;
  
      myParties.push(newParty);
      saveParties();
      form.reset();
      renderParties();
    });
  
    myPartiesContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("delete-btn")) {
        const index = e.target.dataset.index;
        myParties.splice(index, 1);
        saveParties();
        renderParties();
      } else if (e.target.classList.contains("edit-btn")) {
        const index = e.target.dataset.index;
        const party = myParties[index];
  
        partyNameInput.value = party.name;
        partyDescInput.value = party.description;
        partyLogoInput.value = party.logo;
  
        myParties.splice(index, 1); // 編集対象を一度削除（上書き保存）
        saveParties();
        renderParties();
      }
    });
  
    renderParties();
  });
>>>>>>> dfed7edfbdee1c45ca74b1d55fd7e2a7816ded5b
  