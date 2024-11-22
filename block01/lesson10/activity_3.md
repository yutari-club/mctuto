### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 周囲の環境
<!-- # Surroundings  -->

## Step 1
氷で覆われていない**ブロックダウン**を検査しながら、以下のブロックを見つけ、**破壊**し、**収集**するようにエージェントをプログラムする： **鉄**、金**、エメラルド**、ダイヤモンド**。
<!-- While **inspecting the block down** that is **not packed ice**, program the Agent to locate, **destroy** and **collect** the following blocks: **iron**, **gold**, **emerald** and **diamond**.  -->



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
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```
