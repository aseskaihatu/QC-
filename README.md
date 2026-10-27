# QC検定4級 練習クイズ / QC Kentei Grade 4 Practice Quiz

## 日本語

QC検定4級の学習用クイズサイトです。第I部の内容を対象とし、ベトナム語と日本語を切り替えて利用できます。

- セット1：第1～13項
- セット2：第13～26項
- 各セット20問、1問5点、合計100点
- 回答後に採点結果と間違えた問題の解説を表示
- アクセスするたびに問題の順序を変更

このサイトは学習用の参考資料であり、公式試験問題ではありません。

## English

A practice quiz website for QC Kentei Grade 4, covering Part I. The interface and questions are available in Vietnamese and Japanese.

- Set 1: Sections 1–13
- Set 2: Sections 13–26
- 20 questions per set, 5 points each, for a total of 100 points
- Results and explanations for incorrect answers after submission
- Question order is shuffled on each visit

This site is for study and reference only. It does not contain official exam questions.

## ローカルで実行 / Run locally

静的サイトなので、追加のライブラリは不要です。ブラウザーで `dist/index.html` を開くか、ローカルサーバーを起動してください。

This is a static website with no dependencies. Open `dist/index.html` in a browser, or start a local server:

```sh
python -m http.server 8765 --directory dist
```

ブラウザーで `http://localhost:8765/` にアクセスします。 / Then open `http://localhost:8765/`.
