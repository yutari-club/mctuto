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
    for (let index = 0; index < 3; index++) {
        agent.move(LEFT, 1)
        if (agent.inspect(AgentInspection.Block, FORWARD) == GOLD_BLOCK) {
            
        }
    }
})
```

```ghost
player.onChat("1", function () {
    for (let index = 0; index < 3; index++) {
        agent.move(LEFT, 1)
        if (agent.inspect(AgentInspection.Block, FORWARD) == GOLD_BLOCK) {
            agent.destroy(FORWARD)
            agent.collectAll()
        }
    }
    player.say("")
})
```

```package
rubyblock=github:yutari-club/rubyblock#master
```

