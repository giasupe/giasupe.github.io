# AGENTS.md

このリポジトリで作業する AI エージェント (Codex など) 向けの指示。

## プロジェクト概要

- giasupe のポートフォリオサイト。<https://giasupe.github.io/> で公開している
- HTML・CSS・素の JavaScript のみで構成された静的サイト。ビルド工程はない
- HTML の学習を兼ねたプロジェクトなので、フレームワークやライブラリの追加は提案のみに留め、指示なく導入しない

## ディレクトリ構成

| パス | 内容 |
| --- | --- |
| `index.html` | about ページ (トップ) |
| `layouts/works.html` | works ページ |
| `css/style.css` | サイト全体のスタイル |
| `css/normalize.css` | normalize.css (第三者製。編集しない) |
| `js/main.js` | メールアドレスのコピー機能 |
| `images/` | 画像・favicon |
| `.codex/` | Codex リモート環境の設定 |

## コマンド

```bash
npm install         # 依存 (html-validate) のインストール
npm run lint:html   # HTML の検証
npm run serve       # http://localhost:8000 でプレビュー
```

`node_modules/` と `package.json` は検証用であり、公開されるサイト本体には影響しない。

## コーディング規約

- インデントは HTML が半角スペース 2 つ、CSS と JavaScript が半角スペース 4 つ
- 文字コードは UTF-8、改行は LF
- `<html lang="ja">` を維持する
- CSS・JS・画像の参照はサイトルートからの絶対パス (`/css/style.css` など) で書く。ユーザーサイトなのでサブパスは不要
- 色やフォントは `css/style.css` の既存の値を使い回す。新しい色を増やす前に既存クラスの再利用を検討する
- 外部リンクには `target="_blank" rel="noopener noreferrer"` を付ける

## 変更時に注意すること

- `js/main.js` は `index.html` と `layouts/works.html` の両方から読み込まれる。`#copy-email` が存在しないページでも例外が出ないよう、要素取得後は必ず null チェックを入れる
- HTML を編集したら `npm run lint:html` を実行し、新しいエラーを増やさない
- レイアウトを変更した場合は、スマートフォン幅 (375px 程度) でも崩れないか確認する
- `images/favicon.ico` は 3MB 以上あり読み込みが重い。画像を追加するときはサイズを意識する

## Git とプルリクエスト

- `main` ブランチへ直接コミット・push しない。`main` へのマージがそのまま本番公開になる
- 作業ブランチは既存の慣習にあわせて `feature/<内容>` または `fix/<内容>` とする
- 変更はプルリクエストで提出する (リポジトリのルールでプルリクエスト必須)
- コミットメッセージは変更内容がわかる簡潔なものにする

## 完了前のチェックリスト

1. `npm run lint:html` が新しいエラーを出していない
2. `npm run serve` でプレビューし、変更したページの表示とリンクが正しい
3. ブラウザのコンソールにエラーが出ていない
4. `git status` に意図しないファイル (`node_modules/` など) が含まれていない
