# コウモリの洞窟(どうくつ): Python

## ステップ 1
``||player:チャットコマンド||``を追加(ついか)し、**cave** という名前(なまえ)を付(つ)けます。

```python
def on_chat():
    pass
player.on_chat("cave", on_chat)
```

## ステップ 2

プレイヤーが **"Dig a cave"** と入力(にゅうりょく)して ``||player:say||`` するようにコードを書(か)いて、``||player:チャットコマンド||``にドラッグしましょう。

```python
def on_chat(): 
    player.say("Dig a cave") 
player.on_chat("cave", on_chat) 
```

## ステップ 3

時刻(じこく)を **day** に設定(せってい)しましょう。

```python
def on_chat(): 
    player.say("Dig a cave") 
    gameplay.time_set(gameplay.time(DAY)) 
player.on_chat("cave", on_chat) 
```

## ステップ 4

プレイヤーが **air** ブロックで ``||blocks:fill with||`` するようにコードを書(か)きます。位置(いち)は **from = -1.0,-1** から **to = 1,2,1** です。**replace** に設定(せってい)しましょう。

```python
def on_chat(): 
    player.say("Dig a cave") 
    gameplay.time_set(gameplay.time(DAY)) 
    blocks.fill(AIR, pos(-1, 0, -1), pos(1, 2, 1), FillOperation.REPLACE) 
player.on_chat("cave", on_chat) 
```

## ステップ 5

fill ステップを **50** 回(かい)繰(く)り返(かえ)しましょう。

```python
def on_chat():
    player.say("Dig a cave")
    gameplay.time_set(gameplay.time(DAY))
    for index in range(50):
        blocks.fill(AIR, pos(-1, 0, -1), pos(1, 2, 1), FillOperation.REPLACE)
player.on_chat("cave", on_chat)
```

## ステップ 6

``||variables:new variable||`` を設定(せってい)して、**bat_cave** という名前(なまえ)を付(つ)けて、その変数(へんすう)を ``||player:player world position||`` に設定(せってい)しましょう。

```python
        batcave: Position = None
def on_chat():
    player.say("Dig a cave")
    gameplay.time_set(gameplay.time(DAY))
    for index in range(50):
        blocks.fill(AIR, pos(-1, 0, -1), pos(1, 2, 1), FillOperation.REPLACE)
    batcave = player.position()
player.on_chat("cave", on_chat)
```

## ステップ 7

プレイヤーが "You have 10 seconds to go out before the bats arrive." と ``||player:say||`` するようにコードを書(か)きます。

```python
batcave = player.position()
    player.say("You have 10 seconds to get out before the bats arrive.")
player.on_chat("cave", on_chat)
```

## ステップ 8

コードを **10** 秒(びょう)（10,000 ms）間(あいだ) ``||loops: Pause||`` しましょう。

```python
player.say("You have 10 seconds to get out before the bats arrive.")
    loops.pause(10000)
player.on_chat("cave", on_chat)
```

## ステップ 9

一時(いちじ)停止(ていし)の後(あと)、プレイヤーが **"Watch out for bats!"** と言(い)うようにコードを書(か)きます。

```python
    loops.pause(10000)
    player.say("Watch out for bats!")
player.on_chat("cave", on_chat)
```

## ステップ 10

``||gameplay:time||`` を **dusk** に設定(せってい)しましょう。

```python
gameplay.timeSet(gameplay.time(DUSK))
```

## ステップ 11

**bat_cave** 変数(へんすう)の位置(いち)でbatを ``||mobs:Spawn||`` しましょう。

```python
gameplay.time_set(gameplay.time(DUSK))
    mobs.spawn(BAT, batcave)
player.on_chat("cave", on_chat)
```

## ステップ 12

**bat** ``||mobs:spawn animal||`` を **200** 回(かい)繰(く)り返(かえ)しましょう。

```python
for index2 in range(200):
        mobs.spawn(BAT, batcave)
player.on_chat("cave", on_chat)
```

## ステップ 13

Minecraftに入(はい)って、チャットに **cave** と入力(にゅうりょく)してすべてのコードが実行(じっこう)されるのを見(み)てみましょう。

```python
batcave: Position = None 

def on_chat(): 

    player.say("Dig a cave") 

    gameplay.time_set(gameplay.time(DAY)) 

    for index in range(50): 

        blocks.fill(AIR, pos(-1, 0, -1), pos(1, 2, 1), FillOperation.REPLACE) 

    batcave = player.position() 

    player.say("You have 10 seconds to get out before the bats arrive.") 

    loops.pause(10000) 

    player.say("Watch out for bats!") 

    gameplay.time_set(gameplay.time(DUSK)) 

    for index2 in range(200): 

        mobs.spawn(BAT, batcave) 

player.on_chat("cave", on_chat) 
```