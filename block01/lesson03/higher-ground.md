### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1


# 高(たか)い崖(がけ)!

## Step(ステップ) 1 
エージェントに**オーク**で**10**ブロックの高(たか)さのタワーを作(つく)らせます。</br>
``||agent:ブロックやアイテムをスロットに設定(せってい)||``を使(つか)って、エージェントに必要(ひつよう)な材料(ざいりょう)を持(も)たせます。</br>
エージェントは ``||agent:エージェントに⬬へ置(お)かせる||`` を使って、**前(まえ)**、**左(ひだり)**、**右(みぎ)**にオークを置(お)きます。</br>
エージェントはブロックを置(お)いた後(あと)、**上(うえ)**に移動(いどう)する必要(ひつよう)がある。 </br>

#### ~ tutorialhint 
``||loops:くりかえす⬬回||``を使(つか)って、数字(すうじ)を**10**に変(か)えてみてください。

## Step(ステップ) 2
エージェントがタワーから**下(した)**に移動(いどう)し、**10**ブロックの高(たか)さの**はしご**をつくるようにプログラムします。</br>
はしご がないと上(うえ)に登(のぼ)れません！

#### ~ tutorialhint 
エージェントが はしご を置(を)けるように、``||agent:ブロックやアイテムをスロットに設定(せってい)||`` で**はしご**を持(も)たせることを忘(わす)れないでください。


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
```package
rubyblock=github:yutari-club/rubyblock#master
```


