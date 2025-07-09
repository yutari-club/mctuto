### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# アクティビティ 3 - あちこちに汚染(おせん)物質(ぶっしつ)

## ステップ 1
今度(こんど)は汚染(おせん)の原因(げんいん)を探(さが)し出(だ)すAIをコーディングする必要(ひつよう)があるよ。<br>
そのために、前(まえ)のアクティビティでコーディングした**現在(げんざい)の**データセットを**分析(ぶんせき)**して、<br>
汚染(おせん)物質(ぶっしつ)の濃度(のうど)が最(もっと)も高(たか)い場所(ばしょ)を探(さが)し出(だ)す必要(ひつよう)があるんだ。

## ステップ 2
まず`||AI: supervised machine learning||コーディングブロックを使(つか)って、その中(なか)に**現在(げんざい)**に設定(せってい)した`||Datasets: input datasets||コーディングブロックを置(お)いてみよう。

## ステップ 3
次(つぎ)に`||AI: analyze water data||コーディングブロックを置(お)いてみよう。<br>
その後(あと)に`||Output: locate pollution sources||コーディングブロックを置(お)こう。<br>
これでコードを実行(じっこう)すると、AIが汚染(おせん)の原因(げんいん)がどこから来(き)ているのかを探(さが)し出(だ)してくれるよ。


```ghost
Datasets.input_WQ()
AI.ml_WQ(function(){})
AI.analyze_WQ()
Output.locatePollution_WQ()
```

