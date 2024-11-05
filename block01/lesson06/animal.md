### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true
### @explicitHints 1


# 協働(きょうどう)活動(かつどう)

## ステップ1
動物(どうぶつ)たちにぴったりの家(いえ)を建(た)てるために必要(ひつよう)なブロックを選(えら)びましょう。</br>
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
})

``` 
```package
rubyblock=github:yutari-club/rubyblock#master
```