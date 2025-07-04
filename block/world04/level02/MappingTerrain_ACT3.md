### @explicitHints true
### @flyoutOnly 0

# アクティビティ 3 – 異常を発見しよう

## ステップ 1
このアクティビティでは、作ったデータセットを機械学習アルゴリズムの中で使う必要があるよ。<br>
アルゴリズムはデータセットの中の異常を探して、マップ上に輪郭を描く必要があるんだ。<br>
まず`||loops: on start||コーディングブロックの中に`||AI: machine learning||コーディングブロックを使ってみよう。

## ステップ 2
その中に`||Datasets: input dataset||コーディングブロックを置いてみよう。<br>
それから`||AI: analyze data||コーディングブロックを置こう。

## ステップ 3
データを読み込んで分析したので、アルゴリズムに結果が出ているはずだよ。<br>
でもマップ上で結果を見ることができるように、`||Output: show locations||コーディングブロックを置いてみよう。


```ghost
Datasets.input_MT()
AI.analyze_MT()
Output.showLocations_MT()
AI.ml_MT(function() {})
```

```package
aicustomblocks=github:yutari-club/mctuto
```