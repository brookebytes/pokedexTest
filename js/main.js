//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const pokeChoice = document.querySelector('input').value.toLowerCase();
  const url = 'https://pokeapi.co/api/v2/pokemon/'+pokeChoice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        //document.querySelector('img').src=data.url;
        document.querySelector('#pokeName').innerText = data.name;
        document.querySelector('#number').innerText = `#${data.id}`;
        document.querySelector('img').src = data.sprites.other.dream_world.front_default;
        document.querySelector('#type').innerText = data.types[0].type.name;
        document.querySelector('#type').className = `${data.types[0].type.name}`;
        document.querySelector('#height').innerText = `${(data.height/3.048).toFixed(1)}'`;
        document.querySelector('#weight').innerText = `${(data.weight/4.536).toFixed(1)} lbs`;
        document.querySelector('#ability').innerText = `ability: ${data.abilities[0].ability.name}`
        document.querySelector('#move').innerText = `move: ${data.moves[6].move.name}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

