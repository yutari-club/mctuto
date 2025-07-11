# オセロットの囲い: JavaScript

## ステップ 1
``||player:チャットコマンド||``をコーディングし、**fence** という名前を付けます。

```javascript
player.onChat("fence", function () {
})
```

## ステップ 2

世界位置 **-695, 9, 880** で **West** を向いた ``||builder:builder teleport||`` をコーディングします。

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

長方形の周囲にフェンスを配置するには、ビルダーが **Oak Fence** で構築しながら以前のパスを ``||builder:trace||`` するようにコーディングします。

```javascript
    builder.move(FORWARD, 9)
    builder.tracePath(OAK_FENCE)
})
```

## ステップ 8

作ったばかりのフェンス内に1匹の **ocelot** をランダムに ``||mobs:spawn||`` します。

```javascript
    builder.tracePath(OAK_FENCE)
    mobs.spawn(OCELOT, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
})
```

## ステップ 9

作ったばかりのフェンス内に別の **ocelot** をランダムに ``||mobs:spawn||`` します。

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

作ったばかりのフェンス内に2匹のオオカミをランダムに ``||mobs:spawn||`` します。

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

Minecraftに戻り、コードをテストしてみましょう。

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