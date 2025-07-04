### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# アクティビティ 3 – 将来のための準備

## ステップ 1
安定したデータストリームが入ってくるようになったので、気候変動がこれらのサンゴ礁に与える影響についての研究を始めることができるよ。<br>
でもセンサーが故障した場合に備えて、AIを使ってセンサーに到達して自動的に修理できるようにしたいんだ。<br>
これは集めているライブデータを使った**自律ナビゲーション**で可能になるよ。

## ステップ 2 
`||loops: on start||コーディングブロックの中に`||AI: machine learning||コーディングブロックを使ってみよう。<br>
このブロックの中に、`||datasets: live dataset||に設定した`||Datasets: input dataset||コーディングブロックを置いてみよう。<br>
その後、`||AI: analyze terrain data||コーディングブロックを置こう。 

## ステップ 3
次に`||AI: generate routes||コーディングブロックを置いてみよう。<br>
これで実行すると、AIがエージェントのためのルートを生成して、いろいろなサンゴと衝突しないようにしてくれるよ。<br>
海底の地形もマップで見ることができるようになるよ。 


```ghost
AI.analyze_OO()
AI.ml_OO(function() {})
Datasets.input_OO()
AI.genRoutes_OO()
```

```package
aicustomblocks=github:yutari-club/mctuto
```