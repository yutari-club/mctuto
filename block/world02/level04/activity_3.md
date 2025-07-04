### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 鉱物(こうぶつ)を収集
<!-- # Surroundings  -->

## Step 1

**下**が**氷塊**ブロックで**ない**ことを検査しながら、**鉄**、**金**、**エメラルド**、**ダイヤモンド**のブロックを見つけ、破壊し、回収するようにエージェントをプログラムする。<br>

エージェントは、回収したあとに**右か**、**左か**を**向く**。<br>

どのような法則(ほうそく)で向く方向(ほうこう)を決(き)めたら良(よ)いかを考(かんが)えよう。<br>


#### ~ tutorialhint 
- ブロックは、鉱石(こうせき)である**鉄**、**金**と、宝石(ほうせき)である**エメラルド**、**ダイヤモンド**の**2**種類に分(わ)けられる。
- **一番遠(とお)く**にある**鉄**を**最後**に回収することなる。

<!-- While **inspecting the block down** that is **not packed ice**, program the Agent to locate, **destroy** and **collect** the following blocks: **iron**, **gold**, **emerald** and **diamond**.  -->

```template
player.onChat("collect", function () {
})
```

```ghost
player.onChat("3", function () {
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
