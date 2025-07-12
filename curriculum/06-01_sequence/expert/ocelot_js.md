# オセロットの囲(かこ)い: JavaScript

## ステップ 1
``||player:チャットコマンド||``のコードを書(か)いて、**fence** という名前(なまえ)を付(つ)けます。

```javascript
player.onChat("fence", function () {
})
```

## ステップ 2

世界(せかい)位置(いち) **-695, 9, 880** で **West** を向(む)いた ``||builder:builder teleport||`` のコードを書(か)きましょう。

```javascript
player.onChat("1", function () {
    builder.teleportTo(positions.createWorld(-18, 4, -50))
    builder.face(WEST)
})
```

## ステップ 3

ビルダーを **forward by 21** で ``||builder:Move||`` します。

```javascript
    builder.face(WEST) 
    builder.move(FORWARD, 21) 
}) 
```

## ステップ 4

ビルダーを **right** に ``||builder:Turn||`` します。

```javascript
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    
})
```

## ステップ 5

ビルダーを **forward by 9** で ``||builder:Move||`` し、**right** に ``||builder:turn||`` します。

```javascript
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.turn(RIGHT_TURN)
    })
```

## ステップ 6

ビルダーを **forward by 21** で ``||builder:Move||``、**right** に ``||builder:turn||``、そして **forward by 9** で ``||builder:move||`` します。

```javascript
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
})
```

## ステップ 7

長方形(ちょうほうけい)の周(まわ)りにフェンスを置(お)くには、ビルダーが **Oak Fence** で構築(こうちく)しながら以前(いぜん)のパスを ``||builder:trace||`` するコードを書(か)きましょう。

```javascript
    builder.move(FORWARD, 9)
    builder.tracePath(OAK_FENCE)
})
```

## ステップ 8

作(つく)ったばかりのフェンスの中(なか)に1匹(ひき)の **ocelot** をランダムに ``||mobs:spawn||`` しましょう。

```javascript
    builder.tracePath(OAK_FENCE)
    mobs.spawn(OCELOT, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
})
```

## ステップ 9

作(つく)ったばかりのフェンスの中(なか)に別(べつ)の **ocelot** をランダムに ``||mobs:spawn||`` しましょう。

```javascript
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

作(つく)ったばかりのフェンスの中(なか)に2匹(ひき)のオオカミをランダムに ``||mobs:spawn||`` しましょう。

```javascript
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

```javascript
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