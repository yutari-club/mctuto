### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1


# 高(たか)い崖(がけ)!

## ステップ 1 
エージェントに**オーク**で**10**ブロックの高(たか)さのタワーを作(つく)らせます。
``||agent:ブロックやアイテムをスロットに設定(せってい)||``を使(つか)って、エージェントに必要(ひつよう)な材料(ざいりょう)を持(も)たせます。
エージェントは ``||agent:エージェントに〇〇へ置(お)かせる||`` を使(つか)って、**前(まえ)**、**左(ひだり)**、**右(みぎ)**にオークを置(お)きます。
エージェントはブロックを置(お)いた後(あと)、**上(うえ)**に移動(いどう)する必要(ひつよう)がある。


#### ~ tutorialhint 
``||loops:くりかえす〇〇回(かい)||``を使(つか)って、数字(すうじ)を**10**に変(か)えてみてね。

## ステップ 2
エージェントをタワーから**下(した)**に移動(いどう)させよう。<br>
**10**ブロックの高(たか)さの**はしご**をつくるようにプログラムしよう。
はしごがないと上(うえ)に登(のぼ)れません！

#### ~ tutorialhint 
エージェントにはしごを持(も)たせよう。<br>
``||agent:ブロックやアイテムをスロットに設定(せってい)||``で**はしご**を持(も)たせることを忘(わす)れないでね。

```template
{}
```

```ghost
player.onChat("tower", function () {
    agent.move(FORWARD, 1)
    agent.setItem(LADDER, 64, 1)
    for (let index = 0; index < 10; index++) {
        agent.place(FORWARD)
        agent.move(UP, 1)
    }
    agent.move(DOWN, 10)
    player.say("")
})

``` 



