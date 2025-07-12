# 橋(はし)を建設(けんせつ): JavaScript


## ステップ 1
``||player:チャットコマンド||``を作(つく)って、**"2"** という名前(なまえ)を付(つ)けます。

```javascript
player.onChat("2", function () {
})
```

## ステップ 2
``||player:チャットコマンド||``の中(なか)で、エージェントが **オークの板材(いたざい)** を数量(すうりょう) **64**、スロット **1** に設定(せってい)するようにコードを書(か)きます。

```javascript
player.onChat("2", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
})
```

## ステップ 3
エージェントが **1** ブロック ``||agent:move forward||`` するようにコードを書(か)きます。

```javascript
player.onChat("2", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
})
```

## ステップ 4

``||player:チャットコマンド||``の中(なか)で、エージェントが **下(した)** にブロックがないかどうかをチェックする ``||loops:もし〇〇ならくりかえす||``をコードで書(か)きます。

```javascript
player.onChat("2", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
    	
    }
})
```

## ステップ 5

``||loops:もし〇〇ならくりかえす||``の中(なか)で、エージェントが **下(した)** にブロックを置(お)くようにコードを書(か)きます。

```javascript
player.onChat("2", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
        agent.place(DOWN)
    }
})
```

## ステップ 6

``||agent:place down||`` コマンドの後(あと)で、エージェントが **前(まえ)に1ブロック** 移動(いどう)するようにコードを書(か)きます。そして ``||loops:もし〇〇ならくりかえす||``を終了(しゅうりょう)します。

```javascript
player.onChat("2", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
```
## ステップ 7
**実行(じっこう)** ボタンを押(お)して、Minecraftに入(はい)り、**t** を押(お)して **build** と入力(にゅうりょく)して試(ため)してみましょう。

```javascript
player.onChat("2", function () { 
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