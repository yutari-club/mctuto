### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 3D 空間(くうかん)

## Step 1
エージェントに**金(きん)**ブロックを**破壊(はかい)**し、**回収(かいしゅう)**する命令(めいれい)をする必要(ひつよう)がある。<br>
ただし、**3**ブロック上(じょう)の迷路(めいろ)にも**金(きん)**ブロックがある。<br>
まず、下(した)の金(きん)ブロックを回収(かいしゅう)したら、**3**ブロック上(じょう)に移動(いどう)して同(おな)じ命令(めいれい)をもう一度(いちど)する必要(ひつよう)がある。<br>
**金(きん)**ブロックを**見(み)つけられない間(あいだ)**は、前進(ぜんしん)か左折(させつ)のどちらかをずっと繰(く)り返(かえ)すよ。

<!-- To solve this challenge, you need to program the Agent to get to the **gold** block and collect it. The Agent needs to do it first on the ground level and then **move 3 levels up** and repeat the previous procedure.   -->



```template
player.onChat("3D", function () {
    for (let index = 0; index < 2; index++) {
        
})
``` 
```ghost
player.onChat("3D", function () {
    for (let index = 0; index < 2; index++) {
        while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
            if (!(agent.detect(AgentDetection.Block, FORWARD))) {
                agent.move(FORWARD, 1)
            } else {
                agent.turn(LEFT_TURN)
            }
        }
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.move(UP, 3)
    }
    player.say("")
})
```
