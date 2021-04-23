const url =
  "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apiKey=8577465b14624c2b937abdc0737c47f2";

async function getNews() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

getNews();
