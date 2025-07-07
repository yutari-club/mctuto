### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 周囲(しゅうい)の環境(かんきょう)
<!-- # Surroundings  -->

## Step 1
**下(した)**が**氷塊(ひょうかい)**ブロックで**ない**ことを検査(けんさ)しながら、もしエージェントが**右(みぎ)**にブロックを**検出(けんしゅつ)**したら、**前進(ぜんしん)**する必要(ひつよう)がある。
そうでなければ**右(みぎ)**に**移動(いどう)**する必要(ひつよう)がある。
同(おな)じループの中(なか)で、もしエージントが**下(した)**のブロックを**検査(けんさ)**し、それが**丸石(まるいし)**か**砂利(じゃり)**であれば、**下(した)**に**破壊(はかい)**し、すべてを**収集(しゅうしゅう)**する必要(ひつよう)があります。
<!-- While **inspecting the block down** that is **not** **packed ice**, if the Agent **detects the block right**, then it needs to **move forward**. Otherwise it needs to **move right**. Within the same loop, if the Agent **inspects the block down** and it is either **cobblestone** **or** **gravel**, then it needs to **destroy down** and **collect all**.  -->



```template
player.onChat("ice", function () {
    while (0 == 0) {
        if (true) {
        	
        } else {
        	
        }
        if (agent.inspect(AgentInspection.Block, DOWN) == COBBLESTONE ||agent.inspect(AgentInspection.Block, DOWN) == GRAVEL ) {
        	
        }
    }
})
```
```ghost
player.onChat("2", function () {
    while (agent.inspect(AgentInspection.Block, DOWN) != PACKED_ICE) {
        if (agent.detect(AgentDetection.Block, RIGHT)) {
            agent.move(FORWARD, 1)
        } else {
            agent.move(RIGHT, 1)
        }
        if (agent.inspect(AgentInspection.Block, DOWN) == COBBLESTONE || agent.inspect(AgentInspection.Block, DOWN) == GRAVEL) {
            agent.destroy(DOWN)
            agent.collectAll()
        }
    }
    player.say("")
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```