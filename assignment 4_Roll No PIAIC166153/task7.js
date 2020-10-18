var sentence = ("The quick brown fox jumps over the lazy dog.");
var updatedsentence = sentence.toLowerCase();

var count = updatedsentence.match(/the/g).length;
document.write("The quick brown fox jumps over the lazy dog. <br> There ara " +count+" accurrence(s) of word 'the':");


