### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 雨を降らせろ！
<!-- # Make it rain! -->

## Step 1
マインクラフトで踊りながら雨を降らせましょう！<br>
これを実現するには、いくつかのイベントハンドラを使う必要があります。<br>

1. 例えば**walk**、**jump**、**break**などの変数を作成します。<br>
1. イベントハンドラを選択します。例えば``||player:プレイヤーが落下した時||``、``||player:プレイヤー歩いた時||`` などです。<br>
1. 対応する各イベントブロック内で、新しい``||variables:変数||``を``||logic:真||``設定します。<br>
1. ``||loops:ずっと||``ブロックを使用し、その中に``||logic:if文||``をドラッグします。<br>

すべての条件を``||logic:真||``設定し、``||gameplay: 現在の天気を||``ブロックを**雨**に設定します。<br>

<!-- Make it rain while you dance in Minecraft! To make it happen you will need to use several event handlers. 
1. Create your variables, for example: **walk**, **jump** and/or **break**. 
2. Select the event handlers, for example ``||player: on player fall||``, ``||player: on player walk||``. 
3. Set your new ``||variables||`` to ``||logic: true||`` inside each corresponding event block. 
4. Use a ``||loop: forever||`` block and drag an ``||logic: if statement||``  inside of it. 
Set all your conditions to ``||logic:true||`` and add ``||gameplay: weather||`` block set to  **rain** to it.  -->

```template
{}
``` 

### ~ tutorialHint
```blocks
let walk = false
player.onTravelled(WALK, function () {
    walk = true
})
loops.forever(function () {
    if (walk == true && "" == "") {
    	
    }
})

```

```ghost
let climb = false
let walk = false
let _break = false
player.onTravelled(CLIMB, function () {
    climb = true
})
player.onTravelled(WALK, function () {
    walk = true
})
blocks.onBlockBroken(STONE, function () {
    _break = true
})
loops.forever(function () {
    if (walk == true && climb == (true && _break == true)) {
        gameplay.setWeather(RAIN)
    }
})
player.say("")
```
```package
rubyblock=github:yutari-club/rubyblock#master
```