function checkPalindrome(param) {
  let reversedWord = '';

  for(let i = param.length - 1; i >= 0; i--) {
    reversedWord += param.charAt(i);
  }

  return reversedWord == param ? true : false;
}

function simplifiedCheckPalindrome(param) {
  for(let i = 0; i < param.length / 2; i++) {
    if(param.charAt(i) != param.charAt((param.length - 1) - i)) {
      return false;
    }

    return true;
  }
}

function isPalindromeRecursive(param, index) {
  if(index < param.length / 2) {
    let firstIndex = index;
    let lastIndex = (param.length - index) - 1;

    if(param.charAt(firstIndex) != param.charAt(lastIndex)) {
      return false;
    } else {
      return isPalindromeRecursive(param, index + 1);
    }
  } else {
    return true;
  }
}

function checkPalindromeRecursiveMethod(param) {
  return isPalindromeRecursive(param, 0);
}

checkPalindrome('madam'); // will return 'true'
checkPalindrome('b'); // will return 'true'
checkPalindrome('brown'); // will return 'false'

simplifiedCheckPalindrome('madam'); // will return 'true'
simplifiedCheckPalindrome('b'); // will return 'true'
simplifiedCheckPalindrome('brown'); // will return 'false'

checkPalindromeRecursiveMethod('madam'); // will return 'true'
checkPalindromeRecursiveMethod('b'); // will return 'true'
checkPalindromeRecursiveMethod('brown'); // will return 'false'