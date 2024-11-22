### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


<!-- # Spiral -->
# 渦巻き

## Step 1
エージェントが**前方のブロックを**検査中**で、そのブロックが**金ブロック**でない場合、エージェントは**前進**する必要がある。エージェントが**前方のブロックを**検出していない**場合、エージェントも前方に移動する必要があり、そうでなければ**左折**する必要がある。エージェントが**金のブロック**に到達したら、それを**破壊**し、**回収**する必要がある。
<!-- While the Agent is **inspecting the block forward** and the block is **not** the **gold block**, the Agent needs to **move forward**. If the Agent does **not** detect a block forward, the Agent also needs to move forward, otherwise it needs to **turn left**. When the Agent reaches the **gold block**, it needs to **destroy** and **collect** it.  -->


```ghost
player.onChat("3", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
        if (!(agent.detect(AgentDetection.Block, FORWARD))) {
            agent.move(FORWARD, 1)
        } else {
            agent.turn(LEFT_TURN)
        }
    }
    agent.destroy(FORWARD)
    agent.collectAll()
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```