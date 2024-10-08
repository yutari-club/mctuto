### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Hazing 

## ステップ1
エージェントはオオカミが入ってこないように**トリップワイヤー**を設定する必要がある。</br>
``||agent:agentセットブロック||``を**トリップワイヤー**にセットし、カウントを**64**にセットする。</br>
``||loops:while||`ブロックを使い、その中に条件を入れる。 </br>

#### ~ tutorialhint
条件には**not**を使うことを忘れずに。

```blocks
player.onChat("hazing", function () {
    agent.setItem(TRIPWIRE, 64, 1)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
    	
    }
})

``` 
```ghost
player.onChat("hazing", function () {
    agent.setItem(TRIPWIRE, 64, 1)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```