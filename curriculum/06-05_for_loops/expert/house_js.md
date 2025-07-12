# 家(いえ)のForループ: JavaScript

## ステップ 1
``||player:チャットコマンド||``を作(つく)って、``||agent:プレイヤーにテレポート||`` するようにします。名前(なまえ)を **tp** にします。 

```javascript
player.onChat("tp", function () { 
    agent.teleportToPlayer() 
}) 
```

## ステップ 2
別(べつ)の ``||player:チャットコマンド||``を作(つく)って、名前(なまえ)を **walls** にします。

```javascript
player.onChat("walls", function () { 
 
}) 
```

## ステップ 3
**walls** の ``||player:チャットコマンド||`` の中(なか)で、``||agent:ブロックまたはアイテム設定(せってい)||`` を使(つか)って **アカシアの木(き)の板(いた)** を数(すう) **64** でスロット **1** に設定(せってい)しましょう。

```javascript
player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
}) 
```

## ステップ 4
**walls** の ``||player:チャットコマンド||``の中(なか)で、``||agent:移動(いどう)||`` **上(うえ)に1歩(ほ)** を **3回(かい)** 繰(く)り返(かえ)す ``||loops:for||`` ループを作(つく)りましょう。

```javascript
  player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(UP, 1) 
    } 
}) 
```

## ステップ 5
最初(さいしょ)の ``||loops:for||`` ループの中(なか)で、``||agent:移動(いどう)||`` コードの下(した)に、``||agent:エージェント右(みぎ)に回転(かいてん)||`` を **4回(かい)** 繰(く)り返(かえ)す別(べつ)の ``||loops:for||`` ループを作(つく)りましょう。

```javascript
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
2番目(ばんめ)の ``||loops:for||`` ループの中(なか)で、``||agent:右(みぎ)に回転(かいてん)||`` コードの上(うえ)に、``||agent:置(お)く||`` 下(した)と ``||agent:移動(いどう)||`` **前(まえ)に1歩(ほ)** を **4回(かい)** 繰(く)り返(かえ)す3番目(ばんめ)の ``||loops:for||`` ループを作(つく)りましょう。

```javascript
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

## ステップ 7
新(あたら)しい ``||player:チャットコマンド||``を作(つく)って、名前(なまえ)を **roof** にします。   

```javascript
player.onChat("roof", function () { 
 
}) 
```

## ステップ 8
``||agent:ブロックまたはアイテム設定(せってい)||`` を使(つか)って **レンガハーフブロック** を数(すう) **64** でスロット **1** に設定(せってい)し、エージェントが ``||agent:移動(いどう)||`` **上(うえ)に1歩(ほ)** するようにコードを書(か)きましょう。

```javascript
player.onChat("roof", function () { 
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
}) 
```

## ステップ 9
**roof** の ``||player:チャットコマンド||``の中(なか)で、``||agent:エージェント移動(いどう)||`` **後(うし)ろに4歩(ほ)** と ``||agent:エージェント移動(いどう)||`` **右(みぎ)に1歩(ほ)** を **4回(かい)** 繰(く)り返(かえ)す ``||loops:for||`` ループを作(つく)りましょう。  
	
```javascript
player.onChat("roof", function () { 
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
    for (let index = 0; index < 4; index++) { 
        agent.move(BACK, 1) 
        agent.move(RIGHT, 1) 
    } 
}) 
```

## ステップ 10
前(まえ)の ``||loops:for||`` ループの中(なか)で、``||agent:移動(いどう)||`` **後(うし)ろ** の上(うえ)に、``||agent:下(もと)に置(お)く||`` と ``||agent:移動(いどう)||`` **前(まえ)に1歩(ほ)** を **4回(かい)** 繰(く)り返(かえ)す別(べつ)の ``||loops:for||`` ループを作(つく)りましょう。

```javascript
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

## ステップ 11
**Play** ボタンを押(お)して、Minecraftに入(はい)って、**walls** と **roof** をテストします。

```javascript
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

