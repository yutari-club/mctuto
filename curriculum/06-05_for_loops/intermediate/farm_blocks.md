# 農場: ブロック

## ステップ 1
``||player: on chat||`` コマンドを **tp** に名前を変えてください。``||agent:agent teleport||`` を **tp** ``||player: on chat||`` コマンドの中にドラッグしてください。

```blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## ステップ 3

別の ``||player:チャットコマンド||``を取得して、**farm** と名前をつけてください。

```blocks
player.onChat("farm", function () { 
 
}) 
```

## ステップ 4
``||agent:set block or item||`` ブロックを取得して、**farm** ``||player:チャットコマンド||``の中にドラッグしてください。**carrots**を選択して、数を **64** 、スロットを **1** に設定してください。

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
}) 
```

## ステップ 5
``||agent:set block or item||`` ブロックの下に、``||loops:repeat||`` ループを配置してください。**2** 回繰り返すように設定して、**farm** ``||player: on chat||`` コマンドの中にドラッグしてください。

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
      
    } 
}) 
```

## ステップ 6
``||agent:agent move||`` ブロックを取得して、**back by 7** に設定し、``||loops:repeat||`` ループの中にドラッグしてください。

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        agent.move(BACK, 7) 
    } 
}) 
```

## ステップ 7
別の ``||agent:agent move||`` を取得して、**right by 4** に設定し、``||loops:repeat||`` ループの中にドラッグしてループの一番下に配置してください。

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
別の ``||loops:repeat||`` ループを取得して、**7** 回繰り返すように設定し、既存の ``||loops:repeat||`` ループの中にドラッグしてください。ただし、``||agent:移動させる||`` **back by 7** の上に配置してください。

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
``||agent:till||`` ブロックを追加して、**forward** に設定し、二番目の内側リピートループの中にドラッグしてください。  

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
``||agent:移動させる||`` ブロックを追加して、**forward by 1** に設定し、二番目の内側リピートループの中にドラッグしてください。

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
``||agent:place||`` ブロックを追加して、**down** に設定し、二番目の内側リピートループの中にドラッグしてください。

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
**Play** ボタンを押して、Minecraftに入って全てのイベントをテストしてください。

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
