var arr = [24,53,78,91,12];

var max = arr[0];
for (var i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
document.write("Max is: " + max);

