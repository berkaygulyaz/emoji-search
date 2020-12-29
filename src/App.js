import React, {useState, useEffect} from 'react';
import './App.css';
import Container from './components/container';
import Search from './components/search';
import Emojis from "./components/emojis";
import Alert from './components/alert';
import EmojiList from './emojiList.json'


function App() {
  let first = 0;
  let second = 10;

  
  const [emojis, setEmoji] = useState(EmojiList.slice(first,second));
  const [onHandleSearch, setOnHandleSearch] = useState(false);
  const [field, setField] = useState('');
  const [alertShow, setAlertShow] = useState(false)
  const [selectedEmoji, setselectedEmoji] = useState('');

  const handleSearch = (e) => {
    setField(e);
    setOnHandleSearch(e.length > 0);
    setEmoji(EmojiList.filter(emoji => emoji.keywords.includes(e)));
    
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!onHandleSearch) {
        if (second < 1820) {
          first += 10;
          second += 10;
        } else {
          first = 0;
          second = 10;
        }
        setEmoji(EmojiList.slice(first,second));
      }
    }, 1500);

    return () => clearInterval(interval)
  }, [onHandleSearch]);

  const copyClick = (e) => {
    var r = document.createRange();
    r.selectNode(e.target);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    setAlertShow(true)

    setselectedEmoji(e.target.innerHTML)
    
  }

  useEffect(() => {
    setInterval(() => {
        if(!alertShow) {
          setAlertShow(false)
        }
      }, 2000)
  }, [alertShow])

  return (
    <Container>
      {alertShow && <Alert copySymbol={selectedEmoji} />}
      <section id="search-wrapper">
        <Search handleKeyUp={(value) => handleSearch(value)} />
        <div className="emojis-wrapper">
          {
            emojis.map(emoji => (
              <Emojis symbol={emoji.symbol} key={emoji.title} onItemClick={copyClick} />
            )).slice(0, 50)
          }
        </div>
      </section>
    </Container>
  );
}

export default App;
