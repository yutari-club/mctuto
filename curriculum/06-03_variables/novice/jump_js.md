# メガジャンプ: JavaScript

## ステップ 1
**"jump"** という名前の ``||player:チャットコマンド||``を追加します。

```javascript
player.onChat("jump", function () { 
}) 
```

## ステップ 2

``||player:chat||`` コマンドの中にコードを追加して、プレイヤーを位置 **(0,100,0)** に ``||player:teleport||`` します（現在の位置より100ブロック高い位置）。

```javascript
player.onChat("jump", function () { 
   player.teleport(pos(0,100,0))  
}) 
```

## ステップ 3

Minecraftでチャットに jump と入力して試してみましょう。


## ステップ 4

"jump" チャットコマンドに **num1** という名前の ``||variable: variable||`` を追加します。

```javascript
    player.onChat("jump", function (num1) { 
        player.teleport(pos(0,100,0))  
}) 
```

## ステップ 5

``||player:teleport||`` 位置の **100** を ``||variable||`` **num1** に変更します。

```javascript
   player.onChat("jump", function (num1) { 
      player.teleport(pos(0,num1,0))  

}) 
```

## ステップ 6

Minecraftでチャットに jump と数字を入力して試してみましょう。（例：jump 50 または jump 100）


```javascript
player.onChat("jump", function (num1) { 
   player.teleport(pos(0,num1,0))  
}) 
```