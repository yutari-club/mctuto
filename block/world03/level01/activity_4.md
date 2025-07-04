### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# 世界を変える！
<!-- # Change the world! -->

## Step 1
``||player:歩いた時||`` イベントを使って、``||positions:ワールド 100 68 100||`` に``||blocks:置く||``を設置する。<br>

``||variables:変数||`` を作り、**count**と名付ける。<br>

``||variables:変数countを 1 だけ増やす|||`` ブロックを``||blocks:置く||``の上にドラッグする。<br>

``||blocks:置く||``の**ブロックのアイコン**を``||variables:count||``に変更する。これにより、ブロックIDが1ずつ増えてに対応するブロックが設置されます。（例：1=石、2=草、3=土など）<br>

<br>
リセットには別のイベントブロックを使います。<br>

``||player:落下した時||``を使ってブロックをリセットするには、``||variables:変数countを 0 にする|``を配置し、その下には``||player:歩いた時||`` 内の``||blocks:置く||``と同じブロックを作ります。（0=空気)<br>

<br>
配置するしたブロックが床のブロックと同じになるように歩きてしてね。<br>

リセットしたい場合は、ジャンプしてみよう。


<!-- Use ``||player:on player walk||`` event to set a block at a specific set of ``||positions: world||``coordinates, which are **100, 68, 100**.<br>

Create a ``||variable||`` and name it **count**. <br>

Drag the ``||change count by 1||`` block and ``||blocks:place||`` block with an added ``||count||`` variable, this will increase by 1 and place a block that's associated with that block ID. 1=Stone, 2=Grass, 3=Dirt, etc. <br>

Use another event block, for example ``||player:on player fall||`` to reset the block. <br>

To do that, drag ``||set count||`` to **0** to restart the count and add a ``||blocks: place||`` block with an added ``||variable:count||`` variable set with the same world coordinates. <br>

This way whenever you jump in the world, the block will get reset.  -->

### ~ tutorialhint 
座標指定には``||positions: ワールド||``座標を使うことを忘れないでしてね。
<!-- Don't forget to use ``||positions: world||`` positions to indicate the coordinates.  -->

```template
{}
``` 

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
player.say("")
```

```package
rubyblock=github:yutari-club/rubyblock#master
```