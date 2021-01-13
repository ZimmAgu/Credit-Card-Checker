// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch =   [   valid1, valid2, valid3, valid4, valid5, 
                    invalid1, invalid2, invalid3, invalid4, invalid5,  
                    mystery1, mystery2, mystery3, mystery4, mystery5
                ]

        


















/*
    What this function does:
    1. Iterates through all of the digits in each card backwards
    2. every other digit in the card number is doubled
    3. if a number is greater than 9 after doubling, 9 is sbtracted from its value
    4. After the first three steps, If the sum of all of all of this digits is divisible by 10, it returns true, false otherwise
*/            
let validate_Credit_Card = (card_Number) => {

    // The total of all of the card numbers starts at 0
    let sum_of_Card_Digits = 0


    
    // iterating through the card_Number array backwards
    for (let digit = card_Number.length - 1; digit >= 0; digit--) {

        // The current value ois the current iteration of the digit in the card number
        let current_Value = card_Number[digit];


        // Every other value of the card number is doubled
        if ((card_Number.length - 1 - digit) % 2 == 1) {
            current_Value *= 2
        }

        /* 
            If the current value is greater than 9 after doubling
            9 is subtracted from the current value
        */
        if (current_Value > 9) {
            current_Value -= 9;
        }

        sum_of_Card_Digits += current_Value;


    }
        /* 
            If the sum of the card digit total is divisible by 10
            the function returns true (meaning the card is valid)

            or else it returns false (meaning the card is invalid)
        */
        if (sum_of_Card_Digits %10 == 0) {
            return true; // true means valid
        } else {
            return false; // false means invalid
        }

} // End of the validate_Credit_Card Function



console.log(`validate_Credit_Card test functions`);
// Test functions:
console.log(validate_Credit_Card(valid1)); // Should print true
console.log(validate_Credit_Card(invalid1)); // Should print false
console.log(``);
























// check through the nested array for which
let find_Invalid_Cards = (cards) => {

    let found_Invalid_Cards = [];

    for (let digit = 0; digit < cards.length; digit++ ) {

        let current_Digit = cards[digit];

        if (validate_Credit_Card(current_Digit) == false ) {
            found_Invalid_Cards.push(current_Digit);
        }
    }

    return found_Invalid_Cards;
    
} // End of find_Invalid_Cards function


// Test function
console.log(`find_Invalid_Cards function test for the 5 valid card arrays:`)
console.log(find_Invalid_Cards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything

console.log(``)
console.log(`find_Invalid_Cards function test for the 5 invalid card arrays:`)
console.log(find_Invalid_Cards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers


console.log(``)
console.log(`find_Invalid_Cards function test for batch:`)
console.log(find_Invalid_Cards(batch)); // Test what the mystery numbers are

























let id_Invalid_Card_Companies = (invalid) => {

    let companies = [];

    for (let digit = 0; digit < invalid.length; digit++ ) {
        switch (invalid[digit][0]) {
            case 3:
              if (companies.indexOf('Amex') === -1) {
                companies.push('Amex');
              }
              break
            case 4:
              if (companies.indexOf('Visa') === -1) {
                companies.push('Visa');
              }
              break
            case 5:
              if (companies.indexOf('Mastercard') === -1) {
                companies.push('Mastercard');
              }
              break
            case 6:
              if (companies.indexOf('Discover') === -1) {
                companies.push('Discover');
              }
              break
            default:
              console.log('Company not found');
          }
      

    }


    return companies;
}



console.log(id_Invalid_Card_Companies([invalid1])); // Should print['visa']
console.log(id_Invalid_Card_Companies([invalid2])); // Should print ['mastercard']
console.log(id_Invalid_Card_Companies(batch)); // Find out which companies have mailed out invalid cards
