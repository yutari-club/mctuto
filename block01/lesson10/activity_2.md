### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 周囲の環境
<!-- # Surroundings  -->

## Step 1
パックド・アイス**ではない**ブロックを下に**検査**している間、もしエージェントがブロックを右に**検出したら、**前進**する必要がある。そうでなければ、**右に移動**する必要がある。同じループの中で、もしエージェントが**下のブロックを**検出して、それが**石畳**か**砂利**であれば、**下のブロックを**破壊**し、**すべて**収集**する必要があります。

<!-- While **inspecting the block down** that is **not** **packed ice**, if the Agent **detects the block right**, then it needs to **move forward**. Otherwise it needs to **move right**. Within the same loop, if the Agent **inspects the block down** and it is either **cobblestone** **or** **gravel**, then it needs to **destroy down** and **collect all**.  -->



```template
player.onChat("ice", function () {
    while (0 == 0) {
        if (true) {
        	
        } else {
        	
        }
        if (agent.inspect(AgentInspection.Block, DOWN) == COBBLESTONE ||agent.inspect(AgentInspection.Block, DOWN) == GRAVEL ) {
        	
        }
    }
})
```
```ghost
player.onChat("2", function () {
    while (agent.inspect(AgentInspection.Block, DOWN) != PACKED_ICE) {
        if (agent.detect(AgentDetection.Block, RIGHT)) {
            agent.move(FORWARD, 1)
        } else {
            agent.move(RIGHT, 1)
        }
        if (agent.inspect(AgentInspection.Block, DOWN) == COBBLESTONE || agent.inspect(AgentInspection.Block, DOWN) == GRAVEL) {
            agent.destroy(DOWN)
            agent.collectAll()
        }
    }
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```