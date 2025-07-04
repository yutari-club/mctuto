### @explicitHints true
### @hideIteration true 
# アクティビティ 3 - 一歩ずつ作ってみよう

```python
blocks.place(GRASS_BLOCK, pos(0, 0, 0))
blocks.block_with_data(GRASS_BLOCK, 0)
```

## ステップ 1
**レンガブロック**で階段全体を作るコードを書いてみよう。3つの`||blocks: place block at position||`コマンドすべてで、**2番目**のパラメーターの**2番目**と**3番目**の座標を変更する必要があるよ。`||blocks: block with data||`コマンドのデータ値も更新してね。覚えておこう、それぞれのデータ値は階段の向きと同じだよ。

### ~ tutorialhint 
壁を見て、東、西、北、南の方向を確認してね。
データ値について： 
0 = 西  
1 = 東   
2 = 北  
3 = 南
