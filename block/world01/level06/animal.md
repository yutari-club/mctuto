### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true
### @explicitHints 1


# 5つの目標(もくひょう)

## ステップ1
5つの目標(もくひょう)を達成(たっせい)しよう。ライトポストの場所(ばしょ)に課題(かだい)があります。</br>
レッスンで使用(しよう)したすべてのブロックが用意(ようい)されています！

```ghost
player.onChat("run", function () {
    agent.teleportToPlayer()
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
    	
    }
    agent.place(FORWARD)
    agent.destroy(FORWARD)
    agent.setItem(GRASS, 1, 1)
    for (let index = 0; index < 4; index++) {
    	
    }
    player.say("")
})

``` 
