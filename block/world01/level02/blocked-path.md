### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# カメの通り道に沿って移動し、障害物を破壊するようにエージェントをプログラムしよう！

## ステップ 1 
エージェントを使って``||agent:エージェントに壊させる||`` と ``||agent:エージェントに全て拾わせる||`` ブロックで邪魔な倒木を**破壊**して掃除してみよう。 </br>
少ないブロック数で効率的なコードにするために``||loops:くりかえし||``ブロックを使ってみよう。 </br>
終わったら、``||blocks:▶||``ボタンを押してコードをコンパイルしよう。 </br>
コードを Minecraft で実行するのを忘れないでね。

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

