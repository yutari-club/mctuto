### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# アクティビティ 3 – プロの追跡者

## ステップ 1
今度はオセロットを追跡するAIをコーディングする必要があるよ。<br>
サバンナから入ってくる**現在の**データを使って、<br>
前のアクティビティで作った**過去の**データセットと**比較**してみよう。

## ステップ 2
まず`||AI: semi-supervised machine learning||`コーディングブロックを使って、その中に`||Datasets: input datasets||`コーディングブロックを置いてみよう。<br>
その後、`||Datasets: compare datasets||`コーディングブロックを置いて、**現在の**データセット、それから**過去の**データセットに設定しよう。

## ステップ 3
次に`||AI: analyze pattern data||`コーディングブロックを置いてみよう。<br>
その後に`||Output: locate ocelots||`コーディングブロックを置こう。<br>
これでコードを実行すると、オセロットの位置を示すマップが表示されるよ。

```ghost
Datasets.compare_PR()
Datasets.input_PR()
AI.ml_PR(function(){})
AI.analyze_PR()
Output.locateOcelots_PR()
```

```package
aicustomblocks=github:yutari-club/mctuto
```