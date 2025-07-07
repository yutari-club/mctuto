### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# サンプルを探(さが)す！
<!-- # Locate the Sample!  -->

## Step 1
エージェントがブロックの**下(した)**を**検査(けんさ)**し、**青(あお)氷(こおり)**を**発見(はっけん)しない間(あいだ)**は、エージェントに**破壊(はかい)**と**下(した)への移動(いどう)**を行(おこな)わせるプログラムをするよ。<br>

エージェントが**青(あお)氷(こおり)**を見(み)つけたら**破壊(はかい)**してサンプルを**回収(かいしゅう)**する必要(ひつよう)があります。 <br>

見(み)つけるのは『**青(あお)氷(こおり)**』！氷(こおり)ではないことに気(き)を付(つ)けよう。
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
