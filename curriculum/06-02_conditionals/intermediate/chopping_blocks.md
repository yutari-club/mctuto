# 木を切る: ブロック

## ステップ 1
``||player:チャットコマンド||``を取って、**"tp"** という名前を付けましょう。

```blocks
player.onChat("tp", function () {
})
```

## ステップ 2
エージェントの ``||agent:teleport to player||`` を取って、**tp** ``||player:チャットコマンド||``の中にドラッグしましょう。

```blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## ステップ 3

別の ``||player:チャットコマンド||``を作って、**"chop"** という名前を付けましょう。

```blocks
player.onChat("chop", function () {
})
```

## ステップ 4

新しい ``||variable: variable||`` を作って、**height** という名前を付けて、**0** に設定しましょう。この新しい変数を **chop** ``||player:チャットコマンド||``にドラッグしましょう。

```blocks
let height = 0
player.onChat("chop", function () {
    height = 0
})
```

## ステップ 5

``||loops: while||`` ループを取って、ワークスペースにドラッグしましょう。``||agent:〇〇がある[見つける]||`` ブロックを取って、**block** と **forward** に設定しましょう。``||agent:〇〇がある[見つける]||`` ブロックを ``||loops:もし〇〇ならくりかえす||``の中にドラッグし、次にwhileループを **chop** ``||player:チャットコマンド||``の **height** 変数の直下にドラッグしましょう。

```blocks
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {
    	
    }
```

## ステップ 6

``||variable: change variable||`` を取って、**height plus 1** の値に設定しましょう。**height** 変数を ``||loops: while||`` ループにドラッグしましょう。

```blocks
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        height += 1
    }
```

## ステップ 7

``||agent:agent destroy||`` を取って、**up** に設定しましょう。``||loops: while||`` ループの変数 **height** の下にドラッグしましょう。``||agent:移動させる||`` を取って、**up by 1** に設定しましょう。``||agent:agent destroy||`` の直下の ``||loops: while||`` ループにドラッグしましょう。

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

``||loops: while||`` ループの後に ``||loops:くりかえし○○回||`` ループを追加しましょう。**height** 変数を取って、``||loops:くりかえし○○回||`` ループの **times** 引数にドラッグしましょう。

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

``||agent:移動させる||`` ブロック（上記から）を複製し、**down** に変更しましょう。``||agent:agent move down||`` を ``||loops:くりかえし○○回||`` ループにドラッグしましょう。``||agent: agent destroy||``（上記から）を複製し、**destroy forward** に変更しましょう。``||agent:agent destroy forward||`` を ``||loops:くりかえし○○回||`` ループにドラッグしましょう。``||agent:移動させる||`` の直下に置きましょう。

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

``||agent:collect all||`` ブロックを取って、``||agent:agent destroy forward||`` の下の ``||loops:くりかえし○○回||`` ループにドラッグしましょう。

```blocks
    }
    agent.collectAll()
})
```

## ステップ 11

Minecraftに入り、**t** を押して**tp** と入力し、**chop** と入力してチャットコマンドをテストしてみましょう。
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