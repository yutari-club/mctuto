### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# ディープストーン
<!-- # Deep Stone  -->

## Step 1
このコーディングを修正してください。これがエージェントの目的です：**左**にある**金**ブロックにぶつかるまで地表を掘り下げます。降りていく途中、エージェントは**石**が手前にあるかどうかを検知し、それを回収します。
<!-- Fix this coding snippet. Here is the Agent's objective: dig down into the surface until it hits a **gold** block on the **left**. On the way down, the Agent will detect if **stone** is in front of it, and collect it. -->

```template
player.onChat("dig", function () {
    while (agent.inspect(AgentInspection.Block, LEFT) == AIR) {
        agent.destroy(DOWN)
        agent.move(DOWN, 1)
            if (agent.inspect(AgentInspection.Block, FORWARD) != GRASS) {
                player.say("Found the stone!")
                agent.destroy(FORWARD)
                agent.collectAll()
        }
    }
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```

