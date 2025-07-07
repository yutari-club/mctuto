### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# 世界(せかい)を変(か)える！
<!-- # Change the world! -->

## Step 1
``||player:歩(ある)いた時(とき)||`` イベントを使(つか)って、``||positions:ワールド 100 68 100||`` に``||blocks:置(お)く||``を設置(せっち)する。<br>

``||variables:変数(へんすう)||`` を作(つく)り、**count**と名付(なづ)ける。<br>

``||variables:変数(へんすう)countを 1 だけ増(ふ)やす|||`` ブロックを``||blocks:置(お)く||``の上(うえ)にドラッグする。<br>

``||blocks:置(お)く||``の**ブロックのアイコン**を``||variables:count||``に変更(へんこう)する。これにより、ブロックIDが1ずつ増(ふ)えてに対応(たいおう)するブロックが設置(せっち)されます。（例(れい)：1=石(いし)、2=草(くさ)、3=土(つち)など）<br>

<br>
リセットには別(べつ)のイベントブロックを使(つか)います。<br>

``||player:落下(らっか)した時(とき)||``を使(つか)ってブロックをリセットするには、``||variables:変数(へんすう)countを 0 にする|``を配置(はいち)し、その下(した)には``||player:歩(ある)いた時(とき)||`` 内(うち)の``||blocks:置(お)く||``と同(おな)じブロックを作(つく)ります。（0=空気(くうき))<br>

<br>
配置(はいち)するしたブロックが床(ゆか)のブロックと同(おな)じになるように歩(ある)きてしてね。<br>

リセットしたい場合(ばあい)は、ジャンプしてみよう。


<!-- Use ``||player:on player walk||`` event to set a block at a specific set of ``||positions: world||``coordinates, which are **100, 68, 100**.<br>

Create a ``||variable||`` and name it **count**. <br>

Drag the ``||change count by 1||`` block and ``||blocks:place||`` block with an added ``||count||`` variable, this will increase by 1 and place a block that's associated with that block ID. 1=Stone, 2=Grass, 3=Dirt, etc. <br>

Use another event block, for example ``||player:on player fall||`` to reset the block. <br>

To do that, drag ``||set count||`` to **0** to restart the count and add a ``||blocks: place||`` block with an added ``||variable:count||`` variable set with the same world coordinates. <br>

This way whenever you jump in the world, the block will get reset.  -->

### ~ tutorialhint 
座標(ざひょう)指定(してい)には``||positions: ワールド||``座標(ざひょう)を使(つか)うことを忘(わす)れないでしてね。
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