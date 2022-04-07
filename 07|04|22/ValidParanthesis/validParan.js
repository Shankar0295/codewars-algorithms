function validParentheses(s) {
    let n = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') n++;
        if (s[i] == ')') n--;
        if (n < 0) return false;
    }
    return n == 0;
}