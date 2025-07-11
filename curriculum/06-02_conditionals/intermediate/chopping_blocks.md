# 木を切る: ブロック

## ステップ 1
``||player:チャットコマンド||``を取得し、**"tp"** という名前を付けます。

```blocks
player.onChat("tp", function () {
})
```

## ステップ 2
エージェントの ``||agent:teleport to player||`` を取得し、**tp** ``||player:チャットコマンド||``の内側にドラッグします。

```blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## ステップ 3

別の ``||player:チャットコマンド||``を作成し、**"chop"** という名前を付けます。

```blocks
player.onChat("chop", function () {
})
```

## ステップ 4

新しい ``||variable: variable||`` を作成し、**height** という名前を付けて、**0** に設定します。この新しい変数を **chop** ``||player:チャットコマンド||``にドラッグします。

```blocks
let height = 0
player.onChat("chop", function () {
    height = 0
})
```

## ステップ 5

``||loops: while||`` ループを取得し、ワークスペースにドラッグします。``||agent:〇〇がある[見つける]||`` ブロックを取得し、**block** と **forward** に設定します。``||agent:〇〇がある[見つける]||`` ブロックを ``||loops:もし〇〇ならくりかえす||``の内側にドラッグし、次にwhileループを **chop** ``||player:チャットコマンド||``の **height** 変数の直下にドラッグします。

```blocks
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {
    	
    }
```

## ステップ 6

``||variable: change variable||`` を取得し、**height plus 1** の値に設定します。**height** 変数を ``||loops: while||`` ループにドラッグします。

```blocks
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        height += 1
    }
```

## ステップ 7

``||agent:agent destroy||`` を取得し、**up** に設定します。``||loops: while||`` ループの変数 **height** の下にドラッグします。``||agent:移動させる||`` を取得し、**up by 1** に設定します。``||agent:agent destroy||`` の直下の ``||loops: while||`` ループにドラッグします。

```blocks
   let height = 0
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
    }
})
```


## ステップ 8

``||loops: while||`` ループの後に ``||loops:repeat||`` ループを追加します。**height** 変数を取得し、``||loops:repeat||`` ループの **times** 引数にドラッグします。

```blocks
let height = 0
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
    }
    for (let index = 0; index < height; index++) {
    	
    }
})
```

## ステップ 9

``||agent:移動させる||`` ブロック（上記から）を複製し、**down** に変更します。``||agent:agent move down||`` を ``||loops:repeat||`` ループにドラッグします。``||agent: agent destroy||``（上記から）を複製し、**destroy forward** に変更します。``||agent:agent destroy forward||`` を ``||loops:repeat||`` ループにドラッグします。``||agent:移動させる||`` の直下に配置します。

```blocks
let height = 0
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
    }
    for (let index = 0; index < height; index++) {
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    }
})

```

## ステップ 10

``||agent:collect all||`` ブロックを取得し、``||agent:agent destroy forward||`` の下の ``||loops:repeat||`` ループにドラッグします。

```blocks
    }
    agent.collectAll()
})
```

## ステップ 11

Minecraftに入り、**t** を押して、**tp** と **chop** チャットコマンドを入力してチュートリアルをテストしてみましょう。
```blocks
let height = 0
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
    }
    for (let index = 0; index < height; index++) {
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    }
    agent.collectAll()
})
```