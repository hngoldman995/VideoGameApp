



// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6c049fd770msh1cdc73180460014p113da5jsn145699b64423',
// 		'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
// 	}
// };

// fetch('https://opencritic-api.p.rapidapi.com/game/upcoming', options)
// 	.then(response => {
//         return response.json();
//     })
// 	.then(data => {
//         console.log(data)

//         // data.forEach(game => {
//         //     const gameTitles = `<ul>${game.name}</ul>`;
//         //     const gameImages = `<img src="${game.images.banner.og}">`;
//         //     document.querySelector('section').insertAdjacentHTML('beforeend', gameTitles);

//         //     document.querySelector('ul').insertAdjacentHTML('beforeend', movieImages)
//         // })   
//         const gamesContainer = document.createElement('div')
// data.forEach(game => {
//     const gameWrapper = document.createElement('div')
//     const gameTitle = document.createElement('h2')
//     const gameImg = document.createElement('img')
//     const gameRelease = document.createElement('h4')
//     gameRelease.innerText = `${game.firstReleaseDate}`
//     gameTitle.innerText = `${game.name}`;
//     gameImg.src = `${game.images.box}"`;
//     gameWrapper.appendChild(gameTitle)
//     gameWrapper.appendChild(gameImg)
//     gameWrapper.appendChild(gameRelease)
//     gamesContainer.appendChild(gameWrapper)
// });
// document.body.appendChild(gamesContainer)

//     })
// 	.catch(err => console.error(err));

    
    
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c049fd770msh1cdc73180460014p113da5jsn145699b64423',
		'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
	}
};

fetch('https://opencritic-api.p.rapidapi.com/game/recently-released', options)
	.then(response => response.json())
	.then(data => {

        console.log(data)
        const gamesContainer = document.createElement('div')

        data.forEach( game => {
            const gameWrapper = document.createElement('div');
            const gameTitle = document.createElement('h2');
            const gameImg = document.createElement('img');
            const gameRelease = document.createElement('h4');
            gameRelease.innerText = `${game.firstReleaseDate}`;
            gameTitle.innerText = `${game.name}`;
            gameImg.src = `${game.images.box.og}`;
            gameWrapper.appendChild(gameTitle);
            gameWrapper.appendChild(gameImg);
            gameWrapper.appendChild(gameRelease);
            gamesContainer.appendChild(gameWrapper);
        });
        document.body.appendChild(gamesContainer);
        

    })
    

	.catch(err => console.error(err));