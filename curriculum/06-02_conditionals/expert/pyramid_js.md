# エージェントのピラミッド: Javascript


## ステップ 1
``||player:チャットコマンド||`` を作成し、**"pyramid"** という名前を付けて、2番目の引数を **function (size)** に設定します。

```javascript
player.onChat("pyramid", function (size){ 
 
}) 
```

## ステップ 2

**size** が 0 より大きいかどうかを評価する ``||logic:もし||`` 文を追加します。

```javascript
player.onChat("pyramid", function (size)){ 
    let size = 0 
    if (size > 0) { 
      
    } 
```

## ステップ 3

``||logic:もし||`` 文の内側で、エージェントが **sandstone** の ``||agent:スロットに設定させる||`` を **size** 変数に **size** を掛けた値にするようにコーディングします—スロット1に。

```javascript
player.onChat("pyramid", function (size){ 
    let size = 0 
    if (size > 0) { 
        agent.setItem(SANDSTONE, size * size, 1) 
    } 
}) 
```

## ステップ 4

エージェントが 1 スロットを ``||agent:set the active slot||`` するようにコーディングします。

```javascript
        agent.setItem(SANDSTONE, size * size, 1) 
        agent.setSlot(1) 
    } 
})
```

## ステップ 5

次に、エージェントの ``||agent:place on move||`` を **true** に設定します。

```javascript
        agent.setSlot(1) 
        agent.setAssist(PLACE_ON_MOVE, true) 
    } 
}) 
```

## ステップ 6

変数 **i** を 0 から 4 引く 1 までとする ``||loops:for||`` ループを追加します。

```javascript
    agent.setAssist(PLACE_ON_MOVE, true) 
        for (let i = 0; i <= 0 - 0; i++) { 
          
        } 
    } 
```

## ステップ 7

エージェントが **size** 変数の値で ``||agent:move forward||`` するようにコーディングします。

```javascript
        for (let i = 0; i <= 0 - 0; i++) { 
            agent.move(FORWARD, size) 
        } 
```

## ステップ 8

エージェントが ``||agent:turn left||`` するようにコーディングし、``||loops:for||`` ループを終了します。

```javascript
for (let i = 0; i <= 0 - 0; i++) { 
            agent.move(FORWARD, size) 
            agent.turn(LEFT_TURN) 
        } 
```

## ステップ 9

``||loops:for||`` ループの後、ただし ``||logic:もし||`` 文の内側で、エージェントが **move up by 1** するようにコーディングします。

```javascript
   } 
        agent.move(UP, 1) 
    } 
```

## ステップ 10

エージェントの ``||agent:place on move||`` を **false** にコーディングします。

```javascript
  agent.move(UP, 1) 
        agent.setAssist(PLACE_ON_MOVE, false)
```

## ステップ 11

**pyramid** チャットに **size** 変数の値から 2 を引いた値を結合する ``||player:run chat||`` コマンドを配置します。

```javascript
        agent.setAssist(PLACE_ON_MOVE, false) 
        player.runChatCommand("pyramid" + (size - 2)) 
    } 
}) 
```

## ステップ 12

Minecraftに入り、**t** を入力して **pyramid** チャットコマンドをテストしてみましょう。


```javascript
player.onChat("pyramid", function (size) { 
    if (size > 0) { 
        agent.setItem(SANDSTONE, size * size, 1) 
        agent.setSlot(1) 
        agent.setAssist(PLACE_ON_MOVE, true) 
        for (let i = 0; i <= 0 - 0; i++) { 
            agent.move(FORWARD, size) 
            agent.turn(LEFT_TURN) 
        } 
        agent.move(UP, 1) 
        agent.setAssist(PLACE_ON_MOVE, false) 
        player.runChatCommand("pyramid" + (size - 2)) 
    } 
}) 
```