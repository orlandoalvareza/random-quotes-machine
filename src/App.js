import { useState } from 'react';
import quoteData from './quote-data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css';

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
