### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


<!-- # Reach magma -->
# 溶岩に到達する

## Step 1
エージェントがステーションから出るように、はじめに**１ブロック前進**させてください。<br>
エージェントが**下**のブロックを**検査**し、それが**溶岩**でない間、エージェントは**下に移動**する必要があります。
<!-- Program the Agent to **move forward**. While the Agent **inspects** block **down** and it is **not magma**, the Agent needs to **move down**.  -->

```template
player.onChat("magma", function () {
})
```

```ghost
player.onChat("magma", function () {
    agent.move(FORWARD, 1)
    while (agent.inspect(AgentInspection.Block, DOWN) != MAGMA_BLOCK) {
        agent.move(DOWN, 1)
    }
    player.say("")
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```
