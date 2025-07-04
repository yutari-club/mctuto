### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# アクティビティ 2 – 蓛口から直接

## ステップ 1
周囲の川から水のサンプルを集めたので、今度はそれぞれの場所の水データで**現在の**データセットをコーディングしよう。

## ステップ 2 
`||Datasets: current||に設定した`||Datasets: make dataset||コーディングブロックを使って始めよう。<br>
その中に、それぞれの場所の`||Input: water data||をすべて置いてみよう。 

```ghost
Input.waterData1_WQ()
Input.waterData2_WQ()
Input.waterData3_WQ()
Datasets.setOfData_WQ(datasetType.historical, function() {})
```

```package
aicustomblocks=github:yutari-club/mctuto
```