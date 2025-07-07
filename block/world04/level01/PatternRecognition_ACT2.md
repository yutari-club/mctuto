### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# パターン認識(にんしき) - アクティビティ2

## ステップ1
多(おお)くのオセロットから異(こと)なる毛皮(けがわ)のパターンを持(も)つ写真(しゃしん)データを収集(しゅうしゅう)したので、データセットをコーディングすることができるよ。

## ステップ2
`||Datasets: データセットを作成(さくせい)||`コーディングブロックを`||Datasets: 履歴(りれき)||`に設定(せってい)して開始(かいし)するよ。その中(なか)に、先(さき)ほど収集(しゅうしゅう)した全(すべ)ての`||Input: トラップカメラデータ||`を配置(はいち)するよ。

## ステップ3
最後(さいご)のステップとして、写真(しゃしん)データからオセロットの毛皮(けがわ)のパターンを抽出(ちゅうしゅつ)する必要(ひつよう)があります。`||Datasets: パターンを抽出(ちゅうしゅつ)||`コーディングブロックを使用(しよう)してみよう。
コードを実行(じっこう)すると、オセロットのパターンのプレビューがコンパイルされます。

<!-- # Activity 2 – Paterns, paterns, paterns...

## Step 1
Now that we have collected a large amount of photographic data with different coat patterns, from a few different ocelots, we can code a dataset. 
 
## Step 2 
Start by using a `||Datasets: make dataset||` coding block, set to `||Datasets: historical||`. Inside of that place all of the `||Input: trap camera data||`
, that was just gathered. 

## Step 3 
As a last step we need to extract the patterns on the ocelots coats from the photographic data. Use a `||Datasets: extract patterns||` coding block.
Now when you run the code, previews of the ocelots patterns will be compiled.  -->

```ghost
Input.trap1_PR()
Input.trap2_PR()
Input.trap3_PR()
Datasets.extractPatterns_PR()
Datasets.setOfData_PR(datasetType.historical, function() {})
```

```package
aicustomblocks=github:yutari-club/mctuto
```