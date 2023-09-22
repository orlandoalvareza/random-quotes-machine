import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css';

const quoteData = [
  {
    quote:
      'If you really look closely, most overnight successes took a long time',
    author: ' Steve Jobs',
  },
  {
    quote: 'Life is what happens when you are busy making other plans',
    author: 'John Lennon',
  },
  {
    quote:
      'It is during our darkest moments that we must focus to see the light',
    author: 'Aristotle',
  },
  {
    quote:
      'He who is not courageous enough to take risks will accomplish nothing in life',
    author: 'Muhammad Ali',
  },
  {
    quote: 'The only thing we have to fear is fear itself',
    author: 'Franklin Delano Roosevelt',
  },
  {
    quote:
      'The only thing necessary for the triumph of evil is for good men to do nothing',
    author: 'Edmund Burke',
  },
  {
    quote: 'To be or not to be, that is the question',
    author: 'William Shakespeare',
  },
  {
    quote:
      'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that',
    author: 'Martin Luther King',
  },
  { quote: 'The unexamined life is not worth living', author: 'Socrates' },
  {
    quote:
      'Ask not what your country can do for you, ask what you can do for your country',
    author: 'John F. Kennedy',
  },
  {
    quote: 'Be the change that you wish to see in the world',
    author: 'Mahatma Gandhi',
  },
  {
    quote: 'The only source of knowledge is experience',
    author: 'Albert Einstein',
  },
];

function App() {
  const [quoteInfo, setquoteInfo] = useState(quoteData[0]);

  const changeQuoteHandler = () => {
    let randomNumber = Math.floor(Math.random() * quoteData.length);
    let randomQuote = quoteData[randomNumber];

    setquoteInfo(randomQuote);
  };

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">{quoteInfo.quote}</p>
        <span id="author">- {quoteInfo.author}</span>
        <div className="click-actions">
          <button id="new-quote" onClick={changeQuoteHandler}>
            New Quote
          </button>
          <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
            <FontAwesomeIcon
              style={{ fontSize: '2.2rem', color: '#3F72AF' }}
              icon={faTwitter}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
