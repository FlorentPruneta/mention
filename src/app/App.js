import React from "react";
import { useEffect, useState } from "react";
import "./css/App.css";
import RESTService from "../RESTService";
import Mention from "../components/Mention";

const App = () => {
  const [mentions, setMentions] = useState(null);

  useEffect(() => {
    RESTService.request()
      .then(response => response.json())
      .then(data => {
        setMentions(data.mentions);
      })
      .catch(e => {
        alert("Une erreur est survenue")
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
