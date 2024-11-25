### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


<!-- # Reach magma -->
# マグマに到達する

## Step 1
エージェントに**前進**するようにプログラムしてください。<br>
エージェントがブロック**下**を**検査**し、それが**マグマ**でない間、エージェントは**下に移動**する必要があります。
<!-- Program the Agent to **move forward**. While the Agent **inspects** block **down** and it is **not magma**, the Agent needs to **move down**.  -->


```ghost
player.onChat("magma", function () {
    agent.move(FORWARD, 1)
    while (agent.inspect(AgentInspection.Block, DOWN) != MAGMA_BLOCK) {
        agent.move(DOWN, 1)
    }
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```
