function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        for (var i = 1; i <= n; i++) {
            result = n * factorial(n - 1);
            return result;
        }
    }
}
console.log(factorial(5));