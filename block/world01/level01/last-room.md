### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# エージェントが金(きん)の板(いた)に移動(いどう)するようにプログラムしよう！

## ステップ 1 
エージェントが金(きん)の板(いた)に到達(とうたつ)するようにプログラムしよう
- 金(きん)の板(いた)は２枚(まい)あります
- 一方(いっぽう)の金(きん)の板(いた)にはエージェントが乗(の)るようにプログラミングしてみよう
- もう一方(いっぽう)の金(きん)の板(いた)にはあなたが乗(の)るように操作(そうさ)してみよう

### 実行(じっこう)
エージェントのプログラムが終(お)わったら実行(じっこう)してみよう。</br>
エージェントが移動(いどう)を始(はじ)めるとスタートになるよ。</br>
あなたも金(きん)の板(いた)を目指(めざ)してみよう。</br>



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
