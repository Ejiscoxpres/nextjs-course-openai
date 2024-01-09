const url = 'https://vinepair.com/articles/50-most-popular-cocktails-world-2017/'

const DrinksPage = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log('data')
    return (
      <div>
        <h1 className="text-7xl">DrinksPage</h1>
        
          </div>
    );
  }
  
  export default DrinksPage;