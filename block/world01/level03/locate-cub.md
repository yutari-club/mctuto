### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 子(こ)ぐまを見(み)つけろ！

## Step(ステップ) 1 
``||loops:もし⬣ならくりかえす||``と``||agent:■がエージェントの⬬にある||``を使(つか)うことで、どこまで続(つづ)くかわからない道(みち)を掘(ほ)ることができます。</br>
雪(ゆき)をかき分(わ)けて歩(ある)けるようにするには``||エージェントに⬬を破壊(はかい)させる||``を使(つか)います。</br>


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
```package
rubyblock=github:yutari-club/rubyblock#master
```