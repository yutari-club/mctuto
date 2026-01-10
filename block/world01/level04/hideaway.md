### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 竹(たけ)の隠(かく)れ家(が)

## ステップ 1
砂地(すなち)の境目(さかいめ)に**3**本(ほん)の竹(たけ)を植(う)えるようにプログラムしよう。</br>
``||agent:向(む)きを変(か)える||``を忘(わす)れないようにしてみよう。</br>

#### ~ tutorialhint
2つの**くりかえし**があり、ループは入(い)れ子(こ)になっています。

```template
{}
```

```ghost
player.onChat("bamboo", function () {
    for (let index = 0; index < 3; index++) {
        agent.setItem(BAMBOO, 64, 1)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.turn(RIGHT_TURN)
    player.say("")
})
```



