### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 建物
<!-- # Building -->

## Step 1
少なくとも**34**個の**エメラルド**ブロックを``||mobs:与える||``。<br>
新しい``||variables:変数||`` を作り、**count**と名付ける。<br>
``||blocks:ブロックが置かれた時||`` ブロックを用意し、**エメラルド**に設定する。<br>
change countブロックをon block placedの中にドラッグし、sayブロックを追加する。<br>
sayブロックの中にcountを追加する。<br>
こうすることで、ブロックを配置するたびに、配置したブロックの数がカウントされるようになる。<br>

<!-- ``||mobs:Give||`` yourself at least **34 emerald** blocks. <br>
Create a new ``||variable||`` and name it **count**.  <br>
Get an ``||blocks:on block placed||`` block and set it to **emerald**. <br>
Drag the ``||change count||`` block inside the ``||blocks: on block placed||`` and add ``||player: say||`` block. <br>
Add ``||count||`` inside the ``||player: say||`` block.  <br>
This way whenever you place blocks, the game will be counting how many blocks you placed.  -->

### ~ tutorialhint 
鉄、金、エメラルド、ダイヤモンドのいずれかを選択できる。
<!-- You can select iron, gold, emerald or diamond.  -->

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
mobs.give(
mobs.target(NEAREST_PLAYER),
STONE,
1
)
```
```package
rubyblock=github:yutari-club/rubyblock#master
```

