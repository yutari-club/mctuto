### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# アクティビティ 2 

## ステップ 1
周囲(しゅうい)の川(かわ)から水(みず)のサンプルを集(あつ)めたので、今度(こんど)はそれぞれの場所(ばしょ)の水(みず)データで**現在(げんざい)の**データセットをコーディングしよう。

## ステップ 2 
`||Datasets: current||に設定(せってい)した`||Datasets: make dataset||コーディングブロックを使(つか)って始(はじ)めよう。<br>
その中(なか)に、それぞれの場所(ばしょ)の`||Input: water data||をすべて置(お)いてみよう。 

```ghost
Input.waterData1_WQ()
Input.waterData2_WQ()
Input.waterData3_WQ()
Datasets.setOfData_WQ(datasetType.historical, function() {})
```

