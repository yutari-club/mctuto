### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# パターン認識 - アクティビティ2

## ステップ1
多くのオセロットから異なる毛皮のパターンを持つ写真データを収集したので、データセットをコーディングすることができます。

## ステップ2
`||Datasets: データセットを作成||`コーディングブロックを`||Datasets: 履歴||`に設定して開始します。その中に、先ほど収集した全ての`||Input: トラップカメラデータ||`を配置します。

## ステップ3
最後のステップとして、写真データからオセロットの毛皮のパターンを抽出する必要があります。`||Datasets: パターンを抽出||`コーディングブロックを使用してください。
コードを実行すると、オセロットのパターンのプレビューがコンパイルされます。

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