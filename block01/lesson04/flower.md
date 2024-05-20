### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true
### @explicitHints 1


# その場所をきれいにする！

## Step(ステップ)1
アジトの**4**辺に沿って**14本のタンポポ**を植える必要があります。</br>
エージェントは一面に**14**個のタンポポを植えることができます。</br>

#### ~ tutorialhint 
また、``||agent:agent set block||``コマンドでカウントを選択することを忘れないでください。


```ghost
player.onChat("flower", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 14; index++) {
            agent.setItem(YELLOW_FLOWER, 64, 1)
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.turn(RIGHT_TURN)
    }
})

``` 
```package
rubyblock=github:Mming-Lab/rubyblock1#master
```
