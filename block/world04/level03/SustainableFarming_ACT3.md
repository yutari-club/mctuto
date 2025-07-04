### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# アクティビティ 3 – 予測分析

## ステップ 1
今度は最適な植付け場所を探し出すAIをコーディングする必要があるよ。<br>
前のアクティビティで作った**現在の**データセットを使って、<br>
衛星ステーションがすでに持っている**過去の**データセットと**比較**してみよう。

## ステップ 2
まず`||AI: semi-supervised machine learning||コーディングブロックを使って、その中に`||Datasets: input datasets||コーディングブロックを置いてみよう。<br>
その後、`||Datasets: compare datasets||コーディングブロックを置いて、**現在の**データセット、それから**過去の**データセットに設定しよう。

## ステップ 3
次に`||AI: run predictive analysis||コーディングブロックを置いて、その後に`||Output: find best farming locations||コーディングブロックを置こう。<br>
これでコードを実行すると、AIが最適な農業場所を見つけて光らせてくれるよ。

```ghost
Datasets.compare_SF()
Datasets.input_SF()
AI.ml_SF(function(){})
AI.analyze_SF()
Output.locateFarm_SF()
```

```package
aicustomblocks=github:yutari-club/mctuto
```