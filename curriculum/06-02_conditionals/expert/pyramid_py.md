# エージェントのピラミッド: Python

## ステップ 1
``||player:チャットコマンド||``を作(つく)って、**"pyramid"** という名前(なまえ)を付(つ)けて、2番目(ばんめ)の引数(ひきすう)を **function (size)** に設定(せってい)しましょう。

```python
def on_chat(size):
    pass
player.on_chat("pyramid", on_chat)
```

## ステップ 2

**size** が 0 より大(おお)きいかどうかを評価(ひょうか)する ``||logic:もし||`` 文(ぶん)を追加(ついか)します。

```python
def on_chat(size):
    if size > 0:
        pass
player.on_chat("pyramid", on_chat)
```

## ステップ 3

``||logic:もし||`` 文(ぶん)の中(なか)で、エージェントが **sandstone** の ``||agent:スロットに設定(せってい)させる||`` を **size** 変数(へんすう)に **size** を掛(か)けた値(ね)にするようにコードを書(か)きましょう スロット1に。

```python
if size > 0:
        agent.set_item(SANDSTONE, size * size, 1)
player.on_chat("pyramid", on_chat)
```

## ステップ 4

エージェントが 1 スロットを ``||agent:set the active slot||`` するようにコードを書(か)きましょう。

```python
agent.set_item(SANDSTONE, size * size, 1)
        agent.set_slot(1)
player.on_chat("pyramid", on_chat)
```

## ステップ 5

次(つぎ)に、エージェントの ``||agent:place on move||`` を **true** に設定(せってい)します。

```python
agent.set_slot(1)
        agent.set_assist(PLACE_ON_MOVE, True)
player.on_chat("pyramid", on_chat)
```

## ステップ 6

変数(へんすう) **i** を 0 から 4 引(ひ)く 1 までとする ``||loops:for||`` ループを追加(ついか)します。

```python
    agent.set_assist(PLACE_ON_MOVE, True)
        i = 0
        while i <= 0 - 0:
            i += 1
player.on_chat("pyramid", on_chat)
```

## ステップ 7

エージェントが **size** 変数(へんすう)の値(ね)で ``||agent:move forward||`` するようにコードを書(か)きましょう。

```python
        i = 0
        while i <= 0 - 0:
            agent.move(FORWARD, size)
            i += 1
```

## ステップ 8

エージェントが ``||agent:turn left||`` するようにコードを書(か)き、``||loops:for||`` ループを終了(しゅうりょう)しましょう。

```python
while i <= 0 - 0:
            agent.move(FORWARD, size)
            agent.turn(LEFT_TURN)
            i += 1
```

## ステップ 9

``||loops:for||`` ループの後(あと)、ただし ``||logic:もし||`` 文(ぶん)の中(なか)で、エージェントが **move up by 1** するようにコードを書(か)きましょう。

```python
  i += 1
        agent.move(UP, 1)
```

## ステップ 10

エージェントの ``||agent:place on move||`` を **false** にコードを書(か)きましょう。

```python
  agent.move(UP, 1)
        agent.set_assist(PLACE_ON_MOVE, False)
```

## ステップ 11

**pyramid** チャットに **size** 変数(へんすう)の値(ね)から 2 を引(ひ)いた値(ね)を結合(けつごう)する ``||player:run chat||`` コマンドを置(お)きましょう。

```python
        agent.set_assist(PLACE_ON_MOVE, False)
        player.run_chat_command("pyramid" + ("" + str((size - 2))))
player.on_chat("pyramid", on_chat)
```

## ステップ 12

Minecraftに入(はい)り、**t** を押(お)して**pyramid** と入力(にゅうりょく)してチャットコマンドをテストしてみましょう。

```python
def on_chat(size):
    if size > 0:
        agent.set_item(SANDSTONE, size * size, 1)
        agent.set_slot(1)
        agent.set_assist(PLACE_ON_MOVE, True)
        i = 0
        while i <= 0 - 0:
            agent.move(FORWARD, size)
            agent.turn(LEFT_TURN)
            i += 1
        agent.move(UP, 1)
        agent.set_assist(PLACE_ON_MOVE, False)
        player.run_chat_command("pyramid" + str((size - 2)))
player.on_chat("pyramid", on_chat)
```
