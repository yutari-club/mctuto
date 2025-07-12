# チュートリアル

## ステップ 1
コードで持続(じぞく)可能(かのう)な家(うち)を建(た)てましょう！このスターターコードを使(つか)って始(はじ)めましょう！

```javascript
player.onChat("rl", function () {
    agent.setItem(SANDSTONE, 64, 1)
})
player.onChat("fd", function () {
    agent.move(FORWARD, 3)
})
player.onChat("pd", function () {
    agent.teleportToPlayer()
    agent.setAssist(PLACE_ON_MOVE, true)
})
player.onChat("square", function () {
    for (let index = 0; index < 5; index++) {
        agent.setItem(SANDSTONE, 64, 1)
        agent.teleportToPlayer()
        agent.setAssist(PLACE_ON_MOVE, true)
        agent.move(FORWARD, 3)
        agent.turn(LEFT_TURN)
        if (agent.detect(AgentDetection.Block, FORWARD)) {
            agent.turn(RIGHT_TURN)
            agent.move(FORWARD, 3)
        }
    }
})
```