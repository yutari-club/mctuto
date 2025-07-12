# コウモリの洞窟(どうくつ): ブロック

## ステップ 1
既存(きそん)の ``||player:チャットコマンド||``の名前(なまえ)を **cave** に変更(へんこう)します。

```blocks
player.onChat("cave", function () {
})
```

## ステップ 2

``||player:player say||`` コマンドを取(と)って、**"Dig a cave"** と入力(にゅうりょく)して、``||player:チャットコマンド||``にドラッグしましょう。

```blocks
player.onChat("cave", function () {
    player.say("Dig a cave")
})
```

## ステップ 3

``||gameplay:time set||`` ブロックを取(と)って、**day** に設定(せってい)して、``||player:チャットコマンド||`` **cave** コマンドの ``||player:say||`` コマンドの下(した)にドラッグしましょう。

```blocks
player.onChat("cave", function () {
    player.say("Dig a cave")
    gameplay.timeSet(gameplay.time(DAY))
})
```

## ステップ 4

``||blocks:fill with||`` ブロックを取(と)って、**air** ブロックを選択(せんたく)して、位置(いち)を **from -1.0,-1** から **to 1,2,1** に設定(せってい)しましょう。**replace** に設定(せってい)しましょう。

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

``||loops:くりかえし○○回(かい)||`` ループを取(と)って、**50** 回(かい)に設定(せってい)しましょう。``||blocks:fill with||`` **air** ブロックをループの中(なか)にドラッグして、次(つぎ)に ``||loops:くりかえし○○回(かい)||`` ループ全体(ぜんたい)を ``||player:チャットコマンド||`` **cave** コマンドの ``||gameplay:time set||`` **day** コマンドの下(した)にドラッグしましょう。

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

``||variables:set variable||`` を取(と)って、**bat_cave** という新(あたら)しい変数(へんすう)を割(わ)り当(あ)てましょう。``||player:player world position||`` を取(と)って、**bat_cave** 変数(へんすう)にドラッグしましょう。
新(あたら)しく完成(かんせい)した ``||variables:set variable||`` **bat_cave** を ``||player:チャットコマンド||`` **cave** の ``||loops:くりかえし○○回(かい)||`` ループ **50** の下(した)にドラッグしましょう。

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

``||player:say||`` ブロックを取(と)って、"You have 10 seconds to go out before the bats arrive." とコードを書(か)きます。``||player:チャットコマンド||`` **cave** コマンドの **bat_cave** 変数(へんすう)の下(した)にドラッグしましょう。

```blocks
player.say("You have 10 seconds to get out before the bats arrive.")
```

## ステップ 8

``||loops: pause||`` ループを取(と)って、**10** 秒(びょう)（10,000 ms）に設定(せってい)しましょう。このループを ``||player:チャットコマンド||``の最後(さいご)にドラッグしましょう。

```blocks
player.say("You have 10 seconds to get out before the bats arrive.")
    loops.pause(10000)
player.on_chat("cave", on_chat)
```

## ステップ 9

別(べつ)の ``||player:player say||`` コマンドを取(と)って、プレイヤーが "Watch out for bats!" と言(い)うようにコードを書(か)きます。新(あたら)しく完成(かんせい)した ``||player:player say||`` を ``||player:チャットコマンド||``の最後(さいご)にドラッグしましょう。

```blocks
loops.pause(10000)
    player.say("Watch out for bats!")
player.on_chat("cave", on_chat)
```

## ステップ 10

``||gameplay:time set||`` **day**（ステップ3から）を複製(ふくせい)して、**dusk** に設定(せってい)しましょう。``||player:チャットコマンド||``の最後(さいご)にドラッグしましょう。

```blocks
gameplay.timeSet(gameplay.time(DUSK))
```

## ステップ 11

``||mobs:spawn animal||`` ブロックを取(と)ってワークスペースにドラッグして、**bat** を選択(せんたく)して **bat_cave** 変数(へんすう)を割(わ)り当(あ)てましょう。

```blocks
mobs.spawn(BAT, batcave)
```

## ステップ 12

次(つぎ)に、**bat** ``||mobs:spawn animal||`` ステップを繰(く)り返(かえ)しましょう。``||loops:くりかえし○○回(かい)||`` ループを取(と)って、**200** 回(かい)に設定(せってい)しましょう。**bat** をループの中(なか)にドラッグしましょう。ループ全体(ぜんたい)を ``||player:チャットコマンド||`` **cave** コマンドの ``||gameplay:time set||`` **dusk** ブロックの下(した)にドラッグしましょう。

```blocks
for (let index = 0; index < 200; index++) {
        mobs.spawn(BAT, batcave)
    }
```

## ステップ 13

Minecraftに入(はい)って、チャットに **cave** と入力(にゅうりょく)してすべてのコードが実行(じっこう)されるのを見(み)てみましょう。

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