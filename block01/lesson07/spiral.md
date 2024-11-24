### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


<!-- # Spiral -->
# 渦巻き

## Step 1
エージェントの**前のブロック**が**金ブロック**では**ない**場合、エージェントは金ブロックを探すための行動します。<br>
エージェントの**前**に**ブロックがない**場合は**前進**し、ブロックがある場合は**左折**します。<br>
エージェントが**金ブロック**に到達したら、**破壊**し、**回収**します。<br>

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