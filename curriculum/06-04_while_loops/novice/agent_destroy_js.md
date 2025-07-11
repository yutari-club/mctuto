# エージェントによる通路破壊: JavaScript


## ステップ 1
``||player:チャットコマンド||``を作成し、**"1"** という名前を付けます。

```javascript
player.onChat("1", function () {
})
```

## ステップ 2
``||player:チャットコマンド||``の中に ``||loops:もし〇〇ならくりかえす||``を入れて、エージェントが前にブロックを見つけている間、ループが続くようにします。

```javascript
player.onChat("1", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {  	
    }
})
```

## ステップ 3
``||loops:もし〇〇ならくりかえす||``の中で、エージェントが **前のブロック** を ``||agent:破壊させる||`` するようにコードを書きます。

```javascript
player.onChat("1", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
    }
})
```

## ステップ 4

``||loops:もし〇〇ならくりかえす||``の中の ``||agent:destroy forward||`` コードの後で、エージェントが **1** ブロック ``||agent:move forward||`` するようにコードを書きます。

```javascript
player.onChat("1", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
    }
})
```

## ステップ 5

エージェントが ``||agent:moves forward||`` した後で **上のブロック** を ``||agent:破壊させる||`` するようにコードを書き、そして ``||loops:もし〇〇ならくりかえす||``を **終了** します。

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

**実行** ボタンを押して、Minecraftに入り、**t** を押して **destroy** と入力して試してみましょう。

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