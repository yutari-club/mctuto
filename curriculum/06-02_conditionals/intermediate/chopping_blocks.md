# 木(き)を切(き)る: ブロック


```template
{}
```

## ステップ 1
``||player:チャットコマンド||``を取(と)って、**"tp"** という名前(なまえ)を付(つ)けましょう。

```blocks
player.onChat("tp", function () {
})
```

## ステップ 2
エージェントの ``||agent:teleport to player||`` を取(と)って、**tp** ``||player:チャットコマンド||``の中(なか)にドラッグしましょう。

```blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## ステップ 3

別(べつ)の ``||player:チャットコマンド||``を作(つく)って、**"chop"** という名前(なまえ)を付(つ)けましょう。

```blocks
player.onChat("chop", function () {
})
```

## ステップ 4

新(あたら)しい ``||variable: variable||`` を作(つく)って、**height** という名前(なまえ)を付(つ)けて、**0** に設定(せってい)しましょう。この新(あたら)しい変数(へんすう)を **chop** ``||player:チャットコマンド||``にドラッグしましょう。

```blocks
let height = 0
player.onChat("chop", function () {
    height = 0
})
```

## ステップ 5

``||loops: while||`` ループを取(と)って、ワークスペースにドラッグしましょう。``||agent:〇〇がある[見(み)つける]||`` ブロックを取(と)って、**block** と **forward** に設定(せってい)しましょう。``||agent:〇〇がある[見(み)つける]||`` ブロックを ``||loops:もし〇〇ならくりかえす||``の中(なか)にドラッグし、次(つぎ)にwhileループを **chop** ``||player:チャットコマンド||``の **height** 変数(へんすう)の直下(ちょっか)にドラッグしましょう。

```blocks
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {
    	
    }
```

## ステップ 6

``||variable: change variable||`` を取(と)って、**height plus 1** の値(ね)に設定(せってい)しましょう。**height** 変数(へんすう)を ``||loops: while||`` ループにドラッグしましょう。

```blocks
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        height += 1
    }
```

## ステップ 7

``||agent:agent destroy||`` を取(と)って、**up** に設定(せってい)しましょう。``||loops: while||`` ループの変数(へんすう) **height** の下(した)にドラッグしましょう。``||agent:移動(いどう)させる||`` を取(と)って、**up by 1** に設定(せってい)しましょう。``||agent:agent destroy||`` の直下(ちょっか)の ``||loops: while||`` ループにドラッグしましょう。

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

``||loops: while||`` ループの後(あと)に ``||loops:くりかえし○○回(かい)||`` ループを追加(ついか)しましょう。**height** 変数(へんすう)を取(と)って、``||loops:くりかえし○○回(かい)||`` ループの **times** 引数(ひきすう)にドラッグしましょう。

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

``||agent:移動(いどう)させる||`` ブロック（上記(じょうき)から）を複製(ふくせい)し、**down** に変更(へんこう)しましょう。``||agent:agent move down||`` を ``||loops:くりかえし○○回(かい)||`` ループにドラッグしましょう。``||agent: agent destroy||``（上記(じょうき)から）を複製(ふくせい)し、**destroy forward** に変更(へんこう)しましょう。``||agent:agent destroy forward||`` を ``||loops:くりかえし○○回(かい)||`` ループにドラッグしましょう。``||agent:移動(いどう)させる||`` の直(ひた)下(もと)に置(お)きましょう。

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

``||agent:collect all||`` ブロックを取(と)って、``||agent:agent destroy forward||`` の下(した)の ``||loops:くりかえし○○回(かい)||`` ループにドラッグしましょう。

```blocks
    }
    agent.collectAll()
})
```

## ステップ 11

Minecraftに入(はい)り、**t** を押(お)して**tp** と入力(にゅうりょく)し、**chop** と入力(にゅうりょく)してチャットコマンドをテストしてみましょう。
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