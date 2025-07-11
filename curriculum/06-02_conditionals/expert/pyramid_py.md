# エージェントのピラミッド: Python

## ステップ 1
``||player:チャットコマンド||``を作って、**"pyramid"** という名前を付けて、2番目の引数を **function (size)** に設定しましょう。

```python
def on_chat(size):
    pass
player.on_chat("pyramid", on_chat)
```

## ステップ 2

**size** が 0 より大きいかどうかを評価する ``||logic:もし||`` 文を追加します。

```python
def on_chat(size):
    if size > 0:
        pass
player.on_chat("pyramid", on_chat)
```

## ステップ 3

``||logic:もし||`` 文の中で、エージェントが **sandstone** の ``||agent:スロットに設定させる||`` を **size** 変数に **size** を掛けた値にするようにコードを書きましょう—スロット1に。

```python
if size > 0:
        agent.set_item(SANDSTONE, size * size, 1)
player.on_chat("pyramid", on_chat)
```

## ステップ 4

エージェントが 1 スロットを ``||agent:set the active slot||`` するようにコードを書きましょう。

```python
agent.set_item(SANDSTONE, size * size, 1)
        agent.set_slot(1)
player.on_chat("pyramid", on_chat)
```

## ステップ 5

次に、エージェントの ``||agent:place on move||`` を **true** に設定します。

```python
agent.set_slot(1)
        agent.set_assist(PLACE_ON_MOVE, True)
player.on_chat("pyramid", on_chat)
```

## ステップ 6

変数 **i** を 0 から 4 引く 1 までとする ``||loops:for||`` ループを追加します。

```python
    agent.set_assist(PLACE_ON_MOVE, True)
        i = 0
        while i <= 0 - 0:
            i += 1
player.on_chat("pyramid", on_chat)
```

## ステップ 7

エージェントが **size** 変数の値で ``||agent:move forward||`` するようにコードを書きましょう。

```python
        i = 0
        while i <= 0 - 0:
            agent.move(FORWARD, size)
            i += 1
```

## ステップ 8

エージェントが ``||agent:turn left||`` するようにコードを書き、``||loops:for||`` ループを終了しましょう。

```python
while i <= 0 - 0:
            agent.move(FORWARD, size)
            agent.turn(LEFT_TURN)
            i += 1
```

## ステップ 9

``||loops:for||`` ループの後、ただし ``||logic:もし||`` 文の中で、エージェントが **move up by 1** するようにコードを書きましょう。

```python
  i += 1
        agent.move(UP, 1)
```

## ステップ 10

エージェントの ``||agent:place on move||`` を **false** にコードを書きましょう。

```python
  agent.move(UP, 1)
        agent.set_assist(PLACE_ON_MOVE, False)
```

## ステップ 11

**pyramid** チャットに **size** 変数の値から 2 を引いた値を結合する ``||player:run chat||`` コマンドを置きましょう。

```python
        agent.set_assist(PLACE_ON_MOVE, False)
        player.run_chat_command("pyramid" + ("" + str((size - 2))))
player.on_chat("pyramid", on_chat)
```

## ステップ 12

Minecraftに入り、**t** を押して**pyramid** と入力してチャットコマンドをテストしてみましょう。

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
