const readline=require("readline-sync");
var ax1= readline.question("enter the x1: ");
var ay1= readline.question("enter the y1: ");
var ax2= readline.question("enter the x2: ");
var ay2= readline.question("enter the y2: ");
var wid1,len1;
if(ax1<=0 && ax2>=0 || ax1>=0 && ax2<=0)
{
    wid1=Math.abs(ax1)+Math.abs(ax2);
}
else
{
    wid1=Math.abs(Math.abs(ax1)-Math.abs(ax2));
}
if(ay1<=0 && ay2>=0 || ay1>=0 && ay2<=0)
{
    len1=Math.abs(ay1)+Math.abs(ay2);
}
else
{
    len1=Math.abs(Math.abs(ay1)-Math.abs(ay2));
}
var area1=wid1*len1;
console.log(area1)

var bx1= readline.question("enter the x1: ");
var by1= readline.question("enter the y1: ");
var bx2= readline.question("enter the x2: ");
var by2= readline.question("enter the y2: ");
var wid2,len2;
if(bx1<=0 && bx2>=0)
{
    wid2=Math.abs(bx1)+Math.abs(bx2);
}
else
{
    wid2=Math.abs(Math.abs(bx1)-Math.abs(bx2));
}
if(by1<=0 && by2>=0)
{
    len2=Math.abs(by1)+Math.abs(by2);
}
else
{
    len2=Math.abs(Math.abs(by1)-Math.abs(by2));
}
var area2=wid2*len2;
console.log(area2);

var cx1,cy1;
var cx2,cy2;
if(ax1<bx1 && ay1<by1 && ax2>bx2 && ay2>by2)
{
    cx1=ax1;
    cy1=ay1;
    cx2=bx2;
    cy2=by2;
}
else if(ax1>bx1 && ay1<by1 && ax2>bx2 && ay2<by2)
{
    cx1=ax1;
    cy1=by1;
    cx2=bx2;
    cy2=ay2;
}
else if(ax1<bx1 && ay1<by1 && ax2<bx2 && ay2<by2)
{
    cx1=bx1;
    cy1=by1;
    cx2=ax2;
    cy2=ay2;
}
else if(ax1<bx1 && ay1>by1 && ax2<bx2 && ay2>by2)
{
    cx1=bx1;
    cy1=ay1;
    cx2=ax2;
    cy2=by2;
}

if(ax1>bx1 && ay1<by1 && ax2>bx2 && ay2>by2)
{
    cx1=ax1;
    cy1=by1;
    cx2=bx2;
    cy2=by2;
}
else if(ax1<bx1 && ay1<by1 && ax2>bx2 && ay2<by2)
{
    cx1=bx1;
    cy1=by1;
    cx2=bx2;
    cy2=ay2;
}
else if(ax1<bx1 && ay1>by1 && ax2<bx2 && ay2<by2)
{
    cx1=bx1;
    cy1=ay1;
    cx2=ax2;
    cy2=ay2;
}
else if(ax1<bx1 && ay1<by1 && ax2<bx2 && ay2>by2)
{
    cx1=ax1;
    cy1=ay1;
    cx2=ax2;
    cy2=by2;
}

if(ax1<bx1 && ay1<by1 && ax2>bx2 && ay2>by2)
{
    cx1=bx1;
    cy1=by1;
    cx2=bx2;
    cy2=by2;
}
console.log(cx1+","+cy1);
console.log(cx2+","+cy2);

var area3=0;
if(cx1<cx2 && cy1<cy2)
{
    var wid3,len3;
    if(cx1<=0 && cx2>=0 || cx1>=0 && cx2<=0)
    {
        wid3=Math.abs(cx1)+Math.abs(cx2);
    }
    else
    {
        wid3=Math.abs(Math.abs(cx1)-Math.abs(cx2));
    }
    if(cy1<=0 && cy2>=0 || cy1>=0 && cy2<=0)
    {
        len3=Math.abs(cy1)+Math.abs(cy2);
    }
    else
    {
        len3=Math.abs(Math.abs(cy1)-Math.abs(cy2));
    }
    area3=wid3*len3;
    console.log(area3);
    var area=(area1+area2)-area3;
    console.log(area);
}
else if(ax1==bx1 && ay1==by1 && ax2==bx2 && ay2==by2)
{
    console.log(area1);
}
else
{
    var area=area1+area2;
    console.log(area);
}