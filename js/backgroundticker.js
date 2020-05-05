
var timerID=null;
var metrum=1000;
var actualMetrum=0;
var maxMetrum = 0;
var beatPerPeriod = 0;
var periodBeat = 1;


function start()
{
    //console.log("MW.start!");
    timerID=setInterval(function()
    {
        //console.log("tick!");
        this.actualMetrum++;
        postMessage({"tick": this.actualMetrum});
    },metrum)
}

function reset()
{
    //console.log("MW.reset!");
    clearInterval(timerID);
    timerID=null;
    actualMetrum = 0;
    periodBeat = 1;

}

function setMetrum(metrum)
{
    //console.log("MW.set metrum!");
    this.metrum=metrum;
}

function setMaxMetrum(maxMetrum){
    this.maxMetrum = maxMetrum;
}

function setBeatPerPeriod(beatPerPeriod){
    this.beatPerPeriod = beatPerPeriod;
}

self.onmessage=function(e){

    //console.log("MW.onmessage:");
    //console.log(e.data);

    if (e.data.command) {

        if (e.data.command==="start") {
            this.start();
        }
        else if (e.data.command==="stop") {
            this.reset();
        }

    }

    else if (e.data.metrum) {

        if (timerID) {
            this.reset();
        }

        setMetrum(e.data.metrum);

    }
                
    else if (e.data.maxMetrum) {

        if (timerID) {
            this.reset();
        }

        setMaxMetrum(e.data.maxMetrum);

    }
                
    else if (e.data.beatPerPeriod) {
        
        if (timerID) {
            this.reset();
        }

        setBeatPerPeriod(e.data.beatPerPeriod);

    }

};