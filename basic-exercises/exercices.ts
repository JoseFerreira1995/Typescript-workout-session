// === Basic JavaScript & Algorithm Scripting ===

// 1. Convert Celsius to Fahrenheit
export function convertToF(celsius: number): number {
    const fahrenheit: number = (celsius * 9) / 5 + 32;
    return fahrenheit;
}


// 2. Reverse a String
export function reverseString(str: string): string {
    let newStr: string = "";

    for (let char of str) {
        newStr = char + newStr
    }

    return newStr

}


// 3. Factorialize a Number
export function factorialize(num: number): number {
    let counter: number = 1

    for (let i = 1; i <= num; i++) {
        counter *= i

    }
    return counter
}


// 4. Find the Longest Word in a String
export function findLongestWordLength(str: string): number {
    let newString: string[] = str.split(" ")
    let longestWordLength: number = 0

    for (let word of newString) {
        if (word.length > longestWordLength) {
            longestWordLength = word.length
        }
    }

    return longestWordLength
}


// 5. Return Largest Numbers in Arrays
export function largestOfFour(arrays: number[][]): number[] {
    let counter: number[] = []
    for (let i = 0; i < arrays.length; i++) {
        let biggestNums: number = Math.max(...arrays[i])
        counter.push(biggestNums)

    }
    return counter
}


// 6. Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str: string, target: string): boolean {
    if (str.charAt(str.length - 1) === target) {
        return true
    }

    return false
}

confirmEnding('abc', 'c')


// 7.Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str: string, num: number): string {
    if (num <= 0) {
        return ''
    }

    if (num > 1) {
        let newStr: string = ''
        for (let i = 0; i < num; i++) {
            newStr += str
        }
        str = newStr
    }

    return str

}


//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.


function truncateString(str: string, num: number): string {
    if (str.length > num) {
        return str.slice(0, num) + '...'
    } else {
        return str
    }
}

truncateString('A-tisket a-tasket A green and yellow basket', 7);




