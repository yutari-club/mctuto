### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 石を探す
<!-- # Locating stone  -->

## Step 1
このコーディングスニペットを修正してください。<br>
エージェントに必要なことは以下の通り：**左**に**4**回移動し、**下**を**破壊**し、**下**に**1**ブロック**移動**する。<br>
エージェントが**前方**に**石**の**ブロック**を発見したら、「石を発見！」と言い、**前方**を**破壊**し、すべてを**回収**する必要があります。<br>
石が見つからない場合、エージェントは「ここに石はありません！」と言う必要があります。<br>
下に移動した後、エージェントは**1**ブロック**上**に移動する必要があります。<br>
このアクティビティを**4**回繰り返す必要があります。

<!-- Fix this coding snippet. Here is what the Agent needs to do: **move** to the **left 4 times**, **destroy down**, **move down**. If the Agent detects a **stone** block forward, it needs to say "Found the stone!", **destroy forward** and **collect all**. If the stone is **not detected**, the Agent needs to say, "No stone here!". Each time after moving down, the Agent needs to **move 1 block up** to the surface. This activity needs to repeat **4** times. -->

```template
player.onChat("stone", function () {
    for (let index = 0; index < 3; index++) {
        agent.move(RIGHT, 4)
        agent.destroy(DOWN)
        agent.move(DOWN, 1)
        if (agent.inspect(AgentInspection.Block, FORWARD) != STONE) {
            player.say("石を発見！")
            agent.destroy(FORWARD)
            agent.collectAll()
        } else {
            player.say("ここに石はありません！")
        }
        agent.move(UP, 1)
    }
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```