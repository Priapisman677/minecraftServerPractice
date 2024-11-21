function fetchData(url: string) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log('success!');
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    }); // Ensure this is the end of the chain and matches braces correctly
}

fetchData('https://api.mcsrvstat.us/2/mc.hypixel.net'); // Make sure this URL is correctly formatted
fetchData('https://api.mcsrvstat.us/2/us.mineplex.com'); // Make sure this URL is correctly formatted
fetchData('https://api.mcsrvstat.us/2/play.manacube.net'); // Make sure this URL is correctly formatted
fetchData('https://api.mcsrvstat.us/2/play.mccentral.org'); // Make sure this URL is correctly formatted
fetchData('https://api.mcsrvstat.us/2/purpleprison.org'); // Make sure this URL is correctly formatted
fetchData('https://api.mcsrvstat.us/2/herobrine.org'); // Make sure this URL is correctly formatted
