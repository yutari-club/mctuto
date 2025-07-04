### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# アクティビティ 2 – この世のものではない

## ステップ 1
衛星ビーコンをすべて設置したので、今度は衛星を**コントロール**して、<br>
送り返されてくる情報から**現在の**データセットをコーディングする必要があるよ。

## ステップ 2 
まず`||loops: on start||コーディングブロックの中に`||Input: control satelite||コーディングブロックを使ってみよう。<br>
その中に`||Datasets: make dataset||コーディングブロックを置いて、そのブロックを`||Datasets: current||データセットに設定しよう。

## ステップ 3 
次にすべての`||Input: location satellite data||をその中に置いてみよう。<br>
これで実行すると、現在のデータセットのためのデータを集めながら、<br>
衛星カメラが村の上をパンしている様子を見ることができるよ。

```ghost
Input.beacon1_SF()
Input.beacon2_SF()
Input.beacon3_SF()
Input.beacon4_SF()
Input.beacon5_SF()
Input.runSatelite_SF(function() {})
Datasets.setOfData_SF(datasetType.historical, function() {})
```

```package
aicustomblocks=github:yutari-club/mctuto
```