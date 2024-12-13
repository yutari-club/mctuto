### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# サンドキャッスル
<!-- # Sandcastle! -->

## Step 1

あなたのスーパー・プログラミング・パワーを使って、出題される課題を克服してください。。<br>
解決する方法はたくさんあるかもしれません。
<!-- Use your coding superpowers to overcome the challenges presented. Remember, there might be a lot of ways to solve them.  -->

```ghost
player.onTravelled(SNEAK, function () {
    mobs.applyEffect(INVISIBILITY, mobs.target(NEAREST_PLAYER), 3, 1)
    mobs.spawn(CHICKEN, pos(0, 0, 0))
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    GRASS,
    1
    )
})
player.onChat("jump", function () {
	
})

```
```package
rubyblock=github:yutari-club/rubyblock#master
```