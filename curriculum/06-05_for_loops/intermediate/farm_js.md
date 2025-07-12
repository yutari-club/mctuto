# 農場(のうじょう): JavaScript

## ステップ 1
``||player:チャットコマンド||`` を作(つく)って、名前(なまえ)を **tp** にします。エージェントが ``||agent:プレイヤーにテレポート||`` するようにコードを書(か)きます。

```javascript
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## ステップ 2
``||player:チャットコマンド||``を作(つく)って、名前(なまえ)を **farm** にします。

```javascript
player.onChat("farm", function () { 
 
}) 
```

## ステップ 3
``||agent:エージェント||`` が **ニンジン** を **64個(こ)** スロット **1** に設定(せってい)するようにコードを書(か)きます。

```javascript
player.onChat("farm", function () {
    agent.setItem(CARROTS, 64, 1)
})
```

## ステップ 4
``||loops:for||`` ループを作(つく)って、**2回(かい)** 繰(く)り返(かえ)すようにします。

```javascript
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
      
    } 
}) 
```

## ステップ 5
``||loops:for||`` ループの中(なか)で、``||agent:エージェント||`` が **後(うし)ろに7歩(ほ)** 移動(いどう)するようにコードを書(か)きます。

```javascript
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        agent.move(BACK, 7) 
    } 
}) 
```

## ステップ 6
``||agent:エージェント移動(いどう)||`` **後(うし)ろ** コードの後(あと)に、``||agent: エージェント||`` が **右(みぎ)に4歩(ほ)** 移動(いどう)するようにコードを書(か)きます。

```javascript
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        agent.move(BACK, 7) 
        agent.move(RIGHT, 4) 
    } 
}) 
```

## ステップ 7
``||loops:for||`` ループを作(つく)って、**7回(かい)** 繰(く)り返(かえ)すようにします。これを最初(さいしょ)の ``||loops:for||`` ループの中(なか)に置(お)きますが、``||agent:移動(いどう)||`` 後(うし)ろコードの上(うえ)に置(お)きます。

```javascript
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        for (let index = 0; index < 7; index++) { 
          
        } 
        agent.move(BACK, 7) 
        agent.move(RIGHT, 4) 
    } 
}) 
```

## ステップ 8
中(なか)の ``||loops:for||`` ループの中(なか)で、``||agent:エージェント||`` が **前(まえ)** を耕(たがや)すようにコードを書(か)きます。

```javascript
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        for (let index = 0; index < 7; index++) { 
            agent.till(FORWARD) 
        } 
        agent.move(BACK, 7) 
        agent.move(RIGHT, 4) 
    } 
}) 
```

## ステップ 9
``||agent:エージェント耕(たがや)す||`` の後(あと)に、``||agent:エージェント||`` が **前(まえ)に1歩(ほ)** 移動(いどう)するようにコードを書(か)きます。

```javascript
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        for (let index = 0; index < 7; index++) { 
            agent.till(FORWARD) 
            agent.move(FORWARD, 1) 
        } 
        agent.move(BACK, 7) 
        agent.move(RIGHT, 4) 
    } 
}) 
```

## ステップ 10
``||agent:エージェント移動(いどう)||`` 前(まえ)の後(あと)に、``||agent:エージェント||`` が下(もと)に置(お)くようにコードを書(か)きます。

```javascript
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        for (let index = 0; index < 7; index++) { 
            agent.till(FORWARD) 
            agent.move(FORWARD, 1) 
            agent.place(DOWN) 
        } 
        agent.move(BACK, 7) 
        agent.move(RIGHT, 4) 
    } 
}) 
```

## ステップ 11
**Play** ボタンを押(お)して、Minecraftに入(はい)って、すべてのイベントをテストしましょう。


```javascript
player.onChat("farm", function () {
    agent.setItem(CARROTS, 64, 1)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 7; index++) {
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.move(BACK, 7)
        agent.move(RIGHT, 4)
    }
})
```
```ghost
agent.teleportToPlayer()
agent.move(FORWARD, 1)
agent.turn(LEFT_TURN)
```
