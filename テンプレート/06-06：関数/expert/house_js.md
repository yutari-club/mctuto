# House Functions: JavaScript

## Step 1
Code a ``||functions:function||`` and name it **walls**. 

```javascript
function walls () {
}
```

## Step 2
Within the **walls** function, code the agent to ``||agent:set block or item||`` and set it to **Acacia Wood Planks** at a count of **64** in slot **1**.

```javascript
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1)
}
```

## Step 3
Within the **walls** function, code a ``||loops:for||`` loop that repeats **3** times an ``||agent:agent move||`` **up by 1** .

```javascript
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1)
    for (let index = 0; index < 3; index++) {
        agent.move(UP, 1)
    }
}
```

## Step 4
Code another ``||loops:for||`` loop that repeats **4** times, and drag it inside the first ``||loops:for||`` loop — beneath the first ``||agent:agent move||``. With the second loop, code an ``||agent:agent turn right||``.

```javascript
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(UP, 1) 
        for (let index = 0; index < 4; index++) { 
            agent.turn(RIGHT_TURN) 
        } 
    } 
}) 
```

## Step 5
Code a third ``||loops:for||`` loop, drag it inside the second ``||loops:for||`` loop and place it above the a ``||agent: turn right||``. Set the third ``||loops:for||`` loop to repeat **4** times. Within the innermost ``||loops:for||`` loop, code the agent to ``||agent:place||`` and set it to **down**. Add an agent ``||agent:move||``, set it to **forward by 1**, and drag it inside the innermost ``||loops:for||`` loop under the ``||agent:place||`` down.

```javascript
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(UP, 1) 
        for (let index = 0; index < 4; index++) { 
            for (let index = 0; index < 4; index++) { 
                agent.place(DOWN) 
                agent.move(FORWARD, 1) 
            } 
            agent.turn(RIGHT_TURN) 
        } 
    } 
}) 
```

## Step 6
Code a new ``||functions:function||`` and name it **roof**.   

```javascript
function roof () {
	
}
```

## Step 7
Code the agent to ``||agent:set block or item||``, set it to **brick slab**, set the count to **64** and the slot to **1** and drag it into the **roof** ``||functions:function||``. Also, code the agent to ``||agent:move||`` **up by 1**.

```javascript
function roof () {
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
}) 
```

## Step 8
Inside the **roof** ``||functions:function||``, code a ``||loops:for||`` loop and set it to repeat **4** times. Within the loop, code the agent to ``||agent:move||`` **back by 4**, and then code the agent to ``||agent:move||``  **right by 1**.
	
```javascript
function roof () {
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
    for (let index = 0; index < 4; index++) { 
        agent.move(BACK, 4) 
        agent.move(RIGHT, 1) 
    } 
}) 
```

## Step 9
Code another ``||loops:for||`` loop and set it to repeat **4** times. Within this loop, add an ``||agent:agent place down||``, followed by an ``||agent:agent move||`` **forward by 1**. Place this ``||loops:for||`` loop inside the previous loop—above the ``||agent:agent move||`` **back by 4**.

```javascript
function roof () {
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
    for (let index = 0; index < 4; index++) { 
        for (let index = 0; index < 4; index++) { 
            agent.place(DOWN) 
            agent.move(FORWARD, 1) 
        } 
        agent.move(BACK, 4) 
        agent.move(RIGHT, 1) 
    } 
}) 
```

## Step 10
Code an ``||player:on chat||`` command and name it **house**, and have it call both the **walls** and **roof** ``||functions:functions||``.

```javascript
player.onChat("house", function () {
    walls()
    roof()
})
```


## Step 11
Go into Minecraft and test out the **house** function.

```javascript
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1)
    for (let index = 0; index < 3; index++) {
        agent.move(UP, 1)
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 4; index++) {
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(RIGHT_TURN)
        }
    }
}
function roof () {
    agent.setItem(BRICKS_SLAB, 64, 1)
    agent.move(UP, 1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(BACK, 4)
        agent.move(RIGHT, 1)
    }
}
player.onChat("house", function () {
    walls()
    roof()
})
```

