<<<<<<< HEAD
// scripts/notification.js

document.addEventListener("DOMContentLoaded", function () {
    const notificationList = document.getElementById("notificationList");
  
    // 仮の通知データ（今後はログインユーザーごとに出し分け予定）
    const notifications = JSON.parse(localStorage.getItem("notifications")) || [
      "あなたの政党『未来改革党』にコメントが付きました。",
      "『環境未来党』が急上昇中！",
      "新しい政党『教育改革会議』が投稿されました。"
    ];
  
    function renderNotifications() {
      notificationList.innerHTML = "";
      notifications.forEach((note, index) => {
        const li = document.createElement("li");
        li.textContent = note;
        notificationList.appendChild(li);
      });
    }
  
    renderNotifications();
  });
=======
// scripts/notification.js

document.addEventListener("DOMContentLoaded", function () {
    const notificationList = document.getElementById("notificationList");
  
    // 仮の通知データ（今後はログインユーザーごとに出し分け予定）
    const notifications = JSON.parse(localStorage.getItem("notifications")) || [
      "あなたの政党『未来改革党』にコメントが付きました。",
      "『環境未来党』が急上昇中！",
      "新しい政党『教育改革会議』が投稿されました。"
    ];
  
    function renderNotifications() {
      notificationList.innerHTML = "";
      notifications.forEach((note, index) => {
        const li = document.createElement("li");
        li.textContent = note;
        notificationList.appendChild(li);
      });
    }
  
    renderNotifications();
  });
>>>>>>> dfed7edfbdee1c45ca74b1d55fd7e2a7816ded5b
  