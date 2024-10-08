### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 鶏小屋

## ステップ1
エージェントは**9**ブロックの**鉄格子**を**2**段に配置する必要がある。</br>
鉄格子は**4**辺全てに配置する必要があります。</br>
このとき、``||agent:エージェントを上に移動||``を使って2段目を作ることを忘れないでください。</br>

#### ~ tutorialhint
**3**つの ``||loops:くりかえし||``を入れ子にします。</br>
エージェントのインベントリに64個以上のブロックがあることを確認してください！</br>

```ghost
player.onChat("chicken", function () {
    for (let index = 0; index < 2; index++) {
        agent.setItem(IRON_BARS, 1, 1)
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 9; index++) {
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(RIGHT_TURN)
        }
        agent.move(UP, 1)
    }
})

``` 
```package
rubyblock=github:yutari-club/rubyblock#master
```