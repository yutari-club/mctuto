### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# 周囲の環境
<!-- # Surroundings  -->

## Step 1
下のブロックが**パックアイス**であることを**検査中**、エージェントは**ブロックを右**に検出した場合**前進**する必要がある。そうでなければ、**右に移動**する必要があります。
<!-- While  **inspecting the block down** that is **packed ice**, **if** the Agent **detects the block right**, it needs to **move forward**. Otherwise it needs to **move right**.  -->



```ghost
player.onChat("1", function () {
    while (agent.inspect(AgentInspection.Block, DOWN) == PACKED_ICE) {
        if (agent.detect(AgentDetection.Block, RIGHT)) {
            agent.move(FORWARD, 1)
        } else {
            agent.move(RIGHT, 1)
        }
    }
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```
