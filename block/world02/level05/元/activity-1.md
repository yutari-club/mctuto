### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 惑星(わくせい)訪問(ほうもん)
<!-- # Planet visit -->

## Step 1

３つのコードがあります。<br>

地形(ちけい)とコードから正(ただ)しい処理(しょり)のコードを選択(せんたく)してみよう！<br>

試行(しこう)回数(かいすう)は1回(かい)だけなので、注意(ちゅうい)してみよう！<br>

<!-- Select the right code to run! You have only one attempt, so be careful! -->



```template
player.onChat("1", function () {
    for (let index = 0; index < 28; index++) {
        if (agent.detect(AgentDetection.Block, FORWARD) || (agent.detect(AgentDetection.Block, LEFT) || agent.detect(AgentDetection.Block, RIGHT))) {
            agent.destroy(FORWARD)
            agent.destroy(LEFT)
            agent.destroy(RIGHT)
            agent.collectAll()
        }
        agent.move(FORWARD, 1)
    }
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 8; index++) {
        if (agent.detect(AgentDetection.Block, FORWARD) || (agent.detect(AgentDetection.Block, LEFT) || agent.detect(AgentDetection.Block, RIGHT))) {
            agent.destroy(FORWARD)
            agent.destroy(LEFT)
            agent.destroy(RIGHT)
            agent.collectAll()
        }
        agent.move(FORWARD, 1)
    }
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 24; index++) {
        if (agent.detect(AgentDetection.Block, FORWARD) || (agent.detect(AgentDetection.Block, LEFT) || agent.detect(AgentDetection.Block, RIGHT))) {
            agent.destroy(FORWARD)
            agent.destroy(LEFT)
            agent.destroy(RIGHT)
            agent.collectAll()
        }
        agent.move(FORWARD, 1)
    }
})
player.onChat("2", function () {
    for (let index = 0; index < 10; index++) {
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 4; index++) {
                agent.move(FORWARD, 1)
                agent.setItem(PLANKS_OAK, 1, 1)
                agent.place(DOWN)
            }
            agent.turn(RIGHT_TURN)
        }
        agent.move(UP, 1)
    }
})
player.onChat("3", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_ORE) {
        if (agent.detect(AgentDetection.Block, FORWARD)) {
            agent.destroy(FORWARD)
        }
        if (agent.inspect(AgentInspection.Block, DOWN) == GOLD_ORE) {
            agent.turn(RIGHT_TURN)
        }
        if (agent.inspect(AgentInspection.Block, DOWN) == IRON_ORE) {
            agent.turn(LEFT_TURN)
        }
        agent.move(FORWARD, 1)
    }
    player.say("鉱床(こうしょう)発見(はっけん)！")
})
```
```ghost
player.onChat("1", function () {
    for (let index = 0; index < 28; index++) {
        if (agent.detect(AgentDetection.Block, FORWARD) || (agent.detect(AgentDetection.Block, LEFT) || agent.detect(AgentDetection.Block, RIGHT))) {
            agent.destroy(FORWARD)
            agent.destroy(LEFT)
            agent.destroy(RIGHT)
            agent.collectAll()
        }
        agent.move(FORWARD, 1)
    }
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 8; index++) {
        if (agent.detect(AgentDetection.Block, FORWARD) || (agent.detect(AgentDetection.Block, LEFT) || agent.detect(AgentDetection.Block, RIGHT))) {
            agent.destroy(FORWARD)
            agent.destroy(LEFT)
            agent.destroy(RIGHT)
            agent.collectAll()
        }
        agent.move(FORWARD, 1)
    }
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 24; index++) {
        if (agent.detect(AgentDetection.Block, FORWARD) || (agent.detect(AgentDetection.Block, LEFT) || agent.detect(AgentDetection.Block, RIGHT))) {
            agent.destroy(FORWARD)
            agent.destroy(LEFT)
            agent.destroy(RIGHT)
            agent.collectAll()
        }
        agent.move(FORWARD, 1)
    }
})
player.onChat("2", function () {
    for (let index = 0; index < 10; index++) {
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 4; index++) {
                agent.move(FORWARD, 1)
                agent.setItem(PLANKS_OAK, 1, 1)
                agent.place(DOWN)
            }
            agent.turn(RIGHT_TURN)
        }
        agent.move(UP, 1)
    }
})
player.onChat("3", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_ORE) {
        if (agent.detect(AgentDetection.Block, FORWARD)) {
            agent.destroy(FORWARD)
        }
        if (agent.inspect(AgentInspection.Block, DOWN) == GOLD_ORE) {
            agent.turn(RIGHT_TURN)
        }
        if (agent.inspect(AgentInspection.Block, DOWN) == IRON_ORE) {
            agent.turn(LEFT_TURN)
        }
        agent.move(FORWARD, 1)
    }
    player.say("鉱床(こうしょう)発見(はっけん)！")
})
```

