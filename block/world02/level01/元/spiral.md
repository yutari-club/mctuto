### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


<!-- # Spiral -->
# 渦巻(うずま)き

## Step 1
エージェントの**前(まえ)のブロック**が**金(きん)ブロック**では**ない**場合(ばあい)、エージェントは金(きん)ブロックを探(さが)すための行動(こうどう)を続(つづ)けます。<br>

エージェントの**前(まえ)**に**ブロックがない**場合(ばあい)は**前進(ぜんしん)**し、ブロックがある場合(ばあい)は**左折(させつ)**するよ。<br>

エージェントが**金(きん)ブロック**に到達(とうたつ)したら、**破壊(はかい)**し、**回収(かいしゅう)**するよ。<br>


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
    player.say("")
})
```
