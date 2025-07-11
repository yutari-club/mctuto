# 家の関数: ブロック

## ステップ 1
``||functions:function||`` を追加して、**walls** と名前を付けましょう。

```blocks
function walls () {
}
```

## ステップ 2
``||agent:スロットに設定させる||`` コマンドを追加し、**walls** 関数の中に置きます。**Acacia Wood Planks** を **64** 個、スロット **1** に設定しましょう。

```blocks
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1)
}
```

## ステップ 3
``||loops:くりかえし○○回||`` ループを取って、**3** 回に設定して、**walls** ``||functions:function||`` の中の ``||agent:スロットに設定させる||`` ブロックの下にドラッグしましょう。``||agent:移動させる||`` ブロックを ``||loops:くりかえし○○回||`` ループの中に追加し、**up by 1** に設定しましょう。

```blocks
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1)
    for (let index = 0; index < 3; index++) {
        agent.move(UP, 1)
    }
}
```

## ステップ 4
別の ``||loops:くりかえし○○回||`` ループを取って、**4** 回に設定して、最初の ``||loops:くりかえし○○回||`` ループの中、最初の ``||agent:移動させる||`` ブロックの下にドラッグしましょう。2番目の ``||loops:くりかえし○○回||`` ループに ``||agent:turn right||`` を追加しましょう。

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
3番目の ``||loops:くりかえし○○回||`` ループを取って、2番目の ``||loops:くりかえし○○回||`` ループの中の ``||agent: agent turn right||`` ブロックの上にドラッグしましょう。3番目の ``||loops:くりかえし○○回||`` ループを **4** 回に設定しましょう。最も中の ``||loops:くりかえし○○回||`` ループに ``||agent:置かせる||`` ブロックを追加し、**down** に設定しましょう。``||agent:移動させる||`` ブロックを追加し、**forward by 1** に設定して、最も中の ``||loops:くりかえし○○回||`` ループの中の ``||agent:置きます||`` down の下にドラッグしましょう。

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
新しい ``||functions:function||`` を取って、**roof** と名前を付けましょう。

```blocks
function roof () {
	
}
```

## ステップ 7
``||agent:スロットに設定させる||`` ブロックを取って、**brick slab** に設定してから、数を **64**、スロットを **1** に設定し、**roof** ``||functions:function||`` の中にドラッグしましょう。``||agent:移動させる||`` ブロックを追加し、**up** by **1** に設定しましょう。

```blocks
function roof () {
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
}) 
```

## ステップ 8
``||loops:くりかえし○○回||`` ループを取って、**roof** ``||functions:function||`` の中にドラッグしましょう。**4** 回に設定しましょう。``||agent:移動させる||`` ブロックを追加し、**back by 4** に設定しましょう。また、別の ``||agent:移動させる||`` ブロックを追加し、**right by 1** に設定しましょう。

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
別の ``||loops:くりかえし○○回||`` ループを取って、**4** 回に設定しましょう。``||agent:place down||`` ブロックを追加し、次に ``||agent:移動させる||`` ブロックを追加して **forward by 1** に設定しましょう。この ``||loops:くりかえし○○回||`` ループを前の repeat loop の中、``||agent:移動させる||`` ブロック **back by 4** の上にドラッグしましょう。

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
``||player:チャットコマンド||``をワークスペースにドラッグし、**house** と名前を付けましょう。``||functions:function||`` を追加し、**walls** と **roof** の ``||advanced:functions||`` の両方を呼び出しましょう。

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