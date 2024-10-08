### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 鶏小屋

## ステップ1
高さ３ブッロクの柵を完成させてください。</br>
**鉄格子**を**2**段追加してください。</br>
１辺は**9**ブロックです。</br>
**4**辺全てに高さ３ブロックの鉄格子が配置されると完成です。</br>

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