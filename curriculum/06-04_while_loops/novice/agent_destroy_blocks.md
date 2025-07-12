### @hideIteration false

# エージェントによる通路(つうろ)破壊(はかい): ブロック

## ステップ 1
``||player:チャットコマンド||``の名前(なまえ)を **"1"** に変更(へんこう)します。

```template
{}
```

```blocks
player.onChat("1", function () {
})
```

## ステップ 2
``||player:チャットコマンド||``の中(なか)に ``||loops:もし〇〇ならくりかえす||``を入(い)れます。``||agent:〇〇がある[見(み)つける]||`` ブロックを取(と)って、``||loops:もし〇〇ならくりかえす||``の **偽(にせ)** の部分(ぶぶん)にドラッグします。``||agent:〇〇がある[見(み)つける]||`` ブロックを **ブロック** と **前(まえ)** に設定(せってい)します。

```template
{}
```

```blocks
player.onChat("1", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
    	
    }
})
```

## ステップ 3
``||agent:破壊(はかい)させる||`` ブロックを取(と)って、**前(まえ)** に設定(せってい)して、``||loops:もし〇〇ならくりかえす||``にドラッグします。

```template
{}
```

```blocks
player.onChat("1", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
    }
})
```

## ステップ 4

``||agent:移動(いどう)させる||`` ブロックを取(と)って、**前(まえ)** に **1** ブロック移動(いどう)するように設定(せってい)します。``||agent:移動(いどう)させる||`` ブロックを ``||agent:破壊(はかい)させる||`` ブロックの後(あと)の ``||loops:もし〇〇ならくりかえす||``にドラッグします。

```template
{}
```

```blocks
player.onChat("1", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
    }
})
```

## ステップ 5

``||agent:破壊(はかい)させる||`` ブロックを取(と)って、**上(うえ)** に設定(せってい)します。``||agent:破壊(はかい)させる||`` ブロックを ``||agent:移動(いどう)させる||`` の後(あと)の ``||loops:もし〇〇ならくりかえす||``にドラッグします。

```template
{}
```

```blocks
player.onChat("1", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
    }
})
```

## ステップ 6

**実行(じっこう)** ボタンを押(お)して、Minecraftに入(はい)り、**t** を押(お)して **destroy** と入力(にゅうりょく)して試(ため)してみましょう。

```template
{}
```

```blocks
player.onChat("1", function () { 
    while (agent.detect(AgentDetection.Block, FORWARD)) { 
        agent.destroy(FORWARD) 
        agent.move(FORWARD, 1) 
        agent.destroy(UP) 
    } 
})
```

```ghost
agent.teleportToPlayer()
```