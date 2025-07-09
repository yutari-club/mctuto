### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# 周囲(しゅうい)の環境(かんきょう)
<!-- # Surroundings  -->

## Step 1
**下(した)**のブロックが**氷塊(ひょうかい)**であることを**検査(けんさ)している間(あいだ)**、エージェントが**ブロック**を**右(みぎ)**に検出(けんしゅつ)した場合(ばあい)は**前進(ぜんしん)**する必要(ひつよう)がある。
そうでなければ**右(みぎ)**に**移動(いどう)**する必要(ひつよう)がある。
<!-- While  **inspecting the block down** that is **packed ice**, **if** the Agent **detects the block right**, it needs to **move forward**. Otherwise it needs to **move right**.  -->

```template
{}
```

```ghost
player.onChat("1", function () {
    while (agent.inspect(AgentInspection.Block, DOWN) == PACKED_ICE) {
        if (agent.detect(AgentDetection.Block, RIGHT)) {
            agent.move(FORWARD, 1)
        } else {
            agent.move(RIGHT, 1)
        }
    }
    player.say("")
})
```
