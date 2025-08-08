# エージェントのピラミッド: ブロック


```template
{}
```

## ステップ 1
``||player:チャットコマンド||``を作(つく)って、**"pyramid"** という名前(なまえ)を付(つ)けましょう。**(+)** 記号(きごう)をクリックして新(あたら)しい **size** 変数(へんすう)を作(つく)って。

```blocks
player.onChat("pyramid", function (size){ 
 
}) 
```

## ステップ 2
``||logic:if-then||`` 文(ぶん)を取(と)って、**pyramid** ``||player:チャットコマンド||``にドラッグしましょう。``||logic: comparison||`` を ``||logic:if-then||`` 条件(じょうけん)文(ぶん)の **true** 引数(ひきすう)にドラッグし、**>**（より大(おお)きい）に設定(せってい)しましょう。次(つぎ)に、**size** 変数(へんすう)を最初(さいしょ)の引数(ひきすう) **left** に挿入(そうにゅう)しましょう。右(みぎ)の引数(ひきすう)は空(そら)のままにしましょう。

```blocks
player.onChat("pyramid", function (size)){ 
    let size = 0 
    if (size > 0) { 
      
    } 
```

## ステップ 3

``||agent:スロットに設定(せってい)させる||`` を ``||logic:if-then||`` 条件(じょうけん)文(ぶん)に追加(ついか)し、**Sandstone** を選択(せんたく)しましょう。``||math: return product||`` を **count** フィールドにドラッグし、**multiply** に設定(せってい)して、**size** 変数(へんすう)を積(せき)（乗算(じょうざん)テンプレート）の両方(りょうほう)の引数(ひきすう)にドラッグし、**in slot** 引数(ひきすう)を **1** に設定(せってい)しましょう。

```blocks
player.onChat("pyramid", function (size){ 
    let size = 0 
    if (size > 0) { 
        agent.setItem(SANDSTONE, size * size, 1) 
    } 
}) 
```

## ステップ 4

``||agent:set active slot||`` ブロックを ``||logic:if-then||`` 条件(じょうけん)文(ぶん)に追加(ついか)し、**slot** 引数(ひきすう)を 1 に設定(せってい)しましょう。

```blocks
        agent.setItem(SANDSTONE, size * size, 1) 
        agent.setSlot(1) 
    } 
})
```

## ステップ 5

``||agent:place on move||`` ブロックを ``||logic:if-then||`` 条件(じょうけん)文(ぶん)に追加(ついか)し、**logical** 引数(ひきすう)を **true** に設定(せってい)しましょう。

```blocks
        agent.setSlot(1) 
        agent.setAssist(PLACE_ON_MOVE, true) 
    } 
}) 
```

## ステップ 6

``||loops:for||`` ループを取(と)って、``||logic:if-then||`` 条件(じょうけん)文(ぶん)にドラッグしましょう。**I** という名前(なまえ)の新(あたら)しい変数(へんすう)を作(つく)って、``||loops:for||`` ループの **index** にドラッグしましょう。エージェント ``||agent:place on move||`` の後(あと)に、2つの数(かず)の ``||math:return difference||`` を追加(ついか)し、4引(ひ)く1に設定(せってい)しましょう。
	
```blocks
    agent.setAssist(PLACE_ON_MOVE, true) 
        for (let i = 0; i <= 0 - 0; i++) { 
          
        } 
    } 
```

## ステップ 7

``||agent:移動(いどう)させる||`` ブロックを ``||loops:for||`` ループに追加(ついか)し、最初(さいしょ)の引数(ひきすう)を **forward** に設定(せってい)し、2番目(ばんめ)の引数(ひきすう)を **size** に設定(せってい)しましょう。

```blocks
        for (let i = 0; i <= 0 - 0; i++) { 
            agent.move(FORWARD, size) 
        } 
```

## ステップ 8

``||agent:agent turn||`` を ``||loops:for||`` ループの最後(さいご)に追加(ついか)し、**left turn** に設定(せってい)しましょう。

```blocks
for (let i = 0; i <= 0 - 0; i++) { 
            agent.move(FORWARD, size) 
            agent.turn(LEFT_TURN) 
        } 
```

## ステップ 9

forループの外(そと)で、別(べつ)の ``||agent:移動(いどう)させる||`` ブロックを追加(ついか)し、**up by 1** に設定(せってい)してから、``||logic:if-then||`` 条件(じょうけん)文(ぶん)の最後(さいご)にドラッグしましょう。

```blocks
   } 
        agent.move(UP, 1) 
    } 
```


## ステップ 10

``||agent:agent place on move||`` ブロックを追加(ついか)し、**false** に設定(せってい)して、``||logic:if-then||`` 条件(じょうけん)文(ぶん)の最後(さいご)にドラッグしましょう。別(べつ)の ``||agent:移動(いどう)させる||`` ブロックを追加(ついか)し、**forward by 1** に設定(せってい)して、``||logic:if-then||`` 条件(じょうけん)文(ぶん)の最後(さいご)にドラッグしましょう。

```blocks
  agent.move(UP, 1) 
        agent.setAssist(PLACE_ON_MOVE, false)
```

## ステップ 11


``||player:run chat||`` コマンドを取(と)って、ワークスペースにドラッグしましょう。``||text:join||`` を取(と)って、``||player:run chat||`` コマンドの **string** 引数(ひきすう)にドラッグしましょう。``||text:join||`` の最初(さいしょ)の文字列(もじれつ)引数(ひきすう)に **pyramid** と入力(にゅうりょく)しましょう。``||math:return difference||`` を取(と)って、``||text:join||`` の2番目(ばんめ)の文字列(もじれつ)引数(ひきすう)にドラッグしましょう。**size** 変数(へんすう)を ``||math:return difference||`` ブロックの最初(さいしょ)のフィールドに追加(ついか)し、``||math:return difference||`` の2番目(ばんめ)のフィールドを **2** に設定(せってい)しましょう。完成(かんせい)した ``||player:run chat||`` コマンドを ``||logic:if-then||`` 条件(じょうけん)文(ぶん)の最後(さいご)にドラッグしましょう。

```blocks
        agent.setAssist(PLACE_ON_MOVE, false) 
        player.runChatCommand("pyramid" + (size - 2)) 
    } 
}) 
```

## ステップ 12

Minecraftに入(はい)り、**t** を押(お)して**pyramid** と入力(にゅうりょく)してチャットコマンドをテストしてみましょう。**pyramid** の後(あと)に **数字(すうじ)** を追加(ついか)することを忘(わす)れないでください。

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