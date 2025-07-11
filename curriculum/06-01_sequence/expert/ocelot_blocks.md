# オセロットの囲い: ブロック

## ステップ 1
``||player:チャットコマンド||``を作って、**fence** という名前を付けます。

```blocks
player.onChat("fence", function () {
})
```

## ステップ 2

ツールボックスの **advanced** セクションに移動し、``||builder: builder||`` を見つけます。``||builder:teleport||`` を取って、``||player:チャットコマンド||`` **fence** コマンドにドラッグしましょう。``||positions: world coordinates||`` を取って、座標を **-695, 9, 880** に設定しましょう。``||builder:face||`` コマンドを追加し、**West (negative X)** に設定してから、``||player:チャットコマンド||`` **fence** コマンドの ``||builder:teleport||`` ブロックの下にドラッグしましょう。

```blocks
player.onChat("1", function () {
    builder.teleportTo(positions.createWorld(-695, 9, 880)))
    builder.face(WEST)
})
```

## ステップ 3

``||builder:move||`` を取って、**forward by 21** に設定しましょう。``||player:チャットコマンド||`` **fence** コマンドの ``||builder:face||`` **West** の下にドラッグしましょう。

```blocks
    builder.face(WEST)
    builder.move(FORWARD, 21)

})
```

## ステップ 4

``||builder:turn||`` を追加し、**turn right** に設定します。``||player:チャットコマンド||`` **fence** コマンドの ``||builder:move||`` forward の下にドラッグしましょう。

```blocks
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    
})
```

## ステップ 5

別の ``||builder:move||`` ブロックを取って、**forward by 9** に設定しましょう。``||player:チャットコマンド||`` **fence** の ``||builder:turn||`` **right** ブロックの下にドラッグしましょう。別の ``||builder:turn||`` コマンドを追加し、**right** に設定します。

``||builder: turn||`` を ``||player:チャットコマンド||`` **fence** コマンドの ``||builder:move||`` **forward** コマンドの下にドラッグしましょう。

```blocks
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.turn(RIGHT_TURN)
    })
```

## ステップ 6

別の ``||builder:builder move||`` コマンドを追加し、**forward by 21** に設定しましょう。``||builder:builder turn||`` ブロックを追加し、**turn right** に設定しましょう。別の ``||builder:builder move||`` ブロックを取って、**forward by 9** に設定しましょう。これらの両方を ``||player:チャットコマンド||`` **fence** コマンドの最後の ``||builder:builder turn||`` **right** の下にドラッグしましょう。

```blocks
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
})
```

## ステップ 7

長方形の周りにフェンスを置くには、``||builder:builder trace path from mark with||`` ブロックを追加し、**Oak Fence** に設定しましょう。``||player:チャットコマンド||`` **fence** コマンドの最後の ``||builder:move||`` **forward** の下にドラッグしましょう。

```blocks
    builder.move(FORWARD, 9)
    builder.tracePath(OAK_FENCE)
})
```

## ステップ 8

フェンスを完成させた後、``||mobs:spawn animal||`` を取って、**ocelot** を選択しましょう。``||math:pick random position||`` を追加し、フェンスの中のこれらの座標に設定しましょう：**(-20, 4, -58)** から **(-37, 4, -50)** まで、次にそれを ``||mobs:spawn animal||`` **ocelot** の位置に挿入しましょう。**ocelot** を ``||player:チャットコマンド||`` **fence** コマンドの ``||builder:builder trace path from mark||`` **Oak Fence** の下にドラッグしましょう。

```blocks
    builder.tracePath(OAK_FENCE)
    mobs.spawn(OCELOT, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
})
```

## ステップ 9

フェンスの中に2番目のオセロットを生成するには、``||mobs:spawn animal||`` **ocelot** 全体を複製しましょう。``||player:チャットコマンド||`` **fence** コマンドの既存の **ocelot** の下にドラッグしましょう。

```blocks
    mobs.spawn(OCELOT, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
    mobs.spawn(OCELOT, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
})
```

## ステップ 10

**ocelot** 全体を複製し、動物を **wolf** に変更しましょう。**wolf** を複製して、さらに2匹のオオカミをフェンスの中に生成しましょう。両方のオオカミを ``||player:チャットコマンド||`` **fence** コマンドの最後の **ocelot** の下にドラッグしましょう。

```blocks
    mobs.spawn(OCELOT, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
    mobs.spawn(WOLF, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
    mobs.spawn(WOLF, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
})
```

## ステップ 11

Minecraftに戻り、コードをテストしてみましょう。

```blocks
player.onChat("fence", function () {
    builder.teleportTo(positions.createWorld(-695, 9, 880))
    builder.face(WEST)
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.tracePath(OAK_FENCE)
    mobs.spawn(OCELOT, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
    mobs.spawn(OCELOT, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
    mobs.spawn(WOLF, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
    mobs.spawn(WOLF, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
})
```