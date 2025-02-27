// function powerFunct(base, exponent) {
//     return base**exponent;
//     }
   
// console.log(powerFunct(2,2));
// console.log(powerFunct(4,2));
// console.log(powerFunct(2,4));

// const powerFunction = (base, exp) => { return base**exp };

// console.log(powerFunction(2,2));
// console.log(powerFunction(4,2));
// console.log(powerFunction(2,4));


// const power = (base, exp) => {
//     let result = 1;
//     for (let count = 0; count < exp; count++) {
//     result *= base;
//     }
//     return result;
//     };
    
//     console.log(power(2,2));
//     console.log(power(4,2));
//     console.log(power(2,4));

// const booleanFlag = false;
// let trueOrFalse = new Promise((resolve, reject) => {
//     if (booleanFlag) {
//         resolve("The flag is true!");
//     } else {
//         reject("The flag is false!");
//     }
// });

// trueOrFalse
// .then(function successValue(result) {
// console.log(result);
// })
// .then(function successValue2() {
// console.log("You can call multiple functions this way.");
// })
// .catch(function failureValue(reject) {
// console.log(reject);
// });

// function createFullName(firstName, lastName) {

//     return firstName + " " + lastName;
    
//     }
    
//     console.log(createFullName("Ollie", "Smith")); 

// const createFullName = (firstName,lastName) => firstName + " " + lastName;
// console.log(createFullName("Ollie", "Smith"));    

//   const doubleNumber = (number) => number * 2;
//   console.log(doubleNumber(10));

//   function getEvenNumbers(array) {
//     let evenNumbers = [];
    
//     for (let i of array) {
//     if (i % 2 === 0) {
//     evenNumbers.push(i);
//     }
//     }
//     return evenNumbers;
    
//     }
    
//     console.log(getEvenNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]));

    // const getEvenNumbers = array => {
    //     let evenNumbers=[];
    //         for (let i of array) {
    //             if (i % 2 === 0) {
    //                 evenNumbers.push (i);
    //             }
    //         }
    //         return evenNumbers;
    //     };

    //     console.log(getEvenNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]));

        // const customers = [
        //     {
        //     name: 'Sam',
        //     address: {
        //     street: '1234 W Bell Rd',
        //     city: 'Phoenix',
        //     zip: '85308',
        //     state: 'AZ'
        //     },
        //     membershipLevel: 'GOLD',
        //     age: 32
        //     },
        //     ];

        //     let customer = customers[0];

        //     if (customer.name.charAt(0)==='C'){
        //         console.log(`name's first letter matches with "C"`);
        //     }
            
        //     if (customer.name.charAt(0)==='c') {
        //         console.log(`'name's first letter matches with "c"`);
        //         }

        //     if (customer.name.charAt(0)==='S'){
        //         console.log(`'name's first letter matches with "S"`);
        //     }
            
        //     if (customer.name.charAt(0)==='s') {
        //         console.log(`'name's first letter matches with "s"`);
        //         }
    
        //     if (customer.address.street!==undefined) {
        //         console.log('street field has a value');
        //     }

        //     if (customer.address.city!==undefined) {
        //         console.log('city field has a value');
        //     }

        //     if (customer.address.zip!==undefined) {
        //         console.log('zip field has a value');
        //     }

        //     if (customer.address.state !== undefined) {
        //         console.log('state field has a value');
        //     }

            const customers = [
                {
                // Object 1: Name does not start with C, no match for city/state, not gold/platinum, not silver and under 29
                name: "Sam",
                address: {
                street: "1234 W Bell Rd",
                city: "Phoenix",
                zip: "85308",
                state: "AZ",
                },
                membershipLevel: "BRONZE",
                age: 32,
                },
                {
                // Object 2: Address field (street) is undefined, will not be added to the results array
                name: "Bob",
                address: {
                city: "Long Beach",
                zip: "9000",
                state: "CA",
                },
                membershipLevel: "GOLD",
                age: 32,
                },
                {
                // Object 4: Meets enough requirements, will be added to the results array
                name: "Christina",
                address: {
                street: "1234 Alamitos Ave",
                city: "Long Beach",
                zip: "90002",
                state: "CA",
                },
                membershipLevel: "SILVER",
                age: 21
                },
                ];

            const matchingCustomers = (custArray) => {
                let resultArray = [];
                for (let customer of custArray) {
                    if (
                        customer.address.street === undefined ||
                        customer.address.city === undefined ||
                        customer.address.zip === undefined ||
                        customer.address.state === undefined
                    ) {
                        console.log("There are undefined address properties!", customer);
                    } else if (
                        customer.name.charAt(0) === "C" ||
                        (customer.address.city === "Peoria" &&
                        customer.address.state === "AZ") ||
                        customer.membershipLevel === ("GOLD" || "PLATINUM") ||
                        (customer.membershipLevel === "SILVER" && customer.age > 29)
                        ) {
                            console.log("This customer fits the criteria", customer);
                            resultArray.push (customer);
                        } else {
                            console.log("This customer does not fit the criteria!", customer);
                        }
                    }
                };
                
                matchingCustomers(customers);