# 家(いえ)の関数(かんすう): ブロック

## ステップ 1
``||functions:function||`` を追加(ついか)して、**walls** と名前(なまえ)を付(つ)けましょう。

```blocks
function walls () {
}
```

## ステップ 2
``||agent:スロットに設定(せってい)させる||`` コマンドを追加(ついか)し、**walls** 関数(かんすう)の中(なか)に置(お)きます。**Acacia Wood Planks** を **64** 個(こ)、スロット **1** に設定(せってい)しましょう。

```blocks
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1)
}
```

## ステップ 3
``||loops:くりかえし○○回(かい)||`` ループを取(と)って、**3** 回(かい)に設定(せってい)して、**walls** ``||functions:function||`` の中(なか)の ``||agent:スロットに設定(せってい)させる||`` ブロックの下(した)にドラッグしましょう。``||agent:移動(いどう)させる||`` ブロックを ``||loops:くりかえし○○回(かい)||`` ループの中(なか)に追加(ついか)し、**up by 1** に設定(せってい)しましょう。

```blocks
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1)
    for (let index = 0; index < 3; index++) {
        agent.move(UP, 1)
    }
}
```

## ステップ 4
別(べつ)の ``||loops:くりかえし○○回(かい)||`` ループを取(と)って、**4** 回(かい)に設定(せってい)して、最初(さいしょ)の ``||loops:くりかえし○○回(かい)||`` ループの中(なか)、最初(さいしょ)の ``||agent:移動(いどう)させる||`` ブロックの下(した)にドラッグしましょう。2番目(ばんめ)の ``||loops:くりかえし○○回(かい)||`` ループに ``||agent:turn right||`` を追加(ついか)しましょう。

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
3番目(ばんめ)の ``||loops:くりかえし○○回(かい)||`` ループを取(と)って、2番目(ばんめ)の ``||loops:くりかえし○○回(かい)||`` ループの中(なか)の ``||agent: agent turn right||`` ブロックの上(うえ)にドラッグしましょう。3番目(ばんめ)の ``||loops:くりかえし○○回(かい)||`` ループを **4** 回(かい)に設定(せってい)しましょう。最(もっと)も中(なか)の ``||loops:くりかえし○○回(かい)||`` ループに ``||agent:置(お)かせる||`` ブロックを追加(ついか)し、**down** に設定(せってい)しましょう。``||agent:移動(いどう)させる||`` ブロックを追加(ついか)し、**forward by 1** に設定(せってい)して、最(もっと)も中(なか)の ``||loops:くりかえし○○回(かい)||`` ループの中(なか)の ``||agent:置(お)きます||`` down の下(した)にドラッグしましょう。

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
新(あたら)しい ``||functions:function||`` を取(と)って、**roof** と名前(なまえ)を付(つ)けましょう。

```blocks
function roof () {
	
}
```

## ステップ 7
``||agent:スロットに設定(せってい)させる||`` ブロックを取(と)って、**brick slab** に設定(せってい)してから、数(かず)を **64**、スロットを **1** に設定(せってい)し、**roof** ``||functions:function||`` の中(なか)にドラッグしましょう。``||agent:移動(いどう)させる||`` ブロックを追加(ついか)し、**up** by **1** に設定(せってい)しましょう。

```blocks
function roof () {
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
}) 
```

## ステップ 8
``||loops:くりかえし○○回(かい)||`` ループを取(と)って、**roof** ``||functions:function||`` の中(なか)にドラッグしましょう。**4** 回(かい)に設定(せってい)しましょう。``||agent:移動(いどう)させる||`` ブロックを追加(ついか)し、**back by 4** に設定(せってい)しましょう。また、別(べつ)の ``||agent:移動(いどう)させる||`` ブロックを追加(ついか)し、**right by 1** に設定(せってい)しましょう。

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
別(べつ)の ``||loops:くりかえし○○回(かい)||`` ループを取(と)って、**4** 回(かい)に設定(せってい)しましょう。``||agent:place down||`` ブロックを追加(ついか)し、次(つぎ)に ``||agent:移動(いどう)させる||`` ブロックを追加(ついか)して **forward by 1** に設定(せってい)しましょう。この ``||loops:くりかえし○○回(かい)||`` ループを前(まえ)の repeat loop の中(なか)、``||agent:移動(いどう)させる||`` ブロック **back by 4** の上(うえ)にドラッグしましょう。

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
``||player:チャットコマンド||``をワークスペースにドラッグし、**house** と名前(なまえ)を付(つ)けましょう。``||functions:function||`` を追加(ついか)し、**walls** と **roof** の ``||advanced:functions||`` の両方(りょうほう)を呼(よ)び出(だ)しましょう。

## ステップ 11
**Play** ボタンを押(お)して、Minecraftに入(はい)り、**house** コマンドをテストしてみましょう。

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