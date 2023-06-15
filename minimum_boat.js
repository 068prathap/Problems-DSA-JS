let arr=[1,2,3,5,2,3];
limit=5;
let arr1=[];
arr.sort(function(a, b){return b-a});
let a=0,b=0,c=0,d=0;
for(var i=0;i<arr.length;i++)
{
    let arr2=[]
    console.log(arr);
    if(arr[i]>0)
    {
        arr2.push(arr[i]);
        a=i+1;
        b=limit-arr[i];
        c=b;
        d+=arr[i];
        arr[i]=-1;
        console.log(arr2+"--"+b);
        while(a<arr.length && b!=0)
        {
            console.log("==="+b);
            for(var j=a;j<arr.length;j++)
            {
                if(arr[j]>0 && arr[j]==b)
                {
                    arr2.push(arr[j]);
                    b=b-arr[j];
                    d+=arr[j];
                    arr[j]=-1;
                    break;
                }
            }
            if(c==b)
            {
                b-=1;
            }
            c=b;
            a+=1;
            if(d!=limit && b==0)
            {
                console.log('hi'+d);
                b=limit-d;
                if(b==1 && arr.indexOf(1)==-1)
                {
                    b=0;
                }
            }
        }
        arr1.push(arr2);
        arr2=[];
        d=0;
    }
}
console.log(arr1);