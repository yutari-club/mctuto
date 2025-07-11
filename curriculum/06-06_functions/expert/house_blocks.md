# 家の関数: ブロック

## ステップ 1
``||functions:function||`` を追加して、**walls** と名前を付けます。

```blocks
function walls () {
}
```

## ステップ 2
``||agent:set block or item||`` コマンドを追加し、**walls** 関数の中に配置します。**Acacia Wood Planks** を **64** 個、スロット **1** に設定します。

```blocks
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1)
}
```

## ステップ 3
``||loops:くりかえし○○回||`` ループを取得し、**3** 回に設定して、**walls** ``||functions:function||`` の中の ``||agent:set block or item||`` ブロックの下にドラッグします。``||agent:移動させる||`` ブロックを ``||loops:くりかえし○○回||`` ループの中に追加し、**up by 1** に設定します。

```blocks
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1)
    for (let index = 0; index < 3; index++) {
        agent.move(UP, 1)
    }
}
```

## ステップ 4
別の ``||loops:くりかえし○○回||`` ループを取得し、**4** 回に設定して、最初の ``||loops:くりかえし○○回||`` ループの中、最初の ``||agent:移動させる||`` ブロックの下にドラッグします。2番目の ``||loops:くりかえし○○回||`` ループに ``||agent:turn right||`` を追加します。

```blocks
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(UP, 1) 
        for (let index = 0; index < 4; index++) { 
            agent.turn(RIGHT_TURN) 
        } 
    } 
}) 
```

## ステップ 5
3番目の ``||loops:くりかえし○○回||`` ループを取得し、2番目の ``||loops:くりかえし○○回||`` ループの中の ``||agent: agent turn right||`` ブロックの上にドラッグします。3番目の ``||loops:くりかえし○○回||`` ループを **4** 回に設定します。最も内側の ``||loops:くりかえし○○回||`` ループに ``||agent:置かせる||`` ブロックを追加し、**down** に設定します。``||agent:移動させる||`` ブロックを追加し、**forward by 1** に設定して、最も内側の ``||loops:くりかえし○○回||`` ループの中の ``||agent:place||`` down の下にドラッグします。

```blocks
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(UP, 1) 
        for (let index = 0; index < 4; index++) { 
            for (let index = 0; index < 4; index++) { 
                agent.place(DOWN) 
                agent.move(FORWARD, 1) 
            } 
            agent.turn(RIGHT_TURN) 
        } 
    } 
}) 
```

## ステップ 6
新しい ``||functions:function||`` を取得して、**roof** と名前を付けます。

```blocks
function roof () {
	
}
```

## ステップ 7
``||agent:set block or item||`` ブロックを取得し、**brick slab** に設定してから、数を **64**、スロットを **1** に設定し、**roof** ``||functions:function||`` の中にドラッグします。``||agent:移動させる||`` ブロックを追加し、**up** by **1** に設定します。

```blocks
function roof () {
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
}) 
```

## ステップ 8
``||loops:くりかえし○○回||`` ループを取得し、**roof** ``||functions:function||`` の中にドラッグします。**4** 回に設定します。``||agent:移動させる||`` ブロックを追加し、**back by 4** に設定します。また、別の ``||agent:移動させる||`` ブロックを追加し、**right by 1** に設定します。

```blocks
function roof () {
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
    for (let index = 0; index < 4; index++) { 
        agent.move(BACK, 4) 
        agent.move(RIGHT, 1) 
    } 
}) 
```

## ステップ 9
別の ``||loops:くりかえし○○回||`` ループを取得し、**4** 回に設定します。``||agent:place down||`` ブロックを追加し、次に ``||agent:移動させる||`` ブロックを追加して **forward by 1** に設定します。この ``||loops:くりかえし○○回||`` ループを前の repeat loop の中、``||agent:移動させる||`` ブロック **back by 4** の上にドラッグします。

```blocks
function roof () {
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
    for (let index = 0; index < 4; index++) { 
        for (let index = 0; index < 4; index++) { 
            agent.place(DOWN) 
            agent.move(FORWARD, 1) 
        } 
        agent.move(BACK, 4) 
        agent.move(RIGHT, 1) 
    } 
}) 
```

## ステップ 10
``||player:チャットコマンド||``をワークスペースにドラッグし、**house** と名前を付けます。``||functions:function||`` を追加し、**walls** と **roof** の ``||advanced:functions||`` の両方を呼び出します。

## ステップ 11
**Play** ボタンを押して、Minecraftに入り、**house** コマンドをテストしてみましょう。

```blocks
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1)
    for (let index = 0; index < 3; index++) {
        agent.move(UP, 1)
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 4; index++) {
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(RIGHT_TURN)
        }
    }
}
function roof () {
    agent.setItem(BRICKS_SLAB, 64, 1)
    agent.move(UP, 1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(BACK, 4)
        agent.move(RIGHT, 1)
    }
}
player.onChat("house", function () {
    walls()
    roof()
})
```