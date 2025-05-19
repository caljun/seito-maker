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

// いいね機能
let isLiked = false;
document.getElementById('like-button').addEventListener('click', async () => {
    const likeCount = document.getElementById('like-count');
    if (!isLiked) {
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
        isLiked = true;
        // 実際の実装ではAPIにいいねを送信
    } else {
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
        isLiked = false;
        // 実際の実装ではAPIにいいね解除を送信
    }
});

// 投票機能
let hasVoted = false;
document.getElementById('vote-button').addEventListener('click', async () => {
    if (!hasVoted) {
        const voteCount = document.getElementById('vote-count');
        voteCount.textContent = `投票数: ${parseInt(voteCount.textContent.split(': ')[1]) + 1}`;
        hasVoted = true;
        document.getElementById('vote-button').disabled = true;
        document.getElementById('vote-button').textContent = '投票済み';
        // 実際の実装ではAPIに投票を送信
    }
});

// コメント機能
document.getElementById('submit-comment').addEventListener('click', async () => {
    const commentInput = document.getElementById('comment-input');
    const comment = commentInput.value.trim();
    
    if (comment) {
        const commentsList = document.getElementById('comments-list');
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        
        const now = new Date();
        const commentHTML = `
            <div class="comment-header">
                <span class="comment-author">ユーザー名</span>
                <span class="comment-date">${now.toLocaleString()}</span>
            </div>
            <div class="comment-content">${comment}</div>
        `;
        
        commentElement.innerHTML = commentHTML;
        commentsList.insertBefore(commentElement, commentsList.firstChild);
        commentInput.value = '';
        
        // 実際の実装ではAPIにコメントを送信
    }
});

// ページ読み込み時に政党データを取得
document.addEventListener('DOMContentLoaded', loadPartyData);