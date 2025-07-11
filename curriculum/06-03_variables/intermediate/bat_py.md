# コウモリの洞窟: Python

## ステップ 1
``||player:チャットコマンド||``を追加し、**cave** という名前を付けます。

```python
def on_chat():
    pass
player.on_chat("cave", on_chat)
```

## ステップ 2

プレイヤーが **"Dig a cave"** と入力して ``||player:say||`` するようにコードを書いて、``||player:チャットコマンド||``にドラッグしましょう。

```python
def on_chat(): 
    player.say("Dig a cave") 
player.on_chat("cave", on_chat) 
```

## ステップ 3

時刻を **day** に設定しましょう。

```python
def on_chat(): 
    player.say("Dig a cave") 
    gameplay.time_set(gameplay.time(DAY)) 
player.on_chat("cave", on_chat) 
```

## ステップ 4

プレイヤーが **air** ブロックで ``||blocks:fill with||`` するようにコードを書きます。位置は **from = -1.0,-1** から **to = 1,2,1** です。**replace** に設定しましょう。

```python
def on_chat(): 
    player.say("Dig a cave") 
    gameplay.time_set(gameplay.time(DAY)) 
    blocks.fill(AIR, pos(-1, 0, -1), pos(1, 2, 1), FillOperation.REPLACE) 
player.on_chat("cave", on_chat) 
```

## ステップ 5

fill ステップを **50** 回繰り返しましょう。

```python
def on_chat():
    player.say("Dig a cave")
    gameplay.time_set(gameplay.time(DAY))
    for index in range(50):
        blocks.fill(AIR, pos(-1, 0, -1), pos(1, 2, 1), FillOperation.REPLACE)
player.on_chat("cave", on_chat)
```

## ステップ 6

``||variables:new variable||`` を設定して、**bat_cave** という名前を付けて、その変数を ``||player:player world position||`` に設定しましょう。

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

プレイヤーが "You have 10 seconds to go out before the bats arrive." と ``||player:say||`` するようにコードを書きます。

```python
batcave = player.position()
    player.say("You have 10 seconds to get out before the bats arrive.")
player.on_chat("cave", on_chat)
```

## ステップ 8

コードを **10** 秒（10,000 ms）間 ``||loops: Pause||`` しましょう。

```python
player.say("You have 10 seconds to get out before the bats arrive.")
    loops.pause(10000)
player.on_chat("cave", on_chat)
```

## ステップ 9

一時停止の後、プレイヤーが **"Watch out for bats!"** と言うようにコードを書きます。

```python
    loops.pause(10000)
    player.say("Watch out for bats!")
player.on_chat("cave", on_chat)
```

## ステップ 10

``||gameplay:time||`` を **dusk** に設定しましょう。

```python
gameplay.timeSet(gameplay.time(DUSK))
```

## ステップ 11

**bat_cave** 変数の位置でbatを ``||mobs:Spawn||`` しましょう。

```python
gameplay.time_set(gameplay.time(DUSK))
    mobs.spawn(BAT, batcave)
player.on_chat("cave", on_chat)
```

## ステップ 12

**bat** ``||mobs:spawn animal||`` を **200** 回繰り返しましょう。

```python
for index2 in range(200):
        mobs.spawn(BAT, batcave)
player.on_chat("cave", on_chat)
```

## ステップ 13

Minecraftに入って、チャットに **cave** と入力してすべてのコードが実行されるのを見てみましょう。

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