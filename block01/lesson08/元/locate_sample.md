### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# サンプルを探す！
<!-- # Locate the Sample!  -->

## Step 1
エージェントがブロックの**下**を**検査**し、**青氷**を**発見しない間**は、エージェントに**破壊**と**下への移動**を行わせるプログラムをします。<br>
エージェントが**青氷**を見つけたら、**破壊**してサンプルを**回収**する必要があります。 <br>
見つけるのは『**青氷**』！氷ではないことに気を付けよう。
<!-- **While** the Agent **inspects the block down** and does **not** find **blue ice**, program the Agent to **destroy** and **move down**. When the Agent locates the **blue ice**, it needs to **destroy down** and **collect** the sample.  -->

```template
player.onChat("ice", function () {
})
```

```ghost 
player.onChat("ice", function () {
    while (agent.inspect(AgentInspection.Block, DOWN) != ICE) {
        agent.destroy(DOWN)
        agent.move(DOWN, 1)
    }
    player.say("")
    agent.destroy(DOWN)
    agent.collectAll()
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```
