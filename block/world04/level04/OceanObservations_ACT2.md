### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# アクティビティ 2 - 水中(すいちゅう)データ

## ステップ 1
センサーを設置(せっち)したので、今度(こんど)は**4つ**のセンサーからのデータをすべて保持(ほじ)する**一(ひと)つ**のライブデータセットを作(つく)る必要(ひつよう)があるよ。<br>
これが完了(かんりょう)すると、4つのモニターで水面(すいめん)下(か)で何(なに)が起(お)こっているかを見(み)てマッピングできるようになるよ。 

## ステップ 2 
まず`||loops: on start||コーディングブロックの中(なか)に`||Datasets: make dataset||コーディングブロックを使(つか)ってみよう。<br>
そのブロックを`||Datasets: live||データセットに設定(せってい)しよう。

## ステップ 3
次(つぎ)に`||Input: sensor data||をデータセットの中(なか)に置(お)いてみよう。

```ghost
Input.sensor1_OO()
Input.sensor2_OO()
Input.sensor3_OO()
Input.sensor4_OO()
Datasets.setOfData_OO(datasetType.historical, function() {})
```

