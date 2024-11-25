### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 3D 空間

## Step 1
エージェントに**金**ブロックを**破壊**し、**回収**する命令をする必要がある。<br>
ただし、**3**ブロック上の迷路にも**金**ブロックがある。<br>
まず、下の金ブロックを回収したら、**3**ブロック上に移動して同じ命令をもう一度する必要がある。<br>
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
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```