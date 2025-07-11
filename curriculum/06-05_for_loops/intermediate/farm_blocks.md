# 農場: ブロック

## ステップ 1
``||player:チャットコマンド||`` を **tp** に名前を変えてください。``||agent:自分の位置に戻す||`` を **tp** ``||player:チャットコマンド||`` の中にドラッグしてください。

```blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## ステップ 3

別の ``||player:チャットコマンド||``を取って、**farm** と名前をつけましょう。

```blocks
player.onChat("farm", function () { 
 
}) 
```

## ステップ 4
``||agent:スロットに設定させる||`` ブロックを取って、``||player:チャットコマンド farm||``の中にドラッグしましょう。**にんじん**を選択して、数を **64** 、スロットを **1** に設定しましょう。

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
}) 
```

## ステップ 5
``||agent:スロットに設定させる||`` ブロックの下に、``||loops:くりかえし○○回||`` ループを配置しましょう。**2** 回繰り返すように設定して、**farm** ``||player:チャットコマンド||`` の中にドラッグしましょう。

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
      
    } 
}) 
```

## ステップ 6
``||agent:移動させる||`` ブロックを取って、**後ろに7** に設定し、``||loops:くりかえし○○回||`` ループの中にドラッグしましょう。

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        agent.move(BACK, 7) 
    } 
}) 
```

## ステップ 7
別の ``||agent:移動させる||`` を取って、**右に4** に設定し、``||loops:くりかえし○○回||`` ループの中にドラッグしてループの一番下に配置しましょう。

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
別の ``||loops:くりかえし○○回||`` ループを取って、**7** 回繰り返すように設定し、既存の ``||loops:くりかえし○○回||`` ループの中にドラッグしましょう。ただし、``||agent:後ろに７ブロック移動させる||``の上に配置しましょう。

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
``||agent:耕させる||`` ブロックを追加して、**前** に設定し、二番目の中のリピートループの中にドラッグしましょう。  

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
``||agent:移動させる||`` ブロックを追加して、**前に1** に設定し、二番目の中のリピートループの中にドラッグしましょう。

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
``||agent:置かせる||`` ブロックを追加して、**下** に設定し、二番目の中のリピートループの中にドラッグしましょう。

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
**Play** ボタンを押して、Minecraftに入って全てのイベントをテストしましょう。

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
