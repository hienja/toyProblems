/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.
*/

var isPalindrome = function(s) {
  //Regular expression for all non-alphanumeric characters. /[^A-Za-z0-9]+/gi would have works as well
  s = s.replace(/[\W_]+/gi, '').toLowerCase();
  var condition = true;
  for(var i = 0; i < Math.floor(s.length / 2) && condition; i++) {
    if(s[i] != s[s.length - i- 1]) {
      condition = false;
    }
  }
  //Slower Alternative
  //var reverse = s.split('').reverse().join('');
  return condition;
};

console.log(isPalindrome('racaecar'))