# 文字表示: ブロック

## ステップ 1
``||player:チャットコマンド||``を作って、**mix** という名前を付けて、**starting_world_position** という ``||variables: new variable||`` を含めましょう。この ``||variable:variable||`` を ``||player:player world position||`` に設定しましょう。

```blocks
player.onChat("mix", function () {
    starting_world_position = player.position()
})
```

## ステップ 2

位置 **(0,0,0)** で **West** を向いて、変数 **word1** を ``||blocks:grass||`` ブロックで ``||blocks:print||`` するコードを追加しましょう。

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

``||loops:on start||`` を追加して、新しい変数 **word1** を挿入しましょう。この変数を **"rail"** に設定しましょう。変数 **starting_world_position** を **(0,0,0)** に設定しましょう。

```blocks
Let starting_world_position: Position = null
let word1 = ""
word1 = "rail"
```

## ステップ 4

``||player:チャットコマンド||``を作って、**mix2** という名前を付けます。別の ``||variables: variable||`` を追加して、**starting_world_position** に設定してから、``||player:player world position||`` に設定しましょう。その変数を ``||player:チャットコマンド||`` **mix2** コマンドにドラッグしましょう。``||player:チャットコマンド||``の中で、``||blocks:print||`` ブロックを追加して、位置 **(0,0,0)** で **West** を向いて変数 **word1** を **smooth sandstone** で割り当てましょう。**word1** を **starting_world_position** 変数の直下にドラッグしましょう。

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

別の ``||blocks:print||`` ブロックを追加して、位置 **0,0,0** で **West** を向いて変数 **word2** を **purple wool** で割り当てましょう。**word2** を **word1** 変数の直下にドラッグしましょう。

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

別の ``||variables:variable||`` を追加して、**word2** を選択して文字列 "road" を割り当てましょう。**word2** 変数を ``||loops:on start||`` コマンドの **word1** 変数の直下にドラッグしましょう。

```blocks
let starting_world_position: Position = null
let word2 = ""
let word1 = ""
word1 = "rail"
word2 = "road"
```

## ステップ 7

別の ``||blocks:print||`` コマンドを追加して、``||text:join||`` ブロックを挿入して **word1** と **word2** の両方を割り当てましょう。``||blocks:print||`` を位置 **(0,0,0)** で **West** を向いて **lapis lazuli** に設定しましょう。完成した ``||blocks:print||`` を ``||player:チャットコマンド||`` **mix2** コマンドの **word2** 変数の直下にドラッグしましょう。

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

``||player:on player walk||`` ブロックを取って、**fly** に設定しましょう。**alphabet** という名前の新しい変数を作って、テキスト文字列 **"ABCDEFGHIJKLMNOPQ"** を割り当てましょう。この変数を ``||player:on player fly||`` ブロックにドラッグしましょう。

```blocks
player.onTravelled(FLY, function () {
    alphabet = "ABCDEFGHIJKLMNOPQ"
})
```

## ステップ 9

別の ``||variables: variable||`` **RandomLetter** を追加します。``||math:pick random||`` ブロックを取得し、範囲を **0** から **12** に設定します。次に、完成した ``||math:pick random||`` ブロックを **RandomLetter** 変数に挿入します。


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

**alphabet** と **RandomLetter** 変数を設定します。一貫性のため、他のすべての変数を設定する同じ場所に設定します。

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

Minecraftに入り、すべてのコードをテストしてみましょう。

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