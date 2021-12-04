# workout-tracker-mobile

## Setup

### プロジェクトをローカルにクローンする

`git clone https://github.com/yuchida-tamu/workout-tracker-mobile.git`

### モジュールをインストールする（yarn がない場合 `npm install --global yarn`）

`yarn install`

### Husky

- Husky をつかうことで GitHook を利用する
- commit-msg: コミットメッセージの形式のチェックを行う(commitlint を利用)
- pre-commit: コミット前に eslint を走らせて lint チェックを行う
