# 文字(もじ)表示(ひょうじ): ブロック

## ステップ 1
``||player:チャットコマンド||``を作(つく)って、**mix** という名前(なまえ)を付(つ)けて、**starting_world_position** という ``||variables: new variable||`` を含(ふく)めましょう。この ``||variable:variable||`` を ``||player:player world position||`` に設定(せってい)しましょう。

```blocks
player.onChat("mix", function () {
    starting_world_position = player.position()
})
```

## ステップ 2

位置(いち) **(0,0,0)** で **West** を向(む)いて、変数(へんすう) **word1** を ``||blocks:grass||`` ブロックで ``||blocks:print||`` するコードを追加(ついか)しましょう。

```blocks
player.onChat("mix", function () {
    starting_world_position = player.position()
    blocks.print(
    word1,
    GRASS,
    pos(0, 0, 0),
    WEST
    )
})
```

## ステップ 3

``||loops:on start||`` を追加(ついか)して、新(あたら)しい変数(へんすう) **word1** を挿入(そうにゅう)しましょう。この変数(へんすう)を **"rail"** に設定(せってい)しましょう。変数(へんすう) **starting_world_position** を **(0,0,0)** に設定(せってい)しましょう。

```blocks
Let starting_world_position: Position = null
let word1 = ""
word1 = "rail"
```

## ステップ 4

``||player:チャットコマンド||``を作(つく)って、**mix2** という名前(なまえ)を付(つ)けます。別(べつ)の ``||variables: variable||`` を追加(ついか)して、**starting_world_position** に設定(せってい)してから、``||player:player world position||`` に設定(せってい)しましょう。その変数(へんすう)を ``||player:チャットコマンド||`` **mix2** コマンドにドラッグしましょう。``||player:チャットコマンド||``の中(なか)で、``||blocks:print||`` ブロックを追加(ついか)して、位置(いち) **(0,0,0)** で **West** を向(む)いて変数(へんすう) **word1** を **smooth sandstone** で割(わ)り当(あ)てましょう。**word1** を **starting_world_position** 変数(へんすう)の直下(ちょっか)にドラッグしましょう。

```blocks
player.onChat("mix2", function () {
    blocks.print(
    word1,
    SMOOTH_SANDSTONE,
    pos(0, 0, 0),
    WEST
    )
    starting_world_position = player.position()
})
```

## ステップ 5

別(べつ)の ``||blocks:print||`` ブロックを追加(ついか)して、位置(いち) **0,0,0** で **West** を向(む)いて変数(へんすう) **word2** を **purple wool** で割(わ)り当(あ)てましょう。**word2** を **word1** 変数(へんすう)の直下(ちょっか)にドラッグしましょう。

```blocks
player.onChat("mix2", function () {
    blocks.print(
    word1,
    SMOOTH_SANDSTONE,
    pos(0, 0, 0),
    WEST
    )
    blocks.print(
    word2,
    PURPLE_WOOL,
    pos(0, 0, 0),
    WEST
    )
      starting_world_position = player.position()
})
```

## ステップ 6

別(べつ)の ``||variables:variable||`` を追加(ついか)して、**word2** を選択(せんたく)して文字列(もじれつ) "road" を割(わ)り当(あ)てましょう。**word2** 変数(へんすう)を ``||loops:on start||`` コマンドの **word1** 変数(へんすう)の直下(ちょっか)にドラッグしましょう。

```blocks
let starting_world_position: Position = null
let word2 = ""
let word1 = ""
word1 = "rail"
word2 = "road"
```

## ステップ 7

別(べつ)の ``||blocks:print||`` コマンドを追加(ついか)して、``||text:join||`` ブロックを挿入(そうにゅう)して **word1** と **word2** の両方(りょうほう)を割(わ)り当(あ)てましょう。``||blocks:print||`` を位置(いち) **(0,0,0)** で **West** を向(む)いて **lapis lazuli** に設定(せってい)しましょう。完成(かんせい)した ``||blocks:print||`` を ``||player:チャットコマンド||`` **mix2** コマンドの **word2** 変数(へんすう)の直下(ちょっか)にドラッグしましょう。

```blocks
player.onChat("mix2", function () {
    blocks.print(
    word1,
    SMOOTH_SANDSTONE,
    pos(0, 0, 0),
    WEST
    )
    blocks.print(
    word2,
    PURPLE_WOOL,
    pos(0, 0, 0),
    WEST
    )
    blocks.print(
    "" + word1 + word2,
    LAPIS_LAZULI_BLOCK,
    pos(0, 0, 0),
    WEST
    )
    starting_world_position = player.position()
})
```

## ステップ 8

``||player:on player walk||`` ブロックを取(と)って、**fly** に設定(せってい)しましょう。**alphabet** という名前(なまえ)の新(あたら)しい変数(へんすう)を作(つく)って、テキスト文字列(もじれつ) **"ABCDEFGHIJKLMNOPQ"** を割(わ)り当(あ)てましょう。この変数(へんすう)を ``||player:on player fly||`` ブロックにドラッグしましょう。

```blocks
player.onTravelled(FLY, function () {
    alphabet = "ABCDEFGHIJKLMNOPQ"
})
```

## ステップ 9

別(べつ)の ``||variables: variable||`` **RandomLetter** を追加(ついか)します。``||math:pick random||`` ブロックを取得(しゅとく)し、範囲(はんい)を **0** から **12** に設定(せってい)します。次(つぎ)に、完成(かんせい)した ``||math:pick random||`` ブロックを **RandomLetter** 変数(へんすう)に挿入(そうにゅう)します。


```blocks
player.onTravelled(FLY, function () {
    alphabet = "ABCDEFGHIJKLMNOPQ"
    RandomLetter = Math.randomRange(0, 12)
    blocks.print(
    alphabet.charAt(RandomLetter),
    PUMPKIN,
    pos(-5, 2, 0),
    WEST
    )
})
```

## ステップ 10

**alphabet** と **RandomLetter** 変数(へんすう)を設定(せってい)します。一貫性(いっかんせい)のため、他(ほか)のすべての変数(へんすう)を設定(せってい)する同(おな)じ場所(ばしょ)に設定(せってい)します。

```blocks
let RandomLetter = 0
let alphabet = ""
let starting_world_position: Position = null
let word2 = ""
let word1 = ""
word1 = "rail"
word2 = "road"
```

## ステップ 11

Minecraftに入(はい)り、すべてのコードをテストしてみましょう。

```blocks
player.onChat("mix", function () {
    starting_world_position = player.position()
    blocks.print(
    word1,
    GRASS,
    pos(0, 0, 0),
    WEST
    )
})
player.onChat("mix2", function () {
    blocks.print(
    word1,
    SMOOTH_SANDSTONE,
    pos(0, 0, 0),
    WEST
    )
    blocks.print(
    word2,
    PURPLE_WOOL,
    pos(0, 0, 0),
    WEST
    )
    blocks.print(
    "" + word1 + word2,
    LAPIS_LAZULI_BLOCK,
    pos(0, 0, 0),
    WEST
    )
    starting_world_position = player.position()
})
player.onTravelled(FLY, function () {
    alphabet = "ABCDEFGHIJKLMNOPQ"
    RandomLetter = Math.randomRange(0, 12)
    blocks.print(
    alphabet.charAt(RandomLetter),
    PUMPKIN,
    pos(-5, 2, 0),
    WEST
    )
})
let RandomLetter = 0
let alphabet = ""
let starting_world_position: Position = null
let word2 = ""
let word1 = ""
word1 = "rail"
word2 = "road"
```