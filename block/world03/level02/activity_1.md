### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# 恐竜を追い越せ！
<!-- # Pass the dinosaur! -->

## Step 1

恐竜の横を``||player:スニーク||`` で通り抜けるには、``||mobs:透明||``になる必要があります<br>
できますか？

<!-- You need to ``||player:sneak past||`` the dinosaur by making yourself ``||mobs:invisible||``. Can you make this happen?  -->

```template
{}
``` 

### ~ tutorialHint
マインクラフトでスニークするには、shiftとWを押してみてください。
<!-- Try pressing shift and W to sneak in Minecraft.  -->


```ghost
player.onTravelled(SNEAK, function () {
    mobs.applyEffect(INVISIBILITY, mobs.target(NEAREST_PLAYER), 3, 1)
    player.say("")
})

```
```package
rubyblock=github:yutari-club/rubyblock#master
```