const URL = "https://cat-fact.herokuapp.com";
const btn = document.querySelector("#btn");



// const getFacts = async () => {

//     try {
//         const response = await fetch(URL).json();
//         console.log(response);
//         let data = response.text[0]
//         console.log(data);


//     } catch (error) {
//     }
// }
// function getFacts() {
//     try {
//         fetch(URL).then((response) => {
//             return response.json();
//         })
//             .then((data) => {
//                 console.log(data);
//             })

//     } catch (error) {
//         console.log(error);
//     }
// }
// getFacts()
// btn.addEventListener("click", getFacts)


//promises agr fullfill ho jati hai to example RESOLVE , REJECT to woh kaam kaise karegi
let p1 = new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        console.log("i ma fullfill and i am resolved")
        resolve(true)
    }, 5000)
});



let p2 = new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        // console.log("i ma fullfill i am rejected")
        reject(new Error("i am a new error"))
    }, 5000)
});

console.log(p1, p2);

//farq nhi parta ktne promises hain same time pe chley gy

p1.then((value) => {
    console.log(value);
});

p2.catch((error) => {
    console.log("some error is p2");
})

console.log(p1);
console.log(p2);

// p2.then((value) =>{
//     console.log(value);
// });