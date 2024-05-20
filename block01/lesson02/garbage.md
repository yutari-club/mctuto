### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# すべてのゴミを回収するようにエージェントをプログラムする！

## Step(ステップ) 1 
エージェントを使ってカメの足跡を消すには ``||agent: エージェントに壊させる||`` と ``||agent:エージェントに全て拾わせる||`` ブロックを使います。 </br>
より効率的にするために ``||loops:くりかえし||`` ブロックを使ってみてください。 </br>
終わったら、``||blocks:▶||``ボタンを押してコードをコンパイルしてください。 </br>
コードを Minecraft で実行するのを忘れないでください。 </br>

```ghost
player.onChat("garbage", function () {
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
