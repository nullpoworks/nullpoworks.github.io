/* ========================================
   NullPo Works - Contact Form
   ======================================== */

(function () {
  'use strict';

  var GAS_URL = 'https://script.google.com/macros/s/AKfycby7k7Y-STAuS6R5yGpErPGb23ZI-psV64TAn25ym_nZKBYkLTJrm7SIVu5PIVDNwflVWw/exec';

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
      showStatus(I18n.t('js.contact.category_required'), 'error');
      return;
    }
    if (!message) {
      showStatus(I18n.t('js.contact.message_required'), 'error');
      return;
    }
    if (message.length > 2000) {
      showStatus(I18n.t('js.contact.message_too_long'), 'error');
      return;
    }
    if (email && !isValidEmail(email)) {
      showStatus(I18n.t('js.contact.email_invalid'), 'error');
      return;
    }

    // Rate limiting (1 submission per 30 seconds)
    var lastSubmit = sessionStorage.getItem('lastContactSubmit');
    if (lastSubmit && Date.now() - Number(lastSubmit) < 30000) {
      showStatus(I18n.t('js.contact.rate_limit'), 'error');
      return;
    }

    var confirmMsg = I18n.t('js.contact.confirm') + '\n\n'
      + I18n.t('js.contact.confirm_category') + ': ' + category + '\n'
      + I18n.t('js.contact.confirm_name') + ': ' + (name || I18n.t('js.contact.not_entered')) + '\n'
      + I18n.t('js.contact.confirm_email') + ': ' + (email || I18n.t('js.contact.not_entered')) + '\n'
      + I18n.t('js.contact.confirm_message') + ': ' + (message.length > 80 ? message.substring(0, 80) + '...' : message);
    if (!confirm(confirmMsg)) return;

    // Disable button
    submitBtn.disabled = true;
    submitBtn.textContent = I18n.t('js.contact.submitting');
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
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload)
    })
      .then(function () {
        // no-cors always returns opaque response, so we assume success
        sessionStorage.setItem('lastContactSubmit', String(Date.now()));
        showStatus(I18n.t('js.contact.success'), 'success');
        form.reset();
        if (charCountEl) charCountEl.textContent = '0';
      })
      .catch(function () {
        showStatus(I18n.t('js.contact.error'), 'error');
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = I18n.t('js.contact.submit');
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
