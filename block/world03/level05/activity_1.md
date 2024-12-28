### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 種を植える！
<!-- # Plant a Seed! -->

## Step 1
まず、エージェントのインベントリを開き、種を渡します。<br>
次に ``||player: 入力した時||`` コマンドを作成し、``||agent: 前を耕させる||`` and ``||agent: 前へ置かせる||``を追加します。

<!-- First, interact with the Agent to open its inventory and give it the seeds. 
Then create ``||player: on chat||`` command and add ``||agent: till forward||`` and ``||agent: place forward||``.  -->

```ghost
player.onChat("plantSeed", function () {
    agent.till(FORWARD)
    agent.place(FORWARD)
})
player.say("")
```
```package
rubyblock=github:yutari-club/rubyblock#master
```