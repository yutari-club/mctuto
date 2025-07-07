### @explicitHints true
 
# アクティビティ 2 - 左(ひだり)か右(みぎ)かな？ 

```python
agent.inspect(AgentInspection.BLOCK, FORWARD)
agent.turn(LEFT_TURN)
agent.move(FORWARD, 5)
for i in range(2):
      pass
if True:
      pass
```

## ステップ 1
**パート 1:** `||logic:if else||`条件(じょうけん)文(ぶん)を使(つか)って、エージェントが看板(かんばん)に到達(とうたつ)したときに左(ひだり)に曲(ま)がって、<br>
それから金(きん)ブロックの上(うえ)に前進(ぜんしん)するコードを書(か)いてみよう。<br>
条件(じょうけん)として`||agent:agent inspect||`コマンドを使(つか)って、変数(へんすう)**left**と比較(ひかく)してみよう。<br>
`||agent:agent inspect||`コマンドはこんな感(かん)じだよ： 
```python
agent.inspect(AgentInspection.BLOCK, FORWARD)
```
コードにすでに用意(ようい)されている変数(へんすう)を使(つか)ってみよう：left = BLUE_GLAZED_TERRACOTTA, right = PINK_GLAZED_TERRACOTTA
### ~ tutorialhint 
2つの値(ね)が等(ひと)しいかどうかをチェックするには、**==**を使(つか)ってね。

## ステップ 2
**パート 2:** エージェントが金(きん)ブロックに到達(とうたつ)するまで両方向(りょうほうこう)に曲(ま)がるようにコードを編集(へんしゅう)しよう。<br>
**if**と**else**の間(あいだ)に**elif**条件(じょうけん)文(ぶん)を追加(ついか)してやってみよう。
### ~ tutorialhint 
**elif**条件(じょうけん)文(ぶん)で`||agent:agent inspect||`コマンドを条件(じょうけん)として使(つか)って、<br>
変数(へんすう)**right**と比較(ひかく)してみよう。

```template
left = BLUE_GLAZED_TERRACOTTA
right = PINK_GLAZED_TERRACOTTA
//Replace the lines below with your code #
//Change value of loop below from 9 to 21                     |Part 2
//for loop set to 9                                   |Part 1
//if else conditional with an Agent inspect condition |Part 1
agent.turn(LEFT_TURN)
//elif conditional with an Agent inspect condition            |Part 2
//Make the agent turn right                                   |Part 2
//else part of the if else conditional                |Part 1
//Make the agent move forward                         |Part 1
//End of loop                                         |Part 1
```
