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

  // ===== チャット一覧を表示 =====
  function renderChat(data) {
    if (!chatList) return;
    if (!data || data.length === 0) {
      chatList.innerHTML = '<p class="beta-list-empty">' + escapeHtml(I18n.t('js.tester.no_posts')) + '</p>';
      return;
    }
    var html = '';
    for (var i = 0; i < data.length; i++) {
      var name = escapeHtml(data[i].name || I18n.t('js.tester.anonymous'));
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
      if (chatList) chatList.innerHTML = '<p class="beta-list-empty">' + escapeHtml(I18n.t('js.tester.gas_not_set')) + '</p>';
      return;
    }

    // チャット一覧
    fetch(GAS_URL + '?action=chat')
      .then(function (res) { return res.json(); })
      .then(function (data) { renderChat(data); })
      .catch(function () {
        if (chatList) chatList.innerHTML = '<p class="beta-list-empty">' + escapeHtml(I18n.t('js.tester.loading_error')) + '</p>';
      });
  }

  // ===== テスター登録フォーム =====
  if (regForm) {
    regForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var email = regForm.querySelector('[name="email"]').value.trim();
      var name = regForm.querySelector('[name="name"]').value.trim();

      if (!email) {
        showStatus(regStatus, I18n.t('js.tester.email_required'), 'error');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showStatus(regStatus, I18n.t('js.tester.email_invalid'), 'error');
        return;
      }

      var confirmMsg = I18n.t('js.tester.reg_confirm') + '\n\n'
        + I18n.t('js.tester.reg_confirm_name') + ': ' + (name || I18n.t('js.tester.anonymous')) + '\n'
        + I18n.t('js.tester.reg_confirm_account') + ': ' + email;
      if (!confirm(confirmMsg)) return;

      regSubmit.disabled = true;
      regSubmit.textContent = I18n.t('js.tester.reg_submitting');
      showStatus(regStatus, '', '');

      var payload = {
        type: 'register',
        name: name || I18n.t('js.tester.anonymous'),
        email: email,
        timestamp: new Date().toISOString()
      };

      fetch(GAS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload)
      })
        .then(function () {
          showStatus(regStatus, I18n.t('js.tester.reg_success'), 'success');
          regForm.reset();
          setTimeout(loadData, 2000);
        })
        .catch(function () {
          showStatus(regStatus, I18n.t('js.tester.reg_error'), 'error');
        })
        .finally(function () {
          regSubmit.disabled = false;
          regSubmit.textContent = I18n.t('js.tester.reg_submit');
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
        showStatus(chatStatus, I18n.t('js.tester.msg_required'), 'error');
        return;
      }
      if (message.length > 2000) {
        showStatus(chatStatus, I18n.t('js.tester.msg_too_long'), 'error');
        return;
      }

      var confirmMsg = I18n.t('js.tester.chat_confirm') + '\n\n'
        + I18n.t('js.tester.chat_confirm_name') + ': ' + (name || I18n.t('js.tester.anonymous')) + '\n'
        + I18n.t('js.tester.chat_confirm_message') + ': ' + (message.length > 80 ? message.substring(0, 80) + '...' : message);
      if (!confirm(confirmMsg)) return;

      chatSubmit.disabled = true;
      chatSubmit.textContent = I18n.t('js.tester.chat_submitting');
      showStatus(chatStatus, '', '');

      var payload = {
        type: 'chat',
        name: name || I18n.t('js.tester.anonymous'),
        message: message,
        timestamp: new Date().toISOString()
      };

      fetch(GAS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload)
      })
        .then(function () {
          showStatus(chatStatus, I18n.t('js.tester.chat_success'), 'success');
          chatForm.reset();
          setTimeout(loadData, 2000);
        })
        .catch(function () {
          showStatus(chatStatus, I18n.t('js.tester.chat_error'), 'error');
        })
        .finally(function () {
          chatSubmit.disabled = false;
          chatSubmit.textContent = I18n.t('js.tester.chat_submit');
        });
    });
  }

  // ===== 初回読み込み =====
  loadData();
})();
