### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# Hazing Two

## ステップ1
ステップ1はヘイズ2。
Step 1 is to do hazing two.  

## ステップ2
完了したら、**Play**ボタンを押してコードをコンパイルします。</br>
コードをMinecraftで実行するのを忘れないでください。</br>

```blocks
player.onChat("run", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
    }
})

``` 
```package
rubyblock=github:yutari-club/rubyblock#master
```