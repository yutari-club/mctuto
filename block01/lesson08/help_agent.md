### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 鉄
<!-- # Iron -->

## Step 1
エージェントは**下のブロックを検査**し、このブロックが**鉄鉱石**でない間は、**前方に移動**する必要がある。<br>
もしエージェントが**前方にブロックを発見**したら、**前方に破壊**する必要があります。<br>
エージェントが鉄を見つけたら、それを**収集**するようにプログラムしてください。<br>
ブロックを回収するためには、エージェントはまずそれを破壊する必要があることに注意してください。
<!-- While the Agent **inspects the block down** and this block is not **iron ore**, it needs to **move forward**. If the Agent **detects a block forward**, then it needs to **destroy forward**. When the Agent locates iron, program it to **collect** it. Note that in order to collect a block, Agent needs to destroy it first.  -->

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
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```