### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# ローバーを修理(しゅうり)する
<!-- # Repair the Rover  -->

## Step 1
このコーディングスニペットを修正(しゅうせい)してみよう。<br>

目的(もくてき)：**空気(くうき)**ブロックを**検査(けんさ)し**、それを**見(み)つけない**間(あいだ)は、エージェントは**右(みぎ)に移動(いどう)**する必要(ひつよう)がある。<br>

もしエージェントが正面(しょうめん)に**ラピスラズリ**ブロックを見(み)つけたら**右(みぎ)に移動(いどう)**し、**左(ひだり)に曲(ま)がり**、それから**右(みぎ)に移動(いどう)**する必要(ひつよう)がある。<br>

その後(あと)、エージェントは「破損(はそん)箇所(かしょ)を発見(はっけん)！」と言(い)い、**レッドストーン**ブロックを**前方(ぜんぽう)**に**置(お)く**必要(ひつよう)がある。

<!-- Fix this coding snippet. Here is the objective: while **inspecting** for a block of **air** and **not** finding it, the Agent needs to **move right**. If the Agent finds the block of **lapis lazuli** **in front**, it needs to **move right**, **turn left**, then **move right**. After that the Agent needs to say, "Found the break!" and **place a block of redstone forward**. -->



```template
player.onChat("repair", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) == AIR) {
        agent.move(RIGHT, 1)
        if (agent.inspect(AgentInspection.Block, FORWARD) == LAPIS_LAZULI_BLOCK) {
            agent.move(RIGHT, 1)
            agent.turn(RIGHT_TURN)
            agent.move(LEFT, 1)
        }
    }
    player.say("破損(はそん)箇所(かしょ)を発見(はっけん)！")
    agent.setItem(GRASS, 1, 1)
    agent.place(FORWARD)
})
```
