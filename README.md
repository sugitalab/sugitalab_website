# tmp25

* OS
  * Ubuntu 22.04

* Hugo version
  * v0.148.2_extended

## ビルドコマンド  
`hugo server`

## 開発時は下書きページまでビルド実行できる以下がおススメ
`hugo server -D`

## 新規ページ作成コマンド
`hugo new foo/_index.ja.md;`

このコマンドで以下のファイルが作成されます  
`content/foo/_index.ja.md`

`[ドメイン]/foo/` で表示できるページが作成されます。  
`.ja.md` で日本語ページ、英語ページ作成時は `.en.md` としてください