import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11);

    const handleAddPlayer = () => {
        setTeam(team + 1);
    }

    const handleRemovePlayer = () => {
        const newRemove = team - 1;
        setTeam(newRemove);
    }




    const teamStyle = {
        border: "2px solid purple",
        padding: "15px",
        margin: "15px",
        borderRadius: "10px"

    }

    return (
        <div style={teamStyle}>
            <h2>Team Player: {team}</h2>

            <button onClick={handleAddPlayer}>Add Player</button>
            <button onClick={handleRemovePlayer}>Remove Player</button>
        </div>
    )
}