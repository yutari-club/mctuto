### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# ローバーを追跡(ついせき)せよ 
<!-- # Track Down the Rover  -->

## Step 1
このコーディングスニペットを修正(しゅうせい)してください。<br>
**前方(ぜんぽう)**に**クオーツ**ブロックを探(さが)していて**見(み)つからなかった**場合(ばあい)、エージェントは**前方(ぜんぽう)**に**移動(いどう)**する必要(ひつよう)がある。<br>
**下(した)**に**金(きん)**ブロックを**発見(はっけん)**したら、**右(みぎ)**に曲(ま)がる必要(ひつよう)があります。<br>
**下(した)**に**鉄(てつ)**ブロックを**発見(はっけん)**したら、**左(ひだり)**に曲(ま)がる必要(ひつよう)がある。<br>
最後(さいご)にエージェントは「ローバーを発見(はっけん)しました!」と言(い)う必要(ひつよう)がある！
<!-- Fix this coding snippet. Here is the objective: while **inspecting forward** for a block of **quartz** and **not** finding it, the Agent needs to **move forward**. If it **detects** a **gold** block **down**, it needs to **turn right**. If it detects a **block of iron down**, it needs to **turn left**. In the end the Agent needs to say, "Found the rover!" -->

```template
player.onChat("rover", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != BLOCK_OF_QUARTZ) {
            if (agent.inspect(AgentInspection.Block, UP) == GOLD_BLOCK) {
            agent.turn(LEFT_TURN)
        }
            if (agent.inspect(AgentInspection.Block, RIGHT) == IRON_BLOCK) {
            agent.turn(RIGHT_TURN)
        }
        agent.move(FORWARD, 1)
    }
    player.say("ローバーを発見(はっけん)しました!")
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```
