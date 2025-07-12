# メガジャンプ: JavaScript

## ステップ 1
**"jump"** という名前(なまえ)の ``||player:チャットコマンド||``を追加(ついか)します。

```javascript
player.onChat("jump", function () { 
}) 
```

## ステップ 2

``||player:chat||`` コマンドの中(なか)にコードを追加(ついか)して、プレイヤーを位置(いち) **(0,100,0)** に ``||player:teleport||`` します（現在(げんざい)の位置(いち)より100ブロック高(たか)い位置(いち)）。

```javascript
player.onChat("jump", function () { 
   player.teleport(pos(0,100,0))  
}) 
```

## ステップ 3

Minecraftでチャットに jump と入力(にゅうりょく)して試(ため)してみましょう。


## ステップ 4

"jump" チャットコマンドに **num1** という名前(なまえ)の ``||variable: variable||`` を追加(ついか)します。

```javascript
    player.onChat("jump", function (num1) { 
        player.teleport(pos(0,100,0))  
}) 
```

## ステップ 5

``||player:teleport||`` 位置(いち)の **100** を ``||variable||`` **num1** に変更(へんこう)します。

```javascript
   player.onChat("jump", function (num1) { 
      player.teleport(pos(0,num1,0))  

}) 
```

## ステップ 6

Minecraftでチャットに jump と数字(すうじ)を入力(にゅうりょく)して試(ため)してみましょう。（例(れい)：jump 50 または jump 100）


```javascript
player.onChat("jump", function (num1) { 
   player.teleport(pos(0,num1,0))  
}) 
```