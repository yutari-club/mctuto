### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# 撃退(げきたい)２

## ステップ1
ステップ1はヘイズ2。
Step 1 is to do hazing two.  

## ステップ2
完了(かんりょう)したら、**Play**ボタンを押(お)してコードをコンパイルするよ。</br>
コードをMinecraftで実行(じっこう)するのを忘(わす)れないでしてね。</br>

```blocks
player.onChat("run", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
    }
    player.say("")
})

``` 
```package
rubyblock=github:yutari-club/rubyblock#master
```