### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# 溶岩遊泳
<!-- # Lava swim -->

## Step 1
あなたの課題は``||player:溶岩を歩いて||``渡ること。<br>

**最も近いプレーヤー**に``||mobs:火炎耐性||``を与えてしてね。
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