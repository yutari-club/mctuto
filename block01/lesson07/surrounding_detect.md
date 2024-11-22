### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


<!-- # Surroundings  -->
# 周辺環境

## Step 1
エージェントが**ブロックの下を検査中**で、ブロックが**石**である間、エージェントは**前進**する必要がある。もしエージェントが**前方のブロックを**検知しない**場合、エージェントは**前方に移動**する必要があり、そうでない場合は**左折**する必要がある。
<!-- While the Agent is **inspecting the block down** and the block is **stone**, the Agent needs to **move forward**. If the Agent does **not** detect a block forward, the Agent needs to **move forward**, otherwise it needs to **turn left**.  -->


```template
player.onChat("inspect", function () {
    while (agent.inspect(AgentInspection.Block, DOWN) == STONE) {
        
    }
})
```

```ghost
player.onChat("inspect", function () {
    while (agent.inspect(AgentInspection.Block, DOWN) == STONE) {
        if (!(agent.detect(AgentDetection.Block, FORWARD))) {
            agent.move(FORWARD, 1)
        } else {
            agent.turn(LEFT_TURN)
        }
    }
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```
