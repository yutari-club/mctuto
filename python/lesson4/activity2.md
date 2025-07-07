### @explicitHints true

# アクティビティ 2 - 犬(いぬ)のエサやりをしよう

```python
blocks.place()
```

## ステップ 1
最初(さいしょ)の**4つ**の`||blocks:place block at position||`コマンドの値(ね)を変更(へんこう)して、<br>
**最初(さいしょ)**の犬(いぬ)に、あらかじめ決(き)められたリストにあるものをすべてあげよう。<br>
それぞれがリストの中(なか)のアイテムを順番(じゅんばん)に置(お)くようにして、チェストからエサを1番目(ばんめ)の犬(いぬ)にあげよう。

### ~ tutorialhint 
ホットバーからアイテムを落(お)とすには、キーボードの[**Q**]キーを押(お)してね。 

## ステップ 2
**2番目(ばんめ)**の犬(いぬ)には、リストにあるものすべてと、追加(ついか)でビタミンをあげよう。<br>
**append**メソッドを使(つか)って**Vitamins**変数(へんすう)をリストの最後(さいご)に追加(ついか)してみよう。<br>
最後(さいご)の`||blocks: place block at position||`コマンドの値(ね)を変更(へんこう)して、<br>
マシンにビタミンを置(お)き、2番目(ばんめ)の犬(いぬ)にエサをあげよう。

## ステップ 3
**3番目(ばんめ)**の犬(いぬ)には、リストにあるものすべてをあげるけど、**beef**は抜(ぬ)いてあげよう。<br>
**pop**メソッドを使(つか)って**Beef**変数(へんすう)をリストから削除(さくじょ)してみよう。<br>
それから3番目(ばんめ)の犬(いぬ)にエサをあげよう。

### ~ tutorialhint 
**pop**メソッドでは、変数(へんすう)の名前(なまえ)ではなく、リストの位置(いち)の値(ね)を使(つか)う必要(ひつよう)があるよ。 

```template
Bone = world(-21, 45, -31)
Beef = world(-21, 45, -29)
Chicken = world(-21, 45, -27)
Biscuit = world(-21, 45, -25)
Vitamins = world(-21, 45, -23)
// Replace the lines below with your code #   
Dog_Food=[Bone, Beef, Chicken, Biscuit]
//Add the variable Vitamins to the list using the append method | Step 2
//Remove the variable Beef using the pop method                          | Step 3

blocks.place(REDSTONE_BLOCK, Dog_Food[0]) 
//Change the numerical value of the list below         | Step 1
blocks.place(REDSTONE_BLOCK, Dog_Food[0])
//Change the numerical value of the list below         | Step 1
blocks.place(REDSTONE_BLOCK, Dog_Food[0]) 
//Change the numerical value of the list below         | Step 1
blocks.place(REDSTONE_BLOCK, Dog_Food[0])   
//Change the numerical value of the list below                  | Step 2
blocks.place(REDSTONE_BLOCK, Dog_Food[0]) 
```