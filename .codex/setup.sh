#!/usr/bin/env bash
# Codex Cloud (リモート環境) のセットアップスクリプト。
# Codex の Environments 設定にある「Setup script」に次の 1 行を登録して使う:
#   bash .codex/setup.sh
#
# このスクリプトはネットワークが有効なセットアップ工程で実行される。
# エージェント工程ではネットワークが無効になる場合があるため、
# 外部から取得するものはすべてここで揃えておく。
set -euo pipefail

cd "$(dirname "$0")/.."

echo "== 環境情報"
echo "Node.js : $(node -v)"
echo "npm     : $(npm -v)"
echo "Python  : $(python3 --version)"

echo "== 依存パッケージのインストール"
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

echo "== 検証コマンドの動作確認"
npx html-validate --version

echo "== セットアップ完了"
echo "HTML の検証   : npm run lint:html"
echo "ローカル確認  : npm run serve  (http://localhost:8000)"
