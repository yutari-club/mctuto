### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# アクティビティ 3 - 異常(いじょう)を発見(はっけん)しよう

## ステップ 1
このアクティビティでは、作(つく)ったデータセットを機械(きかい)学習(がくしゅう)アルゴリズムの中(なか)で使(つか)う必要(ひつよう)があるよ。<br>
アルゴリズムはデータセットの中(なか)の異常(いじょう)を探(さが)して、マップ上(じょう)に輪郭(りんかく)を描(えが)く必要(ひつよう)があるんだ。<br>
まず`||loops: on start||`コーディングブロックの中(なか)に`||AI: machine learning||`コーディングブロックを使(つか)ってみよう。

## ステップ 2
その中(なか)に`||Datasets: input dataset||`コーディングブロックを置(お)いてみよう。<br>
それから`||AI: analyze data||`コーディングブロックを置(お)こう。

## ステップ 3
データを読(よ)み込(こ)んで分析(ぶんせき)したので、アルゴリズムに結果(けっか)が出(で)ているはずだよ。<br>
でもマップ上(じょう)で結果(けっか)を見(み)ることができるように、`||Output: show locations||`コーディングブロックを置(お)いてみよう。


```ghost
Datasets.input_MTB()
AI.analyze_MTB()
Output.showLocations_MTB()
AI.ml_MTB(function() {})
```

