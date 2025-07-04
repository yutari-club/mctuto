### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# サンドキャッスル
<!-- # Sandcastle! -->

## Step 1

君のプログラミングのスーパーパワーを使って、この課題を乗り越えてみよう！<br>

いろんな方法で解決できるかもしれないから、いろいろ試してみてね。
<!-- Use your coding superpowers to overcome the challenges presented. Remember, there might be a lot of ways to solve them.  -->

```template
{}
``` 

```ghost
player.onTravelled(SNEAK, function () {
    mobs.applyEffect(INVISIBILITY, mobs.target(NEAREST_PLAYER), 3, 1)
    mobs.spawn(CHICKEN, pos(0, 0, 0))
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    GRASS,
    1
    )
    mobs.clearEffect(mobs.target(NEAREST_PLAYER))
})
player.onChat("jump", function () {
	
})
player.say("")
```
```package
rubyblock=github:yutari-club/rubyblock#master
```