### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# 溶岩(ようがん)遊泳(ゆうえい)
<!-- # Lava swim -->

## Step 1
あなたの課題(かだい)は``||player:溶岩(ようがん)を歩(ある)いて||``渡(わた)ること。<br>

**最(もっと)も近(ちか)いプレーヤー**に``||mobs:火炎(かえん)耐性(たいせい)||``を与(あた)えてしてね。
<!-- Your challenge is to ``||player:swim||`` across the lava lake. Try ``||mobs:applying fire resistance||`` to the **nearest player**. -->
```template
{}
``` 
```ghost
player.onTravelled(SWIM_LAVA, function () {
    mobs.applyEffect(FIRE_RESISTANCE, mobs.target(NEAREST_PLAYER), 10, 1)
    mobs.clearEffect(mobs.target(NEAREST_PLAYER))
    player.say("")
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```