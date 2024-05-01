import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card.tsx";

interface Character {
  id: string;
  name: string;
  experience: number;
  class: string;
  acumen: number;
  brawn: number;
  conduct: number;
}

function App() {
  const [characters, setCharacters] = useState<Character[]>();

  useEffect(() => {
    populateCharacterData();
  }, []);

  const contents =
    characters === undefined ? (
      // Text is controlled by the Typography component
      // component allows you to specify the base element used (p/h1/em) if you want
      //   to inherit some base styling if desired
      // variant is to allow design principles to be used to define structure to your copy
      <Typography component="em" variant="body1">
        Loading... Please refresh once the ASP.NET backend has started. See{" "}
        <a href="https://aka.ms/jspsintegrationreact">
          https://aka.ms/jspsintegrationreact
        </a>{" "}
        for more details.
      </Typography>
    ) : (
      <div>
        {characters.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            cClass={character.class}
            experience={character.experience}
            acumenScore={character.acumen}
            brawnScore={character.brawn}
            conductScore={character.conduct}
          />
        ))}
      </div>
    );

  return (
    <div>
      <h1 id="tabelLabel">Your Characters!</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {contents}
    </div>
  );

  async function populateCharacterData() {
    const response = await fetch("api/Characters");
    const data = await response.json();
    setCharacters(data);
  }
}

export default App;
