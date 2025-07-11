# エージェントによる通路破壊: JavaScript


## ステップ 1
``||player:チャットコマンド||``を作成し、**"destroy"** という名前を付けます。

```javascript
player.onChat("destroy", function () {
})
```

## ステップ 2
``||player:チャットコマンド||``の内側に ``||loops:もし〇〇ならくりかえす||``を追加し、エージェントが前方で ``||agent:detects||`` ブロックを検出している間、ループが続くようにします。

```javascript
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {  	
    }
})
```

## ステップ 3
``||loops:もし〇〇ならくりかえす||``の内側で、エージェントが **forward** を ``||agent:破壊させる||`` するようにコーディングします。

```javascript
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
    }
})
```

## ステップ 4

``||loops:もし〇〇ならくりかえす||``の内側の ``||agent:destroy forward||`` コードの後で、エージェントが **1** ブロック ``||agent:move forward||`` するようにコーディングします。

```javascript
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
    }
})
```

## ステップ 5

エージェントが ``||agent:moves forward||`` した後で **up** を ``||agent:破壊させる||`` するようにコーディングし、そして ``||loops:もし〇〇ならくりかえす||``を **終了** します。

```javascript
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
    }
})
```
## ステップ 6

**実行** ボタンを押して、Minecraftに入り、**t** を入力して **destroy** を試してみましょう。

```javascript
player.onChat("destroy", function () { 
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