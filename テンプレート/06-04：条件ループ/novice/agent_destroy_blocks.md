# エージェントによる通路破壊: ブロック


## ステップ 1
``||player:on chat||`` コマンドの名前を **"destroy"** に変更します。

```blocks
player.onChat("destroy", function () {
})
```

## ステップ 2
``||player:on chat||`` コマンドの内側に ``||loops:while||`` ループを追加します。``||agent:detect||`` ブロックを取得して、``||loops:while||`` ループの **true** の部分にドラッグします。``||agent:detect||`` ブロックを **block** と **forward** に設定します。

```blocks
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
    	
    }
})
```

## ステップ 3
``||agent:destroy||`` ブロックを取得し、**forward** に設定して、``||loops:while||`` ループにドラッグします。

```blocks
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
    }
})
```

## ステップ 4

``||agent:move||`` ブロックを取得し、**forward** に **1** ブロック移動するように設定します。``||agent:move||`` ブロックを ``||agent:destroy||`` ブロックの後の ``||loops:while||`` ループにドラッグします。

```blocks
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
    }
})
```

## ステップ 5

``||agent:destroy||`` ブロックを取得し、**up** に設定します。``||agent:destroy||`` ブロックを ``||agent:move||`` の後の ``||loops:while||`` ループにドラッグします。

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

**実行** ボタンを押して、Minecraftに入り、**t** を入力して **destroy** を試してみましょう。

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