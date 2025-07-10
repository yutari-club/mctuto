# 家の関数: JavaScript

## ステップ 1
``||functions:function||`` をコードし、**walls** と名前を付けます。

```javascript
function walls () {
}
```

## ステップ 2
**walls** 関数の中で、エージェントに ``||agent:set block or item||`` をコードし、**Acacia Wood Planks** を **64** 個、スロット **1** に設定します。

```javascript
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1)
}
```

## ステップ 3
**walls** 関数の中で、``||agent:agent move||`` **up by 1** を **3** 回繰り返す ``||loops:for||`` ループをコードします。

```javascript
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1)
    for (let index = 0; index < 3; index++) {
        agent.move(UP, 1)
    }
}
```

## ステップ 4
**4** 回繰り返す別の ``||loops:for||`` ループをコードし、最初の ``||loops:for||`` ループの中、最初の ``||agent:agent move||`` の下にドラッグします。2番目のループで、``||agent:agent turn right||`` をコードします。

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
3番目の ``||loops:for||`` ループをコードし、2番目の ``||loops:for||`` ループの中の ``||agent: turn right||`` の上にドラッグして配置します。3番目の ``||loops:for||`` ループを **4** 回に設定します。最も内側の ``||loops:for||`` ループの中で、エージェントに ``||agent:place||`` をコードし、**down** に設定します。エージェントの ``||agent:move||`` を追加し、**forward by 1** に設定して、最も内側の ``||loops:for||`` ループの中の ``||agent:place||`` down の下にドラッグします。

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
エージェントに ``||agent:set block or item||`` をコードし、**brick slab** に設定し、数を **64**、スロットを **1** に設定して、**roof** ``||functions:function||`` の中にドラッグします。また、エージェントに ``||agent:move||`` **up by 1** をコードします。

```javascript
function roof () {
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
}) 
```

## ステップ 8
**roof** ``||functions:function||`` の中で、``||loops:for||`` ループをコードし、**4** 回に設定します。ループの中で、エージェントに ``||agent:move||`` **back by 4** をコードし、次にエージェントに ``||agent:move||`` **right by 1** をコードします。

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
別の ``||loops:for||`` ループをコードし、**4** 回に設定します。このループの中で、``||agent:agent place down||`` を追加し、次に ``||agent:agent move||`` **forward by 1** を追加します。この ``||loops:for||`` ループを前のループの中、``||agent:agent move||`` **back by 4** の上に配置します。

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
``||player:on chat||`` コマンドをコードし、**house** と名前を付けて、**walls** と **roof** の ``||functions:functions||`` の両方を呼び出すようにします。

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