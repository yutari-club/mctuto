# チュートリアル

## ステップ 1
コードでストーリーにイベントを作(つく)りましょう。

```ghost 
player.onTravelled(WALK, function () {
    mobs.spawn(PRIMED_TNT, pos(0, 0, 0))
    blocks.place(GRASS, pos(0, 0, 0))
    while (true) {
    	
    }
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    GRASS,
    1
    )
    for (let index = 0; index < 4; index++) {
        gameplay.timeSet(gameplay.time(DAY))
        gameplay.setWeather(CLEAR)
        blocks.fill(
        GRASS,
        pos(0, 0, 0),
        pos(0, 0, 0),
        FillOperation.Replace
        )
        blocks.print(
        "HELLO",
        GRASS,
        pos(0, 0, 0),
        WEST
        )
    }
})
```