/* ========================================
   NullPo Works - Tester Page
   ======================================== */

(function () {
  'use strict';

  // お問い合わせフォームと共用のGAS URL
  var GAS_URL = 'https://script.google.com/macros/s/AKfycby7k7Y-STAuS6R5yGpErPGb23ZI-psV64TAn25ym_nZKBYkLTJrm7SIVu5PIVDNwflVWw/exec';

  // ===== テスター登録 =====
  var regForm = document.getElementById('register-form');
  var regSubmit = document.getElementById('register-submit');
  var regStatus = document.getElementById('register-status');
  var regList = document.getElementById('register-list');

  // ===== チャット =====
  var chatForm = document.getElementById('chat-form');
  var chatSubmit = document.getElementById('chat-submit');
  var chatStatus = document.getElementById('chat-status');
  var chatList = document.getElementById('chat-list');

  if (!regForm && !chatForm) return;

  // ===== ステータス表示 =====
  function showStatus(el, msg, type) {
    if (!el) return;
    el.textContent = msg;
    el.hidden = !msg;
    el.className = 'contact-status' + (type ? ' contact-status--' + type : '');
  }

  // ===== 日時フォーマット =====
  function formatDate(dateStr) {
    var d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var hours = String(d.getHours()).padStart(2, '0');
    var minutes = String(d.getMinutes()).padStart(2, '0');
    return month + '/' + day + ' ' + hours + ':' + minutes;
  }

  // ===== テスター登録一覧を表示 =====
  function renderRegistrations(data) {
    if (!regList) return;
    if (!data || data.length === 0) {
      regList.innerHTML = '<p class="beta-list-empty">まだ登録はありません。</p>';
      return;
    }
    var html = '<ul class="beta-reg-list">';
    for (var i = 0; i < data.length; i++) {
      var name = escapeHtml(data[i].name || '匿名');
      var date = formatDate(data[i].timestamp);
      html += '<li class="beta-reg-item"><span class="beta-reg-name">' + name + '</span><span class="beta-reg-date">' + date + '</span></li>';
    }
    html += '</ul>';
    regList.innerHTML = html;
  }

  // ===== チャット一覧を表示 =====
  function renderChat(data) {
    if (!chatList) return;
    if (!data || data.length === 0) {
      chatList.innerHTML = '<p class="beta-list-empty">まだ投稿はありません。</p>';
      return;
    }
    var html = '';
    for (var i = 0; i < data.length; i++) {
      var name = escapeHtml(data[i].name || '匿名');
      var message = escapeHtml(data[i].message || '');
      var date = formatDate(data[i].timestamp);
      html += '<div class="beta-chat-msg">';
      html += '<div class="beta-chat-meta"><span class="beta-chat-name">' + name + '</span><span class="beta-chat-date">' + date + '</span></div>';
      html += '<p class="beta-chat-text">' + message.replace(/\n/g, '<br>') + '</p>';
      html += '</div>';
    }
    chatList.innerHTML = html;
  }

  // ===== HTMLエスケープ =====
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // ===== データ取得 =====
  function loadData() {
    if (!GAS_URL || GAS_URL.indexOf('YOUR_') === 0) {
      if (regList) regList.innerHTML = '<p class="beta-list-empty">GAS URLが未設定です。</p>';
      if (chatList) chatList.innerHTML = '<p class="beta-list-empty">GAS URLが未設定です。</p>';
      return;
    }

    // テスター登録一覧
    fetch(GAS_URL + '?action=registrations')
      .then(function (res) { return res.json(); })
      .then(function (data) { renderRegistrations(data); })
      .catch(function () {
        if (regList) regList.innerHTML = '<p class="beta-list-empty">データの取得に失敗しました。</p>';
      });

    // チャット一覧
    fetch(GAS_URL + '?action=chat')
      .then(function (res) { return res.json(); })
      .then(function (data) { renderChat(data); })
      .catch(function () {
        if (chatList) chatList.innerHTML = '<p class="beta-list-empty">データの取得に失敗しました。</p>';
      });
  }

  // ===== テスター登録フォーム =====
  if (regForm) {
    regForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var email = regForm.querySelector('[name="email"]').value.trim();
      var name = regForm.querySelector('[name="name"]').value.trim();

      if (!email) {
        showStatus(regStatus, 'Gmailアドレスを入力してください。', 'error');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showStatus(regStatus, 'メールアドレスの形式が正しくありません。', 'error');
        return;
      }

      regSubmit.disabled = true;
      regSubmit.textContent = '送信中...';
      showStatus(regStatus, '', '');

      var payload = {
        type: 'register',
        name: name || '匿名',
        email: email,
        timestamp: new Date().toISOString()
      };

      fetch(GAS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(function () {
          showStatus(regStatus, '登録しました！ありがとうございます。', 'success');
          regForm.reset();
          setTimeout(loadData, 2000);
        })
        .catch(function () {
          showStatus(regStatus, '送信に失敗しました。再度お試しください。', 'error');
        })
        .finally(function () {
          regSubmit.disabled = false;
          regSubmit.textContent = '登録する';
        });
    });
  }

  // ===== チャットフォーム =====
  if (chatForm) {
    chatForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = chatForm.querySelector('[name="name"]').value.trim();
      var message = chatForm.querySelector('[name="message"]').value.trim();

      if (!message) {
        showStatus(chatStatus, 'メッセージを入力してください。', 'error');
        return;
      }
      if (message.length > 2000) {
        showStatus(chatStatus, 'メッセージは2000文字以内で入力してください。', 'error');
        return;
      }

      chatSubmit.disabled = true;
      chatSubmit.textContent = '送信中...';
      showStatus(chatStatus, '', '');

      var payload = {
        type: 'chat',
        name: name || '匿名',
        message: message,
        timestamp: new Date().toISOString()
      };

      fetch(GAS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(function () {
          showStatus(chatStatus, '投稿しました！', 'success');
          chatForm.reset();
          setTimeout(loadData, 2000);
        })
        .catch(function () {
          showStatus(chatStatus, '送信に失敗しました。再度お試しください。', 'error');
        })
        .finally(function () {
          chatSubmit.disabled = false;
          chatSubmit.textContent = '投稿する';
        });
    });
  }

  // ===== 初回読み込み =====
  loadData();
})();
