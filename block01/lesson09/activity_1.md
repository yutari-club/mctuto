### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 石を探す
<!-- # Locating stone  -->

## Step 1
このコーディングスニペットを修正してください。エージェントに必要なことは以下の通りです： **左に**4回**移動**し、**下に破壊**し、**下に移動**する。もしエージェントが前方に**石**ブロックを検出したら、「石を見つけた！」と言い、**前方に破壊**し、**すべて**回収する必要があります。石が**検出されなかった場合、エージェントは「ここに石はありません！」と言う必要があります。下に移動するたびに、エージェントは**1ブロック上に**移動する必要があります。この活動を**4**回繰り返す必要がある．
<!-- Fix this coding snippet. Here is what the Agent needs to do: **move** to the **left 4 times**, **destroy down**, **move down**. If the Agent detects a **stone** block forward, it needs to say "Found the stone!", **destroy forward** and **collect all**. If the stone is **not detected**, the Agent needs to say, "No stone here!". Each time after moving down, the Agent needs to **move 1 block up** to the surface. This activity needs to repeat **4** times. -->





```template
player.onChat("stone", function () {
    for (let index = 0; index < 3; index++) {
        agent.move(RIGHT, 4)
        agent.destroy(DOWN)
        agent.move(DOWN, 1)
        if (agent.inspect(AgentInspection.Block, FORWARD) != STONE) {
            player.say("Found the stone!")
            agent.destroy(FORWARD)
            agent.collectAll()
        } else {
            player.say("No stone here!")
        }
        agent.move(UP, 1)
    }
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```