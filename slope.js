var stockPrices=[[72,98],[62,27],[32,7],[71,4],[25,19],[91,30],[52,73],[10,9],[99,71],[47,22],[19,30],[80,63],[18,15],[48,17],[77,16],[46,27],[66,87],[55,84],[65,38],[30,9],[50,42],[100,60],[75,73],[98,53],[22,80],[41,61],[37,47],[95,8],[51,81],[78,79],[57,95]];
var slope=0,sum=0,a=0;
for(var i=1;i<stockPrices.length;i++)
{
    a=((stockPrices[i][1]-stockPrices[i-1][1])/(stockPrices[i][0]-stockPrices[i-1][0]));
    console.log(a);

    if(slope!=a)
    {
        sum+=1;
        slope=a;
    }
}
console.log(sum);
return sum;