### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 撃退装置 

## ステップ1
オオカミが入ってこないように**トリップワイヤー**を設置しましょう。</br>
``||agent:スロットに設定||``で**トリップワイヤー**を**64**本セットセットします。</br>
``||loops:while||``を使い、条件を設定してください。</br>

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