### @explicitHints true
### @flyoutOnly 0

# アクティビティ 2 – 全部をマッピングしよう

## ステップ 1
このアクティビティでは、撮った写真をすべて**一つ**の大きな`||datasets: dataset||に組み合わせる必要があるよ。<br>
このデータをすべてまとめて、森の大きなマップとして表示するよ。<br>
まず`||loops: on start||コーディングブロックの中に`||datasets: make dataset||コーディングブロックを使ってみよう。 

## ステップ 2
**3つ**の場所から収集したデータを**すべて**`||datasets: make dataset||コーディングブロックの中に置いてみよう。<br>
`||Input: picture data||コーディングブロックは`||Input: INPUT||タブにあるよ。 

```ghost
Input.location1PictureData_MT()
Input.location2PictureData_MT()
Input.location3PictureData_MT()
Datasets.setOfData_MT(function() {})
```

```package
aicustomblocks=github:yutari-club/mctuto
```