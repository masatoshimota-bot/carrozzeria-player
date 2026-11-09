carrozzeria AutoDrive for OTTOCAST U2-PLUS

1. ZIPを展開し、index.html、faceplate.jpg、sw.js、manifest.webmanifest、アイコンをGitHub Pagesのリポジトリ直下へ公開してください。
2. Google CloudでGoogle Drive APIを有効化し、OAuth同意画面と「ウェブアプリケーション」OAuthクライアントを設定します。承認済みJavaScript生成元はGitHub Pagesのホスト名（例 https://example.github.io）です。
3. U2-PLUSのブラウザで公開したHTTPSのURLを開き、Google DriveボタンからクライアントIDを入力してGoogleログインします。
4. 音楽を保存するGoogle Driveのフォルダーを開き「このフォルダーを音楽フォルダーに登録」を押します。登録直後に新しい曲が一覧に追加されます。
5. 次回以降はGoogleログイン後、登録フォルダーの楽曲を自動取得します。「最新の曲を取得」でいつでも追加分を取り込めます。
6. 再生時にDriveから音声データを取得します。Google Driveがオフラインの時は未ダウンロードの曲は再生できません。

注：Googleのアクセストークンとパスワードは保存しません。端末再起動後などには再ログインが必要です。フォルダー設定だけブラウザに保存します。既存のローカル音楽やEQ設定は変更しません。Google APIや古いAndroidブラウザによって認証に失敗する場合があります。Google Driveの操作は読み取り専用権限です。
