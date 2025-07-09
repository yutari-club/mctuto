### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


<!-- # Reach magma -->
# 溶岩(ようがん)に到達(とうたつ)する

## Step 1
エージェントがステーションから出(で)るように、はじめに**１ブロック前進(ぜんしん)**させてしてね。<br>

エージェントが**下(した)**のブロックを**検査(けんさ)**し、それが**溶岩(ようがん)**でない間(あいだ)、エージェントは**下(した)に移動(いどう)**する必要(ひつよう)があります。
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
