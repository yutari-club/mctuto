### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# サンプルを探す！
<!-- # Locate the Sample!  -->

## Step 1
**エージェントが**ブロックダウン**を検査し、**ブルーアイス**を**見つけない間**、エージェントに**破壊**と**移動ダウン**をプログラムします。エージェントが**青い氷**を見つけたら、**下に**破壊**し、**サンプルを**回収**する必要があります。
<!-- **While** the Agent **inspects the block down** and does **not** find **blue ice**, program the Agent to **destroy** and **move down**. When the Agent locates the **blue ice**, it needs to **destroy down** and **collect** the sample.  -->

```ghost 
player.onChat("ice", function () {
    while (agent.inspect(AgentInspection.Block, DOWN) != ICE) {
        agent.destroy(DOWN)
        agent.move(DOWN, 1)
    }
    agent.destroy(DOWN)
    agent.collectAll()
    
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```
