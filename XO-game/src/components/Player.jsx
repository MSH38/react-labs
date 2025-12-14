import { useState } from "react";
export default function Player({intialName,symbol})
{
    const [ playerName, setPlayerName] = useState(intialName);
    const [ isEditing, setIsEditing] = useState(false);
    function handleEditClick() {
        // setIsEditing(!isEditing);
        setIsEditing((editing) => !editing);
    }

    function handelChange(event){
        setPlayerName(event.target.value);
    }
    let editableName = <span className="palyer-name">{playerName}</span>;
    if(isEditing){
        editableName = <input type="text" required  value={playerName} onChange={handelChange} />
    }
    return(
    <li>
        <span className="player-info">
            {editableName }
            <span className="palyer-Symbol">{symbol}</span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </span>
    </li>
    );         

} 