### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 子(こ)ぐまを見つけろ！

## ステップ 1 
``||loops:もし⬣ならくりかえす||``と``||agent:■がエージェントの⬬にある||``を使うことで、どこまで続くかわからない道を掘ることができるよ。</br>
雪(ゆき)をかき分(わ)けて歩けるようにするには``||エージェントに⬬を破壊させる||``を使います。</br>


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
