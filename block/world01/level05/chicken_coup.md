### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 鶏小屋(とりごや)(とりごや)

## ステップ1
高(たか)さ３ブッロクの柵(さく)(さく)を完成(かんせい)(かんせい)させてしてね。</br>
**鉄格子(てつごうし)(てつごうし)**を**2**段(だん)(だん)、追加(ついか)してみよう。</br>
１辺(ぺん)(へん)は**9**ブロックだよ。</br>
**4**辺(へん)(へん)全(ぜん)(すべ)てに高(たか)さ３ブロックの鉄格子(てつごうし)(てつごうし)が配置(はいち)(はいち)されると完成(かんせい)(かんせい)だよ。</br>

#### ~ tutorialhint
**3**つの ``||loops:くりかえし||``を入(い)れ子(こ)(こ)にするよ。</br>
エージェントのインベントリに64個(こ)(こ)以上(いじょう)(いじょう)のブロックがあることを確認(かくにん)してみよう！</br>
 
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
