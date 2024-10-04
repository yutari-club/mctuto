### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 竹(たけ)の隠(かく)れ家(が)

## Step(ステップ) 1
サンドパッチの両側に**3**個の竹のブロックを植えるよう、エージェントにプログラムする。</br>
エージェントがアクティビティを完了できるように、``||agent: 30:向(む)きを変(か)える||``コマンドを追加します。</br>

#### ~ tutorialhint
2つの**くりかえし**ループがあり、1つは他のループの中に入れ子になっている。
 
```ghost
player.onChat("bamboo", function () {
    for (let index = 0; index < 3; index++) {
        agent.setItem(BAMBOO, 64, 1)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.turn(RIGHT_TURN)
})
```

```package
rubyblock=github:Mming-Lab/rubyblock1#master
```

