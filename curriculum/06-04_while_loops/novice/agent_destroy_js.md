# エージェントによる通路(つうろ)破壊(はかい): JavaScript


## ステップ 1
``||player:チャットコマンド||``を作成(さくせい)し、**"1"** という名前(なまえ)を付(つ)けます。

```javascript
player.onChat("1", function () {
})
```

## ステップ 2
``||player:チャットコマンド||``の中(なか)に ``||loops:もし〇〇ならくりかえす||``を入(い)れて、エージェントが前(まえ)にブロックを見(み)つけている間(あいだ)、ループが続(つづ)くようにします。

```javascript
player.onChat("1", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {  	
    }
})
```

## ステップ 3
``||loops:もし〇〇ならくりかえす||``の中(なか)で、エージェントが **前(まえ)のブロック** を ``||agent:破壊(はかい)させる||`` するようにコードを書(か)きます。

```javascript
player.onChat("1", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
    }
})
```

## ステップ 4

``||loops:もし〇〇ならくりかえす||``の中(なか)の ``||agent:destroy forward||`` コードの後(あと)で、エージェントが **1** ブロック ``||agent:move forward||`` するようにコードを書(か)きます。

```javascript
player.onChat("1", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
    }
})
```

## ステップ 5

エージェントが ``||agent:moves forward||`` した後(あと)で **上(うえ)のブロック** を ``||agent:破壊(はかい)させる||`` するようにコードを書(か)き、そして ``||loops:もし〇〇ならくりかえす||``を **終了(しゅうりょう)** します。

```javascript
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

```javascript
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