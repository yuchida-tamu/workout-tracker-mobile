# workout-tracker-mobile

## Setup
### プロジェクトをローカルにクローンする
`git clone https://github.com/yuchida-tamu/workout-tracker-mobile.git`

### モジュールをインストールする（yarnがない場合 `npm install --global yarn`）
`yarn install`

### git hooksの設定
- 目的： コミット前にフォーマットなどのチェックを行うためのスクリプトを実行する
- スクリプトは.githooksで管理する。
- ローカル環境でスクリプトを設定するために以下のコマンドを実行

`git config core.hooksPath .githooks`
