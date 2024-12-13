### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# 世界を変える！
<!-- # Change the world! -->

## Step 1
``||player:歩いた時||`` イベントを使って、**ワールド座標：100, 68, 100**にブロックをセットする。<br>
``||variables:変数||`` を作り、**count**と名付ける。<br>
``||variables:変数を増やす||`` ブロックをドラッグして、``||blocks:置く||``ブロックに``||variables:count||``を追加すると、1ずつ増えて、そのブロックIDに関連するブロックが配置される。1=石、2=草、3=土など。<br>
リセットするには、別のイベントブロック、たとえば ``||player:落下した時||``を使います。<br>
``||変数を⬭にする|``に**0**を設定し、同じワールド座標で ``||variables:count||`` 変数がセットされた``||blocks:置く||``ブロックを追加します。0=空気<br>
こうすれば、ワールドでジャンプするたびにブロックがリセットされる。
<!-- Use ``||player:on player walk||`` event to set a block at a specific set of ``||positions: world||``coordinates, which are **100, 68, 100**.<br>
Create a ``||variable||`` and name it **count**. <br>
Drag the ``||change count by 1||`` block and ``||blocks:place||`` block with an added ``||count||`` variable, this will increase by 1 and place a block that's associated with that block ID. 1=Stone, 2=Grass, 3=Dirt, etc. <br>
Use another event block, for example ``||player:on player fall||`` to reset the block. <br>
To do that, drag ``||set count||`` to **0** to restart the count and add a ``||blocks: place||`` block with an added ``||variable:count||`` variable set with the same world coordinates. <br>
This way whenever you jump in the world, the block will get reset.  -->

### ~ tutorialhint 
座標指定には``||positions: ワールド||``座標を使うことを忘れないでください。
<!-- Don't forget to use ``||positions: world||`` positions to indicate the coordinates.  -->

```blocks
let count = 0
player.onTravelled(WALK, function () {
    count += 1
    blocks.place(count, world(100, 68, 100))
})


```


```ghost
let count = 0
player.onTravelled(WALK, function () {
    count += 1
    blocks.place(count, world(100, 68, 100))
})
player.onTravelled(FALL, function () {
    count = 0
    blocks.place(count, world(100, 68, 100))
})
```

```package
rubyblock=github:yutari-club/rubyblock#master
```