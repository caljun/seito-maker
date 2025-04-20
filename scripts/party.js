// scripts/party.js

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const partyId = params.get("id");
  
    const partyNameEl = document.getElementById("party-name");
    const partyDescEl = document.getElementById("party-description");
    const partyLogoEl = document.getElementById("party-logo");
    const partyPostsEl = document.getElementById("party-posts");
  
    const allParties = JSON.parse(localStorage.getItem("myParties")) || [];
    const party = allParties.find(p => p.id.toString() === partyId);
  
    if (party) {
      partyNameEl.textContent = party.name;
      partyDescEl.textContent = party.description;
      partyLogoEl.src = party.logo || "logo1.png";
    } else {
      partyNameEl.textContent = "政党が見つかりませんでした。";
      partyDescEl.textContent = "";
      partyLogoEl.style.display = "none";
      return;
    }
  
    // コメント機能（ローカル保存）
    const commentKey = `comments_${party.id}`;
    const comments = JSON.parse(localStorage.getItem(commentKey)) || [];
  
    const commentSection = document.createElement("div");
    commentSection.innerHTML = `
      <h4>コメント</h4>
      <form id="commentForm">
        <input type="text" id="commentInput" placeholder="コメントを入力" required />
        <button type="submit">送信</button>
      </form>
      <ul id="commentList"></ul>
    `;
  
    partyPostsEl.appendChild(commentSection);
  
    const commentListEl = document.getElementById("commentList");
  
    function renderComments() {
      commentListEl.innerHTML = "";
      comments.forEach(comment => {
        const li = document.createElement("li");
        li.textContent = comment;
        commentListEl.appendChild(li);
      });
    }
  
    document.getElementById("commentForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const input = document.getElementById("commentInput");
      const text = input.value.trim();
      if (!text) return;
      comments.push(text);
      localStorage.setItem(commentKey, JSON.stringify(comments));
      input.value = "";
      renderComments();
    });
  
    renderComments();
  });
  