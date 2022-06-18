displayResult= (result)=>
{
    console.log(result)
}

add2num=(a,b,callbackFn)=>
{

    let c=a+b
    callbackFn(c)

}
add2num(5,4,displayResult)