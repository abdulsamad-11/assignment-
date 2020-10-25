
var input = Number(prompt("enter number"));

    output = [];
    conval = input.toString();

for (var i = 0, len = conval.length; i < len; i += 1) {
    output.push(+conval.charAt(i));
}

for (var i = 0, sum = 0; i < output.length; sum += output[i++]);
console.log(sum/output.length);



