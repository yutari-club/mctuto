### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# すべてのゴミを回収(かいしゅう)するようにエージェントをプログラムする！

## Step(ステップ) 1 
エージェントを使(つ)ってカメの通(と)り道(み)にあるゴミを掃除(そうじ)するには``||agent:エージェントに壊(こ)させる||`` と ``||agent:エージェントに全(す)て拾(ひろ)わせる||`` ブロックを使(つ)います。 </br>
少(す)ないブロック数(すう)で効率(こうりつ)的(てき)なコードにするために``||loops:くりかえし||``ブロックを使(つ)ってみてください。 </br>
終(お)わったら、``||blocks:▶||``ボタンを押(お)してコードをコンパイルしてください。 </br>
コードを Minecraft で実行(じっこう)するのを忘(わ)れないでください。

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
```package
rubyblock=github:yutari-club/rubyblock#master
```
