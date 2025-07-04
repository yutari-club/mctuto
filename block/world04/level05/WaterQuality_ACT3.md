### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# アクティビティ 3 – あちこちに汚染物質

## ステップ 1
今度は汚染の原因を探し出すAIをコーディングする必要があるよ。<br>
そのために、前のアクティビティでコーディングした**現在の**データセットを**分析**して、<br>
汚染物質の濃度が最も高い場所を探し出す必要があるんだ。

## ステップ 2
まず`||AI: supervised machine learning||コーディングブロックを使って、その中に**現在**に設定した`||Datasets: input datasets||コーディングブロックを置いてみよう。

## ステップ 3
次に`||AI: analyze water data||コーディングブロックを置いてみよう。<br>
その後に`||Output: locate pollution sources||コーディングブロックを置こう。<br>
これでコードを実行すると、AIが汚染の原因がどこから来ているのかを探し出してくれるよ。


```ghost
Datasets.input_WQ()
AI.ml_WQ(function(){})
AI.analyze_WQ()
Output.locatePollution_WQ()
```

```package
aicustomblocks=github:yutari-club/mctuto
```