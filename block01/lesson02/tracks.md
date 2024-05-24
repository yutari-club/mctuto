### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# カメの足跡に沿って移動するようにエージェントをプログラムする！

## Step(ステップ) 1 
ゲートまで ``||agent:20:エージェントを移動||`` ブロックを使ってカメの足跡に沿ってエージェントを移動させます。</br>
少(す)ないブロック数(すう)で効率(こうりつ)的(てき)なコードにするために``||loops:くりかえし||``ブロックを使(つ)ってみてください。 </br>
終(お)わったら、``||blocks:▶||``ボタンを押(お)してコードをコンパイルしてください。 </br>
コードを Minecraft で実行(じっこう)するのを忘(わ)れないでください。

```ghost
player.onChat("tracks", function () {
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
}) 
``` 
```package
rubyblock=github:Mming-Lab/rubyblock1#master
```
