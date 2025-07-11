# 橋を建設: ブロック

## ステップ 1
``||player:チャットコマンド||``を取得し、**"build"** という名前を付けます。

```template
{}
```

```blocks
player.onChat("build", function () {
})
```

## ステップ 2
``||agent:スロットに設定させる||`` を取得し、**オークの板材**、数量 **64**、スロット **1** に設定します。新しく完成した ``||agent:スロットに設定させる||`` を ``||player:チャットコマンド||``の内側にドラッグします。

```template
{}
```

```blocks
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
})
```

## ステップ 3
``||agent:移動させる||`` ブロックを取得し、**前** に **1** ブロック移動するように設定し、``||agent:スロットに設定させる||`` ブロックの後の ``||player:チャットコマンド||``にドラッグします。

```template
{}
```

```blocks
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
})
```

## ステップ 4

``||loops:もし〇〇ならくりかえす||``を取得し、``||agent:移動させる||``ブロックの後の ``||player:チャットコマンド||``内にドラッグします。``||logic:ではない||`` ブロックを取得し、``||loops:もし〇〇ならくりかえす||``の **偽** の部分にドラッグします。``||agent:〇〇がある[見つける]||`` ブロックを取得し、**ブロック** と **下** に設定します。完成した ``||agent:〇〇がある[見つける]||`` ブロックを **ではない** の括弧内にドラッグします。

```template
{}
```

```blocks
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
    	
    }
})
```

## ステップ 5

``||agent:置かせる||`` ブロックを取得し、**下** に設定して ``||loops:もし〇〇ならくりかえす||``の内側にドラッグします。

```template
{}
```

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

既存の ``||agent:前に1ブロック移動させる||``を右クリックして複製します。新しい ``||agent:前に1ブロック移動させる||``を ``||agent:下へ置かせる||``ブロックの下の ``||loops:もし〇〇ならくりかえす||``内にドラッグします。

```template
{}
```

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

```template
{}
```

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