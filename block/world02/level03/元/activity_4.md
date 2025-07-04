### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# ローバーを修理する
<!-- # Repair the Rover  -->

## Step 1
このコーディングスニペットを修正してみよう。<br>

目的：**空気**ブロックを**検査し**、それを**見つけない**間は、エージェントは**右に移動**する必要がある。<br>

もしエージェントが正面に**ラピスラズリ**ブロックを見つけたら、**右に移動**し、**左に曲がり**、それから**右に移動**する必要がある。<br>

その後、エージェントは「破損箇所を発見！」と言い、**レッドストーン**ブロックを**前方**に**置く**必要がある。

<!-- Fix this coding snippet. Here is the objective: while **inspecting** for a block of **air** and **not** finding it, the Agent needs to **move right**. If the Agent finds the block of **lapis lazuli** **in front**, it needs to **move right**, **turn left**, then **move right**. After that the Agent needs to say, "Found the break!" and **place a block of redstone forward**. -->



```template
player.onChat("repair", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) == AIR) {
        agent.move(RIGHT, 1)
        if (agent.inspect(AgentInspection.Block, FORWARD) == LAPIS_LAZULI_BLOCK) {
            agent.move(RIGHT, 1)
            agent.turn(RIGHT_TURN)
            agent.move(LEFT, 1)
        }
    }
    player.say("破損箇所を発見！")
    agent.setItem(GRASS, 1, 1)
    agent.place(FORWARD)
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```