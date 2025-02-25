### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 建物
<!-- # Building -->


## Step 1
 ``||blocks:最初だけ||``自分に**34**個の**エメラルド**ブロックを``||mobs:与える||``。<br>
新しい``||variables:変数||`` を作成し、**count**という名前にします。<br>
``||blocks:ブロックが置かれた時||`` ブロックを配置し、ブロックを**エメラルド**に設定します。<br>
``||variables:変数countを 1 だけ増やす||``ブロックを``||blocks:ブロックが置かれた時||``ブロック内にドラッグし、``||player: メッセージを送信||``ブロックを追加します。<br>
``||player: メッセージを送信|||``ブロック内に``||variables:count||`` を追加します。<br>
これで、ブロックを置くたびに、置いたブロックの数をカウントしてくれます。<br>

<!-- ``||mobs:Give||`` yourself at least **34 emerald** blocks. <br>
Create a new ``||variable||`` and name it **count**.  <br>
Get an ``||blocks:on block placed||`` block and set it to **emerald**. <br>
Drag the ``||change count||`` block inside the ``||blocks: on block placed||`` and add ``||player: say||`` block. <br>
Add ``||count||`` inside the ``||player: say||`` block.  <br>
This way whenever you place blocks, the game will be counting how many blocks you placed.  -->

### ~ tutorialhint 
鉄、金、エメラルド、ダイヤモンドのいずれかを選択できる。
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

