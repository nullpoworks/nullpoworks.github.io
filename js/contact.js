/* ========================================
   NullPo Works - Contact Form
   ======================================== */

(function () {
  'use strict';

  var GAS_URL = 'https://script.google.com/macros/s/AKfycbwb27eb-33QUtW2tWOJb8XSkJLEY8G8KtXYuvCEI7eOvvQUQOG-tPWGhisoDgxe9DcOCg/exec';

  var form = document.getElementById('contact-form');
  var submitBtn = document.getElementById('contact-submit');
  var statusEl = document.getElementById('contact-status');
  var messageEl = document.getElementById('contact-message');
  var charCountEl = document.getElementById('char-count');

  if (!form) return;

  // Character count
  if (messageEl && charCountEl) {
    messageEl.addEventListener('input', function () {
      charCountEl.textContent = messageEl.value.length;
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Honeypot check
    var honeypot = form.querySelector('[name="website"]');
    if (honeypot && honeypot.value) return;

    // Basic validation
    var category = form.querySelector('[name="category"]').value;
    var name = form.querySelector('[name="name"]').value.trim();
    var email = form.querySelector('[name="email"]').value.trim();
    var message = form.querySelector('[name="message"]').value.trim();

    if (!category) {
      showStatus('お問い合わせ種別を選択してください。', 'error');
      return;
    }
    if (!message) {
      showStatus('お問い合わせ内容を入力してください。', 'error');
      return;
    }
    if (message.length > 2000) {
      showStatus('お問い合わせ内容は2000文字以内で入力してください。', 'error');
      return;
    }
    if (email && !isValidEmail(email)) {
      showStatus('メールアドレスの形式が正しくありません。', 'error');
      return;
    }

    // Rate limiting (1 submission per 30 seconds)
    var lastSubmit = sessionStorage.getItem('lastContactSubmit');
    if (lastSubmit && Date.now() - Number(lastSubmit) < 30000) {
      showStatus('しばらく待ってから再度送信してください。', 'error');
      return;
    }

    // Disable button
    submitBtn.disabled = true;
    submitBtn.textContent = '送信中...';
    showStatus('', '');

    var payload = {
      category: category,
      name: name || '（未記入）',
      email: email || '（未記入）',
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
        // no-cors always returns opaque response, so we assume success
        sessionStorage.setItem('lastContactSubmit', String(Date.now()));
        showStatus('お問い合わせを送信しました。ありがとうございます。', 'success');
        form.reset();
        if (charCountEl) charCountEl.textContent = '0';
      })
      .catch(function () {
        showStatus('送信に失敗しました。時間を置いて再度お試しいただくか、X (Twitter) のDMよりご連絡ください。', 'error');
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = '送信する';
      });
  });

  function showStatus(msg, type) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.hidden = !msg;
    statusEl.className = 'contact-status' + (type ? ' contact-status--' + type : '');
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
})();
