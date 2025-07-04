### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0
### @hideIteration true 

# アクティビティ 4 – テストしてみよう

## ステップ 1
AIが作成したルートが正しいかどうかを確かめる必要があるよ。<br>
そのために、`||loops:on start||コーディングブロックの中に`||AI:autonomous navigation algorithm||コーディングブロックを使ってみよう。<br>
その中で、エージェントが到達すべきセンサーを`||Output: OUTPUT||タブのコーディングブロックを使って指定しよう。<br>
エージェントが到達する必要があるセンサーは**2**と**4**だよ。 

```ghost
AI.ml_OO2(function(){})
Output.reach1_OO()
Output.reach2_OO()
Output.reach3_OO()
Output.reach4_OO()
```

```package
aicustomblocks=github:yutari-club/mctuto
```
