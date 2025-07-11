### @hideIteration false

# エージェントによる通路破壊: ブロック

## ステップ 1
``||player:チャットコマンド||``の名前を **"destroy"** に変更します。

```template
{}
```

```blocks
player.onChat("destroy", function () {
})
```

## ステップ 2
``||player:チャットコマンド||``の中に ``||loops:もし〇〇ならくりかえす||``を入れます。``||agent:〇〇がある[見つける]||`` ブロックを取って、``||loops:もし〇〇ならくりかえす||``の **偽** の部分にドラッグします。``||agent:〇〇がある[見つける]||`` ブロックを **ブロック** と **前** に設定します。

```template
{}
```

```blocks
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
    	
    }
})
```

## ステップ 3
``||agent:破壊させる||`` ブロックを取って、**前** に設定して、``||loops:もし〇〇ならくりかえす||``にドラッグします。

```template
{}
```

```blocks
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
    }
})
```

## ステップ 4

``||agent:移動させる||`` ブロックを取って、**前** に **1** ブロック移動するように設定します。``||agent:移動させる||`` ブロックを ``||agent:破壊させる||`` ブロックの後の ``||loops:もし〇〇ならくりかえす||``にドラッグします。

```template
{}
```

```blocks
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
    }
})
```

## ステップ 5

``||agent:破壊させる||`` ブロックを取って、**上** に設定します。``||agent:破壊させる||`` ブロックを ``||agent:移動させる||`` の後の ``||loops:もし〇〇ならくりかえす||``にドラッグします。

```template
{}
```

```blocks
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
    }
})
```

## ステップ 6

**実行** ボタンを押して、Minecraftに入り、**t** を押して **destroy** と入力して試してみましょう。

```template
{}
```

```blocks
player.onChat("destroy", function () { 
    while (agent.detect(AgentDetection.Block, FORWARD)) { 
        agent.destroy(FORWARD) 
        agent.move(FORWARD, 1) 
        agent.destroy(UP) 
    } 
})
```

```ghost
agent.teleportToPlayer()
```