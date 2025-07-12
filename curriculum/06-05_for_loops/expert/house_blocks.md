# 家(いえ)のForループ: ブロック

## ステップ 1
``||player:チャットコマンド||``を取(と)って、名前(なまえ)を **teleport** にします。``||agent:エージェントプレイヤーにテレポート||`` を取(と)って、``||player:チャットコマンド||``の中(なか)にドラッグします。
```template
{}
```

```blocks
player.onChat("tp", function () { 
    agent.teleportToPlayer() 
}) 
```

## ステップ 2
新(あたら)しい ``||player:チャットコマンド||``を取(と)って、名前(なまえ)を **walls** にします。

```blocks
player.onChat("walls", function () { 
 
}) 
```

## ステップ 3
``||agent:ブロックまたはアイテム設定(せってい)||`` コマンドを取(と)って、**walls** の ``||player:チャットコマンド||`` の中(なか)にドラッグします。**アカシアの木(き)の板(いた)** を選(えら)んで、数(かず)を **64** 、スロットを **1** に設定(せってい)しましょう。

```blocks
player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
}) 
```

## ステップ 4
``||loops:繰(く)り返(かえ)し||`` ループを取(と)って、**3** 回(かい)に設定(せってい)し、**walls** の ``||player:チャットコマンド||``の中(なか)にドラッグします。``||agent:ブロックまたはアイテム設定(せってい)||`` の下(もと)に置(お)きます。``||loops:繰(く)り返(かえ)し||`` ループの中(なか)に ``||agent:エージェント移動(いどう)||`` を追加(ついか)して、**上(うえ)に1歩(ほ)** に設定(せってい)しましょう。

```blocks
  player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(UP, 1) 
    } 
}) 
```

## ステップ 5
もう一(ひと)つの ``||loops:繰(く)り返(かえ)し||`` ループを取(と)って、**4** 回(かい)に設定(せってい)し、最初(さいしょ)の ``||loops:繰(く)り返(かえ)し||`` ループの中(なか)にドラッグします。最初(さいしょ)の ``||agent:移動(いどう)||`` の下(もと)に置(お)きます。2番目(ばんめ)の ``||loops:繰(く)り返(かえ)し||`` ループに ``||agent:エージェント右(みぎ)に回転(かいてん)||`` を追加(ついか)します。

```blocks
player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(UP, 1) 
        for (let index = 0; index < 4; index++) { 
            agent.turn(RIGHT_TURN) 
        } 
    } 
}) 
```

## ステップ 6
3番目(ばんめ)の ``||loops:繰(く)り返(かえ)し||`` ループを取(と)って、2番目(ばんめ)の ``||loops:繰(く)り返(かえ)し||`` ループの中(なか)にドラッグし、``||agent: 右(みぎ)に回転(かいてん)||`` の上(うえ)に置(お)きます。3番目(ばんめ)の ``||loops:繰(く)り返(かえ)し||`` ループを **4** 回(かい)繰(く)り返(かえ)すように設定(せってい)しましょう。

## ステップ 7
一番(ばん)中(ちゅう)の ``||loops:繰(く)り返(かえ)し||`` ループに ``||agent:エージェント置(お)く||`` ブロックを追加(ついか)して、**下(した)** に設定(せってい)しましょう。``||agent:エージェント移動(いどう)||`` ブロックを追加(ついか)して、**前(まえ)に1歩(ほ)** に設定(せってい)し、一番(ばん)中(ちゅう)の ``||loops:繰(く)り返(かえ)し||`` ループの中(なか)の ``||agent:置(お)く||`` 下(した)ブロックの下(した)にドラッグします。

```blocks
player.onChat("walls", function () { 
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

## ステップ 8
新(あたら)しい ``||player:チャットコマンド||``を取(と)って、名前(なまえ)を **roof** にします。

```blocks
player.onChat("roof", function () { 
 
}) 
```

## ステップ 9
``||agent:ブロックまたはアイテム設定(せってい)||`` コマンドを取(と)って、**レンガハーフブロック** に設定(せってい)し、数(かず)を **64** 、スロットを **1** に設定(せってい)して、**roof** の ``||player:チャットコマンド||``の中(なか)にドラッグします。``||agent:エージェント移動(いどう)||`` ブロックを追加(ついか)して、**上(うえ)に1歩(ほ)** に設定(せってい)しましょう。

```blocks
player.onChat("roof", function () {
    agent.setItem(BRICKS_SLAB, 64, 1)
    agent.move(UP, 1)
})
```

## ステップ 10
``||loops:繰(く)り返(かえ)し||`` ループを取(と)って、**roof** の ``||player:チャットコマンド||``の中(なか)にドラッグします。**4** 回(かい)繰(く)り返(かえ)すように設定(せってい)しましょう。``||agent:エージェント移動(いどう)||`` ブロックを追加(ついか)して、**後(うし)ろに4歩(ほ)** に設定(せってい)します。また、``||agent:エージェント移動(いどう)||`` ブロックを追加(ついか)して、**右(みぎ)に1歩(ほ)** に設定(せってい)しましょう。

```blocks
player.onChat("roof", function () { 
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
    for (let index = 0; index < 4; index++) { 
        agent.move(BACK, 1) 
        agent.move(RIGHT, 1) 
    } 
}) 
```

## ステップ 11
もう一(ひと)つの ``||loops:繰(く)り返(かえ)し||`` ループを取(と)って、**4** 回(かい)繰(く)り返(かえ)すように設定(せってい)しましょう。``||agent:エージェント下(もと)に置(お)く||`` と ``||agent:エージェント移動(いどう)||`` を追加(ついか)して、**前(まえ)に1歩(ほ)** に設定(せってい)します。この ``||loops:繰(く)り返(かえ)し||`` ループを前(まえ)の繰(く)り返(かえ)しループの中(なか)にドラッグし、``||agent:エージェント移動(いどう)||`` **後(うし)ろに4歩(ほ)** の上(うえ)に置(お)きます。

```blocks
player.onChat("roof", function () { 
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
    for (let index = 0; index < 4; index++) { 
        for (let index = 0; index < 4; index++) { 
            agent.place(DOWN) 
            agent.move(FORWARD, 1) 
        } 
        agent.move(BACK, 1) 
        agent.move(RIGHT, 1) 
    } 
}) 
```

## ステップ 12
**Play** ボタンを押(お)して、Minecraftに入(はい)って、**walls** と **roof** をテストします。

```blocks
player.onChat("tp", function () { 
    agent.teleportToPlayer() 
}) 
player.onChat("roof", function () { 
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
    for (let index = 0; index < 4; index++) { 
        for (let index = 0; index < 4; index++) { 
            agent.place(DOWN) 
            agent.move(FORWARD, 1) 
        } 
        agent.move(BACK, 1) 
        agent.move(RIGHT, 1) 
    } 
}) 
player.onChat("walls", function () { 
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

