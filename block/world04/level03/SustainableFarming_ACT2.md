### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# アクティビティ 2 - この世(よ)のものではない

## ステップ 1
衛星(えいせい)ビーコンをすべて設置(せっち)したので、今度(こんど)は衛星(えいせい)を**コントロール**して、<br>
送(おく)り返(かえ)されてくる情報(じょうほう)から**現在(げんざい)の**データセットをコーディングする必要(ひつよう)があるよ。

## ステップ 2 
まず`||loops: on start||コーディングブロックの中(なか)に`||Input: control satelite||コーディングブロックを使(つか)ってみよう。<br>
その中(なか)に`||Datasets: make dataset||コーディングブロックを置(お)いて、そのブロックを`||Datasets: current||データセットに設定(せってい)しよう。

## ステップ 3 
次(つぎ)にすべての`||Input: location satellite data||をその中(なか)に置(お)いてみよう。<br>
これで実行(じっこう)すると、現在(げんざい)のデータセットのためのデータを集(あつ)めながら、<br>
衛星(えいせい)カメラが村(むら)の上(うえ)をパンしている様子(ようす)を見(み)ることができるよ。

```ghost
Input.beacon1_SF()
Input.beacon2_SF()
Input.beacon3_SF()
Input.beacon4_SF()
Input.beacon5_SF()
Input.runSatelite_SF(function() {})
Datasets.setOfData_SF(datasetType.historical, function() {})
```

