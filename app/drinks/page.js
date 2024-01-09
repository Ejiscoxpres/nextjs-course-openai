const url = 'https://vinepair.com/articles/50-most-popular-cocktails-world-2017/'

const fetchDrinks = async () => {
  await new Promise ((resolve) => setTimeout (resolve,1000));
  const response = await fetch(url);
  const data = await response.json();
  return DataTransferItemList
}

const DrinksPage = async () => {
  const data = await fetchDrinks();
  console.log(data);
    return (
      <div>
        <h1 className="text-7xl">DrinksPage</h1>
        
          </div>
    );
  }
  
  export default DrinksPage;