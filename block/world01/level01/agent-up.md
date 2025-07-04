### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# エージェントが金の板に移動するようにプログラムしよう

## ステップ 1 

 ``||player:チャットコマンド||``ブロックと ``||agent:エージェントを移動||``ブロックを使って、エージェントを金の板に移動させよう</br>
</br> 

``||agent:エージェントを移動||``ブロックの▼を押すことで移動する方向を変えることができるよ</br>
</br>

**完成したら**：マインクラフト画面にもどって、プログラムを実行してみよう

#### ~ tutorialhint 
### プログラミング
1. ``||player:チャットコマンド||``ブロックを選んで、コマンド名を変えよう
1. ``||agent:エージェントを移動||``ブロックを選んで、``||player:チャットコマンド||``コマンドの中にドラッグしよう
1. エージェントが金の板に到着できるように``||agent:エージェントを移動||``ブロックを変えよう
 - 方向を変えよう
 - 移動の歩数を変えよう
***
### 実行
覚えよう：マインクラフト画面での操作
1. ⌨️キーボードの**[T]**キーを押してチャットを開く
1. ``||player:チャットコマンド||``ブロックの**コマンド名**を入力しよう
1. ⌨️キーボードの**[⏎Enter]**キーを押してプログラムを実行しよう
***
**👆を覚えたら**:マインクラフトに移動しよう
- ``||blocks:▶||``ボタンを押してプログラムをコンパイルすることでマインクラフト画面に移動するよ

```ghost
player.onChat("jump", function () {
    agent.move(RubySixDirection.Forward, 1)
    agent.turn(RubyTurnDirection.Left)
})
``` 
```template
player.onChat("jump", function () {
	
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```