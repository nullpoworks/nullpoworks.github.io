/**
 * NullPo Works - 統合バックエンド
 * Google Apps Script (GAS) 用コード
 *
 * 機能:
 *   1. お問い合わせフォーム（contact.html）
 *   2. テスター登録（tester.html）
 *   3. バグ報告チャット（tester.html）
 *
 * ===== セットアップ手順 =====
 *
 * 1. https://script.google.com にアクセス
 * 2. 「新しいプロジェクト」を作成
 * 3. このファイルの内容をエディタに貼り付け
 * 4. SHEET_ID に Google スプレッドシートのIDを設定
 *    - 新しいスプレッドシートを作成: https://sheets.new
 *    - URLの /d/ と /edit の間の文字列がID
 *    - 例: https://docs.google.com/spreadsheets/d/XXXXXXX/edit → XXXXXXX がID
 * 5. 「デプロイ」→「新しいデプロイ」を選択
 * 6. 種類: 「ウェブアプリ」を選択
 * 7. 実行ユーザー: 「自分」
 * 8. アクセス: 「全員」
 * 9. 「デプロイ」をクリック → 表示されるURLをコピー
 * 10. js/contact.js と js/tester.js の GAS_URL にそのURLを貼り付ける
 *
 * シート構成（自動作成されます）:
 *   - 「お問い合わせ」: 日時, 種別, 名前, メール, 内容
 *   - 「テスター登録」: 日時, 名前, メールアドレス
 *   - 「バグ報告」    : 日時, 名前, メッセージ
 *
 * ====================================
 */

// ===== 設定 =====
var NOTIFY_EMAIL = 'rhyn_akesora@proton.me';
var SHEET_ID = '1N2nzRX-5RfOx_DjnEjy-GfIpc6BApqIt4y4EN5O7FTE';
var CONTACT_SHEET = 'お問い合わせ';
var REG_SHEET = 'テスター登録';
var CHAT_SHEET = 'バグ報告';

// ===== POST: データ送信 =====
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var type = data.type || 'contact';

    // ----- テスター登録 -----
    if (type === 'register') {
      return handleRegister(data);
    }

    // ----- バグ報告チャット -----
    if (type === 'chat') {
      return handleChat(data);
    }

    // ----- お問い合わせ（デフォルト） -----
    return handleContact(data);

  } catch (err) {
    return createResponse(500, 'Error: ' + err.message);
  }
}

// ===== GET: データ取得 =====
function doGet(e) {
  try {
    var action = (e.parameter && e.parameter.action) || '';

    // テスター登録一覧
    if (action === 'registrations') {
      if (!SHEET_ID) return createJsonResponse([]);
      var ss = SpreadsheetApp.openById(SHEET_ID);
      var regSheet = ss.getSheetByName(REG_SHEET);
      if (!regSheet || regSheet.getLastRow() <= 1) {
        return createJsonResponse([]);
      }
      var regData = regSheet.getRange(2, 1, regSheet.getLastRow() - 1, 3).getValues();
      var result = regData.map(function (row) {
        return { timestamp: row[0], name: row[1] };
        // メールアドレスは返さない（プライバシー保護）
      });
      return createJsonResponse(result);
    }

    // チャット一覧
    if (action === 'chat') {
      if (!SHEET_ID) return createJsonResponse([]);
      var ss = SpreadsheetApp.openById(SHEET_ID);
      var chatSheet = ss.getSheetByName(CHAT_SHEET);
      if (!chatSheet || chatSheet.getLastRow() <= 1) {
        return createJsonResponse([]);
      }
      var chatData = chatSheet.getRange(2, 1, chatSheet.getLastRow() - 1, 3).getValues();
      var chatResult = chatData.map(function (row) {
        return { timestamp: row[0], name: row[1], message: row[2] };
      }).reverse(); // 新しい順
      return createJsonResponse(chatResult);
    }

    // デフォルト
    return createResponse(200, 'NullPo Works API is running.');
  } catch (err) {
    return createResponse(500, 'Error: ' + err.message);
  }
}

// ========================================
//  ハンドラー
// ========================================

// ----- お問い合わせ -----
function handleContact(data) {
  if (!data.message || data.message.length > 2000) {
    return createResponse(400, 'Invalid message');
  }

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

  // スプレッドシート記録
  if (SHEET_ID) {
    try {
      var ss = SpreadsheetApp.openById(SHEET_ID);
      var sheet = getOrCreateSheet(ss, CONTACT_SHEET, ['日時', '種別', '名前', 'メール', '内容']);
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
}

// ----- テスター登録 -----
function handleRegister(data) {
  if (!SHEET_ID) return createResponse(500, 'SHEET_ID not set');

  var ss = SpreadsheetApp.openById(SHEET_ID);
  var regSheet = getOrCreateSheet(ss, REG_SHEET, ['日時', '名前', 'メールアドレス']);
  regSheet.appendRow([
    new Date(),
    data.name || '匿名',
    data.email || ''
  ]);

  // メール通知
  var subject = '[NullPo Works] テスター登録: ' + (data.name || '匿名');
  var body = [
    '■ 名前',
    data.name || '匿名',
    '',
    '■ Googleアカウント',
    data.email || '',
    '',
    '■ 登録日時',
    data.timestamp || new Date().toISOString(),
    '',
    '---',
    'Google Play Consoleにこのアカウントを追加してください。'
  ].join('\n');

  MailApp.sendEmail(NOTIFY_EMAIL, subject, body, { name: 'NullPo Works Tester' });

  return createResponse(200, 'OK');
}

// ----- バグ報告チャット -----
function handleChat(data) {
  if (!SHEET_ID) return createResponse(500, 'SHEET_ID not set');

  var ss = SpreadsheetApp.openById(SHEET_ID);
  var chatSheet = getOrCreateSheet(ss, CHAT_SHEET, ['日時', '名前', 'メッセージ']);
  chatSheet.appendRow([
    new Date(),
    data.name || '匿名',
    data.message || ''
  ]);

  return createResponse(200, 'OK');
}

// ========================================
//  ヘルパー
// ========================================

function getOrCreateSheet(ss, name, headers) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
  }
  return sheet;
}

function createResponse(code, message) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: code, message: message }))
    .setMimeType(ContentService.MimeType.JSON);
}

function createJsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
