const URL = "https://cat-fact.herokuapp.com";

const getFacts = async () => {

    try {
        const response = await fetch(URL);
        console.log(response);
        let data = response.text[0]
        console.log(data);


    } catch (error) {

    }
}
getFacts()