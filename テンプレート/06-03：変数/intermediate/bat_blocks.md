# Bat Cave: Blocks

## Step 1
Rename the existing ``||player:on chat||`` command **cave**.

```blocks
player.onChat("cave", function () {
})
```

## Step 2

Get a  ``||player:player say||`` command, type **"Dig a cave"**, and drag it into the ``||player:on chat||`` command.

```blocks
player.onChat("cave", function () {
    player.say("Dig a cave")
})
```

## Step 3

Get a ``||gameplay:time set||`` block, set it **day**, and drag it into the ``||player:on chat||`` **cave** command — below the ``||player:say||`` command.

```blocks
player.onChat("cave", function () {
    player.say("Dig a cave")
    gameplay.timeSet(gameplay.time(DAY))
})
```

## Step 4

Get a ``||blocks:fill with||`` block and select an **air** block with these positions: **from -1.0,-1** and **to 1,2,1**. Set it to **replace**.

```blocks
player.onChat("cave", function () {
    player.say("Dig a cave")
    gameplay.timeSet(gameplay.time(DAY))
    blocks.fill(
    AIR,
    pos(-1, 0, -1),
    pos(1, 2, 1),
    FillOperation.Replace
    )
})
```

## Step 5

Get a ``||loops:repeat||`` loop and set it to **50** times. Drag the ``||blocks:fill with||`` **air** block into the loop, then drag the entire ``||loops:repeat||`` loop into the ``||player:on chat||`` **cave** command below the ``||gameplay:time set||`` **day** command.

```blocks
player.onChat("cave", function () {
    player.say("Dig a cave")
    gameplay.timeSet(gameplay.time(DAY))
    for (let index = 0; index < 50; index++) {
        blocks.fill(
        AIR,
        pos(-1, 0, -1),
        pos(1, 2, 1),
        FillOperation.Replace
        )
    }
})
```

## Step 6

Get a ``||variables:set variable||`` and assign it a new variable called **bat_cave**.  Get a ``||player:player world position||`` and drag it into the **bat_cave** variable. 
Drag the newly completed ``||variables:set variable||`` **bat_cave** into the ``||player:on chat||`` command **cave** below the ``||loops:repeat||`` loop **50**.

```blocks
let batcave: Position = null
player.onChat("cave", function () {
    player.say("Dig a cave")
    gameplay.timeSet(gameplay.time(DAY))
    for (let index = 0; index < 50; index++) {
        blocks.fill(
        AIR,
        pos(-1, 0, -1),
        pos(1, 2, 1),
        FillOperation.Replace
        )
    }
    batcave = player.position()
})
```

## Step 7

Get a  ``||player:say||`` block and code it as “You have 10 seconds to go out before the bats arrive.” Drag it into the ``||player:on chat||`` **cave** command below the **bat_cave** variable.

```blocks
player.say("You have 10 seconds to get out before the bats arrive.")
```

## Step 8

Get a ``||loops: pause||`` loop and set it to **10** seconds (10,000 ms). Drag this loop into the end of the ``||player:on chat||`` command.

```blocks
player.say("You have 10 seconds to get out before the bats arrive.")
    loops.pause(10000)
player.on_chat("cave", on_chat)
```

## Step 9

Get another ``||player:player say||``command and code the player to say, “Watch out for bats!”. Drag the newly completed ``||player:player say||`` into the ``||player:on chat||`` command at the end. 

```blocks
loops.pause(10000)
    player.say("Watch out for bats!")
player.on_chat("cave", on_chat)
```

## Step 10

Duplicate the ``||gameplay:time set||`` **day** (from step 3) and set it to **dusk**. Drag it into the end of the ``||player:on chat||`` command.

```blocks
gameplay.timeSet(gameplay.time(DUSK))
```

## Step 11

Get a ``||mobs:spawn animal||`` block and drag it into the workspace, select **bat** and assign the **bat_cave** variable.

```blocks
mobs.spawn(BAT, batcave)
```

## Step 12

Next, repeat the **bat** ``||mobs:spawn animal||`` step. Get a ``||loops:repeat||`` loop and set it to **200** times. Drag the **bat** into the loop. Drag the entire loop into the ``||player:on chat||`` **cave** command below the ``||gameplay:time set||`` **dusk** block.

```blocks
for (let index = 0; index < 200; index++) {
        mobs.spawn(BAT, batcave)
    }
```

## Step 13

Go into Minecraft and type **cave** in the chat to see all the code run.

```blocks
let batcave: Position = null
player.onChat("cave", function () {
    player.say("Dig a cave")
    gameplay.timeSet(gameplay.time(DAY))
    for (let index = 0; index < 50; index++) {
        blocks.fill(
        AIR,
        pos(-1, 0, -1),
        pos(1, 2, 1),
        FillOperation.Replace
        )
    }
    batcave = player.position()
    player.say("You have 10 seconds to get out before the bats arrive.")
    loops.pause(10000)
    player.say("Watch out for bats!")
    gameplay.timeSet(gameplay.time(DUSK))
    for (let index = 0; index < 200; index++) {
        mobs.spawn(BAT, batcave)
    }
})
```

