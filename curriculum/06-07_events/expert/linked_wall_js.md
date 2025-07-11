# つながる壁: JavaScript

## ステップ 1

``||player:チャットコマンド||``コマンドのコードを書いて、**"position"**と名前をつけましょう。

```javascript
player.onChat("position", function () {
    
})
```

## ステップ 2
変数**PlayerPosition**を作って、``||positions: world||``位置に設定しましょう。

```javascript
let PlayerPosition: Position = null 
player.onChat("position", function () { 
    PlayerPosition = player.position() 
}) 
```

## ステップ 3
``||player:チャットコマンド||``コマンドの中で、変数**from_position**を作って、**PlayerPosition**に(6,0,0)を加えた値と等しく設定しましょう。
	
```javascript
let PlayerPosition: Position = null 
let from_position: Position = null 
player.onChat("position", function () { 
    PlayerPosition = player.position() 
    from_position = positions.add( 
    player.position(), 
    pos(6, 0, 0) 
    ) 
}) 
```

## ステップ 4
``||player:チャットコマンド||``コマンドの中で、変数**to_position**を作って、変数**PlayerPosition**に(-6,13,0)を加えた値と等しく設定しましょう。

```javascript
let PlayerPosition: Position = null
let from_position: Position = null
let to_position: Position = null
player.onChat("position", function () {
    PlayerPosition = player.position()
    from_position = positions.add(
    PlayerPosition,
    pos(6, 0, 0)
    )
    to_position = positions.add(
    PlayerPosition,
    pos(-6, 13, 0)
    )
})
```

## ステップ 5
別の``||player:チャットコマンド||``コマンドのコードを書いて、**"wall"**と名前をつけましょう。

```javascript
player.onChat("wall", function () { 
 
}) 
```

## ステップ 6
**wall**の``||player:チャットコマンド||``コマンドの中で、``||blocks:fill and replace||``のコードを書いて、**from_position**変数から**to_position**変数まで**glass**に設定しましょう。

```javascript
player.onChat("wall", function () {
    blocks.fill(
    GLASS,
    from_position,
    to_position,
    FillOperation.Replace
    )
})
```

## ステップ 7
``||blocks: on block broken||``を使って、**glass**ブロックが壊されたときに、**from_position**変数から**to_position**変数の範囲内で``||positions: random position||``に**diamond**ブロックを``||blocks:place||``するイベントのコードを書きましょう。

```javascript
blocks.onBlockBroken(GLASS, function () {
    blocks.place(DIAMOND_BLOCK, randpos(
    from_position,
    to_position
    ))
})
```

## ステップ 8
``||blocks: on block broken||``を使って、**diamond**ブロックが壊されたときに、**from_position**変数から**to_position**変数の範囲内で``||positions: random position||``に**orange wool**ブロックを``||blocks:place||``するイベントのコードを書きましょう。

```javascript
blocks.onBlockBroken(DIAMOND_BLOCK, function () {
    blocks.place(ORANGE_WOOL, randpos(
    from_position,
    to_position
    ))
})
```

## ステップ 9
**Play**ボタンを押してMinecraftに入り、すべてのイベントをテストします。**position**から始めて、次に**wall**を使います。**glassブロック**を壊して何が起こるかを見てみましょう。

```javascript
let from_position: Position = null 
let to_position: Position = null 
let PlayerPosition: Position = null 
blocks.onBlockBroken(GLASS, function () { 
    blocks.place(DIAMOND_BLOCK, randpos( 
    from_position, 
    to_position 
    )) 
}) 
player.onChat("wall", function () { 
    blocks.fill( 
    GLASS, 
    from_position, 
    to_position, 
    FillOperation.Replace 
    ) 
}) 
player.onChat("position", function () { 
    PlayerPosition = player.position() 
    from_position = positions.add( 
    PlayerPosition, 
    pos(6, 0, 0) 
    ) 
    to_position = positions.add( 
    PlayerPosition, 
    pos(-6, 13, 0) 
    ) 
}) 
blocks.onBlockBroken(DIAMOND_BLOCK, function () { 
    blocks.place(ORANGE_WOOL, randpos( 
    from_position, 
    to_position 
    )) 
}) 
```