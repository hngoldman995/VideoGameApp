



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c049fd770msh1cdc73180460014p113da5jsn145699b64423',
		'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
	}
};

fetch('https://opencritic-api.p.rapidapi.com/game/upcoming', options)
	.then(response => {
        return response.json();
    })
	.then(data => {
        console.log(data)
        data.forEach(movie => {
            
            const movieTitles = `<h3>${movie.name}</h3>`;
            // const movieImages = `<img src="${movie.images.banner.og}">`;
            document.querySelector('.item').insertAdjacentHTML('beforeend', movieTitles);

            // document.querySelector('ul').insertAdjacentHTML('beforeend', movieImages)
        })   
    })
	.catch(err => console.error(err));

    
 