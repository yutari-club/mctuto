### @hideIteration true 

# チュートリアル

## ステップ 1
エージェントが一列(れつ)に自動(じどう)で農業(のうぎょう)をするようにプログラムを作(つく)ります。

```python
def on_chat():
    pass
player.on_chat("run", on_chat)
agent.teleport_to_player()
agent.turn(LEFT_TURN)
agent.set_assist(PLACE_ON_MOVE, False)
agent.till(FORWARD)
agent.set_item(GRASS, 1, 1)
agent.move(FORWARD, 1)
agent.place(FORWARD)
for index in range(4):
    pass
while agent.detect(AgentDetection.BLOCK, FORWARD):
    agent.destroy(FORWARD)
while not (agent.inspect(AgentInspection.BLOCK, FORWARD) == GRASS):
    pass
```