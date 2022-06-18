displayResult= (result)=>
{
    console.log(result)
}

mul2num=(a,b,callbackFn)=>
{

    let c=a*b
    callbackFn(c)

}
mul2num(5,5,displayResult)