### @explicitHints true
### @hideIteration true 
# ダイヤモンドラッシュ 

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
各行(かくぎょう)の最初(さいしょ)と最後(さいご)にある引用符(いんようふ)(**'**)を削除(さくじょ)してみよう。<br>
エージェントが金(きん)ブロックに向(む)かって移動(いどう)しながら、通(とお)り過(す)ぎたダイヤモンドブロックの数(かず)を数(かぞ)えるようにコードを完成(かんせい)させよう。<br>
最後(さいご)に、エージェントが金(きん)ブロックに到達(とうたつ)したら、通(とお)り過(す)ぎたダイヤモンドブロックの数(かず)だけ、前(まえ)に1つずつブロックを置(お)くようにしよう。<br>
これらのブロックはピストンで自動的(じどうてき)に積(つ)み重(かさ)なるよ。
```template
'diamond = 0'
'for index in range(11):'
'    agent.move(FORWARD, 1)'
'for index2 in range(diamond):'
'    agent.place(FORWARD)'
'    loops.pause(500)'
```