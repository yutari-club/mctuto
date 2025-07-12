# エージェントのピラミッド: Javascript


## ステップ 1
``||player:チャットコマンド||`` を作(つく)って、**"pyramid"** という名前(なまえ)を付(つ)けて、2番目(ばんめ)の引数(ひきすう)を **function (size)** に設定(せってい)しましょう。

```javascript
player.onChat("pyramid", function (size){ 
 
}) 
```

## ステップ 2

**size** が 0 より大(おお)きいかどうかを評価(ひょうか)する ``||logic:もし||`` 文(ぶん)を追加(ついか)します。

```javascript
player.onChat("pyramid", function (size)){ 
    let size = 0 
    if (size > 0) { 
      
    } 
```

## ステップ 3

``||logic:もし||`` 文(ぶん)の中(なか)で、エージェントが **sandstone** の ``||agent:スロットに設定(せってい)させる||`` を **size** 変数(へんすう)に **size** を掛(か)けた値(ね)にするようにコードを書(か)きましょう スロット1に。

```javascript
player.onChat("pyramid", function (size){ 
    let size = 0 
    if (size > 0) { 
        agent.setItem(SANDSTONE, size * size, 1) 
    } 
}) 
```

## ステップ 4

エージェントが 1 スロットを ``||agent:set the active slot||`` するようにコードを書(か)きましょう。

```javascript
        agent.setItem(SANDSTONE, size * size, 1) 
        agent.setSlot(1) 
    } 
})
```

## ステップ 5

次(つぎ)に、エージェントの ``||agent:place on move||`` を **true** に設定(せってい)します。

```javascript
        agent.setSlot(1) 
        agent.setAssist(PLACE_ON_MOVE, true) 
    } 
}) 
```

## ステップ 6

変数(へんすう) **i** を 0 から 4 引(ひ)く 1 までとする ``||loops:for||`` ループを追加(ついか)します。

```javascript
    agent.setAssist(PLACE_ON_MOVE, true) 
        for (let i = 0; i <= 0 - 0; i++) { 
          
        } 
    } 
```

## ステップ 7

エージェントが **size** 変数(へんすう)の値(ね)で ``||agent:move forward||`` するようにコードを書(か)きましょう。

```javascript
        for (let i = 0; i <= 0 - 0; i++) { 
            agent.move(FORWARD, size) 
        } 
```

## ステップ 8

エージェントが ``||agent:turn left||`` するようにコードを書(か)き、``||loops:for||`` ループを終了(しゅうりょう)しましょう。

```javascript
for (let i = 0; i <= 0 - 0; i++) { 
            agent.move(FORWARD, size) 
            agent.turn(LEFT_TURN) 
        } 
```

## ステップ 9

``||loops:for||`` ループの後(あと)、ただし ``||logic:もし||`` 文(ぶん)の中(なか)で、エージェントが **move up by 1** するようにコードを書(か)きましょう。

```javascript
   } 
        agent.move(UP, 1) 
    } 
```

## ステップ 10

エージェントの ``||agent:place on move||`` を **false** にコードを書(か)きましょう。

```javascript
  agent.move(UP, 1) 
        agent.setAssist(PLACE_ON_MOVE, false)
```

## ステップ 11

**pyramid** チャットに **size** 変数(へんすう)の値(ね)から 2 を引(ひ)いた値(ね)を結合(けつごう)する ``||player:run chat||`` コマンドを置(お)きましょう。

```javascript
        agent.setAssist(PLACE_ON_MOVE, false) 
        player.runChatCommand("pyramid" + (size - 2)) 
    } 
}) 
```

## ステップ 12

Minecraftに入(はい)り、**t** を押(お)して**pyramid** と入力(にゅうりょく)してチャットコマンドをテストしてみましょう。


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