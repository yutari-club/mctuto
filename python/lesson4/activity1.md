### @explicitHints true
### @hideIteration true 
# アクティビティ 1 - 動物を分類してみよう

```python
blocks.place()
mobs.spawn()
world(0, 0, 0)
```

## ステップ 1
Minecraftワールドで**左**から**右**へ並んでいる動物たちを、**My_list**という名前のリストに書き出すコードを作ってみよう。 
すでにあるコマンドの後に、`||mobs:spawn mob at position||`コマンドを**4つ**追加で配置してみよう。 Use the information from the signs 
on the pens to complete these commands. 

### ~ tutorialhint 
Remember that list positions start from zero. 

```template 
location1 = world(-2, 40, -11)
location2 = world(-2, 40, -5)
location3 = world(-8, 40, -0)
location4 = world(-13, 40, -5)
location5 = world(-13, 40, -11)
//Replace the lines below with your code #   

//list of animals 

mobs.spawn(My_list[0], location1)
//spawn the third mob from the list at location2
//spawn the fifth mob from the list at location3
//spawn the second mob from the list at location4
//spawn the fourth mob from the list at location5
```
