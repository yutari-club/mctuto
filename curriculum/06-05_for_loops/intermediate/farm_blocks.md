# 農場(のうじょう): ブロック

## ステップ 1
``||player:チャットコマンド||`` を **tp** に名前(なまえ)を変(か)えてください。``||agent:自分(じぶん)の位置(いち)に戻(もど)す||`` を **tp** ``||player:チャットコマンド||`` の中(なか)にドラッグしてください。
```template
{}
```

```blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## ステップ 3

別(べつ)の ``||player:チャットコマンド||``を取(と)って、**farm** と名前(なまえ)をつけましょう。

```blocks
player.onChat("farm", function () { 
 
}) 
```

## ステップ 4
``||agent:スロットに設定(せってい)させる||`` ブロックを取(と)って、``||player:チャットコマンド farm||``の中(なか)にドラッグしましょう。**にんじん**を選択(せんたく)して、数(かず)を **64** 、スロットを **1** に設定(せってい)しましょう。

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
}) 
```

## ステップ 5
``||agent:スロットに設定(せってい)させる||`` ブロックの下(した)に、``||loops:くりかえし○○回(かい)||`` ループを配置(はいち)しましょう。**2** 回(かい)繰(く)り返(かえ)すように設定(せってい)して、**farm** ``||player:チャットコマンド||`` の中(なか)にドラッグしましょう。

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
      
    } 
}) 
```

## ステップ 6
``||agent:移動(いどう)させる||`` ブロックを取(と)って、**後(うし)ろに7** に設定(せってい)し、``||loops:くりかえし○○回(かい)||`` ループの中(なか)にドラッグしましょう。

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        agent.move(BACK, 7) 
    } 
}) 
```

## ステップ 7
別(べつ)の ``||agent:移動(いどう)させる||`` を取(と)って、**右(みぎ)に4** に設定(せってい)し、``||loops:くりかえし○○回(かい)||`` ループの中(なか)にドラッグしてループの一番(ばん)下(か)に配置(はいち)しましょう。

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        agent.move(BACK, 7) 
        agent.move(RIGHT, 4) 
    } 
}) 
```

## ステップ 8
別(べつ)の ``||loops:くりかえし○○回(かい)||`` ループを取(と)って、**7** 回(かい)繰(く)り返(かえ)すように設定(せってい)し、既存(きそん)の ``||loops:くりかえし○○回(かい)||`` ループの中(なか)にドラッグしましょう。ただし、``||agent:後(うし)ろに７ブロック移動(いどう)させる||``の上(うえ)に配置(はいち)しましょう。

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        for (let index = 0; index < 7; index++) { 
          
        } 
        agent.move(BACK, 7) 
        agent.move(RIGHT, 4) 
    } 
}) 
```

## ステップ 9
``||agent:耕(たがや)させる||`` ブロックを追加(ついか)して、**前(まえ)** に設定(せってい)し、二番(ばん)目(め)の中(なか)のリピートループの中(なか)にドラッグしましょう。  

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        for (let index = 0; index < 7; index++) { 
            agent.till(FORWARD) 
        } 
        agent.move(BACK, 7) 
        agent.move(RIGHT, 4) 
    } 
}) 
```

## ステップ 10
``||agent:移動(いどう)させる||`` ブロックを追加(ついか)して、**前(まえ)に1** に設定(せってい)し、二番(ばん)目(め)の中(なか)のリピートループの中(なか)にドラッグしましょう。

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        for (let index = 0; index < 7; index++) { 
            agent.till(FORWARD) 
            agent.move(FORWARD, 1) 
        } 
        agent.move(BACK, 7) 
        agent.move(RIGHT, 4) 
    } 
}) 
```

## ステップ 11
``||agent:置(お)かせる||`` ブロックを追加(ついか)して、**下(した)** に設定(せってい)し、二番(ばん)目(め)の中(なか)のリピートループの中(なか)にドラッグしましょう。

```blocks
player.onChat("farm", function () {
    agent.setItem(CARROTS, 64, 1)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 7; index++) {
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.move(BACK, 7)
        agent.move(RIGHT, 4)
    }
})
```

## ステップ 12
**Play** ボタンを押(お)して、Minecraftに入(はい)って全(すべ)てのイベントをテストしましょう。

```blocks
player.onChat("farm", function () {
    agent.setItem(CARROTS, 64, 1)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 7; index++) {
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.move(BACK, 7)
        agent.move(RIGHT, 4)
    }
})
```

```ghost
agent.teleportToPlayer()
agent.move(FORWARD, 1)
agent.turn(LEFT_TURN)
```
