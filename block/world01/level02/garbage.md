### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# すべてのゴミを回収(かいしゅう)するようにエージェントをプログラムする！

## ステップ 1 
エージェントを使(つか)ってカメの通(とお)り道(みち)にあるゴミを掃除(そうじ)するには``||agent:エージェントに壊(こわ)させる||`` と ``||agent:エージェントに全(すべ)て拾(ひろ)わせる||`` ブロックを使(つか)います。 </br>
少(すく)ないブロック数(すう)で効率的(こうりつてき)なコードにするために``||loops:くりかえし||``ブロックを使(つか)ってみてしてね。 </br>
終(お)わったら、再生(さいせい)ボタンを押(お)してコードをコンパイルしてみよう。 </br>
コードを Minecraft で実行(じっこう)するのを忘(わす)れないでしてね。

```ghost
player.onChat("garbage", function () {
    for (let index = 0; index < 4; index++) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.destroy(FORWARD)
        agent.collectAll()
    }
    player.say("")
})
```
