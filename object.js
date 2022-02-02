let tony={
    name:"Tony",
    lastname:"start",
    friends :['steve','Bruce','Peter'],
    age : 45,
    isAvenger:true,
    abc:undefined,
    address:{
        state:"New York",
        city : "long island"
    },
    saysHi:function fn(){
        console.log('iron man says hello');
        return "Part of journey is the end"
    },

    
    }
    let karr = Object.keys(tony);
    console.log(karr);
    for(let k in tony){
        console.log(k),
        console.log(tony[k]);
    }
//console.log(tony.address.city)
console.log("Rohan");