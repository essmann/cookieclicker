var score = document.getElementById("counter")
var cookie = document.getElementById("cookie")
var clickPower = 1;
var points = 0;

var sound = new Audio();
sound.src = "click1.mp3"
const upgrades = {
    slave:{
        owned: 0,
        price: 10,
        cps: 0,
        buySlave: function(){
            points = points-upgrades.slave.price;
            upgrades.slave.owned+=1;
            upgrades.slave.price+=10;
            upgrades.slave.cps+=3;
            document.getElementById("owned").innerHTML="Owned: "+upgrades.slave.owned;
            document.getElementById("price").innerHTML="Price: "+upgrades.slave.price;
            document.getElementById("cps").innerHTML="cps: "+upgrades.slave.cps;


        }      
    },
    baker:{
        owned: 0,
        price: 200,
        cps: 0,
        buyBaker: function(){
            points = points-upgrades.baker.price;
            upgrades.baker.owned+=1;
            upgrades.baker.price+=100;
            upgrades.baker.cps+=15;
            document.getElementById("bakerowned").innerHTML="Owned: "+upgrades.baker.owned;
            document.getElementById("bakerprice").innerHTML="Price: "+upgrades.baker.price;
            document.getElementById("bakercps").innerHTML="cps: "+upgrades.baker.cps;
        }
    }, 
}
document.getElementById("purchase").addEventListener("click",upgrades.slave.buySlave)
document.getElementById("bakerpurchase").addEventListener("click",upgrades.baker.buyBaker)

document.getElementById("bakerowned").innerHTML="Owned: "+upgrades.baker.owned;
            document.getElementById("bakerprice").innerHTML="Price: "+upgrades.baker.price;
            document.getElementById("bakercps").innerHTML="cps: "+upgrades.baker.cps;



function save(){
    localStorage.setItem("points", points);
    localStorage.setItem("bakerowned", upgrades.baker.owned);
    localStorage.setItem("bakerprice", upgrades.baker.price);
    localStorage.setItem("bakercps",upgrades.baker.cps)
    localStorage.setItem("owned", upgrades.slave.owned);
    localStorage.setItem("price", upgrades.slave.price);
    localStorage.setItem("cps",upgrades.slave.cps)
}
function load(){
    points = localStorage.getItem("points");
    points = parseInt(points)
    owned = localStorage.getItem("owned");
    owned = parseInt(owned);
    price = localStorage.getItem("price");
    price = parseInt(price);
    cps = localStorage.getItem("cps");
    upgrades.slave.cps = parseInt(cps);
    bakercps = localStorage.getItem("bakercps")
    upgrades.baker.cps = parseInt(bakercps)
    bakerprice = localStorage.getItem("bakerprice")
    upgrades.baker.price = parseInt(bakerprice)
    bakerowned = localStorage.getItem("bakerowned")
    upgrades.baker.owned = parseInt(bakerowned)

    document.getElementById("cps").innerHTML="cps: "+cps;
    document.getElementById("persecond").innerHTML="cookies per second: " + parseInt(upgrades.slave.cps + upgrades.baker.cps)

    //document.getElementById("persecond").innerHTML="cookies per second: " + parseInt(upgrades.slave.cps + upgrades.baker.cps)

        document.getElementById("owned").innerHTML="Owned: " + owned
        document.getElementById("price").innerHTML="Price: " + price
        document.getElementById("persecond").innerHTML="cookies per second: " + upgrades.slave.cps //slave

        document.getElementById("bakerowned").innerHTML="Owned: " + upgrades.baker.owned //baker
        document.getElementById("bakerprice").innerHTML="Price: " + upgrades.baker.price
        document.getElementById("bakercps").innerHTML="Price: " + upgrades.baker.cps
        
        document.getElementById("persecond").innerHTML="cookies per second: " + parseInt(upgrades.slave.cps + upgrades.baker.cps)

    }

document.getElementById("counter").innerHTML = 0;
document.getElementById("cookie").addEventListener("mouseup",click);
document.getElementById("cookie").addEventListener("mousedown",press);
function press(){
    console.log("ok")
    document.getElementById("bigcookie").width="270"

    sound.play();
    sound.play();
}
function click(){
    
    points++;
    document.getElementById("counter").innerHTML = points + " cookies"
    console.log(owned,price,points)
    document.getElementById("bigcookie").width="300"
}



setInterval(function(){ //purchase disabled if not enough points
    if(points<upgrades.slave.price){
        document.getElementById("purchase").disabled = true;
    }
    else{
        document.getElementById("purchase").disabled = false;
    }
    

    

    
},1000)
setInterval(function(){ //cookies per second

    points+=upgrades.slave.cps;
    points+=upgrades.baker.cps;
    document.getElementById("counter").innerHTML = points + " cookies"
    document.getElementById("persecond").innerHTML="cookies per second: " + parseInt(upgrades.slave.cps + upgrades.baker.cps)
    //document.getElementById("persecond").innerHTML="cookies per second: " + upgrades.baker.cps
    if(points<upgrades.baker.price){
        document.getElementById("bakerpurchase").disabled = true;

    }else{
        document.getElementById("bakerpurchase").disabled = false;


}},1000)

