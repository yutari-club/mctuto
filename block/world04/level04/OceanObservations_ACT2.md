### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# アクティビティ 2 – 水中データ

## ステップ 1
センサーを設置したので、今度は**4つ**のセンサーからのデータをすべて保持する**一つ**のライブデータセットを作る必要があるよ。<br>
これが完了すると、4つのモニターで水面下で何が起こっているかを見てマッピングできるようになるよ。 

## ステップ 2 
まず`||loops: on start||コーディングブロックの中に`||Datasets: make dataset||コーディングブロックを使ってみよう。<br>
そのブロックを`||Datasets: live||データセットに設定しよう。

## ステップ 3
次に`||Input: sensor data||をデータセットの中に置いてみよう。

```ghost
Input.sensor1_OO()
Input.sensor2_OO()
Input.sensor3_OO()
Input.sensor4_OO()
Datasets.setOfData_OO(datasetType.historical, function() {})
```

```package
aicustomblocks=github:yutari-club/mctuto
```
