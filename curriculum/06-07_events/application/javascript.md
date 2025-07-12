# チュートリアル

## ステップ 1
イベントを実行(じっこう)してストーリーを書(か)きましょう。

```javascript
player.onTravelled(WALK, function () {
    mobs.spawn(PRIMED_TNT, pos(0, 0, 0))
    })
```