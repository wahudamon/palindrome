function checkPalindrome(param) {
  let reversedWord = '';

  for(let i = param.length - 1; i >= 0; i--) {
    reversedWord += param.charAt(i);
  }

  return reversedWord == param ? true : false;
}

function simplifiedCheckPalindrome(param) {
  for(let i = 0; i < param.length; i++) {
    if(param.charAt(i) != param.charAt((param.length - 1) - i)) {
      return false;
    }

    return true;
  }
}

//checkPalindrome('madam'); // will return 'true'
//checkPalindrome('b'); // will return 'true'
//checkPalindrome('brown'); // will return 'false'

simplifiedCheckPalindrome('madam');
simplifiedCheckPalindrome('b');
simplifiedCheckPalindrome('brown');
