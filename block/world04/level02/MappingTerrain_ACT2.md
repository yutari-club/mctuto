### @explicitHints true
### @flyoutOnly 0

# アクティビティ 2 - 全部(ぜんぶ)をマッピングしよう

## ステップ 1
このアクティビティでは、撮(と)った写真(しゃしん)をすべて**一(ひと)つ**の大(おお)きな`||datasets: dataset||に組(く)み合(あ)わせる必要(ひつよう)があるよ。<br>
このデータをすべてまとめて、森(もり)の大(おお)きなマップとして表示(ひょうじ)するよ。<br>
まず`||loops: on start||コーディングブロックの中(なか)に`||datasets: make dataset||コーディングブロックを使(つか)ってみよう。 

## ステップ 2
**3つ**の場所(ばしょ)から収集(しゅうしゅう)したデータを**すべて**`||datasets: make dataset||コーディングブロックの中(なか)に置(お)いてみよう。<br>
`||Input: picture data||コーディングブロックは`||Input: INPUT||タブにあるよ。 

```ghost
Input.location1PictureData_MT()
Input.location2PictureData_MT()
Input.location3PictureData_MT()
Datasets.setOfData_MT(function() {})
```

