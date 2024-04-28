import { useEffect, useState } from 'react';
import './App.css';

interface Character {
    Id: string
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

    const contents = characters === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
            <tr>
                <th>Name</th>
                <th>Experience</th>
                <th>Class</th>
                <th>Acumen</th>
                <th>Brawn</th>
                <th>Conduct</th>
            </tr>
            </thead>
            <tbody>
                {characters.map(character =>
                    <tr key={character.Id}>
                        <td>{character.name}</td>
                        <td>{character.experience}</td>
                        <td>{character.class}</td>
                        <td>{character.acumen}</td>
                        <td>{character.brawn}</td>
                        <td>{character.conduct}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tabelLabel">Your Characters!</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );

    async function populateCharacterData() {
        const response = await fetch('api/Characters');
        const data = await response.json();
        setCharacters(data);
    }
}

export default App;