### @explicitHints true
### @hideIteration true 

# まぶしいライト 

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
エージェントに、歩道(ほどう)を前(まえ)に歩(ある)いて金(きん)ブロックに向(む)かいながら、インベントリにあるレッドストーンランプをレッドストーンブロックの上(うえ)に置(お)かせよう。

### ~ tutorialhint
ループを使(つか)ってみてね。

