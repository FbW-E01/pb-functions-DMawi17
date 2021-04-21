// **1. Add Up.**
sumIntFrom1ToN = (p) => console.log((p * (p + 1)) / 2);
sumIntFrom1ToN(600);

// **2. Cubed.**
sumOfCubes = (i, j, k) => console.log(i ** 3 + j ** 3 + k ** 3);
sumOfCubes(2, 0, 0);

// **3. String Check.**
isStrStartOfWord = (wrd, str) => console.log(wrd.startsWith(str));
isStrStartOfWord("button", "butt");

// **4. Less Than or Equal to Zero?**
isLEQZero = (c) => console.log(c <= 0);
isLEQZero(-1);

// **5. Count Occurrences.**
countOccurrences = (lungDisease) =>
    console.log((lungDisease.match(/o/gi) || []).length);
countOccurrences("pneumonOultramicroscopicsilicovolcanOconiosis");
// || [] will avoid error incase the character is absent and will print 0 instead.

// **6. X To The Power of X.**
calcBaseToExponent = (p, q) => console.log(p ** q);
calcBaseToExponent(5, 5);

// **7. Dog Years.**
dogAge = (z) => console.log(z * 7);
dogAge(1);

// **8. A Lifetime Supply...**
lifetimeSupply = (myAge, snackADay, maxAge = 100) =>
    console.log(Math.round((maxAge - myAge) * (365.24 * snackADay)));
lifetimeSupply(32, 0.58, 65);

// **9. Where's Waldo?**
isWaldoHere = (str) => console.log(str.includes("Waldo"));
isWaldoHere("I found you Waldo");

// **10. Pie.**
isEqualSlices = (sliceNum, recipientNum, slicePerPer) =>
    console.log((isEqual = sliceNum === recipientNum * slicePerPer));
isEqualSlices(15, 5, 3);

// **11. XO**
isNumXsEqualOs = (words) =>
    console.log(words.match(/x/gi).length === words.match(/o/gi).length);
isNumXsEqualOs("oooooxxxxx");

// **12. isPrime?**

isPrime = (n) => {
    for (var i = 2; i < n; i++) if (n % i === 0) return false;
    return n > 1;
};
console.log(isPrime(9));

// **13. Validate Email.**
function isValidEmail(email) {
    let isFiltered = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (email.match(isFiltered)) { return "Valid" } else{return "Invalid"}
}
console.log(isValidEmail("j@example.com"));
console.log(isValidEmail("@example.com"))
console.log(isValidEmail("john.smith@com"));
console.log(isValidEmail("john.smith@email.com"));
console.log(isValidEmail("john..smith@email.com"));
console.log(isValidEmail("john.@email.com"));
console.log(isValidEmail("john@.email.com"));