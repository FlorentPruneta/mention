import React from "react";
import { useEffect, useState } from "react";
import "./css/App.css";
import RESTService from "../RESTService";
import Card from "../components/Card";
import Mention from "../components/Mention";

const App = () => {
  const [mentions, setMentions] = useState(null);

  useEffect(() => {
    RESTService.request()
      .then(response => response.json())
      .then(data => {
        console.debug("data", data);
        setMentions(data.mentions);
      })
      .catch(e => {
        console.debug("e", e)
      });
  }, []);

  if (!mentions) {
    return null;
  }

  const mentionsCards = mentions.map(m => {
     return (
            <Mention key={m.id} mention={m} />
     )
  });

  return <div>
      {mentionsCards}
  </div>;
};

export default App;
