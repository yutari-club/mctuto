### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 鶏小屋(とりごや)

## ステップ1
高(たか)さ３ブッロクの柵(さく)を完成(かんせい)させてください。</br>
**鉄格子(てつごうし)**を**2**段(だん)、追加(ついか)してください。</br>
１辺(へん)は**9**ブロックです。</br>
**4**辺(へん)全(すべ)てに高(たか)さ３ブロックの鉄格子(てつごうし)が配置(はいち)されると完成(かんせい)です。</br>

#### ~ tutorialhint
**3**つの ``||loops:くりかえし||``を入(い)れ子(こ)にします。</br>
エージェントのインベントリに64個(こ)以上(いじょう)のブロックがあることを確認(かくにん)してください！</br>
 
```template
{}
```

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
    player.say("")
})

``` 
```package
rubyblock=github:yutari-club/rubyblock#master
```