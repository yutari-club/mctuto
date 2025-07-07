### @explicitHints true
# アクティビティ 2 - 洗濯機(せんたくき)の回転(かいてん)

```python
for i in range(2):
pass
agent.collect_all()
agent.move(FORWARD, 5)
agent.drop_all(FORWARD)
agent.turn(LEFT)

```

## ステップ 1
**パート 1:** エージェントが汚(よご)れた洗濯(せんたく)物(もの)を拾(ひろ)って、洗濯機(せんたくき)に**前進(ぜんしん)**し、<br>
左(ひだり)に**20**回(かい)回転(かいてん)してから洗濯機(せんたくき)から出(で)て、<br>
汚(よご)れた洗濯物(せんたくもの)があった場所(ばしょ)の反対(はんたい)側(がわ)にきれいな洗濯物(せんたくもの)を置(お)くコードを書(か)いてみよう。

## ステップ 2
**パート 2:** 同(おな)じコードを編集(へんしゅう)して、エージェントが同(おな)じことを**3**回(かい)分(ぶん)の洗濯物(せんたくもの)に対(たい)して行(おこな)うようにしよう。<br>
他(ほか)のコードの前(まえ)に`||loops: for||`ループを使(つか)ってやってみよう。

### ~ tutorialhint 
この場合(ばあい)、2つのループは同(おな)じ変数(へんすう)名(めい)を使(つか)ってはいけないので、2番目(ばんめ)のループの名前(なまえ)を変更(へんこう)するのを忘(わす)れないでね。<br>
大(おお)きなコードをインデントするには、インデントしたいコードをすべて選択(せんたく)して**tab**キーを押(お)してね。 

```template
//Replace the lines below with your code #    
//loop number 2 set to 3                              | Part 2
agent.collect_all()
agent.move(FORWARD, 7)
agent.drop_all(FORWARD)
//loop number 1                              | Part 1
//make the Agent turn left 20 times          | Part 1 
//end of loop 1
//make the Agent collect all                 | Part 1          
//make the Agent move back                   | Part 1
//make the Agent drop everything to the left | Part 1
//end of loop 2
```
