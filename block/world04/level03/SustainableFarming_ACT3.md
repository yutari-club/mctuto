### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# アクティビティ 3 - 予測(よそく)分析(ぶんせき)

## ステップ 1
今度(こんど)は最適(さいてき)な植付(うえつ)け場所(ばしょ)を探(さが)し出(だ)すAIをコーディングする必要(ひつよう)があるよ。<br>
前(まえ)のアクティビティで作(つく)った**現在(げんざい)の**データセットを使(つか)って、<br>
衛星(えいせい)ステーションがすでに持(も)っている**過去(かこ)の**データセットと**比較(ひかく)**してみよう。

## ステップ 2
まず`||AI: semi-supervised machine learning||コーディングブロックを使(つか)って、その中(なか)に`||Datasets: input datasets||コーディングブロックを置(お)いてみよう。<br>
その後(あと)、`||Datasets: compare datasets||コーディングブロックを置(お)いて、**現在(げんざい)の**データセット、それから**過去(かこ)の**データセットに設定(せってい)しよう。

## ステップ 3
次(つぎ)に`||AI: run predictive analysis||コーディングブロックを置(お)いて、その後(あと)に`||Output: find best farming locations||コーディングブロックを置(お)こう。<br>
これでコードを実行(じっこう)すると、AIが最適(さいてき)な農業(のうぎょう)場所(ばしょ)を見(み)つけて光(ひか)らせてくれるよ。

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