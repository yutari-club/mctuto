# 螺旋(らせん)アクティビティ: JavaScript


## ステップ 1
``||player:チャットコマンド||``を作(つく)って、**"3"** という名前(なまえ)を付(つ)けます。

```javascript
player.onChat("3", function () {
})
```

## ステップ 2

エージェントが前(まえ)にあるブロックを調(しら)べて、**金(きん)** のブロックではない間(あいだ)続(つづ)く ``||loops:もし〇〇ならくりかえす||``をコードで書(か)きます。

```javascript
player.onChat("3", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
    	
    }
})
```

## ステップ 3

``||loops:もし〇〇ならくりかえす||``の中(なか)に ``||logic:もし-でなければ||`` 文(ぶん)をコードで書(か)きます。エージェントが **前(まえ)** にブロックを見(み)つけない場合(ばあい)、**1** ブロック **前(まえ)** に移動(いどう)するという条件(じょうけん)から始(はじ)めます。

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

``||logic:if-else statement||`` の ``||logic:でなければ||`` 句(く)で、``||agent:turns||`` **left** するように記述(きじゅつ)します。

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
**実行(じっこう)** ボタンを押(お)して、Minecraftに入(はい)り、**t** を入力(にゅうりょく)して **spiral** を試(ため)してみましょう。

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