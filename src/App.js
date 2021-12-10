import React, { useEffect, useState } from 'react'
import EmojiData from './emoji.json';

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
    setData(newData);
  }, [search])

  return (
    <div className="divContainer">
      <div className="divBody">
        <center>
          <h1> Emoji Search</h1>
        </center>

        <center>
          <input size="30" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </center>


        {data.length
          ? data.map(emoji =>
            <div className="card" key={emoji.title}>
              <div className="card-body" onClick={() => { navigator.clipboard.writeText(emoji.symbol); }}>
                {emoji.symbol} {emoji.title}
                <span className="info">Click to copy emoji</span>
              </div>
            </div>
          )
          : <div id="noDataFound">No Emoji Found</div>
        }
      </div>
    </div>

  )
}

export default App
