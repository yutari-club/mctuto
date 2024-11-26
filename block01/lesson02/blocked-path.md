### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# カメの通(と)り道(みち)に沿(そ)って移動(いどう)し、障害物(しょうがいぶつ)を破壊(はかい)するようにエージェントをプログラムします！

## Step(ステップ) 1 
エージェントを使って``||agent:エージェントに壊(こ)させる||`` と ``||agent:エージェントに全(す)て拾(ひろ)わせる||`` ブロックで邪魔(じゃま)な倒木(とうぼく)を**破壊(はかい)**して掃除(そうじ)してください。 </br>
少(す)ないブロック数(すう)で効率(こうりつ)的(てき)なコードにするために``||loops:くりかえし||``ブロックを使(つ)ってみてください。 </br>
終(お)わったら、``||blocks:▶||``ボタンを押(お)してコードをコンパイルしてください。 </br>
コードを Minecraft で実行(じっこう)するのを忘(わ)れないでください。

```ghost
player.onChat("path", function () {
    for (let index = 0; index < 4; index++) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.destroy(FORWARD)
        agent.collectAll()
    }
    player.say("")
})
``` 
```package
rubyblock=github:yutari-club/rubyblock#master
```

