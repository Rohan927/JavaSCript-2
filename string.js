let name='I am Iron Man';
let strarray=name.split( ' ');
console.log(strarray);
let biggest=-1;
for(let i=0;i<strarray.length;i++){
    if(strarray[i].length>biggest){
        biggest=strarray[i].length;
    }
}
console.log(biggest);