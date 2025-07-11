# オセロットの囲い: Python

## ステップ 1
``||player:チャットコマンド||``のコードを書いて、**fence** という名前を付けます。

```python
def on_chat():
    pass
player.on_chat("fence", on_chat)
```

## ステップ 2

世界位置 **-695, 9, 880** で **West** を向いた ``||builder:builder teleport||`` のコードを書きましょう。

```python
def on_chat():
    builder.teleport_to(world(-695, 9, 880))
    builder.face(WEST)
player.on_chat("1", on_chat)
```

## ステップ 3

ビルダーを **forward by 21** で ``||builder:Move||`` します。

```python
    builder.face(WEST)
    builder.move(FORWARD, 21)
player.on_chat("1", on_chat)
```

## ステップ 4

ビルダーを **right** に ``||builder:Turn||`` します。

```python
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
player.on_chat("1", on_chat)
```

## ステップ 5

ビルダーを **forward by 9** で ``||builder:Move||`` し、**right** に ``||builder:turn||`` します。

```python
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.turn(RIGHT_TURN)
player.on_chat("1", on_chat)
```

## ステップ 6

ビルダーを **forward by 21** で ``||builder:Move||``、**right** に ``||builder:turn||``、そして **forward by 9** で ``||builder:move||`` します。

```python
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
player.on_chat("1", on_chat)
```

## ステップ 7

長方形の周りにフェンスを置くには、ビルダーが **Oak Fence** で構築しながら以前のパスを ``||builder:trace||`` するコードを書きましょう。

```python
    builder.move(FORWARD, 9)
    builder.tracePath(OAK_FENCE)
})
```

## ステップ 8

作ったばかりのフェンスの中に1匹の **ocelot** をランダムに ``||mobs:spawn||`` しましょう。

```python
    builder.trace_path(OAK_FENCE)
    mobs.spawn(OCELOT, randpos(world(-698, 9, 870), world(-715, 9, 880)))
player.on_chat("1", on_chat)
```

## ステップ 9

作ったばかりのフェンスの中に別の **ocelot** をランダムに ``||mobs:spawn||`` しましょう。

```python
    mobs.spawn(OCELOT, randpos(world(-698, 9, 870), world(-715, 9, 880)))
    mobs.spawn(OCELOT, randpos(world(-698, 9, 870), world(-715, 9, 880)))
player.on_chat("1", on_chat)
```

## ステップ 10

作ったばかりのフェンスの中に2匹のオオカミをランダムに ``||mobs:spawn||`` しましょう。

```python
    mobs.spawn(OCELOT, randpos(world(-20, 4, -58), world(-37, 4, -50)))
    mobs.spawn(WOLF, randpos(world(-20, 4, -58), world(-37, 4, -50)))
    mobs.spawn(WOLF, randpos(world(-20, 4, -58), world(-37, 4, -50)))
player.on_chat("1", on_chat)
```

## ステップ 11

Minecraftに戻り、コードをテストしてみましょう。

```python
def on_chat():
    builder.teleport_to(world(-695, 9, 880))
    builder.face(WEST)
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.trace_path(OAK_FENCE)
    mobs.spawn(OCELOT, randpos(world(-698, 9, 870), world(-715, 9, 880)))
    mobs.spawn(OCELOT, randpos(world(-698, 9, 870), world(-715, 9, 880)))
    mobs.spawn(WOLF, randpos(world(-698, 9, 870), world(-715, 9, 880)))
    mobs.spawn(WOLF, randpos(world(-698, 9, 870), world(-715, 9, 880)))
player.on_chat("fence", on_chat)
```