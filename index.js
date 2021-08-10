function checkPalindrome(param) {
  let reversedWord = '';

  for(let i = param.length - 1; i >= 0; i--) {
    reversedWord += param.charAt(i);
  }

  return reversedWord == param ? true : false;
}

checkPalindrome('madam'); // will return 'true'
checkPalindrome('b'); // will return 'true'
checkPalindrome('brown'); // will return 'false'