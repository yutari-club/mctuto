### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 鉱物(こうぶつ)(こうぶつ)を収集(しゅうしゅう)
<!-- # Surroundings  -->

## Step 1

**下(した)**が**氷塊(ひょうかい)**ブロックで**ない**ことを検査(けんさ)しながら、**鉄(てつ)**、**金(きん)**、**エメラルド**、**ダイヤモンド**のブロックを見(み)つけ、破壊(はかい)し、回収(かいしゅう)するようにエージェントをプログラムする。<br>

エージェントは、回収(かいしゅう)したあとに**右(みぎ)か**、**左(ひだり)か**を**向(む)く**。<br>

どのような法則(ほうそく)(ほうそく)で向(む)く方向(ほうこう)(ほうこう)を決(きまり)(き)めたら良(りょう)(よ)いかを考(かんがえ)(かんが)えよう。<br>


#### ~ tutorialhint 
- ブロックは、鉱石(こうせき)(こうせき)である**鉄(てつ)**、**金(きん)**と、宝石(ほうせき)(ほうせき)である**エメラルド**、**ダイヤモンド**の**2**種類(しゅるい)に分(ぶん)(わ)けられる。
- **一番(いちばん)遠(えん)(とお)く**にある**鉄(てつ)**を**最後(さいご)**に回収(かいしゅう)することなる。

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
