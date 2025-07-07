### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# 恐竜(きょうりゅう)を追(お)い越(こ)せ！
<!-- # Pass the dinosaur! -->

## Step 1

恐竜(きょうりゅう)の横(よこ)を``||player:スニーク||`` で通(とお)り抜(ぬ)けるには、``||mobs:透明(とうめい)||``になる必要(ひつよう)があります<br>

できるよか？

<!-- You need to ``||player:sneak past||`` the dinosaur by making yourself ``||mobs:invisible||``. Can you make this happen?  -->

```template
{}
``` 

### ~ tutorialHint
マインクラフトでスニークするには、shiftとWを押(お)してみてしてね。
<!-- Try pressing shift and W to sneak in Minecraft.  -->


```ghost
player.onTravelled(SNEAK, function () {
    mobs.applyEffect(INVISIBILITY, mobs.target(NEAREST_PLAYER), 3, 1)
    player.say("")
})
mobs.clearEffect(mobs.target(NEAREST_PLAYER))
```
```package
rubyblock=github:yutari-club/rubyblock#master
```