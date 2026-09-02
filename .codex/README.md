# Codex リモート環境の設定手順

このディレクトリは [Codex Cloud](https://chatgpt.com/codex) からこのリポジトリを扱うための設定をまとめている。
リポジトリ側の準備 (このディレクトリと `AGENTS.md`) は済んでいるので、残りは Codex の Web 画面での操作のみ。

## 1. GitHub 連携

1. <https://chatgpt.com/codex> を開く
2. `Connect to GitHub` から GitHub アカウントを連携する
3. `giasupe/giasupe.github.io` へのアクセスを許可する

## 2. 環境 (Environment) の作成

Codex の `Settings` → `Environments` → `Create environment` で以下を設定する。

| 項目 | 設定値 |
| --- | --- |
| Repository | `giasupe/giasupe.github.io` |
| Setup script | `bash .codex/setup.sh` |
| Container image | 既定 (`codex-universal`) のまま |
| Environment variables | 設定不要 |
| Secrets | 設定不要 (外部サービスを使っていないため) |
| Agent internet access | `Off` (依存はセットアップ工程で取得済み) |

Node.js のバージョンを固定したい場合は、環境変数 `CODEX_ENV_NODE_VERSION` に `22` を設定する。
セットアップスクリプト内で `nvm` などを使ってインストールしないこと (キャッシュが効かない)。

## 3. 動作確認

環境を作成したら、次のような軽いタスクを投げて動作を確認する。

```
npm run lint:html を実行して、報告された HTML の警告を一覧にしてください。コードは変更しないでください。
```

セットアップログに `== セットアップ完了` が出力されていれば、依存のインストールまで成功している。

## 注意点

- `export` した環境変数はセットアップ工程が終わると失われる。恒久的に必要な値は Codex の環境変数設定か `~/.bashrc` に書く。
- セットアップスクリプト・環境変数・シークレットを変更するとコンテナのキャッシュが破棄され、次回は再インストールが走る。
- このリポジトリは main ブランチへのマージで GitHub Pages に公開される。Codex には必ずブランチ + プルリクエストで作業させる (`AGENTS.md` に記載済み)。
