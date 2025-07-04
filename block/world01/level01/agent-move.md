### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# エージェントが金の板に移動するようにプログラムしよう！

## Step 1 
### 考えてみよう
1. 使える``||agent:エージェントへの命令||``ブロックは次の２種類
    - ``||agent:エージェントを移動||``ブロックは移動する方向と歩数を命令できるよ
    - ``||agent:エージェントの向きを||`` ブロックは右や左に回転を命令できるよ
1. 金の板の位置とエージェントの向きと位置をよく観察してみよう
1. エージェントが金の板に移動できるように命令の内容や順番を考えてみよう


### プログラミング
1. ``||player:チャットコマンド||``ブロックを選んで、コマンド名を **jump** から **1** に変える
1. ``||player:チャットコマンド||``ブロックの中に``||agent:命令||``ブロックをドラッグして命令内容を変更してみよう
    - ``||player:チャットコマンド||``ブロックの中に複数の``||agent:エージェントへの命令||``ブロックを配置することができるよ
    - ``||agent:エージェントへの命令||``ブロックは、上から順番に実行されるよ
***
### 実行してみよう
覚えよう：マインクラフト画面でのやり方
1. ⌨️キーボードの**[T]**キーを押してチャットを開く
1. ``||player:チャットコマンド||``ブロックの**コマンド名**を入力する
1. ⌨️キーボードの**[⏎Enter]**キーを押してプログラムを実行する
***
**👆を覚えたら**:マインクラフトに戻ろう
- ``||blocks:▶||``ボタンを押してプログラムをコンパイルしてマインクラフト画面に戻る


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
