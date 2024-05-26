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
function getFacts() {
    try {
        fetch(URL).then((response) => {
            return response.json();
        })
            .then((data) => {
                console.log(data);
            })
        
    } catch (error) {
        console.log(error);
    }
}
getFacts()
btn.addEventListener("click", getFacts)