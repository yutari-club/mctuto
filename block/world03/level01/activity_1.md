### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# 溶岩遊泳
<!-- # Lava swim -->

## Step 1
あなたの課題は溶岩湖を``||player:泳い||``で渡ること。<br>
**最も近いプレーヤー**に``||mobs:火炎耐性||``を与えてください。
<!-- Your challenge is to ``||player:swim||`` across the lava lake. Try ``||mobs:applying fire resistance||`` to the **nearest player**. -->

```ghost
player.onTravelled(SWIM_LAVA, function () {
    mobs.applyEffect(FIRE_RESISTANCE, mobs.target(NEAREST_PLAYER), 10, 1)
    mobs.clearEffect(mobs.target(NEAREST_PLAYER))
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```