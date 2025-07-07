### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 石(いし)を探(さが)す
<!-- # Locating stone  -->

## Step 1
このコーディングスニペットを修正(しゅうせい)してみよう。<br>

エージェントに必要(ひつよう)なことは以下(いか)の通(とお)り：**左(ひだり)**に**4**回(かい)移動(いどう)し、**下(した)**を**破壊(はかい)**し、**下(した)**に**1**ブロック**移動(いどう)**する。<br>

エージェントが**前方(ぜんぽう)**に**石(いし)**の**ブロック**を発見(はっけん)したら、「石(いし)を発見(はっけん)！」と言(い)い、**前方(ぜんぽう)**を**破壊(はかい)**し、すべてを**回収(かいしゅう)**する必要(ひつよう)があります。<br>

石(いし)が見(み)つからない場合(ばあい)、エージェントは「ここに石(いし)はありません！」と言(い)う必要(ひつよう)があります。<br>

下(した)に移動(いどう)した後(あと)、エージェントは**1**ブロック**上(うえ)**に移動(いどう)する必要(ひつよう)があります。<br>

このアクティビティを**4**回(かい)繰(く)り返(かえ)す必要(ひつよう)があります。

<!-- Fix this coding snippet. Here is what the Agent needs to do: **move** to the **left 4 times**, **destroy down**, **move down**. If the Agent detects a **stone** block forward, it needs to say "Found the stone!", **destroy forward** and **collect all**. If the stone is **not detected**, the Agent needs to say, "No stone here!". Each time after moving down, the Agent needs to **move 1 block up** to the surface. This activity needs to repeat **4** times. -->

```template
player.onChat("stone", function () {
    for (let index = 0; index < 3; index++) {
        agent.move(RIGHT, 4)
        agent.destroy(DOWN)
        agent.move(DOWN, 1)
        if (agent.inspect(AgentInspection.Block, FORWARD) != STONE) {
            player.say("石(いし)を発見(はっけん)！")
            agent.destroy(FORWARD)
            agent.collectAll()
        } else {
            player.say("ここに石(いし)はありません！")
        }
        agent.move(UP, 1)
    }
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```