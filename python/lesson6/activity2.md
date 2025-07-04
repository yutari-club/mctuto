### @explicitHints true
 
# アクティビティ 2 - 左か右かな？ 

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
**パート 1:** `||logic:if else||`条件文を使って、エージェントが看板に到達したときに左に曲がって、<br>
それから金ブロックの上に前進するコードを書いてみよう。<br>
条件として`||agent:agent inspect||`コマンドを使って、変数**left**と比較してみよう。<br>
`||agent:agent inspect||`コマンドはこんな感じだよ： 
```python
agent.inspect(AgentInspection.BLOCK, FORWARD)
```
コードにすでに用意されている変数を使ってみよう：left = BLUE_GLAZED_TERRACOTTA, right = PINK_GLAZED_TERRACOTTA
### ~ tutorialhint 
2つの値が等しいかどうかをチェックするには、**==**を使ってね。

## ステップ 2
**パート 2:** エージェントが金ブロックに到達するまで両方向に曲がるようにコードを編集しよう。<br>
**if**と**else**の間に**elif**条件文を追加してやってみよう。
### ~ tutorialhint 
**elif**条件文で`||agent:agent inspect||`コマンドを条件として使って、<br>
変数**right**と比較してみよう。

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
