const apiKey = "39453630738e4bdb9f15f34255c2286e";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;
const gamesContainer = document.querySelector(".results");

async function getGames(){
    try {
    const response = await fetch(url);
    const games = await response.json();
    const everything = games.results;
    
    gamesContainer.innerHTML = "";

    for (let i = 0; i < everything.length; i++) {

        if( i === 8){
            break;
        }
        const gameName = everything[i].name;
        const gameRating = everything[i].rating;
        const gameTags = everything[i].tags.length;
        
        gamesContainer.innerHTML += `<div class="result">Game: ${gameName} <br>
        Rating: ${gameRating} <br>
        Number of tags: ${gameTags}</div>`
    }

} 
    catch (error) {
    console.log(error);
    gamesContainer.innerHTML = `An error has occured: ${error}`;
}
}

getGames();


