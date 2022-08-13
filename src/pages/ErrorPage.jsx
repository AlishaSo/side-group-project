import { useState, useEffect } from 'react';
import { getQuote } from '../services/api';

export default function ErrorPage() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      let response = await getQuote();
      setQuote(response);
    }
    fetchQuote();
  }, []);

  return (
    <div className='error-div'>
      <p>
        {
          quote ? 
            <><q>{quote.text}</q> &mdash; {quote.author}</>
          :
            ''
        }
      </p>
    </div>
  )
}