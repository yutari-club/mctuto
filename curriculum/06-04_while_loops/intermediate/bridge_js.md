# 橋を建設: JavaScript


## ステップ 1
``||player:チャットコマンド||``を作って、**"build"** という名前を付けます。

```javascript
player.onChat("build", function () {
})
```

## ステップ 2
``||player:チャットコマンド||``の中で、エージェントが **オークの板材** を数量 **64**、スロット **1** に設定するようにコードを書きます。

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
})
```

## ステップ 3
エージェントが **1** ブロック ``||agent:move forward||`` するようにコードを書きます。

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
})
```

## ステップ 4

``||player:チャットコマンド||``の中で、エージェントが **下** にブロックがないかどうかをチェックする ``||loops:もし〇〇ならくりかえす||``をコードで書きます。

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
    	
    }
})
```

## ステップ 5

``||loops:もし〇〇ならくりかえす||``の中で、エージェントが **下** にブロックを置くようにコードを書きます。

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
        agent.place(DOWN)
    }
})
```

## ステップ 6

``||agent:place down||`` コマンドの後で、エージェントが **前に1ブロック** 移動するようにコードを書きます。そして ``||loops:もし〇〇ならくりかえす||``を終了します。

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
```
## ステップ 7
**実行** ボタンを押して、Minecraftに入り、**t** を押して **build** と入力して試してみましょう。

```javascript
player.onChat("build", function () { 
    agent.setItem(PLANKS_OAK, 64, 1) 
    agent.move(FORWARD, 1) 
    while (!(agent.detect(AgentDetection.Block, DOWN))) { 
        agent.place(DOWN) 
        agent.move(FORWARD, 1) 
    } 
}) 
```

```ghost
agent.teleportToPlayer()
```