### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# カメの足跡(あしあと)に沿(そ)って移動(いどう)するようにエージェントをプログラムする！

## ステップ 1 
ゲートまで ``||agent:エージェントを移動(いどう)||`` ブロックを使(つか)ってカメの足跡(あしあと)に沿(そ)ってエージェントを移動(いどう)させます。</br>
少(すく)ないブロック数(すう)で効率的(こうりつてき)なコードにするために``||loops:くりかえし||``ブロックを使(つか)ってみよう。 </br>
終(お)わったら、再生(さいせい)ボタンを押(お)してコードをコンパイルしよう。 </br>
コードを Minecraft で実行(じっこう)するのを忘(わす)れないでね。

```ghost
player.onChat("tracks", function () {
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
    player.say("")
}) 
``` 
