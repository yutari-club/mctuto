### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 最初(さいしょ)の材料(ざいりょう)を探(さが)す
<!-- # Detecting your first material -->


## Step 1
エージェントは**金(きん)**ブロックを**破壊(はかい)**し、**回収(かいしゅう)**する必要(ひつよう)がある。
<!-- The Agent needs to **destroy** and then **collect** the **gold** block.  -->


```template
player.onChat("material", function () {
    while (true) {
        agent.move(LEFT, 1)
    }
    agent.destroy(FORWARD)
    agent.collectAll()
})
```

```ghost
player.onChat("1", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
        agent.move(LEFT, 1)
    }
    agent.destroy(FORWARD)
    agent.collectAll()
    player.say("")
})
```


