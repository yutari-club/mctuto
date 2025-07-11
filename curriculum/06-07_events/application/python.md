# チュートリアル

## ステップ 1
イベントを実行してストーリーを書きましょう。

```python
def travelled_walk():
    mobs.spawn(PRIMED_TNT, pos(0, 0, 0))
player.on_travelled(WALK, travelled_walk)
```