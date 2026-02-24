/* ========================================
   NullPo Works - i18n (Internationalization)
   ======================================== */

window.I18n = (function () {
  'use strict';

  var translations = {

    // ============================================================
    //  日本語
    // ============================================================
    ja: {

      // --- 共通（ヘッダー・フッター） ---
      'hamburger.aria': 'メニュー',
      'footer.privacy': 'プライバシーポリシー',
      'footer.privacy.href': 'privacy-policy.html',
      'footer.contact': 'お問い合わせ',

      // --- index.html ---
      'meta.title.index': 'NullPo Works - ゲーム&アプリ開発',
      'meta.desc.index': 'NullPo Worksは、ゲームや学習アプリなどを開発するデベロッパーです。パズル・アクション・ホラーから教育系まで多彩な作品を展開中。',
      'meta.og.title.index': 'NullPo Works',
      'meta.og.desc.index': 'ゲームや学習アプリなどを開発するデベロッパー',
      'hero.tagline': 'ひらめきを、カタチに。',
      'hero.scroll.aria': '下にスクロール',
      // 魂の共鳴
      'game.tamashii.title': '魂の共鳴 ～私を信じて～',
      'game.tamashii.tag1': '砂パズル',
      'game.tamashii.desc': 'ブロックが砂粒に変化し、同色の砂を左右に繋げて浄化していくパズルゲーム。ヨガの修行僧が邪気を祓う独自の世界観。',
      'game.tamashii.lang': '日本語 / English',
      'game.tamashii.play': 'Web版で遊ぶ',
      // ぴよ氏の冒険
      'game.piyo.title': 'ぴよ氏の冒険',
      'game.piyo.tag1': 'エンドレスラン',
      'game.piyo.desc': '可愛いぴよ氏を操作して障害物を避けながら走り続ける横スクロールアクション。距離300mごとにスピードアップ、最大500%の超高速ステージへ。',
      'game.piyo.lang': '日本語',
      'game.piyo.play': 'Web版で遊ぶ',
      // 14番地
      'game.14banchi.title': '14番地',
      'game.14banchi.tag1': 'ホラー',
      'game.14banchi.desc': '不気味な夜道を歩き、街の「異変」を見つけて正しい判断で14番地を目指す横スクロール2Dホラーゲーム。',
      'game.14banchi.lang': '日本語',
      'game.14banchi.play': 'Web版で遊ぶ',
      // 画像alt
      'alt.tamashii.hero': '魂の共鳴 ～私を信じて～ スクリーンショット',
      'alt.piyo.hero': 'ぴよ氏の冒険 スクリーンショット',
      'alt.14banchi.hero': '14番地 スクリーンショット',
      'alt.logica.hero': 'Logica -論理学の問題集- スクリーンショット',
      'alt.tester.step1': 'ステップ1: テスターになるボタンを押す画面',
      'alt.tester.step2': 'ステップ2: Google Playでダウンロードリンクを押す画面',
      'alt.tester.step3': 'ステップ3: インストールボタンを押す画面',
      // テスター募集バナー
      'recruit.title': 'Android版テストユーザー募集中',
      'recruit.desc': '開発中のアプリをいち早く体験してみませんか？<br>テスターとして登録すると、リリース前のアプリをGoogle Playからインストールできます。',
      'recruit.btn': 'テスターページへ',
      // Logica
      'app.logica.title': 'Logica -論理学の問題集-',
      'app.logica.tag1': '学習',
      'app.logica.tag2': '日本語 / English',
      'app.logica.desc': '論理学の基礎から応用までを体系的に学べる問題集アプリ。連言・選言・条件文などの記号化をインタラクティブに演習。',
      // About
      'about.p1': 'NullPo Worksは、日本発のデベロッパーです。',
      'about.p2': 'HTML5やJavaScriptなどのWeb技術をベースに、パズル・アクション・ホラーなど多ジャンルのゲームから学習アプリまで幅広く開発しています。「ひらめきを、カタチに。」を合言葉に、ユニークで面白い体験をお届けします。',
      'about.help': '最新バージョンがプレイできない場合は<a href="contact.html#faq">こちら</a>',

      // --- contact.html ---
      'meta.title.contact': 'お問い合わせ - NullPo Works',
      'meta.desc.contact': 'NullPo Worksへのお問い合わせ・ご依頼はこちら。',
      'meta.og.title.contact': 'お問い合わせ - NullPo Works',
      'meta.og.desc.contact': 'NullPo Worksへのお問い合わせ・ご依頼はこちら。',
      'contact.title': 'お問い合わせ',
      'contact.lead': 'ご意見・ご感想・サポート・制作依頼など、お気軽にお問い合わせください。',
      'contact.label.category': 'お問い合わせ種別',
      'contact.option.default': '選択してください',
      'contact.option.feedback': 'ご意見・ご感想',
      'contact.option.bug': '不具合報告・サポート',
      'contact.option.collab': '制作依頼・コラボレーション',
      'contact.option.other': 'その他',
      'contact.label.name': 'お名前',
      'contact.label.name.opt': '（任意）',
      'contact.ph.name': 'お名前',
      'contact.label.email': 'メールアドレス',
      'contact.label.email.opt': '（任意・返信を希望する場合）',
      'contact.label.message': 'お問い合わせ内容',
      'contact.ph.message': 'お問い合わせ内容をご記入ください',
      'contact.submit': '送信する',
      'contact.faq.title': 'よくある質問',
      'contact.faq.q1': 'PWA版で最新バージョンがプレイできない',
      'contact.faq.a1': '<p>PWA版（ホーム画面に追加したアプリ）はキャッシュの影響でアップデートが反映されない場合があります。以下の手順をお試しください。</p><ol><li>ホーム画面のアプリを削除</li><li>ブラウザのサイトデータを消去<ul><li><strong>iPhone</strong>：設定 → Safari → 履歴とWebサイトデータを消去</li><li><strong>Android</strong>：Chrome → 設定 → プライバシー → 閲覧データの削除</li></ul></li><li>通常モード（プライベートブラウズでない状態）でサイトにアクセス</li><li>ホーム画面に再追加</li></ol>',
      'contact.alt.text': 'フォーム以外でのお問い合わせは、X (Twitter) のDMでも受け付けています。',
      'contact.alt.btn': '@nullpo_works にDMする',

      // --- contact.js ---
      'js.contact.category_required': 'お問い合わせ種別を選択してください。',
      'js.contact.message_required': 'お問い合わせ内容を入力してください。',
      'js.contact.message_too_long': 'お問い合わせ内容は2000文字以内で入力してください。',
      'js.contact.email_invalid': 'メールアドレスの形式が正しくありません。',
      'js.contact.rate_limit': 'しばらく待ってから再度送信してください。',
      'js.contact.confirm': 'この内容で送信します。よろしいですか？',
      'js.contact.confirm_category': '種別',
      'js.contact.confirm_name': '名前',
      'js.contact.confirm_email': 'メール',
      'js.contact.confirm_message': '内容',
      'js.contact.not_entered': '未記入',
      'js.contact.submitting': '送信中...',
      'js.contact.success': 'お問い合わせを送信しました。ありがとうございます。',
      'js.contact.error': '送信に失敗しました。時間を置いて再度お試しいただくか、X (Twitter) のDMよりご連絡ください。',
      'js.contact.submit': '送信する',

      // --- 404.html ---
      'meta.title.404': '404 - ページが見つかりません - NullPo Works',
      'error.title': 'ページが見つかりません',
      'error.desc': 'お探しのページは存在しないか、移動された可能性があります。',
      'error.btn': 'トップページへ戻る',

      // --- beta-test.html ---
      'meta.title.beta': 'テスターページ - NullPo Works',
      'meta.desc.beta': 'NullPo Worksのクローズドテストにご参加いただくためのテスター登録ページです。',
      'meta.og.title.beta': 'テスターページ - NullPo Works',
      'meta.og.desc.beta': 'NullPo Worksのクローズドテストにご参加いただくためのテスター登録ページです。',
      'beta.hero.title': 'NullPo Works<br>テスターページ',
      'beta.hero.sub': 'NullPo Worksのクローズドテストにご参加いただきありがとうございます。<br>このページからテスター登録、各アプリのインストール、バグ報告ができます。',
      'beta.nav.register': 'テスター登録',
      'beta.nav.tamashii': '魂の共鳴',
      'beta.nav.14banchi': '14番地',
      'beta.nav.chat': 'バグ報告',
      // テスター登録
      'beta.reg.title': 'テスター登録',
      'beta.reg.desc': 'NullPo Worksのテスターとして登録すると、開発中のアプリをいち早く体験できます。<br>Google Playで使用しているGoogleアカウント（Gmailアドレス）を登録してください。<br>登録後、管理者がGoogle Playにアカウントを追加します。テストが稼働中のアプリは、通常24時間以内にダウンロード可能になります。<br>「準備中」と表示されているアプリは、テスト開始までしばらくお待ちください。',
      'beta.reg.label.name': '名前',
      'beta.reg.label.name.opt': '（任意・ニックネーム可）',
      'beta.reg.ph.name': '例: テスト太郎',
      'beta.reg.label.email': 'Googleアカウント（Gmailアドレス）',
      'beta.reg.privacy.note': '「登録する」を押すことで、下記の<a href="#privacy">個人情報の取り扱いについて</a>に同意したものとみなします。',
      'beta.reg.submit': '登録する',
      'beta.reg.list.title': '登録済みテスター',
      'beta.reg.list.loading': '読み込み中...',
      // 注意事項（共通アラート）
      'beta.alert.title': 'はじめにご確認ください',
      'beta.alert.main': 'テスターとして<strong>登録したGoogleアカウント</strong>でスマートフォンにログインしていますか？',
      'beta.alert.desc': '違うGoogleアカウントでログインしていると、Google Playに「このアプリは利用できません」と表示されてインストールできません。',
      'beta.alert.check1': '✅ 登録したGoogleアカウントでログインしている → このまま進んでください',
      'beta.alert.check2': '🔄 わからない・違うアカウントかも → スマートフォンの <strong>「設定」→「アカウント」</strong> からGoogleアカウントを確認してください',
      // 魂の共鳴セクション
      'beta.tamashii.title': '魂の共鳴 ～私を信じて～',
      'beta.tamashii.tag': '砂パズル / Android',
      'beta.tamashii.cta.lead': 'アカウントの確認ができたら、下のボタンからテストに参加しましょう。',
      'beta.tamashii.cta.btn': 'テストに参加してインストールする',
      'beta.tamashii.cta.note': 'ボタンを押すと Google Play のテスト参加ページが開きます',
      'beta.tamashii.steps.heading': 'インストール手順（3ステップ）',
      'beta.tamashii.steps.intro': '上のボタンを押した後の流れを、実際の画面で説明します。',
      'beta.tamashii.step1.title': '「テスターになる」を押す',
      'beta.tamashii.step1.p1': 'ボタンを押すと、下のような画面が開きます。<br>画面の一番下にある<strong>「テスターになる」</strong>ボタンを押してください。これがテストへの参加表明になります。',
      'beta.tamashii.step1.note1': '※ 最初は英語で <strong>"Become a tester"</strong> と表示される場合があります。下の画像は日本語に翻訳した状態です。ページを日本語に翻訳してから操作すると分かりやすいのでおすすめです。',
      'beta.tamashii.step1.note2': '※ この画面が表示されない場合は、登録したGoogleアカウントでログインしているか確認してください。',
      'beta.tamashii.step2.title': '「Google Play でダウンロード」を押す',
      'beta.tamashii.step2.p1': '「あなたはテスターです。」（英語では <strong>"You\'re a tester"</strong>）と表示されたら参加完了です！<br>画面の中にある青い文字の<strong>「Google Play でダウンロードしてください」</strong>（英語では <strong>"download it on Google Play"</strong>）というリンクを押してください。',
      'beta.tamashii.step2.note1': '※ リンクが有効になるまで数分かかる場合があります。表示されない場合は少し待ってからページを更新してください。',
      'beta.tamashii.step3.title': '「インストール」を押す',
      'beta.tamashii.step3.p1': 'Google Playのアプリページが開きます。<br>青色の<strong>「インストール」</strong>ボタンを押せば、ダウンロードが始まります。これで完了です！',
      'beta.tamashii.launch.main': '📲 <strong>インストール後、必ず一度アプリを起動してください。</strong>',
      'beta.tamashii.launch.desc': 'ダウンロードしただけではテストへの参加が完了しません。アプリを一度起動することで、正式にテスト参加者として登録されます。',
      // 14番地セクション
      'beta.14banchi.title': '14番地',
      'beta.14banchi.tag': 'ホラー / Android',
      'beta.14banchi.placeholder': '🔧 現在準備中です。テスト開始までしばらくお待ちください。<br>テストが稼働しましたら、こちらにインストール手順を掲載します。',
      // バグ報告
      'beta.chat.title': 'バグ報告・フィードバック',
      'beta.chat.desc': 'バグの報告、ご意見、ご感想など何でもお気軽に投稿してください。<br>全アプリ共通の掲示板です。どのアプリについてかを書き添えていただけると助かります。<br>他のテスターの投稿も確認できます。',
      'beta.chat.label.name': '名前',
      'beta.chat.label.name.opt': '（任意・ニックネーム可）',
      'beta.chat.ph.name': '例: テスト太郎',
      'beta.chat.label.message': 'メッセージ',
      'beta.chat.ph.message': '例: 【魂の共鳴】フィーバー中にブロックが消えない\n\nバグの詳細、再現手順、ご意見など',
      'beta.chat.submit': '投稿する',
      'beta.chat.list.title': '投稿一覧',
      'beta.chat.list.loading': '読み込み中...',
      // 注意書き
      'beta.notice.1': '⚠️ このテストは登録制です。テストの内容やスクリーンショットの公開はお控えください。',
      'beta.notice.2': '📱 対応端末：Android のみ（iOS版は準備中です）',
      'beta.notice.3': '🔄 テスト版は不定期にアップデートされます。Google Playの自動更新が有効であれば自動的に最新版に更新されますが、最新バージョンの確認やインストールは各アプリのダウンロードリンク（Google Playページ）から行ってください。',
      'beta.notice.4': '💬 何かお困りのことがあれば、お気軽にご連絡ください。',
      // 個人情報の取り扱い
      'beta.privacy.title': '個人情報の取り扱いについて',
      'beta.privacy.intro': 'NullPo Works（以下「当方」）は、個人情報の保護に関する法律（個人情報保護法）に基づき、本ページで取得する個人情報を以下のとおり取り扱います。',
      'beta.privacy.h1': '1. 個人情報の管理者',
      'beta.privacy.p1': 'NullPo Works（Veriquest IT事業部）<br>連絡先：<a href="contact.html">お問い合わせページ</a>',
      'beta.privacy.h2': '2. 取得する個人情報',
      'beta.privacy.p2': '<ul><li>Googleアカウント（Gmailアドレス）</li><li>名前またはニックネーム（任意）</li><li>バグ報告・フィードバックの投稿内容</li></ul>',
      'beta.privacy.h3': '3. 利用目的',
      'beta.privacy.p3a': '取得した個人情報は、以下の目的にのみ使用いたします。',
      'beta.privacy.p3b': '<ul><li>Google Playクローズドテストへの参加者登録・管理</li><li>テスト用アプリの配信設定（Google Play Consoleへのテスターアカウント追加）</li><li>テストに関するご連絡・ご案内</li><li>バグ報告・フィードバックの管理および改善対応</li></ul>',
      'beta.privacy.p3c': '上記以外の目的で利用することはありません。',
      'beta.privacy.h4': '4. 第三者への提供',
      'beta.privacy.p4a': '取得した個人情報は、以下の場合を除き第三者に提供いたしません。',
      'beta.privacy.p4b': '<ul><li>ご本人の同意がある場合</li><li>法令に基づく場合</li><li>テストの実施に必要な範囲でGoogle Play Consoleに登録する場合（Gmailアドレスのみ）</li></ul>',
      'beta.privacy.h5': '5. 安全管理措置',
      'beta.privacy.p5': '取得した個人情報は、Google スプレッドシートにて暗号化通信（SSL/TLS）を用いて安全に管理し、不正アクセス・漏洩・紛失の防止に努めます。アクセス権限は当方の管理者のみに限定しています。',
      'beta.privacy.h6': '6. 保有期間と削除',
      'beta.privacy.p6': '個人情報は、クローズドテスト終了後、合理的な期間内に削除いたします。テスト期間中であっても、ご本人からの削除依頼があった場合は速やかに対応いたします。',
      'beta.privacy.h7': '7. 開示・訂正・削除の請求',
      'beta.privacy.p7': 'ご本人は、個人情報保護法に基づき、ご自身の個人情報について開示・訂正・削除を請求する権利を有します。ご希望の方は<a href="contact.html">お問い合わせページ</a>よりご連絡ください。',
      'beta.privacy.h8': '8. 任意性',
      'beta.privacy.p8': '個人情報の提供は任意ですが、Gmailアドレスをご提供いただけない場合、テストへの参加ができない場合があります。',
      'beta.privacy.h9': '9. バグ報告チャットについて',
      'beta.privacy.p9': 'バグ報告・フィードバック欄に入力された名前と投稿内容は、テスト参加者全員に表示されます。公開を望まない情報は投稿しないようご注意ください。個人を特定する情報（メールアドレス・電話番号等）の投稿はお控えください。',
      'beta.privacy.update': '最終更新日：2026年2月23日',

      // --- tester.js ---
      'js.tester.email_required': 'Gmailアドレスを入力してください。',
      'js.tester.email_invalid': 'メールアドレスの形式が正しくありません。',
      'js.tester.reg_confirm': '以下の内容で登録します。よろしいですか？',
      'js.tester.reg_confirm_name': '名前',
      'js.tester.reg_confirm_account': 'Googleアカウント',
      'js.tester.reg_submitting': '送信中...',
      'js.tester.reg_success': '登録しました！ありがとうございます。',
      'js.tester.reg_error': '送信に失敗しました。再度お試しください。',
      'js.tester.reg_submit': '登録する',
      'js.tester.msg_required': 'メッセージを入力してください。',
      'js.tester.msg_too_long': 'メッセージは2000文字以内で入力してください。',
      'js.tester.chat_confirm': 'この内容で投稿します。よろしいですか？',
      'js.tester.chat_confirm_name': '名前',
      'js.tester.chat_confirm_message': 'メッセージ',
      'js.tester.chat_submitting': '送信中...',
      'js.tester.chat_success': '投稿しました！',
      'js.tester.chat_error': '送信に失敗しました。再度お試しください。',
      'js.tester.chat_submit': '投稿する',
      'js.tester.anonymous': '匿名',
      'js.tester.no_registrations': 'まだ登録はありません。',
      'js.tester.no_posts': 'まだ投稿はありません。',
      'js.tester.loading_error': 'データの取得に失敗しました。',
      'js.tester.gas_not_set': 'GAS URLが未設定です。'
    },

    // ============================================================
    //  English
    // ============================================================
    en: {

      // --- Shared (Header / Footer) ---
      'hamburger.aria': 'Menu',
      'footer.privacy': 'Privacy Policy',
      'footer.privacy.href': 'privacy-policy-en.html',
      'footer.contact': 'Contact',

      // --- index.html ---
      'meta.title.index': 'NullPo Works - Game & App Development',
      'meta.desc.index': 'NullPo Works is a developer creating games and educational apps. From puzzle, action, and horror to educational — a wide range of creative works.',
      'meta.og.title.index': 'NullPo Works',
      'meta.og.desc.index': 'A developer creating games and educational apps',
      'hero.tagline': 'Ideas into Reality.',
      'hero.scroll.aria': 'Scroll down',
      // Tamashii no Kyoumei
      'game.tamashii.title': 'Tamashii no Kyoumei ~Believe in Me~',
      'game.tamashii.tag1': 'Sand Puzzle',
      'game.tamashii.desc': 'A puzzle game where blocks turn into grains of sand — connect same-colored sand to purify them. A unique world where a yoga monk banishes evil spirits.',
      'game.tamashii.lang': 'Japanese / English',
      'game.tamashii.play': 'Play Web Version',
      // Piyo-shi no Bouken
      'game.piyo.title': "Piyo's Adventure",
      'game.piyo.tag1': 'Endless Runner',
      'game.piyo.desc': 'A side-scrolling action game where you control cute Piyo and dodge obstacles. Speed increases every 300m, reaching up to 500% ultra-fast stages.',
      'game.piyo.lang': 'Japanese',
      'game.piyo.play': 'Play Web Version',
      // 14-banchi
      'game.14banchi.title': '14-banchi',
      'game.14banchi.tag1': 'Horror',
      'game.14banchi.desc': 'A side-scrolling 2D horror game where you walk through eerie streets at night, spot anomalies, and make the right choices to reach 14-banchi.',
      'game.14banchi.lang': 'Japanese',
      'game.14banchi.play': 'Play Web Version',
      // Image alt
      'alt.tamashii.hero': 'Tamashii no Kyoumei ~Believe in Me~ Screenshot',
      'alt.piyo.hero': "Piyo's Adventure Screenshot",
      'alt.14banchi.hero': '14-banchi Screenshot',
      'alt.logica.hero': 'Logica - Logic Problem Set - Screenshot',
      'alt.tester.step1': 'Step 1: Tap the Become a tester button',
      'alt.tester.step2': 'Step 2: Tap the download it on Google Play link',
      'alt.tester.step3': 'Step 3: Tap the Install button',
      // Tester Recruitment Banner
      'recruit.title': 'Android Beta Testers Wanted',
      'recruit.desc': 'Want to be among the first to try our apps in development?<br>Register as a tester to install pre-release apps from Google Play.',
      'recruit.btn': 'Go to Tester Page',
      // Logica
      'app.logica.title': 'Logica - Logic Problem Set -',
      'app.logica.tag1': 'Education',
      'app.logica.tag2': 'Japanese / English',
      'app.logica.desc': 'A problem-set app for systematically learning logic from basics to advanced. Practice symbolization of conjunctions, disjunctions, conditionals, and more.',
      // About
      'about.p1': 'NullPo Works is a developer based in Japan.',
      'about.p2': 'Using web technologies such as HTML5 and JavaScript, we develop a wide range of products from puzzle, action, and horror games to educational apps. Our motto "Ideas into Reality." drives us to deliver unique and fun experiences.',
      'about.help': 'If you can\'t play the latest version, click <a href="contact.html#faq">here</a>',

      // --- contact.html ---
      'meta.title.contact': 'Contact - NullPo Works',
      'meta.desc.contact': 'Contact NullPo Works for inquiries and requests.',
      'meta.og.title.contact': 'Contact - NullPo Works',
      'meta.og.desc.contact': 'Contact NullPo Works for inquiries and requests.',
      'contact.title': 'Contact',
      'contact.lead': 'Feel free to contact us for feedback, support requests, collaboration, or any other inquiries.',
      'contact.label.category': 'Category',
      'contact.option.default': 'Select a category',
      'contact.option.feedback': 'Feedback / Impressions',
      'contact.option.bug': 'Bug Report / Support',
      'contact.option.collab': 'Collaboration / Commission',
      'contact.option.other': 'Other',
      'contact.label.name': 'Name',
      'contact.label.name.opt': '(Optional)',
      'contact.ph.name': 'Your name',
      'contact.label.email': 'Email Address',
      'contact.label.email.opt': '(Optional — if you need a reply)',
      'contact.label.message': 'Message',
      'contact.ph.message': 'Please enter your message',
      'contact.submit': 'Send',
      'contact.faq.title': 'FAQ',
      'contact.faq.q1': 'Cannot play the latest version on PWA',
      'contact.faq.a1': '<p>PWA (app added to home screen) may not reflect updates due to caching. Please try the following steps:</p><ol><li>Delete the app from your home screen</li><li>Clear browser site data<ul><li><strong>iPhone</strong>: Settings → Safari → Clear History and Website Data</li><li><strong>Android</strong>: Chrome → Settings → Privacy → Clear Browsing Data</li></ul></li><li>Access the site in normal mode (not private/incognito browsing)</li><li>Re-add to home screen</li></ol>',
      'contact.alt.text': 'You can also reach us via X (Twitter) DM.',
      'contact.alt.btn': 'DM @nullpo_works',

      // --- contact.js ---
      'js.contact.category_required': 'Please select a category.',
      'js.contact.message_required': 'Please enter your message.',
      'js.contact.message_too_long': 'Message must be 2000 characters or less.',
      'js.contact.email_invalid': 'Invalid email address format.',
      'js.contact.rate_limit': 'Please wait before submitting again.',
      'js.contact.confirm': 'Send this message?',
      'js.contact.confirm_category': 'Category',
      'js.contact.confirm_name': 'Name',
      'js.contact.confirm_email': 'Email',
      'js.contact.confirm_message': 'Message',
      'js.contact.not_entered': '(Not entered)',
      'js.contact.submitting': 'Sending...',
      'js.contact.success': 'Your message has been sent. Thank you!',
      'js.contact.error': 'Failed to send. Please try again later or contact us via X (Twitter) DM.',
      'js.contact.submit': 'Send',

      // --- 404.html ---
      'meta.title.404': '404 - Page Not Found - NullPo Works',
      'error.title': 'Page Not Found',
      'error.desc': 'The page you are looking for does not exist or may have been moved.',
      'error.btn': 'Back to Home',

      // --- beta-test.html ---
      'meta.title.beta': 'Tester Page - NullPo Works',
      'meta.desc.beta': 'Register as a tester for NullPo Works closed beta tests.',
      'meta.og.title.beta': 'Tester Page - NullPo Works',
      'meta.og.desc.beta': 'Register as a tester for NullPo Works closed beta tests.',
      'beta.hero.title': 'NullPo Works<br>Tester Page',
      'beta.hero.sub': 'Thank you for joining the NullPo Works closed beta test.<br>From this page, you can register as a tester, install apps, and report bugs.',
      'beta.nav.register': 'Register',
      'beta.nav.tamashii': 'Tamashii',
      'beta.nav.14banchi': '14-banchi',
      'beta.nav.chat': 'Bug Report',
      // Registration
      'beta.reg.title': 'Tester Registration',
      'beta.reg.desc': 'Register as a NullPo Works tester to get early access to apps in development.<br>Please enter the Google Account (Gmail address) you use on Google Play.<br>After registration, the admin will add your account to Google Play. Active test apps will be available for download within 24 hours.<br>Apps marked as "Coming Soon" will be available once testing begins.',
      'beta.reg.label.name': 'Name',
      'beta.reg.label.name.opt': '(Optional — nicknames OK)',
      'beta.reg.ph.name': 'e.g. Tester Taro',
      'beta.reg.label.email': 'Google Account (Gmail Address)',
      'beta.reg.privacy.note': 'By pressing "Register", you agree to the <a href="#privacy">Privacy Notice</a> below.',
      'beta.reg.submit': 'Register',
      'beta.reg.list.title': 'Registered Testers',
      'beta.reg.list.loading': 'Loading...',
      // Alert
      'beta.alert.title': 'Before You Begin',
      'beta.alert.main': 'Are you signed in to your phone with the <strong>Google Account you registered</strong>?',
      'beta.alert.desc': 'If you are signed in with a different Google Account, Google Play will show "This app is not available" and you won\'t be able to install it.',
      'beta.alert.check1': '✅ Signed in with the registered Google Account → Proceed below',
      'beta.alert.check2': '🔄 Not sure / Might be different → Check your Google Account in <strong>Settings → Accounts</strong> on your phone',
      // Tamashii section
      'beta.tamashii.title': 'Tamashii no Kyoumei ~Believe in Me~',
      'beta.tamashii.tag': 'Sand Puzzle / Android',
      'beta.tamashii.cta.lead': 'Once you\'ve confirmed your account, tap the button below to join the test.',
      'beta.tamashii.cta.btn': 'Join Test & Install',
      'beta.tamashii.cta.note': 'This button opens the Google Play test page',
      'beta.tamashii.steps.heading': 'Installation Steps (3 Steps)',
      'beta.tamashii.steps.intro': 'Here\'s what happens after tapping the button above.',
      'beta.tamashii.step1.title': 'Tap "Become a tester"',
      'beta.tamashii.step1.p1': 'After tapping the button, a screen like the one below will open.<br>Tap the <strong>"Become a tester"</strong> button at the bottom of the screen. This confirms your participation.',
      'beta.tamashii.step1.note1': '* The page may initially appear in English showing <strong>"Become a tester"</strong>. The image below shows the Japanese-translated version.',
      'beta.tamashii.step1.note2': '* If this screen doesn\'t appear, make sure you\'re signed in with the registered Google Account.',
      'beta.tamashii.step2.title': 'Tap "download it on Google Play"',
      'beta.tamashii.step2.p1': 'Once you see <strong>"You\'re a tester"</strong>, you\'re in!<br>Tap the blue link <strong>"download it on Google Play"</strong> on the screen.',
      'beta.tamashii.step2.note1': '* The link may take a few minutes to become active. If it doesn\'t appear, wait and refresh the page.',
      'beta.tamashii.step3.title': 'Tap "Install"',
      'beta.tamashii.step3.p1': 'The Google Play app page will open.<br>Tap the blue <strong>"Install"</strong> button to start the download. You\'re all set!',
      'beta.tamashii.launch.main': '📲 <strong>Please launch the app at least once after installation.</strong>',
      'beta.tamashii.launch.desc': 'Just downloading is not enough to complete test registration. Launching the app once officially registers you as a test participant.',
      // 14-banchi section
      'beta.14banchi.title': '14-banchi',
      'beta.14banchi.tag': 'Horror / Android',
      'beta.14banchi.placeholder': '🔧 Coming soon. Please wait for the test to begin.<br>Installation instructions will be posted here when the test is live.',
      // Bug Report
      'beta.chat.title': 'Bug Reports & Feedback',
      'beta.chat.desc': 'Feel free to post bug reports, feedback, or any comments.<br>This is a shared bulletin board for all apps. Please mention which app your post is about.<br>You can also see other testers\' posts.',
      'beta.chat.label.name': 'Name',
      'beta.chat.label.name.opt': '(Optional — nicknames OK)',
      'beta.chat.ph.name': 'e.g. Tester Taro',
      'beta.chat.label.message': 'Message',
      'beta.chat.ph.message': 'e.g. [Tamashii] Blocks don\'t disappear during fever\n\nBug details, steps to reproduce, feedback, etc.',
      'beta.chat.submit': 'Post',
      'beta.chat.list.title': 'Posts',
      'beta.chat.list.loading': 'Loading...',
      // Notices
      'beta.notice.1': '⚠️ This test is by registration only. Please do not share test content or screenshots publicly.',
      'beta.notice.2': '📱 Supported devices: Android only (iOS version in preparation)',
      'beta.notice.3': '🔄 Test versions are updated periodically. If auto-update is enabled on Google Play, the app will update automatically. You can also check for the latest version on each app\'s download link (Google Play page).',
      'beta.notice.4': '💬 If you need any help, feel free to contact us.',
      // Privacy
      'beta.privacy.title': 'Privacy Notice',
      'beta.privacy.intro': 'NullPo Works ("we") handles personal information collected on this page in accordance with the Act on the Protection of Personal Information (Japan) as follows.',
      'beta.privacy.h1': '1. Data Controller',
      'beta.privacy.p1': 'NullPo Works (Veriquest IT Division)<br>Contact: <a href="contact.html">Contact Page</a>',
      'beta.privacy.h2': '2. Personal Information Collected',
      'beta.privacy.p2': '<ul><li>Google Account (Gmail address)</li><li>Name or nickname (optional)</li><li>Bug report and feedback content</li></ul>',
      'beta.privacy.h3': '3. Purpose of Use',
      'beta.privacy.p3a': 'The collected personal information will be used only for the following purposes:',
      'beta.privacy.p3b': '<ul><li>Registration and management of closed test participants on Google Play</li><li>App distribution setup (adding tester accounts to Google Play Console)</li><li>Communication regarding the test</li><li>Management of bug reports and feedback for improvement</li></ul>',
      'beta.privacy.p3c': 'We will not use the information for any other purpose.',
      'beta.privacy.h4': '4. Disclosure to Third Parties',
      'beta.privacy.p4a': 'We will not disclose personal information to third parties except in the following cases:',
      'beta.privacy.p4b': '<ul><li>With the consent of the individual</li><li>When required by law</li><li>When registering Gmail addresses to Google Play Console as necessary for testing</li></ul>',
      'beta.privacy.h5': '5. Security Measures',
      'beta.privacy.p5': 'Personal information is securely managed in Google Sheets using encrypted communication (SSL/TLS). We take measures to prevent unauthorized access, leakage, and loss. Access is restricted to our administrators only.',
      'beta.privacy.h6': '6. Retention and Deletion',
      'beta.privacy.p6': 'Personal information will be deleted within a reasonable period after the closed test ends. Even during the test period, we will promptly respond to deletion requests.',
      'beta.privacy.h7': '7. Right to Access, Correction, and Deletion',
      'beta.privacy.p7': 'You have the right to request access, correction, or deletion of your personal information under the Act on the Protection of Personal Information. Please contact us via the <a href="contact.html">Contact Page</a>.',
      'beta.privacy.h8': '8. Voluntariness',
      'beta.privacy.p8': 'Providing personal information is voluntary. However, without a Gmail address, participation in the test may not be possible.',
      'beta.privacy.h9': '9. About the Bug Report Chat',
      'beta.privacy.p9': 'Names and messages entered in the bug report section are visible to all test participants. Please do not post information you do not wish to be public. Avoid posting personally identifiable information (email addresses, phone numbers, etc.).',
      'beta.privacy.update': 'Last updated: February 23, 2026',

      // --- tester.js ---
      'js.tester.email_required': 'Please enter your Gmail address.',
      'js.tester.email_invalid': 'Invalid email address format.',
      'js.tester.reg_confirm': 'Register with the following information?',
      'js.tester.reg_confirm_name': 'Name',
      'js.tester.reg_confirm_account': 'Google Account',
      'js.tester.reg_submitting': 'Sending...',
      'js.tester.reg_success': 'Registered! Thank you.',
      'js.tester.reg_error': 'Failed to send. Please try again.',
      'js.tester.reg_submit': 'Register',
      'js.tester.msg_required': 'Please enter a message.',
      'js.tester.msg_too_long': 'Message must be 2000 characters or less.',
      'js.tester.chat_confirm': 'Post this message?',
      'js.tester.chat_confirm_name': 'Name',
      'js.tester.chat_confirm_message': 'Message',
      'js.tester.chat_submitting': 'Sending...',
      'js.tester.chat_success': 'Posted!',
      'js.tester.chat_error': 'Failed to send. Please try again.',
      'js.tester.chat_submit': 'Post',
      'js.tester.anonymous': 'Anonymous',
      'js.tester.no_registrations': 'No registrations yet.',
      'js.tester.no_posts': 'No posts yet.',
      'js.tester.loading_error': 'Failed to load data.',
      'js.tester.gas_not_set': 'GAS URL is not configured.'
    }
  };

  var currentLang = localStorage.getItem('lang') || 'ja';

  /** 翻訳テキストを返す（キーが無ければ日本語、それも無ければキーそのもの） */
  function t(key) {
    return (translations[currentLang] && translations[currentLang][key])
        || (translations['ja'] && translations['ja'][key])
        || key;
  }

  function getLang() { return currentLang; }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyLanguage();
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: lang } }));
  }

  /** DOM 全体に翻訳を適用 */
  function applyLanguage() {
    // <html lang>
    document.documentElement.lang = currentLang;

    // data-i18n  → textContent
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (el.tagName === 'TITLE') { document.title = t(key); return; }
      el.textContent = t(key);
    });

    // data-i18n-html  → innerHTML
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });

    // data-i18n-placeholder  → placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });

    // data-i18n-aria  → aria-label
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });

    // data-i18n-alt  → alt
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      el.setAttribute('alt', t(el.getAttribute('data-i18n-alt')));
    });

    // data-i18n-meta  → content (meta tags)
    document.querySelectorAll('[data-i18n-meta]').forEach(function (el) {
      el.setAttribute('content', t(el.getAttribute('data-i18n-meta')));
    });

    // data-i18n-href  → href
    document.querySelectorAll('[data-i18n-href]').forEach(function (el) {
      el.href = t(el.getAttribute('data-i18n-href'));
    });

    // Toggle button label
    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.textContent = currentLang === 'ja' ? 'EN' : 'JA';
      toggle.setAttribute('aria-label',
        currentLang === 'ja' ? 'Switch to English' : '日本語に切り替え');
    }
  }

  // DOMContentLoaded で自動適用
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyLanguage();
      bindToggle();
    });
  } else {
    applyLanguage();
    bindToggle();
  }

  function bindToggle() {
    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        setLang(currentLang === 'ja' ? 'en' : 'ja');
      });
    }
  }

  return { t: t, getLang: getLang, setLang: setLang, applyLanguage: applyLanguage };
})();
