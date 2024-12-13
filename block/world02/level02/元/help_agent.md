### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 鉄
<!-- # Iron -->

## Step 1
エージェントが**下のブロックを検査**し、このブロックが**鉄鉱石ない間**は、**前進**する必要がある。<br>
 もしエージェントが**前方にブロックを発見**したら、そのブロックを**破壊**する必要がある。<br>
 エージェントが鉄鉱石を発見したら、それを**収集**するようにプログラムする。<br>
 ブロックを回収するためには、まずそれを破壊する必要があることに注意してください。

エージェントは**下のブロックを検査**し、このブロックが**鉄鉱石**でない間は、**前方に移動**する必要がある。<br>
もしエージェントが**前方にブロックを発見**したら、**前方に破壊**する必要があります。<br>
エージェントが鉄を見つけたら、それを**収集**するようにプログラムしてください。<br>
ブロックを回収するためには、エージェントはまずそれを破壊する必要があることに注意してください。
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
```package
rubyblock=github:yutari-club/rubyblock#master
```