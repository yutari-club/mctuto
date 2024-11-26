### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 周囲の環境
<!-- # Surroundings  -->

## Step 1

**下**が**氷塊**ブロックで**ない**ことを検査しながら、**鉄**、**金**、**エメラルド**、**ダイヤモンド**のブロックを見つけ、破壊し、回収するようにエージェントをプログラムする。
<!-- While **inspecting the block down** that is **not packed ice**, program the Agent to locate, **destroy** and **collect** the following blocks: **iron**, **gold**, **emerald** and **diamond**.  -->

```template
{}
```

```ghost
player.onChat("3", function () {
    agent.setItem(STONE, 64, 1)
    while (agent.inspect(AgentInspection.Block, DOWN) != PACKED_ICE) {
        if (agent.inspect(AgentInspection.Block, DOWN) == IRON || agent.inspect(AgentInspection.Block, DOWN) == GOLD) {
            agent.turn(LEFT_TURN)
            agent.destroy(DOWN)
            agent.collectAll()
        }
        if (agent.inspect(AgentInspection.Block, DOWN) == DIAMOND || agent.inspect(AgentInspection.Block, DOWN) == EMERALD) {
            agent.turn(RIGHT_TURN)
            agent.destroy(DOWN)
            agent.collectAll()
        }
        agent.move(FORWARD, 1)
    }
    player.say("")
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```
