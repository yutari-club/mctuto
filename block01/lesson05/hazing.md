### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 撃退(げきたい)装置 (そうち)

## ステップ1
オオカミが入(は)ってこないように**トリップワイヤー**を設置(せっち)しましょう。</br>
``||agent:スロットに設定(せってい)||``で**トリップワイヤー**を**64**本(ほん)セットします。</br>
``||loops:while||``を使(つか)い、条件(じょうけん)を設定(せってい)してください。</br>

#### ~ tutorialhint
条件(じょうけん)には**not**を使(つか)うことを忘(わす)れずに

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