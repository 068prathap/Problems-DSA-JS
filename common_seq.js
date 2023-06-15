const readline=require("readline-sync")
let text1=readline.question("Enter the String :");
let text2=readline.question("Enter the String :");
let n=text1.length;
    let m=text2.length;
    dp=new Array(n+1).fill(0).map(_=>new Array(m+1).fill(0));
    for(let i=1;i<=n;i++){
        for(let j=1;j<=m;j++){
            if(text1[i-1]==text2[j-1])
            {
                dp[i][j]=dp[i-1][j-1]+1;
            }
            else{
                dp[i][j]=Math.max(dp[i][j-1],dp[i-1][j]);
            }
        }
        // console.log(dp)
    }
    console.log(dp[n][m]);