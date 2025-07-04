### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1


# 高い崖!

## ステップ 1 
エージェントに**オーク**で**10**ブロックの高さのタワーを作らせます。
``||agent:ブロックやアイテムをスロットに設定||``を使って、エージェントに必要な材料を持たせます。
エージェントは ``||agent:エージェントに⬬へ置かせる||`` を使って、**前**、**左**、**右**にオークを置きます。
エージェントはブロックを置いた後、**上**に移動する必要がある。


#### ~ tutorialhint 
``||loops:くりかえす⬬回||``を使って、数字を**10**に変えてみてね。

## ステップ 2
エージェントをタワーから**下**に移動させよう。<br>
**10**ブロックの高さの**はしご**をつくるようにプログラムしよう。
はしごがないと上に登れません！

#### ~ tutorialhint 
エージェントにはしごを持たせよう。<br>
``||agent:ブロックやアイテムをスロットに設定||``で**はしご**を持たせることを忘れないでね。

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
```package
rubyblock=github:yutari-club/rubyblock#master
```


