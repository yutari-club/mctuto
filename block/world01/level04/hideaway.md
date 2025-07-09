### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 竹(たけ)(たけ)の隠(こもり)(かく)れ家(け)(が)

## ステップ 1
砂地(すなじ)(すなち)の境目(さかいめ)(さかいめ)に**3**本(ほん)(ほん)の竹(たけ)(たけ)を植(うえ)(う)えるようにプログラムしよう。</br>
``||agent:向(む)きを変(か)える||``を忘(のろ)(わ)れないようにしてみよう。</br>

#### ~ tutorialhint
2つの**くりかえし**があり、ループは入(い)れ子(こ)(こ)になっています。

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



