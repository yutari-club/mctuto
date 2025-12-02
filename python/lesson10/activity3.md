### @explicitHints true
### @hideIteration true 

# ダイヤモンドか土(つち)か？

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
この4つの式(しき)の答(こた)えを計算(けいさん)するコードを書(か)いてみよう。エージェントを金(きん)ブロックまで行(い)かせる必要(ひつよう)があるよ。<br>
式(しき)の答(こた)えに応(おう)じて、チェストからダイヤモンドブロックか土(つち)ブロックを置(お)いてね。<br>
左(ひだり)から右(みぎ)へ、答(こた)えが1ならダイヤモンドブロックを置(お)き、0なら土(つち)ブロックを置(お)こう。
```python
1. 10000 / 10000 + 64.64 + 64.64 - 72 - 57.28
2. 64 / 4 + 64 / 64 - 128 / 8 - 1
3. 19283746 / 19283746 - 1 + 1000 / 100 - 9
4. 8 - 9 + 7 + 32 * 2 - 64 / 2 - 38
```
```template
//式(しき)を計算(けいさん): 10000 / 10000 + 64.64 + 64.64 - 72 - 57.28
//
//式(しき)を計算(けいさん): 64 / 4 + 64 / 64 - 128 / 8 - 1
//
//式(しき)を計算(けいさん): 19283746 / 19283746 - 1 + 1000 / 100 - 9
//
//式(しき)を計算(けいさん): 8 - 9 + 7 + 32 * 2 - 64 / 2 - 38
```

