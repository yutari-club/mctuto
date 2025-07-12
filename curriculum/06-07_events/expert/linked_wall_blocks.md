# つながる壁(かべ): ブロック

## ステップ 1
既存(きそん)の``||player:チャットコマンド||``コマンドの名前(なまえ)を**"position"**に変更(へんこう)します。

```blocks
player.onChat("position", function () { 
     
}) 
```

## ステップ 2
``|||variable:new variable||``を作(つく)って、**PlayerPosition**と名前(なまえ)をつけましょう。次(つぎ)に、``||player:player world position||``を変数(へんすう)の設定(せってい)の"**0**"パラメーターにドラッグしましょう。

```blocks
let PlayerPosition: Position = null 
player.onChat("position", function () { 
    PlayerPosition = player.position() 
}) 
```

## ステップ 3
別(べつ)の``|||variable: variable||``を作(つく)って、**from_position**と名前(なまえ)をつけましょう。次(つぎ)に、``||positions:+ (add position)||``ブロックを変数(へんすう)の設定(せってい)の"**0**"引数(ひきすう)にドラッグしましょう。

この``||variable:variable||``を``||player:チャットコマンド||``コマンドの最後(さいご)にドラッグしましょう。**PlayerPosition**の``||variable:variable||``を取(と)って、新(あたら)しい**from_position**変数(へんすう)の上(かみ)の座(ざ)標(しめ)セットにドラッグしましょう。**下(した)の**座標(ざひょう)を（**6**, 0, 0）に設定(せってい)しましょう。

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
別(べつ)の``|||variable: variable||``を作(つく)って、**to_position**と名前(なまえ)をつけましょう。次(つぎ)に、``||positions:+ (add position)||``を変数(へんすう)の設定(せってい)の"**0**"引数(ひきすう)にドラッグしましょう。

この``||variable:variable||``を``||player:チャットコマンド||``コマンドの最後(さいご)にドラッグしましょう。**PlayerPosition**の``||variable:variable||``を取(と)って、新(あたら)しい**to_position**変数(へんすう)の上(かみ)の座(ざ)標(しめ)セットにドラッグしましょう。**下(した)の**座標(ざひょう)を（**-6, 13, 0**）に設定(せってい)しましょう。

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
別(べつ)の``||player:チャットコマンド||``コマンドを取(と)って、**"wall"**と名前(なまえ)をつけましょう。

```blocks
player.onChat("wall", function () { 
 
}) 
```

## ステップ 6
``||blocks:fill with||``ブロックを挿入(そうにゅう)し、**Glass**に設定(せってい)しましょう。**from_position**の``||variable:variable||``を取(と)って、**Glass**の``||blocks:fill||``コマンドの**from**引数(ひきすう)にドラッグしましょう。また、**to_position**の``||variable:variable||``を取(と)って、**Glass**の``||blocks:fill||``コマンドの**to**引数(ひきすう)にドラッグしましょう。

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
``||blocks: on block broken||``コマンドを取(と)って、**Glass**に設定(せってい)しましょう。``||blocks:place||``ブロックを挿入(そうにゅう)し、**Diamond**に設定(せってい)しましょう。``||positions:pick random position||``ブロックを**Diamond**の``||blocks:place||``ブロックの**at**引数(ひきすう)にドラッグしましょう。**from_position**変数(へんすう)を取(と)って、**Diamond**の``||blocks:place||``ブロックの**from**引数(ひきすう)にドラッグしましょう。**to_position**変数(へんすう)を取(と)って、**Diamond**の``||blocks:place||``ブロックの**to**引数(ひきすう)にドラッグしましょう。

```blocks
blocks.onBlockBroken(AIR, function () { 
    blocks.place(DIAMOND_BLOCK, randpos( 
    from_position, 
    to_position 
    )) 
}) 
```

## ステップ 8
``||blocks:on block broken||``ブロック構造(こうぞう)をコピーします。**Glass**を**Diamond**に変更(へんこう)し、**Diamond**の``||blocks:place||``ブロックを**Orange Wool**に変更(へんこう)します。

```blocks
blocks.onBlockBroken(DIAMOND_BLOCK, function () { 
    blocks.place(ORANGE_WOOL, randpos( 
    from_position, 
    to_position 
    )) 
}) 
```

## ステップ 9
**Play**ボタンを押(お)してMinecraftに入(はい)り、すべてのイベントをテストします。**position**から始(はじ)めて、次(つぎ)に**wall**を使(つか)います。**glassブロック**を壊(こわ)して何(なに)が起(お)こるかを見(み)てみましょう。

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