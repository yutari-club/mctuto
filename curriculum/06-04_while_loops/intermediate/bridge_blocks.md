# 橋を建設: ブロック


## ステップ 1
``||player:チャットコマンド||``を取得し、**"build"** という名前を付けます。

```blocks
player.onChat("build", function () {
})
```

## ステップ 2
``||agent:set block||`` を取得し、**oak wood planks**、数量 **64**、スロット **1** に設定します。新しく完成した ``||agent:set block||`` を ``||player:チャットコマンド||``の内側にドラッグします。

```blocks
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
})
```

## ステップ 3
``||agent:agent move||`` ブロックを取得し、**forward** に **1** ブロック移動するように設定し、``||agent:set||`` ブロックの後の ``||player:チャットコマンド||``にドラッグします。

```blocks
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
})
```

## ステップ 4

``||loops:もし〇〇ならくりかえす||``を取得し、``||agent:agent move||`` **forward** ブロックの後の ``||player:チャットコマンド||``にドラッグします。``||logic:not||`` ブロックを取得し、``||loops:もし〇〇ならくりかえす||``の **true** の部分にドラッグします。``||agent:agent detect||`` ブロックを取得し、**block** と **down** に設定します。完成した ``||agent:agent detect||`` ブロックを **not** の括弧内にドラッグします。

```blocks
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
    	
    }
})
```

## ステップ 5

``||agent:agent place||`` ブロックを取得し、**down** に設定して ``||loops:もし〇〇ならくりかえす||``の内側にドラッグします。

```blocks
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
        agent.place(DOWN)
    }
})
```

## ステップ 6

既存の ``||agent:移動させる||`` **forward by 1** を右クリックして複製します。新しい ``||agent:移動させる||`` **forward by 1** を ``||agent:agent place||`` down ブロックの下の ``||loops:もし〇〇ならくりかえす||``にドラッグします。

```blocks
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
```

## ステップ 7
**実行** ボタンを押して、Minecraftに入り、**t** を入力して **build** を試してみましょう。

```blocks
player.onChat("build", function () { 
    agent.setItem(PLANKS_OAK, 64, 1) 
    agent.move(FORWARD, 1) 
    while (!(agent.detect(AgentDetection.Block, DOWN))) { 
        agent.place(DOWN) 
        agent.move(FORWARD, 1) 
    } 
}) 
```

```ghost
agent.teleportToPlayer()
```