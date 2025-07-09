### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


<!-- # Surroundings  -->
# 周辺(しゅうへん)環境(かんきょう)

## Step 1
エージェントの下(した)のブロックが**石(いし)**である間(あいだ)、エージェントは行動(こうどう)を続(つづ)けます。<br>

もしエージェントの前(まえ)にブロックがない場合(ばあい)はエージェントは**前進(ぜんしん)**し、ブロックがある場合(ばあい)は**左折(させつ)**する必要(ひつよう)がある。

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
    player.say("")
})
```
