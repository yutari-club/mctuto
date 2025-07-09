### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true
### @explicitHints 1


# 協働(きょうどう)(きょうどう)活動(かつどう)(かつどう)
<!-- # Collaborative activity -->

## Step 1
宇宙(うちゅう)空間(くうかん)で作業(さぎょう)するために必要(ひつよう)なブロックを選択(せんたく)するよ。<br>

レッスンで使用(しよう)(しよう)したすべてのブロックが用意(ようい)(ようい)されています！<br>

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

