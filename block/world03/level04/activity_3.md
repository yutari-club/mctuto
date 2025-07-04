### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# 役場[長方形の壁]を建てる！
<!-- # Build a Town Hall! -->

## Step 1
**石**を建築材料として使用し、**3**つの``||variables: 変数||``作成し、それらに幅、長さ、高さの名前をつける。<br>

``||variables: 変数||``に正しいパラメータを設定するよ。<br>

変数を``||player: 入力した時||`` に追加するのを忘れないでしてね。<br>


<!-- Use **stone** as your building material, create **3** ``||variable: variables||`` and name them **width**, **length** and **height**; 
set the ``||variable: variables||`` to the correct parameters. 
Don't forget to add your variables to the ``||player: on chat||`` command. -->

```ghost
player.onChat("town_hall", function (length, width, height) {
    for (let index = 0; index < height; index++) {
        for (let index = 0; index < 2; index++) {
            for (let index = 0; index < length; index++) {
                agent.setItem(STONE, 1, 1)
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(RIGHT_TURN)
            for (let index = 0; index < width; index++) {
                agent.setItem(STONE, 1, 1)
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(RIGHT_TURN)
        }
        agent.move(UP, 1)
    }
})
player.say("")
```
```package
rubyblock=github:yutari-club/rubyblock#master
```