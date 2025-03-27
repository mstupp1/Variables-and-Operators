// Exercise 6: Async Errors
// Fix the issues with asynchronous code in the functions below.

// This function should simulate fetching data
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ message: "Data successfully fetched" })
        }, 1000);
    });
}

// This function should process an array of numbers asynchronously
// and return their sum. It should reject if the input is not an array.
function processDataAsync(data) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(data)) {
            reject("Invalid data: Not an array");
        }
        
        setTimeout(() => {
            const sum = data.reduce((acc, val) => acc + val, 0);
            resolve(sum);
        }, 500);
    })
}

// This function should chain promises to double a number, then add 5
function chainPromises(num) {
    return Promise.resolve(num)
        .then(value => {
            return value * 2;
        })
        .then(doubled => {
            return doubled + 5;
        });
}

// Test your fixed functions
async function runTests() {
    try {
        const data = await fetchData();
        console.log(data);  // Should output: { message: "Data successfully fetched" }
        
        try {
            const sum = await processDataAsync([1, 2, 3]);
            console.log(sum);  // Should output: 6
            
            const invalidResult = await processDataAsync(null);
            console.log(invalidResult);  // Should not get here
        } catch (error) {
            console.log("Caught error from processDataAsync:", error);  // Should output an error message
        }
        
        const result = await chainPromises(5);
        console.log(result);  // Should output: 15 (5 doubled to 10, then +5)
    } catch (error) {
        console.error("Test failed:", error);
    }
}

runTests();
