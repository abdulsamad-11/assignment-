
function checkPalindrome(str) {    
    let arrayValues = string.split('');
    
    let reverseArrayValues = arrayValues.reverse();
    
    let reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
let string = prompt('Enter a string: ');
checkPalindrome(string);



