# 家のForループ: ブロック

## ステップ 1
``||player:on chat||`` コマンドを取って、名前を **teleport** にします。``||agent:エージェントプレイヤーにテレポート||`` を取って、``||player:on chat||`` コマンドの中にドラッグします。

```blocks
player.onChat("tp", function () { 
    agent.teleportToPlayer() 
}) 
```

## ステップ 2
新しい ``||player:on chat||`` コマンドを取って、名前を **walls** にします。

```blocks
player.onChat("walls", function () { 
 
}) 
```

## ステップ 3
``||agent:ブロックまたはアイテム設定||`` コマンドを取って、**walls** の ``||player: on chat||`` コマンドの中にドラッグします。**アカシアの木の板** を選んで、数を **64** 、スロットを **1** に設定します。

```blocks
player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
}) 
```

## ステップ 4
``||loops:繰り返し||`` ループを取って、**3** 回に設定し、**walls** の ``||player:on chat||`` コマンドの中にドラッグします。``||agent:ブロックまたはアイテム設定||`` の下に置きます。``||loops:繰り返し||`` ループの中に ``||agent:エージェント移動||`` を追加して、**上に1歩** に設定します。

```blocks
  player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(UP, 1) 
    } 
}) 
```

## ステップ 5
もう一つの ``||loops:繰り返し||`` ループを取って、**4** 回に設定し、最初の ``||loops:繰り返し||`` ループの中にドラッグします。最初の ``||agent:移動||`` の下に置きます。2番目の ``||loops:繰り返し||`` ループに ``||agent:エージェント右に回転||`` を追加します。

```blocks
player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(UP, 1) 
        for (let index = 0; index < 4; index++) { 
            agent.turn(RIGHT_TURN) 
        } 
    } 
}) 
```

## ステップ 6
3番目の ``||loops:繰り返し||`` ループを取って、2番目の ``||loops:繰り返し||`` ループの中にドラッグし、``||agent: 右に回転||`` の上に置きます。3番目の ``||loops:繰り返し||`` ループを **4** 回繰り返すように設定します。

## ステップ 7
一番内側の ``||loops:繰り返し||`` ループに ``||agent:エージェント置く||`` ブロックを追加して、**下** に設定します。``||agent:エージェント移動||`` ブロックを追加して、**前に1歩** に設定し、一番内側の ``||loops:繰り返し||`` ループの中の ``||agent:置く||`` 下ブロックの下にドラッグします。

```blocks
player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(UP, 1) 
        for (let index = 0; index < 4; index++) { 
            for (let index = 0; index < 4; index++) { 
                agent.place(DOWN) 
                agent.move(FORWARD, 1) 
            } 
            agent.turn(RIGHT_TURN) 
        } 
    } 
}) 
```

## ステップ 8
新しい ``||player:on chat||`` コマンドを取って、名前を **roof** にします。

```blocks
player.onChat("roof", function () { 
 
}) 
```

## ステップ 9
``||agent:ブロックまたはアイテム設定||`` コマンドを取って、**レンガハーフブロック** に設定し、数を **64** 、スロットを **1** に設定して、**roof** の ``||player:on chat||`` コマンドの中にドラッグします。``||agent:エージェント移動||`` ブロックを追加して、**上に1歩** に設定します。

```blocks
player.onChat("roof", function () {
    agent.setItem(BRICKS_SLAB, 64, 1)
    agent.move(UP, 1)
})
```

## ステップ 10
``||loops:繰り返し||`` ループを取って、**roof** の ``||player:on chat||`` コマンドの中にドラッグします。**4** 回繰り返すように設定します。``||agent:エージェント移動||`` ブロックを追加して、**後ろに4歩** に設定します。また、``||agent:エージェント移動||`` ブロックを追加して、**右に1歩** に設定します。

```blocks
player.onChat("roof", function () { 
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
    for (let index = 0; index < 4; index++) { 
        agent.move(BACK, 1) 
        agent.move(RIGHT, 1) 
    } 
}) 
```

## ステップ 11
もう一つの ``||loops:繰り返し||`` ループを取って、**4** 回繰り返すように設定します。``||agent:エージェント下に置く||`` と ``||agent:エージェント移動||`` を追加して、**前に1歩** に設定します。この ``||loops:繰り返し||`` ループを前の繰り返しループの中にドラッグし、``||agent:エージェント移動||`` **後ろに4歩** の上に置きます。

```blocks
player.onChat("roof", function () { 
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
    for (let index = 0; index < 4; index++) { 
        for (let index = 0; index < 4; index++) { 
            agent.place(DOWN) 
            agent.move(FORWARD, 1) 
        } 
        agent.move(BACK, 1) 
        agent.move(RIGHT, 1) 
    } 
}) 
```

## ステップ 12
**Play** ボタンを押して、Minecraftに入って、**walls** と **roof** をテストします。

```blocks
player.onChat("tp", function () { 
    agent.teleportToPlayer() 
}) 
player.onChat("roof", function () { 
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
    for (let index = 0; index < 4; index++) { 
        for (let index = 0; index < 4; index++) { 
            agent.place(DOWN) 
            agent.move(FORWARD, 1) 
        } 
        agent.move(BACK, 1) 
        agent.move(RIGHT, 1) 
    } 
}) 
player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(UP, 1) 
        for (let index = 0; index < 4; index++) { 
            for (let index = 0; index < 4; index++) { 
                agent.place(DOWN) 
                agent.move(FORWARD, 1) 
            } 
            agent.turn(RIGHT_TURN) 
        } 
    } 
}) 
```

