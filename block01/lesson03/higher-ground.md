### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1


# Higher Ground!

## Step(ステップ) 1 
エージェントが**オーク**ブロックで**10**ブロックの高さのタワーを建てるようにプログラムする。</br>
まず、``||agent:set block or item||`コマンドを使って、エージェントに**64**ブロックの**オークの板**があることを確認します。</br>
エージェントは ``||agent:agent place||`` ブロックを使って、オークの板を**前方**、**左方**、**右方に置くようにプログラムします。</br>
エージェントはブロックを置いた後、**上に移動**する必要がある。 </br>

#### ~ tutorialhint 
``||loops:repeat||``ブロックを使って、数字を**10**に変えてみてください。

## Step(ステップ) 2
エージェントがタワーから**下に**移動し、**10**ブロックの高さの**はしご**を建設するようにプログラムします。</br>
ハシゴがないと上に登れません！

#### ~ tutorialhint 
エージェントがはしごを置けるように、``||agent: agent set block||`` を使ってエージェントのインベントリから**64**ブロックの**はしご**を選択することを忘れないでください。


```ghost
player.onChat("tower", function () {
    agent.move(FORWARD, 1)
    agent.setItem(LADDER, 64, 1)
    for (let index = 0; index < 10; index++) {
        agent.place(FORWARD)
        agent.move(UP, 1)
    }
    agent.move(DOWN, 10)
})

``` 
```package
rubyblock=github:Mming-Lab/rubyblock1#master
```


