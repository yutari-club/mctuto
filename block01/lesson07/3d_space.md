### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 3d Space

## Step 1
この課題を解くには、エージェントが**金**ブロックに到達し、それを回収するようにプログラムする必要があります。エージェントはまず地上レベルでそれを行い、次に**3レベル上**に移動し、前の手順を繰り返す必要があります。 
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