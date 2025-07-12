### @hideIteration true 

# チュートリアル

## ステップ 1
特定(とくてい)の作(さく)物(もの)を食(た)べるモブをスポーンさせます。

```ghost
player.onTravelled(WALK, function () {
    blocks.place(CARROTS, pos(0, 0, 0))
    if (blocks.testForBlock(CARROTS, pos(0, 0, 0))) {
        mobs.spawn(HORSE, pos(0, 0, 0))
    }
})
player.onChat("jump", function () {
	
})
```