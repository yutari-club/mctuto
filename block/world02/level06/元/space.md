### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true
### @explicitHints 1


# 協働活動
<!-- # Collaborative activity -->

## Step 1
宇宙空間で作業するために必要なブロックを選択するよ。<br>

レッスンで使用したすべてのブロックが用意されています！<br>

<!-- Select the blocks you need to work in space. You will find all the blocks we have used throughout the lessons for you to use! -->

```template
{}
```

```ghost
player.onChat("run", function () {
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
    	
    }
    agent.place(FORWARD)
    agent.destroy(FORWARD)
    agent.setItem(GRASS, 1, 1)
    for (let index = 0; index < 4; index++) {
    	
    }
    while (agent.inspect(AgentInspection.Block, DOWN) != PACKED_ICE) {
        if (agent.inspect(AgentInspection.Block, DOWN) == IRON_ORE || agent.inspect(AgentInspection.Block, DOWN) == GOLD_ORE) {
            agent.turn(LEFT_TURN)
            agent.destroy(DOWN)
            agent.collectAll()
        }
        if (agent.inspect(AgentInspection.Block, DOWN) == DIAMOND_ORE || agent.inspect(AgentInspection.Block, DOWN) == EMERALD_ORE) {
            agent.turn(RIGHT_TURN)
            agent.destroy(DOWN)
            agent.collectAll()
        }
        agent.move(FORWARD, 1)
    }
     player.say("")
})
``` 
```package
rubyblock=github:yutari-club/rubyblock#master
```

