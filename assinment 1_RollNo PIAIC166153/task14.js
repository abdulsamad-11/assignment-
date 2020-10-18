var a =2;
var b =1;

document.write(" a = " +a);
document.write("<br> b = " +b);
var st1 = --a;
document.write("<br>  --a = " + st1);
var st2 = (st1 - --b);
document.write("<br> --a - --b = " + st2);
var st3 = (st2 + ++b);
document.write("<br> + --a - --b + ++b = " + st3);
var st4 = (st3 + b--);
document.write("<br> --a - --b + ++b + b-- = " + st4);
document.write("<br>Result = " + st4);
