### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 建物(たてもの)
<!-- # Building -->


## Step 1
 ``||blocks:最初(さいしょ)だけ||``自分(じぶん)に**34**個(こ)の**エメラルド**ブロックを``||mobs:与(あた)える||``。<br>

新(あたら)しい``||variables:変数(へんすう)||`` を作成(さくせい)し、**count**という名前(なまえ)にするよ。<br>

``||blocks:ブロックが置(お)かれた時(とき)||`` ブロックを配置(はいち)し、ブロックを**エメラルド**に設定(せってい)するよ。<br>

``||variables:変数(へんすう)countを 1 だけ増(ふ)やす||``ブロックを``||blocks:ブロックが置(お)かれた時(とき)||``ブロック内(ない)にドラッグし、``||player: メッセージを送信(そうしん)||``ブロックを追加(ついか)するよ。<br>

``||player: メッセージを送信(そうしん)|||``ブロック内(ない)に``||variables:count||`` を追加(ついか)するよ。<br>

これで、ブロックを置(お)くたびに、置(お)いたブロックの数(かず)をカウントしてくれます。<br>


<!-- ``||mobs:Give||`` yourself at least **34 emerald** blocks. <br>

Create a new ``||variable||`` and name it **count**.  <br>

Get an ``||blocks:on block placed||`` block and set it to **emerald**. <br>

Drag the ``||change count||`` block inside the ``||blocks: on block placed||`` and add ``||player: say||`` block. <br>

Add ``||count||`` inside the ``||player: say||`` block.  <br>

This way whenever you place blocks, the game will be counting how many blocks you placed.  -->

### ~ tutorialhint 
鉄(てつ)、金(きん)、エメラルド、ダイヤモンドのいずれかを選択(せんたく)できる。
<!-- You can select iron, gold, emerald or diamond.  -->

```template
{}
``` 
```blocks
let count = 0
blocks.onBlockPlaced(EMERALD_BLOCK, function () {
    count += 1
    player.say(count)
})

```

```ghost
blocks.onBlockBroken(STONE, function () {
    count += 1
    player.say(count)
})
let count = 0
mobs.give(mobs.target(NEAREST_PLAYER), STONE, 1)
player.say("")
```
```package
rubyblock=github:yutari-club/rubyblock#master
```

