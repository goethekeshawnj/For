// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

// function doesEqualA(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === "a") {
//             return true;
//         }
//     }
//     return false;
// }

export function separateNamesWithAFromRest(array) {
    let nameWithA = [];
    let nameWithoutA = [];
    // let answer = [];
    // let nameWithoutA = [];

    // for (let i = 0; i < array.length; i++) {
    //     for (let j = 0; j < array[i].length; j++) {
    //         if (array[j].toLowerCase() == "a") {
    //             nameWithA.push(i);
    //         } else if (j !== "a") {
    //             nameWithoutA.push(i);
    //         }
    //     }
    // }

    for (let name of array) {
        for (let letter of name) {
            console.log(nameWithoutA);

            if (letter.toLowerCase() == "a") {
                nameWithA.push(name);
            } else if (letter.toLowerCase() !== "a") {
                nameWithoutA.push(name);
            }
        }
    }

    let ares = [[nameWithA], [nameWithoutA]];
    return ares;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
