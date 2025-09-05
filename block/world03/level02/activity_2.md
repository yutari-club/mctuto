### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 砂の城
<!-- # Sandcastle! -->

## Step 1

君(きみ)のプログラミングのスーパーパワーを使(つか)って、この課題(かだい)を乗(の)り越(こ)えてみよう！<br>

いろんな方法(ほうほう)で解決(かいけつ)できるかもしれないから、いろいろ試(ため)してみてね。
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
