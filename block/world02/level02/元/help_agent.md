### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 鉄(てつ)
<!-- # Iron -->

## Step 1
エージェントが**下(した)のブロックを検査(けんさ)**し、このブロックが**鉄鉱石(てっこうせき)ない間(あいだ)**は、**前進(ぜんしん)**する必要(ひつよう)がある。<br>

 もしエージェントが**前方(ぜんぽう)にブロックを発見(はっけん)**したら、そのブロックを**破壊(はかい)**する必要(ひつよう)がある。<br>

 エージェントが鉄鉱石(てっこうせき)を発見(はっけん)したら、それを**収集(しゅうしゅう)**するようにプログラムする。<br>

 ブロックを回収(かいしゅう)するためには、まずそれを破壊(はかい)する必要(ひつよう)があることに注意(ちゅうい)してみよう。

エージェントは**下(した)のブロックを検査(けんさ)**し、このブロックが**鉄鉱石(てっこうせき)**でない間(あいだ)は、**前方(ぜんぽう)に移動(いどう)**する必要(ひつよう)がある。<br>

もしエージェントが**前方(ぜんぽう)にブロックを発見(はっけん)**したら、**前方(ぜんぽう)に破壊(はかい)**する必要(ひつよう)があります。<br>

エージェントが鉄(てつ)を見(み)つけたら、それを**収集(しゅうしゅう)**するようにプログラムしてみよう。<br>

ブロックを回収(かいしゅう)するためには、エージェントはまずそれを破壊(はかい)する必要(ひつよう)があることに注意(ちゅうい)してみよう。
<!-- While the Agent **inspects the block down** and this block is not **iron ore**, it needs to **move forward**. If the Agent **detects a block forward**, then it needs to **destroy forward**. When the Agent locates iron, program it to **collect** it. Note that in order to collect a block, Agent needs to destroy it first.  -->

```template
player.onChat("iron", function () {
})
```

```ghost
player.onChat("4", function () {
    while (agent.inspect(AgentInspection.Block, DOWN) != IRON_ORE) {
        if (agent.detect(AgentDetection.Block, FORWARD)) {
            agent.destroy(FORWARD)
        }
        agent.move(FORWARD, 1)
    }
    player.say("Found the iron ore!")
    agent.destroy(DOWN)
    agent.collectAll()
    player.say("")
})
```
