### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# ディープストーン
<!-- # Deep Stone  -->

## Step 1
このコーディングスニペットを修正してみよう。<br>

エージェントの目的：**左**の**金**ブロックにぶつかるまで地表を掘り下げます。<br>

下っていく途中で、エージェントは手前に**石**があるかどうかを検知し、それを回収するよ。<br>


<!-- Fix this coding snippet. Here is the Agent's objective: dig down into the surface until it hits a **gold** block on the **left**. On the way down, the Agent will detect if **stone** is in front of it, and collect it. -->

```template
player.onChat("dig", function () {
    while (agent.inspect(AgentInspection.Block, LEFT) == AIR) {
        agent.destroy(DOWN)
        agent.move(DOWN, 1)
            if (agent.inspect(AgentInspection.Block, FORWARD) != GRASS) {
                player.say("石を発見！")
                agent.destroy(FORWARD)
                agent.collectAll()
        }
    }
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```

