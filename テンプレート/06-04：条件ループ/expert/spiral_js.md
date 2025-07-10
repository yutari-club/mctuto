# 螺旋アクティビティ: JavaScript


## ステップ 1
``||player:on chat||`` コマンドを作成し、**"spiral"** という名前を付けます。

```javascript
player.onChat("spiral", function () {
})
```

## ステップ 2

エージェントが ``||agent:agent inspects||`` ブロック **forward** が **gold** のブロックと等しくない間の ``||loops:while||`` ループをコーディングします。

```javascript
player.onChat("spiral", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
    	
    }
})
```

## ステップ 3

``||loops:while||`` ループの内側に入る ``||logic:if-else||`` 文をコーディングします。エージェントが **forward** でブロックを ``||agent:does NOT detect||`` する場合、**1** ブロック **forward** に ``||agent:moves||`` するという条件から始めます。

```javascript
player.onChat("spiral", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
        if (!(agent.detect(AgentDetection.Block, FORWARD))) {
            agent.move(FORWARD, 1)
        } else {
        	
        }
    }
})
```

## ステップ 4

``||logic:if-else statement||`` の ``||logic:else||`` 句で、``||agent:turns||`` **left** するように記述します。

```javascript
player.onChat("spiral", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
        if (!(agent.detect(AgentDetection.Block, FORWARD))) {
            agent.move(FORWARD, 1)
        } else {
            agent.turn(LEFT_TURN)
        }
    }
})
```

## ステップ 5
**実行** ボタンを押して、Minecraftに入り、**t** を入力して **spiral** を試してみましょう。

```javascript
player.onChat("spiral", function () { 
    for (let index = 0; index < 2; index++) { 
        while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) { 
            if (!(agent.detect(AgentDetection.Block, FORWARD))) { 
                agent.move(FORWARD, 1) 
            } else { 
                agent.turn(LEFT_TURN) 
            } 
        } 
        agent.move(UP, 3) 
    } 
}) 
```
```ghost
agent.teleportToPlayer()
```