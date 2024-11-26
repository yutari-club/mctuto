### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# ローバーを追跡せよ 
<!-- # Track Down the Rover  -->

## Step 1
このコーディングスニペットを修正してください。<br>
**前方**に**クオーツ**のブロックを探していて**見つからなかった**場合、エージェントは**前方**に**移動**する必要がある。<br>
**下**に**金**のブロックを**発見**したら、**右**に曲がる必要があります。<br>
**下**に**鉄**の塊を発見したら、**左**に曲がる必要がある。<br>
最後にエージェントは「ローバーを発見しました!」と言う必要がある！
<!-- Fix this coding snippet. Here is the objective: while **inspecting forward** for a block of **quartz** and **not** finding it, the Agent needs to **move forward**. If it **detects** a **gold** block **down**, it needs to **turn right**. If it detects a **block of iron down**, it needs to **turn left**. In the end the Agent needs to say, "Found the rover!" -->

```template
player.onChat("rover", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != BLOCK_OF_QUARTZ) {
            if (agent.inspect(AgentInspection.Block, UP) == GOLD_BLOCK) {
            agent.turn(LEFT_TURN)
        }
            if (agent.inspect(AgentInspection.Block, RIGHT) == IRON_BLOCK) {
            agent.turn(RIGHT_TURN)
        }
        agent.move(FORWARD, 1)
    }
    player.say("ローバーを発見しました!")
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```
