//% color=#7ABB55 weight=70 icon="\uf1b2"
namespace blocks {
    //% block="柱状(ちゅうじょう)のクォーツのブロック`Block.PillarQuartzBlock`が破壊(はかい)された時(とき)"
    //% weight=0
    export function onPillarQuartzBlockBroken(handler: () => void) {
        blocks.onBlockBroken(blocks.blockById(196763), handler);
    }

}