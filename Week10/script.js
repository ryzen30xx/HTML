async function logMovies() {
  const response = await fetch("log.json");
  const movies = await response.json();
  console.log(movies);
}

const endpoint_url = 'https://api.spaceflightnewsapi.net'

        fetch(endpoint_url)
            .then(response => console.log(response))


const endpoint_url = 'https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml'
fetch(endpoint_url)
     .then(response => response.text())
     .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))