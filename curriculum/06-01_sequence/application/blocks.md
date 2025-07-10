# チュートリアル

## ステップ 1
Redstoneを使用して閉回路の例をモデル化します。

```ghost
player.onChat("run", function () {
    agent.teleport(world(-763, 8, 801), NORTH)
    agent.move(UP, 1)
    agent.setSlot(2)
    agent.setItem(DARK_OAK_BUTTON, 1, 2)
    agent.place(FORWARD)
    agent.move(UP, 1)
    agent.move(FORWARD, 2)
    agent.move(DOWN, 1)
    agent.setItem(REDSTONE_WIRE, 64, 1)
    agent.setSlot(1)
    agent.place(BACK)
    agent.setAssist(PLACE_ON_MOVE, true)
    agent.move(FORWARD, 8)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 1)
})
```