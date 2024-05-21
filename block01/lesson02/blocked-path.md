### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# カメの足跡に沿って移動し、障害物を破壊するようにエージェントをプログラムします！

## Step(ステップ) 1 
エージェントを使って、``||agent:100:エージェントに壊させる||`` と ``||agent:130:エージェントに全て拾わせる||`` ブロックで邪魔な木の幹を**破壊**する。 </br>
より効率的なコードにするために``||loops:くりかえし||``ブロックを使ってみてください。 </br>
終わったら、``||blocks:▶||``ボタンを押してコードをコンパイルしてください。 </br>
コードを Minecraft で実行するのを忘れないでください。

```ghost
player.onChat("path", function () {
    for (let index = 0; index < 4; index++) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.destroy(FORWARD)
        agent.collectAll()
    }
})
``` 
```package
rubyblock=github:Mming-Lab/rubyblock1#master
```

