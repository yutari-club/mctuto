# オセロットの囲(かこ)い: ブロック

## ステップ 1
``||player:チャットコマンド||``を作(つく)って、**fence** という名前(なまえ)を付(つ)けます。

```blocks
player.onChat("fence", function () {
})
```

## ステップ 2

ツールボックスの **advanced** セクションに移動(いどう)し、``||builder: builder||`` を見(み)つけます。``||builder:teleport||`` を取(と)って、``||player:チャットコマンド||`` **fence** コマンドにドラッグしましょう。``||positions: world coordinates||`` を取(と)って、座標(ざひょう)を **-695, 9, 880** に設定(せってい)しましょう。``||builder:face||`` コマンドを追加(ついか)し、**West (negative X)** に設定(せってい)してから、``||player:チャットコマンド||`` **fence** コマンドの ``||builder:teleport||`` ブロックの下(した)にドラッグしましょう。

```blocks
player.onChat("1", function () {
    builder.teleportTo(positions.createWorld(-695, 9, 880)))
    builder.face(WEST)
})
```

## ステップ 3

``||builder:move||`` を取(と)って、**forward by 21** に設定(せってい)しましょう。``||player:チャットコマンド||`` **fence** コマンドの ``||builder:face||`` **West** の下(した)にドラッグしましょう。

```blocks
    builder.face(WEST)
    builder.move(FORWARD, 21)

})
```

## ステップ 4

``||builder:turn||`` を追加(ついか)し、**turn right** に設定(せってい)します。``||player:チャットコマンド||`` **fence** コマンドの ``||builder:move||`` forward の下(した)にドラッグしましょう。

```blocks
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    
})
```

## ステップ 5

別(べつ)の ``||builder:move||`` ブロックを取(と)って、**forward by 9** に設定(せってい)しましょう。``||player:チャットコマンド||`` **fence** の ``||builder:turn||`` **right** ブロックの下(した)にドラッグしましょう。別(べつ)の ``||builder:turn||`` コマンドを追加(ついか)し、**right** に設定(せってい)します。

``||builder: turn||`` を ``||player:チャットコマンド||`` **fence** コマンドの ``||builder:move||`` **forward** コマンドの下(した)にドラッグしましょう。

```blocks
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.turn(RIGHT_TURN)
    })
```

## ステップ 6

別(べつ)の ``||builder:builder move||`` コマンドを追加(ついか)し、**forward by 21** に設定(せってい)しましょう。``||builder:builder turn||`` ブロックを追加(ついか)し、**turn right** に設定(せってい)しましょう。別(べつ)の ``||builder:builder move||`` ブロックを取(と)って、**forward by 9** に設定(せってい)しましょう。これらの両方(りょうほう)を ``||player:チャットコマンド||`` **fence** コマンドの最後(さいご)の ``||builder:builder turn||`` **right** の下(した)にドラッグしましょう。

```blocks
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
})
```

## ステップ 7

長方形(ちょうほうけい)の周(まわ)りにフェンスを置(お)くには、``||builder:builder trace path from mark with||`` ブロックを追加(ついか)し、**Oak Fence** に設定(せってい)しましょう。``||player:チャットコマンド||`` **fence** コマンドの最後(さいご)の ``||builder:move||`` **forward** の下(した)にドラッグしましょう。

```blocks
    builder.move(FORWARD, 9)
    builder.tracePath(OAK_FENCE)
})
```

## ステップ 8

フェンスを完成(かんせい)させた後(あと)、``||mobs:spawn animal||`` を取(と)って、**ocelot** を選択(せんたく)しましょう。``||math:pick random position||`` を追加(ついか)し、フェンスの中(なか)のこれらの座標(ざひょう)に設定(せってい)しましょう：**(-20, 4, -58)** から **(-37, 4, -50)** まで、次(つぎ)にそれを ``||mobs:spawn animal||`` **ocelot** の位置(いち)に挿入(そうにゅう)しましょう。**ocelot** を ``||player:チャットコマンド||`` **fence** コマンドの ``||builder:builder trace path from mark||`` **Oak Fence** の下(した)にドラッグしましょう。

```blocks
    builder.tracePath(OAK_FENCE)
    mobs.spawn(OCELOT, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
})
```

## ステップ 9

フェンスの中(なか)に2番目(ばんめ)のオセロットを生成(せいせい)するには、``||mobs:spawn animal||`` **ocelot** 全体(ぜんたい)を複製(ふくせい)しましょう。``||player:チャットコマンド||`` **fence** コマンドの既存(きそん)の **ocelot** の下(した)にドラッグしましょう。

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

**ocelot** 全体(ぜんたい)を複製(ふくせい)し、動物(どうぶつ)を **wolf** に変更(へんこう)しましょう。**wolf** を複製(ふくせい)して、さらに2匹(ひき)のオオカミをフェンスの中(なか)に生成(うみな)しましょう。両方(りょうほう)のオオカミを ``||player:チャットコマンド||`` **fence** コマンドの最後(さいご)の **ocelot** の下(した)にドラッグしましょう。

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

Minecraftに戻(もど)り、コードをテストしてみましょう。

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