const URL = "https://cat-fact.herokuapp.com";

const getFacts = async () => {

    try {
        const response = await fetch(URL);
        console.log(response);


    } catch (error) {

    }
}
getFacts()