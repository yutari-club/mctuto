### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# ポータルに電力(でんりょく)を供給(きょうきゅう)する！
<!-- # Power the portal! -->

## Step 1

**金(きん)**ブロックの上(うえ)に立(た)っている間(あいだ)に**自分(じぶん)自身(じしん)**に雷(かみなり)を落(お)とさなければならない。<br>

まず、``||loops: 最初(さいしょ)だけ||``にダメージを受(う)けないように``||gameplay: ゲームモード適用(てきよう)||``を配置(はいち)して、**クリエイティブ**に設定(せってい)する。さらに``||gameplay: 天気(てんき)||``を配置(はいち)して、**雨(あめ)**に設定(せってい)する。<br>

次(つぎ)に``||player: 歩(ある)いた時(とき)||``の中(なか)に``||logic: もし||``と``||blocks: 存在(そんざい)する|``、``||mobs: スポーンさせる|``を配置(はいち)して、雷(かみなり)[**ライトニング ボルト**]を正確(せいかく)なタイミングで落(お)とす。

<!-- You need to make the lightning strike while you are standing on the **gold plates**. First, you need to set the ``||gameplay: weather||`` to rain ``||loops: on start||``. Then placing ``||logic: if||``, ``||blocks: test for||`` and ``||mobs: spawn a lightning bolt||`` inside ``||player: on walk||`` to make the lightning strike at the exact moment.  -->


### ~ tutorialHint
金(きん)ブロックは**0、-1、0**の座標(ざひょう)であなたの下(した)にある。
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