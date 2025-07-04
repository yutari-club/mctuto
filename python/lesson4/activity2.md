### @explicitHints true

# アクティビティ 2 - 犬のエサやりをしよう

```python
blocks.place()
```

## ステップ 1
最初の**4つ**の`||blocks:place block at position||`コマンドの値を変更して、<br>
**最初**の犬に、あらかじめ決められたリストにあるものをすべてあげよう。<br>
それぞれがリストの中のアイテムを順番に置くようにして、チェストからエサを1番目の犬にあげよう。

### ~ tutorialhint 
ホットバーからアイテムを落とすには、キーボードの[**Q**]キーを押してね。 

## ステップ 2
**2番目**の犬には、リストにあるものすべてと、追加でビタミンをあげよう。<br>
**append**メソッドを使って**Vitamins**変数をリストの最後に追加してみよう。<br>
最後の`||blocks: place block at position||`コマンドの値を変更して、<br>
マシンにビタミンを置き、2番目の犬にエサをあげよう。

## ステップ 3
**3番目**の犬には、リストにあるものすべてをあげるけど、**beef**は抜いてあげよう。<br>
**pop**メソッドを使って**Beef**変数をリストから削除してみよう。<br>
それから3番目の犬にエサをあげよう。

### ~ tutorialhint 
**pop**メソッドでは、変数の名前ではなく、リストの位置の値を使う必要があるよ。 

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