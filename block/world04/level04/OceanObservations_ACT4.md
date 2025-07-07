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
AIが作成(さくせい)したルートが正(ただ)しいかどうかを確(たし)かめる必要(ひつよう)があるよ。<br>
そのために、`||loops:on start||コーディングブロックの中(なか)に`||AI:autonomous navigation algorithm||コーディングブロックを使(つか)ってみよう。<br>
その中(なか)で、エージェントが到達(とうたつ)すべきセンサーを`||Output: OUTPUT||タブのコーディングブロックを使(つか)って指定(してい)しよう。<br>
エージェントが到達(とうたつ)する必要(ひつよう)があるセンサーは**2**と**4**だよ。 

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
