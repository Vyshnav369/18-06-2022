displayResult= (result)=>
{
    console.log(result)
}

sub2num=(a,b,callbackFn)=>
{

    let c=a-b
    callbackFn(c)

}
sub2num(20,10,displayResult)