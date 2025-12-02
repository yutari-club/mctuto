### @explicitHints true
### @hideIteration true 

# リストに書(か)き出(だ)す必要(ひつよう)がある？ 

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
リストが与(あた)えられているよ。各行(かくぎょう)の最初(さいしょ)と最後(さいご)にある引用符(いんようふ)(**'**)を削除(さくじょ)してみよう。<br>
エージェントが立(た)つべきブロックタイプを見(み)つけるには、リストをアルファベット順(じゅん)に**ソート**して、リストの**2番目(ばんめ)**のブロックを取得(しゅとく)しよう。<br>
正(ただ)しいブロックタイプの上(うえ)に立(た)って、ボタンを押(お)してエージェントをそこにテレポートさせよう。<br>
プレイヤーが立(た)つべきブロックタイプを見(み)つけるには、リストを**逆順(ぎゃくじゅん)**にして、リストの**4番目(ばんめ)**のブロックを**ポップ**しよう。<br>
リストの**6番目(ばんめ)**のブロックを取得(しゅとく)して、そのブロックの上(うえ)に立(た)とう。

```template
'block_list = ["DIAMOND", "ICE", "EMERALD", "STONE", "WOOD", "GOLD", "QUARTZ"]'
```