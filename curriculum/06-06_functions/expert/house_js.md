# 家の関数: JavaScript

## ステップ 1
``||functions:function||`` をコードで作って、**walls** と名前を付けましょう。

```javascript
function walls () {
}
```

## ステップ 2
**walls** 関数の中で、エージェントに ``||agent:スロットに設定させる||`` をコードで作って、**Acacia Wood Planks** を **64** 個、スロット **1** に設定しましょう。

```javascript
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1)
}
```

## ステップ 3
**walls** 関数の中で、``||agent:移動させる||`` **up by 1** を **3** 回繰り返す ``||loops:for||`` ループをコードで作りましょう。

```javascript
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1)
    for (let index = 0; index < 3; index++) {
        agent.move(UP, 1)
    }
}
```

## ステップ 4
**4** 回繰り返す別の ``||loops:for||`` ループをコードし、最初の ``||loops:for||`` ループの中、最初の ``||agent:移動させる||`` の下にドラッグします。2番目のループで、``||agent:agent turn right||`` をコードします。

```javascript
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
3番目の ``||loops:for||`` ループをコードし、2番目の ``||loops:for||`` ループの中の ``||agent: turn right||`` の上にドラッグして配置します。3番目の ``||loops:for||`` ループを **4** 回に設定します。最も内側の ``||loops:for||`` ループの中で、エージェントに ``||agent:置きます||`` をコードし、**down** に設定します。エージェントの ``||agent:移動させる||`` を追加し、**forward by 1** に設定して、最も内側の ``||loops:for||`` ループの中の ``||agent:置きます||`` down の下にドラッグします。

```javascript
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
新しい ``||functions:function||`` をコードし、**roof** と名前を付けます。

```javascript
function roof () {
	
}
```

## ステップ 7
エージェントに ``||agent:スロットに設定させる||`` をコードし、**brick slab** に設定し、数を **64**、スロットを **1** に設定して、**roof** ``||functions:function||`` の中にドラッグします。また、エージェントに ``||agent:移動させる||`` **up by 1** をコードします。

```javascript
function roof () {
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
}) 
```

## ステップ 8
**roof** ``||functions:function||`` の中で、``||loops:for||`` ループをコードし、**4** 回に設定します。ループの中で、エージェントに ``||agent:移動させる||`` **back by 4** をコードし、次にエージェントに ``||agent:移動させる||`` **right by 1** をコードします。

```javascript
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
別の ``||loops:for||`` ループをコードし、**4** 回に設定します。このループの中で、``||agent:agent place down||`` を追加し、次に ``||agent:移動させる||`` **forward by 1** を追加します。この ``||loops:for||`` ループを前のループの中、``||agent:移動させる||`` **back by 4** の上に配置します。

```javascript
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
``||player:チャットコマンド||``をコードし、**house** と名前を付けて、**walls** と **roof** の ``||functions:functions||`` の両方を呼び出すようにします。

```javascript
player.onChat("house", function () {
    walls()
    roof()
})
```


## ステップ 11
Minecraftに入り、**house** 関数をテストしてみましょう。

```javascript
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