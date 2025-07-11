# エージェント楽しい関数の改造: Python

## ステップ 1
``||player:チャットコマンド||`` **carrot**、``||player:チャットコマンド||`` **chicken**、``||player:チャットコマンド||`` **snowball** が用意されています。ヒントを確認してください。

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(3):
        for index2 in range(5):
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        agent.move(BACK, 5)
        agent.move(RIGHT, 2)
player.on_chat("carrot", on_chat)
def on_chat2():
    for index3 in range(15):
        mobs.spawn(CHICKEN, pos(0, 0, 0))
player.on_chat("chicken", on_chat2)
def on_chat3():
    for index4 in range(15):
        mobs.spawn(SNOWBALL_PROJECTILE_MOB, pos(0, 10, 0))
player.on_chat("snowball", on_chat3)
def item_interacted_blaze_rod():
    player.run_chat_command("carrot")
    player.run_chat_command("chicken")
    player.run_chat_command("snowball")
player.on_item_interacted(BLAZE_ROD, item_interacted_blaze_rod)
```

## ステップ 2
用意されている **carrot** ``||player:チャットコマンド||``の名前を **torches** に変更します。``||agent:スロットに設定させる||`` を **Torch** に変更し、数を **32** 個、スロット **1** に設定します。

```python
def on_chat():
    agent.set_item(TORCH, 32, 1)
player.on_chat("torches", on_chat)
```

## ステップ 3

既存の ``||loops:for||`` ループを変更して、12回の植え付けサイクルを完了します。

**注意**: これは (4x3) または (3x4) のループで実現できます。

```python
def on_chat():
    agent.set_item(TORCH, 32, 1)
    for index in range(3):
        for index2 in range(4):
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(FORWARD)
        agent.move(BACK, 5)
        agent.move(RIGHT, 2)
player.on_chat("torches", on_chat)
```

## ステップ 4
blaze rod が ``||player:○○が使われた時||`` されたときのコードを変更して、3つの ``||player:チャットコマンド||`` **carrot**、**chicken**、**snowball** すべてが **carrot** チャットコマンドの代わりに **torches** ``||player:on chat|`` コマンドを実行するようにしましょう。

```python
def item_interacted_blaze_rod():
    player.run_chat_command("torches")
    player.run_chat_command("chicken")
    player.run_chat_command("snowball")
player.on_item_interacted(BLAZE_ROD, item_interacted_blaze_rod)
```

## ステップ 5
**Play** ボタンを押して、Minecraftに戻り、チャットに **torches**、**chicken**、**snowball** コマンドを入力して何が起こるか見てみましょう。

## ステップ 6
**Play** ボタンを押して、コードを書くところに戻り、用意されている他の ``||player:チャットコマンド||`` **chicken** と **snowball** を変更しましょう。

## ステップ 7
**Play** ボタンを押して、Minecraftに戻り、チャットに **chicken** と **snowball** コマンドを入力して何が起こるか見てみましょう。