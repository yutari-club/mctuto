### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# ポータルに電力を供給する！
<!-- # Power the portal! -->

## Step 1

**感圧板（軽）**の上に立っている間に雷を落とさなければならない。<br>
まず、``||loops: 最初だけ||``に``||gameplay: 天気||``を配置して、雨に設定する必要があります。<br>
次に``||player: 歩いた時||``の中に``||logic: もし||``と``||blocks: 存在する|``、``||mobs: スポーンさせる|``を配置して、雷[ライトニング ボルト]を正確なタイミングで落とす。

<!-- You need to make the lightning strike while you are standing on the **gold plates**. First, you need to set the ``||gameplay: weather||`` to rain ``||loops: on start||``. Then placing ``||logic: if||``, ``||blocks: test for||`` and ``||mobs: spawn a lightning bolt||`` inside ``||player: on walk||`` to make the lightning strike at the exact moment.  -->

### ~ tutorialHint
感圧板（軽）は**0、-1、0**の座標であなたの下にある。
<!-- The gold plates are beneath you at **0, -1, 0** coordinates.  -->

```ghost
player.onTravelled(WALK, function () {
    if (blocks.testForBlock(GOLD_BLOCK, pos(0, -1, 0))) {
        mobs.spawn(LIGHTNING_BOLT, pos(0, 0, 0))
    }
})
gameplay.setWeather(RAIN)
player.say("")
```
```package
rubyblock=github:yutari-club/rubyblock#master
```