# コウモリの洞窟: JavaScript

## ステップ 1
``||player:チャットコマンド||``を追加し、**cave** という名前を付けます。

```javascript
player.onChat("cave", function () {
})
```

## ステップ 2

プレイヤーが **"Dig a cave"** と入力して ``||player:say||`` するようにコードを書いて、``||player:チャットコマンド||``にドラッグしましょう。

```javascript
player.onChat("cave", function () {
    player.say("Dig a cave")
})
```

## ステップ 3

時刻を **day** に設定しましょう。

```javascript
player.onChat("cave", function () {
    player.say("Dig a cave")
    gameplay.timeSet(gameplay.time(DAY))
})
```

## ステップ 4

プレイヤーが **air** ブロックで ``||blocks:fill with||`` するようにコードを書きます。位置は **from = -1.0,-1** から **to = 1,2,1** です。**replace** に設定しましょう。

```javascript
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

fill ステップを **50** 回繰り返しましょう。

```javascript
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

``||variables:new variable||`` を設定して、**bat_cave** という名前を付けて、その変数を ``||player:player world position||`` に設定しましょう。

```javascript
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

プレイヤーが "You have 10 seconds to go out before the bats arrive." と ``||player:say||`` するようにコードを書きます。

```javascript
player.say("You have 10 seconds to get out before the bats arrive.")
```

## ステップ 8

コードを **10** 秒（10,000 ms）間 ``||loops: Pause||`` しましょう。

```javascript
player.say("You have 10 seconds to get out before the bats arrive.")
    loops.pause(10000)
player.on_chat("cave", on_chat)
```

## ステップ 9

一時停止の後、プレイヤーが "Watch out for bats!" と言うようにコードを書きます。

```spy
loops.pause(10000)
    player.say("Watch out for bats!")
player.on_chat("cave", on_chat)
```

## ステップ 10

時刻を **dusk** に設定しましょう。

```javascript
gameplay.timeSet(gameplay.time(DUSK))
```

## ステップ 11

**bat_cave** 変数の位置でbatを ``||mobs:Spawn||`` しましょう。

```javascript
mobs.spawn(BAT, batcave)
```

## ステップ 12

**bat** ``||mobs:spawn animal||`` を **200** 回繰り返しましょう。

```javascript
for (let index = 0; index < 200; index++) {
        mobs.spawn(BAT, batcave)
    }
```

## ステップ 13

Minecraftに入って、チャットに **cave** と入力してすべてのコードが実行されるのを見てみましょう。


```javascript
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