### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# ディープストーン
<!-- # Deep Stone  -->

## Step 1
このコーディングスニペットを修正(しゅうせい)してください。<br>
エージェントの目的(もくてき)：**左(ひだり)**の**金(きん)**ブロックにぶつかるまで地表(ちひょう)を掘(ほ)り下(さ)げます。<br>
下(くだ)っていく途中(とちゅう)で、エージェントは手前(てまえ)に**石(いし)**があるかどうかを検知(けんち)し、それを回収(かいしゅう)します。<br>

<!-- Fix this coding snippet. Here is the Agent's objective: dig down into the surface until it hits a **gold** block on the **left**. On the way down, the Agent will detect if **stone** is in front of it, and collect it. -->

```template
player.onChat("dig", function () {
    while (agent.inspect(AgentInspection.Block, LEFT) == AIR) {
        agent.destroy(DOWN)
        agent.move(DOWN, 1)
            if (agent.inspect(AgentInspection.Block, FORWARD) != GRASS) {
                player.say("石(いし)を発見(はっけん)！")
                agent.destroy(FORWARD)
                agent.collectAll()
        }
    }
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```
