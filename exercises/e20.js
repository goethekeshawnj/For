// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

function doesEqualA(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "a") {
            return true;
        }
    }
    return false;
}

export function separateNamesWithAFromRest(array) {
    // Your code goes here...
    let nameWithA = [];
    let nameWithoutA = [];
    // let answer = [];
    // let nameWithoutA = [];

    // for (let i = 0; i < array.length; i++) {
    //     let name = array[i];
    //     for (let j = 0; j < name[j].length; j++) {
    //         console.log(name[j]);
    //         if (name[j]== "a") {
    //             nameWithA.push(name);
    //         } else {
    //             nameWithoutA.push(name);
    //         }
    //     }
    // }

    // name[i] == "A" !== "A"
    for (let name of array) {
        if (doesEqualA(name) == true) {
            nameWithA.push(name);
        } else {
            nameWithoutA.push(name);
        }
    }

    // if (!name.includes("a"))
    let ares = [nameWithA, nameWithoutA];
    return ares;
    // if ((name = namestored)) {
    //     nameWithoutA.push(name);
    // }

    // console.log(nameWithoutA);
    // return [nameWithA];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
