### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 子(こ)(こ)ぐまを見(み)つけろ！

## ステップ 1 
``||loops:もし〇〇ならくりかえす||``と``||agent:〇〇がエージェントの〇〇にある||``を使(つか)うことで、どこまで続(つづ)くかわからない道(みち)を掘(ほ)ることができるよ。</br>
雪(ゆき)(ゆき)をかき分(ぶん)(わ)けて歩(ある)けるようにするには``||エージェントに〇〇を破壊(はかい)させる||``を使(つか)います。</br>


#### ~ tutorialhint 
```template
player.onChat("cub", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
    	
    }
})
```

```ghost
player.onChat("cub", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
    }
    player.say("")
})

``` 

