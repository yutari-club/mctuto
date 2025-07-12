# つながる壁(かべ): JavaScript

## ステップ 1

``||player:チャットコマンド||``コマンドのコードを書(か)いて、**"position"**と名前(なまえ)をつけましょう。

```javascript
player.onChat("position", function () {
    
})
```

## ステップ 2
変数(へんすう)**PlayerPosition**を作(つく)って、``||positions: world||``位置(いち)に設定(せってい)しましょう。

```javascript
let PlayerPosition: Position = null 
player.onChat("position", function () { 
    PlayerPosition = player.position() 
}) 
```

## ステップ 3
``||player:チャットコマンド||``コマンドの中(なか)で、変数(へんすう)**from_position**を作(つく)って、**PlayerPosition**に(6,0,0)を加(くわ)えた値(ね)と等(ひと)しく設定(せってい)しましょう。
	
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
``||player:チャットコマンド||``コマンドの中(なか)で、変数(へんすう)**to_position**を作(つく)って、変数(へんすう)**PlayerPosition**に(-6,13,0)を加(くわ)えた値(ね)と等(ひと)しく設定(せってい)しましょう。

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
別(べつ)の``||player:チャットコマンド||``コマンドのコードを書(か)いて、**"wall"**と名前(なまえ)をつけましょう。

```javascript
player.onChat("wall", function () { 
 
}) 
```

## ステップ 6
**wall**の``||player:チャットコマンド||``コマンドの中(なか)で、``||blocks:fill and replace||``のコードを書(か)いて、**from_position**変数(へんすう)から**to_position**変数(へんすう)まで**glass**に設定(せってい)しましょう。

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
``||blocks: on block broken||``を使(つか)って、**glass**ブロックが壊(こわ)されたときに、**from_position**変数(へんすう)から**to_position**変数(へんすう)の範囲(はんい)内(ない)で``||positions: random position||``に**diamond**ブロックを``||blocks:place||``するイベントのコードを書(か)きましょう。

```javascript
blocks.onBlockBroken(GLASS, function () {
    blocks.place(DIAMOND_BLOCK, randpos(
    from_position,
    to_position
    ))
})
```

## ステップ 8
``||blocks: on block broken||``を使(つか)って、**diamond**ブロックが壊(こわ)されたときに、**from_position**変数(へんすう)から**to_position**変数(へんすう)の範囲(はんい)内(ない)で``||positions: random position||``に**orange wool**ブロックを``||blocks:place||``するイベントのコードを書(か)きましょう。

```javascript
blocks.onBlockBroken(DIAMOND_BLOCK, function () {
    blocks.place(ORANGE_WOOL, randpos(
    from_position,
    to_position
    ))
})
```

## ステップ 9
**Play**ボタンを押(お)してMinecraftに入(はい)り、すべてのイベントをテストします。**position**から始(はじ)めて、次(つぎ)に**wall**を使(つか)います。**glassブロック**を壊(こわ)して何(なに)が起(お)こるかを見(み)てみましょう。

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