# エージェント楽(たの)しい関数(かんすう)の改造(かいぞう): Python

## ステップ 1
``||player:チャットコマンド||`` **carrot**、``||player:チャットコマンド||`` **chicken**、``||player:チャットコマンド||`` **snowball** が用意(ようい)されています。ヒントを確認(かくにん)してください。

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
用意(ようい)されている **carrot** ``||player:チャットコマンド||``の名前(なまえ)を **torches** に変更(へんこう)します。``||agent:スロットに設定(せってい)させる||`` を **Torch** に変更(へんこう)し、数(かず)を **32** 個(こ)、スロット **1** に設定(せってい)します。

```python
def on_chat():
    agent.set_item(TORCH, 32, 1)
player.on_chat("torches", on_chat)
```

## ステップ 3

既存(きそん)の ``||loops:for||`` ループを変更(へんこう)して、12回(かい)の植(う)え付(つ)けサイクルを完了(かんりょう)します。

**注意(ちゅうい)**: これは (4x3) または (3x4) のループで実現(じつげん)できます。

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
blaze rod が ``||player:○○が使(つか)われた時(とき)||`` されたときのコードを変更(へんこう)して、3つの ``||player:チャットコマンド||`` **carrot**、**chicken**、**snowball** すべてが **carrot** チャットコマンドの代(か)わりに **torches** ``||player:on chat|`` コマンドを実行(じっこう)するようにしましょう。

```python
def item_interacted_blaze_rod():
    player.run_chat_command("torches")
    player.run_chat_command("chicken")
    player.run_chat_command("snowball")
player.on_item_interacted(BLAZE_ROD, item_interacted_blaze_rod)
```

## ステップ 5
**Play** ボタンを押(お)して、Minecraftに戻(もど)り、チャットに **torches**、**chicken**、**snowball** コマンドを入力(にゅうりょく)して何(なに)が起(お)こるか見(み)てみましょう。

## ステップ 6
**Play** ボタンを押(お)して、コードを書(か)くところに戻(もど)り、用意(ようい)されている他(ほか)の ``||player:チャットコマンド||`` **chicken** と **snowball** を変更(へんこう)しましょう。

## ステップ 7
**Play** ボタンを押(お)して、Minecraftに戻(もど)り、チャットに **chicken** と **snowball** コマンドを入力(にゅうりょく)して何(なに)が起(お)こるか見(み)てみましょう。