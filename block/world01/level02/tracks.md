### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# カメの足跡に沿って移動するようにエージェントをプログラムする！

## ステップ 1 
ゲートまで ``||agent:エージェントを移動||`` ブロックを使ってカメの足跡に沿ってエージェントを移動させます。</br>
少ないブロック数で効率的なコードにするために``||loops:くりかえし||``ブロックを使ってみよう。 </br>
終わったら、``||blocks:▶||``ボタンを押してコードをコンパイルしよう。 </br>
コードを Minecraft で実行するのを忘れないでね。

```ghost
player.onChat("tracks", function () {
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
    player.say("")
}) 
``` 
```package
rubyblock=github:yutari-club/rubyblock#master
```
