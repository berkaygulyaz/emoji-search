import React, {useState, useEffect} from 'react'
import './App.css'
import Container from './components/container'
import Search from './components/search'
import Emojis from "./components/emojis";
import EmojiList from './emojiList.json'


function App() {
  let first = 0;
  let second = 10;

  
  const [emojis, setEmoji] = useState(EmojiList.slice(first,second));
  const [onHandleSearch, setOnHandleSearch] = useState(false);
  // const [berkay, setBerkay] = useState(null);

  const handleSearch = (e) => {
    setOnHandleSearch(e.length > 0);
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



  return (
    <Container>
      <Search handleKeyUp={(value) => handleSearch(value)} />
      <div className="emojis-wrapper">
        {
          emojis.map(emoji => (
            <Emojis name={emoji.title} symbol={emoji.symbol} key={emoji.title} />
          ))
        }
      </div>
    </Container>
  );
}

export default App;
