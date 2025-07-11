### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 撃退(げきたい)(げきたい)装置(そうち) (そうち)

## ステップ1
オオカミが入(いり)(は)ってこないように**トリップワイヤー**を設置(せっち)(せっち)しよう。</br>
``||agent:スロットに設定(せってい)(せってい)||``で**トリップワイヤー**を**64**本(ほん)(ほん)セットするよ。</br>
``||loops:もし〇〇ならくりかえす||``を使(つか)い、条件(じょうけん)(じょうけん)を設定(せってい)(せってい)してみよう。</br>

#### ~ tutorialhint
条件(じょうけん)(じょうけん)には**not**を使(つか)うことを忘(のろ)(わす)れずに

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
    player.say("")
})
```
