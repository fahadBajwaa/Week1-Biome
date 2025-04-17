// Asynchronous Concepts 

// 🟢 async/await: Writing asynchronous code with async and await  🟢 


// async funtion: 🟥

// When we declare a function with async keyword, it ensures that it returns a "Promise". If the function returns a non-Promise value, it is automatically wrapped in a "resolved Promise".

async function greet() {
    return "Hi Fahad";
}

greet()
    .then(message => console.log(message)); //Output: Hi Fahad


// await keyword: 🟥

// The await keyword pauses the execution of an async function until the Promise is settled (resolved or rejected). 
// It can only be used inside the async functions or at the top level of modules.

async function fetchData() {
    try {
        const response = await fetch('https://librarymanagementsystem.free.beeceptor.com'); // mock api 

        const contentType = response.headers.get('content-type'); // retrieves the Content-Type header from the response

        if (contentType && contentType.includes('application/json')) {   // If the Content-Type includes 'application/json', the response is parsed as JSON.​

            const data = await response.json();
            console.log('JSON Response:', data);

        } else {

            const text = await response.text();  // Otherwise, the response is treated as plain text.​
            console.log('Text Response:', text);

        }
    } catch (error) {

        console.error('Fetch error:', error);

    }
}

fetchData();


// Example: Sequential Asynchronous Operations

function getUser() {  // fetching user data asynchronously
    return new Promise(resolve => {
        setTimeout(() => resolve({ id: 1, name: "Fahad" }), 1000);
    });
}

function getPosts(userId) {  // fetching posts for a specific user.
    return new Promise(resolve => {
        setTimeout(() => resolve([`Post1 by user: ${userId}`, `Post2 by user: ${userId}`]), 1000);
    });
}

async function displayUserPosts() {  //  uses await to pause execution until each Promise is resolved, allowing for sequential execution that resembles synchronous code.​
    try {
        const user = await getUser();
        const posts = await getPosts(user.id);
        console.log(`User: ${user.name}`);
        console.log('Posts: ', posts);
    } catch (error) {
        console.error('Error: ', error);
    }
}


// function displayUserPosts() {
//     getUser()
//         .then(user => {
//             return getPosts(user.id)
//                 .then(posts => {
//                     console.log(`User: ${user.name}`);
//                     console.log('Posts:', posts);
//                 });
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }

displayUserPosts();



