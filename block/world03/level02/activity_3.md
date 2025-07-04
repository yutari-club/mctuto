### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# ポータルに電力を供給する！
<!-- # Power the portal! -->

## Step 1

**金**ブロックの上に立っている間に**自分自身**に雷を落とさなければならない。<br>

まず、``||loops: 最初だけ||``にダメージを受けないように``||gameplay: ゲームモード適用||``を配置して、**クリエイティブ**に設定する。さらに``||gameplay: 天気||``を配置して、**雨**に設定する。<br>

次に``||player: 歩いた時||``の中に``||logic: もし||``と``||blocks: 存在する|``、``||mobs: スポーンさせる|``を配置して、雷[**ライトニング ボルト**]を正確なタイミングで落とす。

<!-- You need to make the lightning strike while you are standing on the **gold plates**. First, you need to set the ``||gameplay: weather||`` to rain ``||loops: on start||``. Then placing ``||logic: if||``, ``||blocks: test for||`` and ``||mobs: spawn a lightning bolt||`` inside ``||player: on walk||`` to make the lightning strike at the exact moment.  -->


### ~ tutorialHint
金ブロックは**0、-1、0**の座標であなたの下にある。
<!-- The gold plates are beneath you at **0, -1, 0** coordinates.  -->

```template
{}
``` 

```ghost
player.onTravelled(WALK, function () {
    if (blocks.testForBlock(GOLD_BLOCK, pos(0, -1, 0))) {
        mobs.spawn(LIGHTNING_BOLT, pos(0, 0, 0))
    }
})
gameplay.setWeather(RAIN)
gameplay.setGameMode(
CREATIVE,
mobs.target(NEAREST_PLAYER)
)
player.say("")
```
```package
rubyblock=github:yutari-club/rubyblock#master
```