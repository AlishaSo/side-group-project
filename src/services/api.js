import axios from 'axios';

//get a random number
const getRandNum = (min = 0, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

//For getting a random quote that contains the word 'error'; NOTE: the api uses partial matching, so not all results will be good
const getQuote = async () => {
  try {
    //max refers to the total number of pages that the search query returns
    //page is the page number to go to
    //index is to choose one of the results from the selected page
    let max = 38, page = getRandNum(1, max), index = getRandNum(0, 9);
    let response = await axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes?query=error&page=&{page}`);  //make the api call
    
    //in case the api call fails
    if(response.data.statusCode != 200) {
      throw new Error('Something went wrong while trying to retrieve the quote');
      return;
    }
    return { text: response.data.data[index].quoteText, author: response.data.data[index].quoteAuthor };  //send back just the quote text and author
  }
  catch(e) {
    console.error(e);
  }
}

export { getQuote };