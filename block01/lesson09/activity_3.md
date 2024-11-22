### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# ローバーを追跡せよ 
<!-- # Track Down the Rover  -->

## Step 1
このコーディングスニペットを修正してください。ここに目的がある: **石英**のブロックを**前方**に検査していて**見つからなかった場合、エージェントは**前方**に移動する必要がある。もし**金**のブロックを**下**に**検出**したら、**右に**旋回**する必要があります。もし下に**鉄のブロックを**検出したら、**左に**ターンする必要がある。最後にエージェントは 「ローバーを発見！」と言う必要がある。
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
    player.say("Found the rover!")
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```
