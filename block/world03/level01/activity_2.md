### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


<!-- # The Climb -->
# クライミング

## Step 1
あなたのミッションは、高(たか)く``||mobs:跳躍(ちょうやく)||``して、届(とど)かない場所(ばしょ)に登(のぼ)ることだよ。
<!-- Your challenge is to ``||mobs:jump||`` really high to climb up to the inaccessible area.  -->
```template
{}
``` 
```ghost
loops.forever(function () {
    mobs.applyEffect(JUMP_BOOST, mobs.target(NEAREST_PLAYER), 10, 1)
    mobs.clearEffect(mobs.target(NEAREST_PLAYER))
    player.say("")
})
```
