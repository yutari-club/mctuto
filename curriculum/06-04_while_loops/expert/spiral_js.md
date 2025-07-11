# 螺旋アクティビティ: JavaScript


## ステップ 1
``||player:チャットコマンド||``を作って、**"3"** という名前を付けます。

```javascript
player.onChat("3", function () {
})
```

## ステップ 2

エージェントが前にあるブロックを調べて、**金** のブロックではない間続く ``||loops:もし〇〇ならくりかえす||``をコードで書きます。

```javascript
player.onChat("3", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
    	
    }
})
```

## ステップ 3

``||loops:もし〇〇ならくりかえす||``の中に ``||logic:もし-でなければ||`` 文をコードで書きます。エージェントが **前** にブロックを見つけない場合、**1** ブロック **前** に移動するという条件から始めます。

```javascript
player.onChat("3", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
        if (!(agent.detect(AgentDetection.Block, FORWARD))) {
            agent.move(FORWARD, 1)
        } else {
        	
        }
    }
})
```

## ステップ 4

``||logic:if-else statement||`` の ``||logic:でなければ||`` 句で、``||agent:turns||`` **left** するように記述します。

```javascript
player.onChat("3", function () {
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
player.onChat("3", function () { 
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