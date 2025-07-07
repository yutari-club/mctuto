### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# アクティビティ 3 - プロの追跡者(ついせきしゃ)

## ステップ 1
今度(こんど)はオセロットを追跡(ついせき)するAIをコーディングする必要(ひつよう)があるよ。<br>
サバンナから入(はい)ってくる**現在(げんざい)の**データを使(つか)って、<br>
前(まえ)のアクティビティで作(つく)った**過去(かこ)の**データセットと**比較(ひかく)**してみよう。

## ステップ 2
まず`||AI: semi-supervised machine learning||`コーディングブロックを使(つか)って、その中(なか)に`||Datasets: input datasets||`コーディングブロックを置(お)いてみよう。<br>
その後(あと)、`||Datasets: compare datasets||`コーディングブロックを置(お)いて、**現在(げんざい)の**データセット、それから**過去(かこ)の**データセットに設定(せってい)しよう。

## ステップ 3
次(つぎ)に`||AI: analyze pattern data||`コーディングブロックを置(お)いてみよう。<br>
その後(あと)に`||Output: locate ocelots||`コーディングブロックを置(お)こう。<br>
これでコードを実行(じっこう)すると、オセロットの位置(いち)を示(しめ)すマップが表示(ひょうじ)されるよ。

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