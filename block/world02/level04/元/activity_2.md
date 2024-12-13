### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 周囲の環境
<!-- # Surroundings  -->

## Step 1
**下**が**氷塊**ブロックで**ない**ことを検査しながら、もしエージェントが**右**にブロックを**検出**したら、**前進**する必要がある。
そうでなければ**右**に**移動**する必要がある。
同じループの中で、もしエージントが**下**のブロックを**検査**し、それが**丸石**か**砂利**であれば、**下**に**破壊**し、すべてを**収集**する必要があります。
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
    player.say("")
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```