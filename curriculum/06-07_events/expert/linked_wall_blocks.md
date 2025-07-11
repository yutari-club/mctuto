# つながる壁: ブロック

## ステップ 1
既存の``||player:チャットコマンド||``コマンドの名前を**"position"**に変更します。

```blocks
player.onChat("position", function () { 
     
}) 
```

## ステップ 2
``|||variable:new variable||``を作って、**PlayerPosition**と名前をつけましょう。次に、``||player:player world position||``を変数の設定の"**0**"パラメーターにドラッグしましょう。

```blocks
let PlayerPosition: Position = null 
player.onChat("position", function () { 
    PlayerPosition = player.position() 
}) 
```

## ステップ 3
別の``|||variable: variable||``を作って、**from_position**と名前をつけましょう。次に、``||positions:+ (add position)||``ブロックを変数の設定の"**0**"引数にドラッグしましょう。

この``||variable:variable||``を``||player:チャットコマンド||``コマンドの最後にドラッグしましょう。**PlayerPosition**の``||variable:variable||``を取って、新しい**from_position**変数の上の座標セットにドラッグしましょう。**下の**座標を（**6**, 0, 0）に設定しましょう。

```blocks
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
別の``|||variable: variable||``を作って、**to_position**と名前をつけましょう。次に、``||positions:+ (add position)||``を変数の設定の"**0**"引数にドラッグしましょう。

この``||variable:variable||``を``||player:チャットコマンド||``コマンドの最後にドラッグしましょう。**PlayerPosition**の``||variable:variable||``を取って、新しい**to_position**変数の上の座標セットにドラッグしましょう。**下の**座標を（**-6, 13, 0**）に設定しましょう。

```blocks
let from_position: Position = null 
let to_position: Position = null 
player.onChat("position", function () { 
    PlayerPosition = player.position() 
    from_position = positions.add( 
    player.position(), 
    pos(6, 0, 0) 
    ) 
    to_position = positions.add( 
    player.position(), 
    pos(6, 13, 0) 
    ) 
}) 
```

## ステップ 5
別の``||player:チャットコマンド||``コマンドを取って、**"wall"**と名前をつけましょう。

```blocks
player.onChat("wall", function () { 
 
}) 
```

## ステップ 6
``||blocks:fill with||``ブロックを挿入し、**Glass**に設定しましょう。**from_position**の``||variable:variable||``を取って、**Glass**の``||blocks:fill||``コマンドの**from**引数にドラッグしましょう。また、**to_position**の``||variable:variable||``を取って、**Glass**の``||blocks:fill||``コマンドの**to**引数にドラッグしましょう。

```blocks
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
``||blocks: on block broken||``コマンドを取って、**Glass**に設定しましょう。``||blocks:place||``ブロックを挿入し、**Diamond**に設定しましょう。``||positions:pick random position||``ブロックを**Diamond**の``||blocks:place||``ブロックの**at**引数にドラッグしましょう。**from_position**変数を取って、**Diamond**の``||blocks:place||``ブロックの**from**引数にドラッグしましょう。**to_position**変数を取って、**Diamond**の``||blocks:place||``ブロックの**to**引数にドラッグしましょう。

```blocks
blocks.onBlockBroken(AIR, function () { 
    blocks.place(DIAMOND_BLOCK, randpos( 
    from_position, 
    to_position 
    )) 
}) 
```

## ステップ 8
``||blocks:on block broken||``ブロック構造をコピーします。**Glass**を**Diamond**に変更し、**Diamond**の``||blocks:place||``ブロックを**Orange Wool**に変更します。

```blocks
blocks.onBlockBroken(DIAMOND_BLOCK, function () { 
    blocks.place(ORANGE_WOOL, randpos( 
    from_position, 
    to_position 
    )) 
}) 
```

## ステップ 9
**Play**ボタンを押してMinecraftに入り、すべてのイベントをテストします。**position**から始めて、次に**wall**を使います。**glassブロック**を壊して何が起こるかを見てみましょう。

```blocks
let from_position: Position = null 
let to_position: Position = null 
let PlayerPosition: Position = null 
blocks.onBlockBroken(AIR, function () { 
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
    player.position(), 
    pos(6, 0, 0) 
    ) 
    to_position = positions.add( 
    player.position(), 
    pos(6, 13, 0) 
    ) 
}) 
blocks.onBlockBroken(DIAMOND_BLOCK, function () { 
    blocks.place(ORANGE_WOOL, randpos( 
    from_position, 
    to_position 
    )) 
}) 
```