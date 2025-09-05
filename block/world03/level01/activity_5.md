### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 雨(あめ)を降(ふ)らせろ！
<!-- # Make it rain! -->

## Step 1
マインクラフトで踊(おど)りながら雨(あめ)を降(ふ)らせよう！<br>

これを実現(じつげん)するには、いくつかのイベントハンドラを使(つか)う必要(ひつよう)があります。<br>


1. 例(たと)えば**walk**、**jump**、**sneak**などの変数(へんすう)を作成(さくせい)するよ。<br>

1. イベントハンドラを選択(せんたく)するよ。例(たと)えば``||player:プレイヤーが落下(らっか)した時(とき)||``、``||player:プレイヤー歩(ある)いた時(とき)||`` などだよ。<br>

1. 対応(たいおう)する各(かく)イベントブロック内(ない)で、新(あたら)しい``||variables:変数(へんすう)||``を``||logic:真(しん)||``設定(せってい)するよ。<br>

1. ``||loops:ずっと||``ブロックを使用(しよう)し、その中(なか)に``||logic:if文(ぶん)||``をドラッグするよ。<br>


すべての条件(じょうけん)を``||logic:真(しん)||``設定(せってい)し、``||gameplay: 現在(げんざい)の天気(てんき)を||``ブロックを**雨(あめ)**に設定(せってい)するよ。<br>


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
