/**
 * NullPo Works - お問い合わせフォーム バックエンド
 * Google Apps Script (GAS) 用コード
 *
 * ===== セットアップ手順 =====
 *
 * 1. https://script.google.com にアクセス
 * 2. 「新しいプロジェクト」を作成
 * 3. このファイルの内容をエディタに貼り付け
 * 4. NOTIFY_EMAIL を自分のメールアドレスに変更（現在: info@rhyn.jp）
 * 5. 「デプロイ」→「新しいデプロイ」を選択
 * 6. 種類: 「ウェブアプリ」を選択
 * 7. 実行ユーザー: 「自分」
 * 8. アクセス: 「全員」
 * 9. 「デプロイ」をクリック → 表示されるURLをコピー
 * 10. js/contact.js の GAS_URL にそのURLを貼り付ける
 *
 * ===== オプション: スプレッドシート記録 =====
 *
 * SHEET_ID に Google スプレッドシートのIDを設定すると、
 * お問い合わせ内容がスプレッドシートにも記録されます。
 * スプレッドシートのIDは URLの /d/ と /edit の間の文字列です。
 * 例: https://docs.google.com/spreadsheets/d/XXXXXXX/edit
 *
 * ====================================
 */

// ===== 設定 =====
var NOTIFY_EMAIL = 'rhyn_akesora@proton.me';
var SHEET_ID = ''; // オプション: スプレッドシートID（空なら記録しない）
var SHEET_NAME = 'お問い合わせ';

// ===== メイン処理 =====
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // バリデーション
    if (!data.message || data.message.length > 2000) {
      return createResponse(400, 'Invalid message');
    }

    // メール送信
    var subject = '[NullPo Works] お問い合わせ: ' + (data.category || '不明');
    var body = [
      '■ お問い合わせ種別',
      data.category || '（未選択）',
      '',
      '■ お名前',
      data.name || '（未記入）',
      '',
      '■ メールアドレス',
      data.email || '（未記入）',
      '',
      '■ お問い合わせ内容',
      data.message,
      '',
      '■ 送信日時',
      data.timestamp || new Date().toISOString(),
      '',
      '---',
      'This message was sent from the NullPo Works contact form.'
    ].join('\n');

    var options = { name: 'NullPo Works Contact' };
    if (data.email && data.email !== '（未記入）' && isValidEmail(data.email)) {
      options.replyTo = data.email;
    }

    MailApp.sendEmail(NOTIFY_EMAIL, subject, body, options);

    // スプレッドシート記録（オプション）
    if (SHEET_ID) {
      try {
        var ss = SpreadsheetApp.openById(SHEET_ID);
        var sheet = ss.getSheetByName(SHEET_NAME);
        if (!sheet) {
          sheet = ss.insertSheet(SHEET_NAME);
          sheet.appendRow(['日時', '種別', '名前', 'メール', '内容']);
        }
        sheet.appendRow([
          new Date(),
          data.category || '',
          data.name || '',
          data.email || '',
          data.message || ''
        ]);
      } catch (sheetErr) {
        // スプレッドシートエラーは無視（メール送信は成功済み）
      }
    }

    return createResponse(200, 'OK');
  } catch (err) {
    return createResponse(500, 'Error: ' + err.message);
  }
}

function doGet() {
  return createResponse(200, 'NullPo Works Contact API is running.');
}

function createResponse(code, message) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: code, message: message }))
    .setMimeType(ContentService.MimeType.JSON);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
