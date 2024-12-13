enum datasetType {
    //% block="historical"
    historical = 0,
    //% block="current"
    current = 1,
    //% block="live"
    live = 2
}

enum ML {
    //% block="supervised"
    supervised,
    //% block="unsupervised"
    unsupervised,
    //% block="semi-supervised"
    semiSupervised,
    //% block="reinforcment"
    reinforcment
}

//% color="#8c800b"
namespace Input{

    //% block="location 1 picture data"
    export function location1PictureData_MT() {
        blocks.place(STONE, world(96, 61, -397));
    }

    //% block="location 1 picture data"
    export function location1PictureData_MTB() {
        agent.move(FORWARD, 2)
    }

    //% block="location 2 picture data"
    export function location2PictureData_MT() {
        blocks.place(STONE, world(96, 61, -396));
    }

    //% block="location 2 picture data"
    export function location2PictureData_MTB() {
        agent.move(FORWARD, 2)
    }

    //% block="location 3 picture data"
    export function location3PictureData_MT() {
        blocks.place(STONE, world(96, 61, -395));
    }

    //% block="location 3 picture data"
    export function location3PictureData_MTB() {
        agent.move(FORWARD, 2)
    }

    //% block="live sensor 1 data"
    export function sensor1_OO() {
        agent.move(FORWARD, 2)
    }

    //% block="live sensor 2 data"
    export function sensor2_OO() {
        agent.move(FORWARD, 2)
    }

    //% block="live sensor 3 data"
    export function sensor3_OO() {
        agent.move(FORWARD, 2)
    }

    //% block="live sensor 4 data"
    export function sensor4_OO() {
        agent.move(FORWARD, 2)
    }

    //% block="trap camera 1 data"
    export function trap1_PR() {
        agent.move(FORWARD, 2)
    }

    //% block="trap camera 2 data"
    export function trap2_PR() {
        agent.move(FORWARD, 2)
    }

    //% block="trap camera 3 data"
    export function trap3_PR() {
        agent.move(FORWARD, 2)
    }

    //% block="get location 1 satellite data"
    export function beacon1_SF() {
        agent.move(FORWARD, 1)
    }

    //% block="get location 2 satellite data"
    export function beacon2_SF() {
        agent.move(FORWARD, 1)
    }

    //% block="get location 3 satellite data"
    export function beacon3_SF() {
        agent.move(FORWARD, 1)
    }

    //% block="get location 4 satellite data"
    export function beacon4_SF() {
        agent.move(FORWARD, 1)
    }

    //% block="get location 5 satellite data"
    export function beacon5_SF() {
        agent.move(FORWARD, 1)
    }

    //% block="control satellite"
    //% handlerStatement=1
    export function runSatelite_SF(handler: () => void) {
            let i = 0
            for(i = 0; i<3; i++){
            handler();
        }
    }

    //% block="location 1 water data"
    export function waterData1_WQ() {
        agent.move(FORWARD, 2)
    }

    //% block="location 2 water data"
    export function waterData2_WQ() {
        agent.move(FORWARD, 2)
    }

    //% block="location 3 water data"
    export function waterData3_WQ() {
        agent.move(FORWARD, 2)
    }
}

//% color="#4C97FF"
namespace Datasets{

    //% block="make dataset"
    //% handlerStatement=1
    export function setOfData_MT(handler: () => void) {
        blocks.place(STONE, world(96, 61, -398));
        handler();
    }

    //% block="make dataset"
    //% handlerStatement=1
    export function setOfData_MTB(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="make %type| dataset"
    //% handlerStatement=1
    export function setOfData_OO(type: datasetType, handler: () => void) {
        if(type == 2){
            let i = 0
            for(i = 0; i<2; i++){
            handler();
            }
        }
    }

    //% block="make %type| dataset"
    //% handlerStatement=1
    export function setOfData_SF(type: datasetType, handler: () => void){
        if(type == 1){
            let i = 0
            for(i = 0; i<2; i++){
            handler();
            }
        }
    }

    //% block="transfer data"
    export function transferData(){
        agent.move(UP, 6)
    }

    //% block="make %type| dataset"
    //% handlerStatement=1
    export function setOfData_PR(type: datasetType, handler: () => void) {
        if(type == 0){
            let i = 0
            for(i = 0; i<2; i++){
            handler();
            }
        }
    }

    //% block="make %type| dataset"
    //% handlerStatement=1
    export function setOfData_WQ(type: datasetType, handler: () => void) {
        if(type == 1){
            let i = 0
            for(i = 0; i<2; i++){
            handler();
            }
        }
    }

    //% block="extract patterns"
    export function extractPatterns_PR() {
        agent.move(LEFT, 4)
    }

    //%block="current dataset"
    export function currentData():number{
        return 0
    }

    //%block="historical dataset"
    export function historicalData():number{
        return 0
    }

    //%block="live dataset"
    export function liveData():number{
        let i = 2
        return i
    }

    //% block="input dataset"
    export function input_MT() {
    blocks.place(STONE, world(110, 61, -397));
    }

    //% block="input dataset"
    export function input_MTB() {
    agent.move(FORWARD, 2)
    }

    //% block="input datasets"
    export function input_PR() {
    agent.move(RIGHT, 2)
    }

    //% block="input datasets"
    export function input_SF() {
    agent.move(RIGHT, 2)
    }

    //% block="input %type| dataset"
    export function input_OO(type: datasetType){
        if(type == 2){
           agent.move(FORWARD, 3)
        }
    }

    //% block="compare %type0| dataset against %type1|"
    //% handlerStatement=1
    export function compare_PR(type0: datasetType, type1: datasetType) {
        if(type0==1 && type1==0){
            agent.move(FORWARD, 2)
        }
    }

    //% block="compare %type0| dataset against %type1|"
    //% handlerStatement=1
    export function compare_SF(type0: datasetType, type1: datasetType) {
        if(type0==1 && type1==0){
            agent.move(FORWARD, 2)
        }
    }

    //% block="input %type| dataset"
    export function input_WQ(type: datasetType){
        if(type == 1){
           agent.move(FORWARD, 3)
        }
    }

}

//% color="#8332A8"
namespace AI {

    //% block="unsupervised machine learning"
    //% handlerStatement=1
    export function ml_MT(handler: () => void) {
        blocks.place(STONE, world(110, 61, -398));
        handler();
    }

    //% block="unsupervised machine learning"
    //% handlerStatement=1
    export function ml_MTB(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="semi-supervised machine learning"
    //% handlerStatement=1
    export function ml_SF(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="semi-supervised machine learning"
    //% handlerStatement=1
    export function ml_PR(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="supervised machine learning"
    //% handlerStatement=1
    export function ml_WQ(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="analyze water data"
    export function analyze_WQ(){
        agent.move(RIGHT, 2)
    }
    
    //% block="analyze data"
    export function analyze_MT(){
        blocks.place(STONE, world(110, 61, -396));
    }

    //% block="analyze data"
    export function analyze_MTB(){
        agent.move(RIGHT, 3)
    }

    //% block="machine learning"
    //% handlerStatement=1
    export function ml_OO(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="autonomous navigation algorithm"
    //% handlerStatement=1
    export function ml_OO2(handler: () => void) {
        agent.move(DOWN, 5)
        handler();
    }

    //% block="analyze terrain data"
    export function analyze_OO(){
        agent.move(LEFT, 1)
    }

    //% block="generate routes"
    export function genRoutes_OO(){
        agent.move(RIGHT, 2)
    }

    //% block="analyze pattern data"
    export function analyze_PR(){
        agent.move(LEFT, 3)
    }

    //% block="run predictive analysis"
    export function analyze_SF(){
        agent.move(LEFT, 3)
    }

}

//% color="#2d854e"
namespace Output {

    //% block="Agent reach sensor 1"
    export function reach1_OO() {
        agent.move(DOWN, 5)
    }

    //% block="Agent reach sensor 2"
    export function reach2_OO() {
        agent.move(FORWARD, 24)
        agent.move(RIGHT, 7)
        agent.move(DOWN, 12)

        agent.teleport(world(679, 61, 96), 180)
    }

    //% block="Agent reach sensor 3"
    export function reach3_OO() {
        agent.move(DOWN, 5)
    }

    //% block="Agent reach sensor 4"
    export function reach4_OO() {
        agent.move(RIGHT, 32)
        agent.move(DOWN, 12)
        agent.move(FORWARD, 4)

        agent.teleport(world(679, 61, 96), 180)
    }

    //% block="show locations"
    export function showLocations_MT(){
        blocks.place(STONE, world(110, 61, -395));
    }

    //% block="show locations"
    export function showLocations_MTB(){
        agent.move(BACK, 1)
    }

    //% block="locate ocelots"
    export function locateOcelots_PR(){
        agent.move(RIGHT, 4)
    }

    //% block="find best farming locations"
    export function locateFarm_SF(){
        agent.move(RIGHT, 4)
    }

    //% block="locate pollution sources"
    export function locatePollution_WQ(){
        agent.move(LEFT, 3)
    }
}

//% color="#ED82B6"
namespace Test{

    //% block="test loop"
    //% handlerStatement=1
    export function testLoop(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
        handler();
        }
    }

    //%block="test moves"
    export function testMoves(){
        agent.move(FORWARD, 2)
        agent.turn(TurnDirection.Left)
        agent.move(FORWARD, 2)
    }
}


