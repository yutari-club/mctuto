# 家のForループ: JavaScript

## ステップ 1
``||player:チャットコマンド||``を作って、``||agent:プレイヤーにテレポート||`` するようにします。名前を **tp** にします。 

```javascript
player.onChat("tp", function () { 
    agent.teleportToPlayer() 
}) 
```

## ステップ 2
別の ``||player:チャットコマンド||``を作って、名前を **walls** にします。

```javascript
player.onChat("walls", function () { 
 
}) 
```

## ステップ 3
**walls** の ``||player:チャットコマンド||`` の中で、``||agent:ブロックまたはアイテム設定||`` を使って **アカシアの木の板** を数 **64** でスロット **1** に設定しましょう。

```javascript
player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
}) 
```

## ステップ 4
**walls** の ``||player:チャットコマンド||``の中で、``||agent:移動||`` **上に1歩** を **3回** 繰り返す ``||loops:for||`` ループを作りましょう。

```javascript
  player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(UP, 1) 
    } 
}) 
```

## ステップ 5
最初の ``||loops:for||`` ループの中で、``||agent:移動||`` コードの下に、``||agent:エージェント右に回転||`` を **4回** 繰り返す別の ``||loops:for||`` ループを作りましょう。

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
2番目の ``||loops:for||`` ループの中で、``||agent:右に回転||`` コードの上に、``||agent:置く||`` 下と ``||agent:移動||`` **前に1歩** を **4回** 繰り返す3番目の ``||loops:for||`` ループを作りましょう。

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
新しい ``||player:チャットコマンド||``を作って、名前を **roof** にします。   

```javascript
player.onChat("roof", function () { 
 
}) 
```

## ステップ 8
``||agent:ブロックまたはアイテム設定||`` を使って **レンガハーフブロック** を数 **64** でスロット **1** に設定し、エージェントが ``||agent:移動||`` **上に1歩** するようにコードを書きましょう。

```javascript
player.onChat("roof", function () { 
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
}) 
```

## ステップ 9
**roof** の ``||player:チャットコマンド||``の中で、``||agent:エージェント移動||`` **後ろに4歩** と ``||agent:エージェント移動||`` **右に1歩** を **4回** 繰り返す ``||loops:for||`` ループを作りましょう。  
	
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
前の ``||loops:for||`` ループの中で、``||agent:移動||`` **後ろ** の上に、``||agent:下に置く||`` と ``||agent:移動||`` **前に1歩** を **4回** 繰り返す別の ``||loops:for||`` ループを作りましょう。

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
**Play** ボタンを押して、Minecraftに入って、**walls** と **roof** をテストします。

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

