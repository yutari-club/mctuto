# コウモリの洞窟(どうくつ): JavaScript

## ステップ 1
``||player:チャットコマンド||``を追加(ついか)し、**cave** という名前(なまえ)を付(つ)けます。

```javascript
player.onChat("cave", function () {
})
```

## ステップ 2

プレイヤーが **"Dig a cave"** と入力(にゅうりょく)して ``||player:say||`` するようにコードを書(か)いて、``||player:チャットコマンド||``にドラッグしましょう。

```javascript
player.onChat("cave", function () {
    player.say("Dig a cave")
})
```

## ステップ 3

時刻(じこく)を **day** に設定(せってい)しましょう。

```javascript
player.onChat("cave", function () {
    player.say("Dig a cave")
    gameplay.timeSet(gameplay.time(DAY))
})
```

## ステップ 4

プレイヤーが **air** ブロックで ``||blocks:fill with||`` するようにコードを書(か)きます。位置(いち)は **from = -1.0,-1** から **to = 1,2,1** です。**replace** に設定(せってい)しましょう。

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

fill ステップを **50** 回(かい)繰(く)り返(かえ)しましょう。

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

``||variables:new variable||`` を設定(せってい)して、**bat_cave** という名前(なまえ)を付(つ)けて、その変数(へんすう)を ``||player:player world position||`` に設定(せってい)しましょう。

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

プレイヤーが "You have 10 seconds to go out before the bats arrive." と ``||player:say||`` するようにコードを書(か)きます。

```javascript
player.say("You have 10 seconds to get out before the bats arrive.")
```

## ステップ 8

コードを **10** 秒(びょう)（10,000 ms）間(あいだ) ``||loops: Pause||`` しましょう。

```javascript
player.say("You have 10 seconds to get out before the bats arrive.")
    loops.pause(10000)
player.on_chat("cave", on_chat)
```

## ステップ 9

一時(いちじ)停止(ていし)の後(あと)、プレイヤーが "Watch out for bats!" と言(い)うようにコードを書(か)きます。

```spy
loops.pause(10000)
    player.say("Watch out for bats!")
player.on_chat("cave", on_chat)
```

## ステップ 10

時刻(じこく)を **dusk** に設定(せってい)しましょう。

```javascript
gameplay.timeSet(gameplay.time(DUSK))
```

## ステップ 11

**bat_cave** 変数(へんすう)の位置(いち)でbatを ``||mobs:Spawn||`` しましょう。

```javascript
mobs.spawn(BAT, batcave)
```

## ステップ 12

**bat** ``||mobs:spawn animal||`` を **200** 回(かい)繰(く)り返(かえ)しましょう。

```javascript
for (let index = 0; index < 200; index++) {
        mobs.spawn(BAT, batcave)
    }
```

## ステップ 13

Minecraftに入(はい)って、チャットに **cave** と入力(にゅうりょく)してすべてのコードが実行(じっこう)されるのを見(み)てみましょう。


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