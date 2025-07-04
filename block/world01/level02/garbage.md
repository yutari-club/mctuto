### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# すべてのゴミを回収するようにエージェントをプログラムする！

## ステップ 1 
エージェントを使ってカメの通り道にあるゴミを掃除するには``||agent:エージェントに壊させる||`` と ``||agent:エージェントに全て拾わせる||`` ブロックを使います。 </br>
少ないブロック数で効率的なコードにするために``||loops:くりかえし||``ブロックを使ってみてしてね。 </br>
終わったら、``||blocks:▶||``ボタンを押してコードをコンパイルしてみよう。 </br>
コードを Minecraft で実行するのを忘れないでしてね。

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
