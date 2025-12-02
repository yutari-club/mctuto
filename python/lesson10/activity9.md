### @explicitHints true
### @hideIteration true 
# エージェントの迷路(めいろ)

```python
agent.move(FORWARD, 5)
pos(0, 0, 0)
player.say("Finished")
agent.place(LEFT)
agent.inspect(AgentInspection.BLOCK, DOWN) 
agent.turn(RIGHT_TURN)
agent.destroy(BACK)
agent.drop_all(FORWARD)
agent.collect_all()
loops.pause(500)
for i in range(10):
    pass
if True: 
    pass
else: 
    pass
elif:
    pass
while True:
    pass
```

## ステップ 1
エージェントを迷路(めいろ)の中(なか)を進(すす)ませよう。色(いろ)のついたブロックを前(まえ)、左(ひだり)、右(みぎ)の移動(いどう)方向(ほうこう)の指示(しじ)として使(つか)うコードを書(か)いてみよう。<br>
それから、色(いろ)のついたブロックの上(うえ)に立(た)って、エージェントを迷路(めいろ)の終(お)わりまで誘導(ゆうどう)しよう。

### ~ tutorialhint
無限(むげん)に繰(く)り返(かえ)すwhileループを使(つか)ってみてね。
