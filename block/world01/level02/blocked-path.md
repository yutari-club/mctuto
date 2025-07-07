### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# カメの通(とお)り道(みち)に沿(そ)って移動(いどう)し、障害物(しょうがいぶつ)を破壊(はかい)するようにエージェントをプログラムしよう！

## ステップ 1 
エージェントを使(つか)って``||agent:エージェントに壊(こわ)させる||`` と ``||agent:エージェントに全(すべ)て拾(ひろ)わせる||`` ブロックで邪魔(じゃま)な倒木(さかき)を**破壊(はかい)**して掃除(そうじ)してみよう。 </br>
少(すく)ないブロック数(すう)で効率的(こうりつてき)なコードにするために``||loops:くりかえし||``ブロックを使(つか)ってみよう。 </br>
終(お)わったら、再生(さいせい)ボタンを押(お)してコードをコンパイルしよう。 </br>
コードを Minecraft で実行(じっこう)するのを忘(わす)れないでね。

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

