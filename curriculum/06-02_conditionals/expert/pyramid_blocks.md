# エージェントのピラミッド: ブロック


## ステップ 1
``||player:チャットコマンド||``を作成し、**"pyramid"** という名前を付けます。**(+)** 記号をクリックして新しい **size** 変数を作成します。

```blocks
player.onChat("pyramid", function (size){ 
 
}) 
```

## ステップ 2
``||logic:if-then||`` 文を取得し、**pyramid** ``||player:チャットコマンド||``にドラッグします。``||logic: comparison||`` を ``||logic:if-then||`` 条件文の **true** 引数にドラッグし、**>**（より大きい）に設定します。次に、**size** 変数を最初の引数 **left** に挿入します。右の引数は空のままにします。

```blocks
player.onChat("pyramid", function (size)){ 
    let size = 0 
    if (size > 0) { 
      
    } 
```

## ステップ 3

``||agent:set block or item||`` を ``||logic:if-then||`` 条件文に追加し、**Sandstone** を選択します。``||math: return product||`` を **count** フィールドにドラッグし、**multiply** に設定して、**size** 変数を積（乗算テンプレート）の両方の引数にドラッグし、**in slot** 引数を **1** に設定します。

```blocks
player.onChat("pyramid", function (size){ 
    let size = 0 
    if (size > 0) { 
        agent.setItem(SANDSTONE, size * size, 1) 
    } 
}) 
```

## ステップ 4

``||agent:set active slot||`` ブロックを ``||logic:if-then||`` 条件文に追加し、**slot** 引数を 1 に設定します。

```blocks
        agent.setItem(SANDSTONE, size * size, 1) 
        agent.setSlot(1) 
    } 
})
```

## ステップ 5

``||agent:place on move||`` ブロックを ``||logic:if-then||`` 条件文に追加し、**logical** 引数を **true** に設定します。

```blocks
        agent.setSlot(1) 
        agent.setAssist(PLACE_ON_MOVE, true) 
    } 
}) 
```

## ステップ 6

``||loops:for||`` ループを取得し、``||logic:if-then||`` 条件文にドラッグします。**I** という名前の新しい変数を作成し、``||loops:for||`` ループの **index** にドラッグします。エージェント ``||agent:place on move||`` の後に、2つの数の ``||math:return difference||`` を追加し、4引く1に設定します。
	
```blocks
    agent.setAssist(PLACE_ON_MOVE, true) 
        for (let i = 0; i <= 0 - 0; i++) { 
          
        } 
    } 
```

## ステップ 7

``||agent:agent move||`` ブロックを ``||loops:for||`` ループに追加し、最初の引数を **forward** に設定し、2番目の引数を **size** に設定します。

```blocks
        for (let i = 0; i <= 0 - 0; i++) { 
            agent.move(FORWARD, size) 
        } 
```

## ステップ 8

``||agent:agent turn||`` を ``||loops:for||`` ループの最後に追加し、**left turn** に設定します。

```blocks
for (let i = 0; i <= 0 - 0; i++) { 
            agent.move(FORWARD, size) 
            agent.turn(LEFT_TURN) 
        } 
```

## ステップ 9

forループの外で、別の ``||agent:agent move||`` ブロックを追加し、**up by 1** に設定してから、``||logic:if-then||`` 条件文の最後にドラッグします。

```blocks
   } 
        agent.move(UP, 1) 
    } 
```


## ステップ 10

``||agent:agent place on move||`` ブロックを追加し、**false** に設定して、``||logic:if-then||`` 条件文の最後にドラッグします。別の ``||agent:agent move||`` ブロックを追加し、**forward by 1** に設定して、``||logic:if-then||`` 条件文の最後にドラッグします。

```blocks
  agent.move(UP, 1) 
        agent.setAssist(PLACE_ON_MOVE, false)
```

## ステップ 11


``||player:run chat||`` コマンドを取得し、ワークスペースにドラッグします。``||text:join||`` を取得し、``||player:run chat||`` コマンドの **string** 引数にドラッグします。``||text:join||`` の最初の文字列引数に **pyramid** と入力します。``||math:return difference||`` を取得し、``||text:join||`` の2番目の文字列引数にドラッグします。**size** 変数を ``||math:return difference||`` ブロックの最初のフィールドに追加し、``||math:return difference||`` の2番目のフィールドを **2** に設定します。完成した ``||player:run chat||`` コマンドを ``||logic:if-then||`` 条件文の最後にドラッグします。

```blocks
        agent.setAssist(PLACE_ON_MOVE, false) 
        player.runChatCommand("pyramid" + (size - 2)) 
    } 
}) 
```

## ステップ 12

Minecraftに入り、**t** を入力して **pyramid** チャットコマンドをテストしてみましょう。**pyramid** の後に **数字** を追加することを忘れないでください。

```blocks
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