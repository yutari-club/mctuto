# コウモリの洞窟: ブロック

## ステップ 1
既存の ``||player:チャットコマンド||``の名前を **cave** に変更します。

```blocks
player.onChat("cave", function () {
})
```

## ステップ 2

``||player:player say||`` コマンドを取って、**"Dig a cave"** と入力して、``||player:チャットコマンド||``にドラッグしましょう。

```blocks
player.onChat("cave", function () {
    player.say("Dig a cave")
})
```

## ステップ 3

``||gameplay:time set||`` ブロックを取って、**day** に設定して、``||player:チャットコマンド||`` **cave** コマンドの ``||player:say||`` コマンドの下にドラッグしましょう。

```blocks
player.onChat("cave", function () {
    player.say("Dig a cave")
    gameplay.timeSet(gameplay.time(DAY))
})
```

## ステップ 4

``||blocks:fill with||`` ブロックを取って、**air** ブロックを選択して、位置を **from -1.0,-1** から **to 1,2,1** に設定しましょう。**replace** に設定しましょう。

```blocks
player.onChat("cave", function () {
    player.say("Dig a cave")
    gameplay.timeSet(gameplay.time(DAY))
    blocks.fill(
    AIR,
    pos(-1, 0, -1),
    pos(1, 2, 1),
    FillOperation.Replace
    )
})
```

## ステップ 5

``||loops:くりかえし○○回||`` ループを取って、**50** 回に設定しましょう。``||blocks:fill with||`` **air** ブロックをループの中にドラッグして、次に ``||loops:くりかえし○○回||`` ループ全体を ``||player:チャットコマンド||`` **cave** コマンドの ``||gameplay:time set||`` **day** コマンドの下にドラッグしましょう。

```blocks
player.onChat("cave", function () {
    player.say("Dig a cave")
    gameplay.timeSet(gameplay.time(DAY))
    for (let index = 0; index < 50; index++) {
        blocks.fill(
        AIR,
        pos(-1, 0, -1),
        pos(1, 2, 1),
        FillOperation.Replace
        )
    }
})
```

## ステップ 6

``||variables:set variable||`` を取って、**bat_cave** という新しい変数を割り当てましょう。``||player:player world position||`` を取って、**bat_cave** 変数にドラッグしましょう。
新しく完成した ``||variables:set variable||`` **bat_cave** を ``||player:チャットコマンド||`` **cave** の ``||loops:くりかえし○○回||`` ループ **50** の下にドラッグしましょう。

```blocks
let batcave: Position = null
player.onChat("cave", function () {
    player.say("Dig a cave")
    gameplay.timeSet(gameplay.time(DAY))
    for (let index = 0; index < 50; index++) {
        blocks.fill(
        AIR,
        pos(-1, 0, -1),
        pos(1, 2, 1),
        FillOperation.Replace
        )
    }
    batcave = player.position()
})
```

## ステップ 7

``||player:say||`` ブロックを取って、"You have 10 seconds to go out before the bats arrive." とコードを書きます。``||player:チャットコマンド||`` **cave** コマンドの **bat_cave** 変数の下にドラッグしましょう。

```blocks
player.say("You have 10 seconds to get out before the bats arrive.")
```

## ステップ 8

``||loops: pause||`` ループを取って、**10** 秒（10,000 ms）に設定しましょう。このループを ``||player:チャットコマンド||``の最後にドラッグしましょう。

```blocks
player.say("You have 10 seconds to get out before the bats arrive.")
    loops.pause(10000)
player.on_chat("cave", on_chat)
```

## ステップ 9

別の ``||player:player say||`` コマンドを取って、プレイヤーが "Watch out for bats!" と言うようにコードを書きます。新しく完成した ``||player:player say||`` を ``||player:チャットコマンド||``の最後にドラッグしましょう。

```blocks
loops.pause(10000)
    player.say("Watch out for bats!")
player.on_chat("cave", on_chat)
```

## ステップ 10

``||gameplay:time set||`` **day**（ステップ3から）を複製して、**dusk** に設定しましょう。``||player:チャットコマンド||``の最後にドラッグしましょう。

```blocks
gameplay.timeSet(gameplay.time(DUSK))
```

## ステップ 11

``||mobs:spawn animal||`` ブロックを取ってワークスペースにドラッグして、**bat** を選択して **bat_cave** 変数を割り当てましょう。

```blocks
mobs.spawn(BAT, batcave)
```

## ステップ 12

次に、**bat** ``||mobs:spawn animal||`` ステップを繰り返しましょう。``||loops:くりかえし○○回||`` ループを取って、**200** 回に設定しましょう。**bat** をループの中にドラッグしましょう。ループ全体を ``||player:チャットコマンド||`` **cave** コマンドの ``||gameplay:time set||`` **dusk** ブロックの下にドラッグしましょう。

```blocks
for (let index = 0; index < 200; index++) {
        mobs.spawn(BAT, batcave)
    }
```

## ステップ 13

Minecraftに入って、チャットに **cave** と入力してすべてのコードが実行されるのを見てみましょう。

```blocks
let batcave: Position = null
player.onChat("cave", function () {
    player.say("Dig a cave")
    gameplay.timeSet(gameplay.time(DAY))
    for (let index = 0; index < 50; index++) {
        blocks.fill(
        AIR,
        pos(-1, 0, -1),
        pos(1, 2, 1),
        FillOperation.Replace
        )
    }
    batcave = player.position()
    player.say("You have 10 seconds to get out before the bats arrive.")
    loops.pause(10000)
    player.say("Watch out for bats!")
    gameplay.timeSet(gameplay.time(DUSK))
    for (let index = 0; index < 200; index++) {
        mobs.spawn(BAT, batcave)
    }
})
```