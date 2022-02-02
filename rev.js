function inp(num)
{
    console.log(parseInt(num+2)+2);  
}

let input=process.argv.slice(2);
inp(input);
console.log(input);