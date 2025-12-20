import { useState } from "react";
export default function Player({intialName,symbol,isActive})
{
    const [ playerName, setPlayerName] = useState(intialName);
    const [ isEditing, setIsEditing] = useState(false);
    function handleEditClick() {
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
    <li className={isActive ? 'active' : undefined}>
        <span className="player-info">
            {editableName }
            <span className="palyer-Symbol">{symbol}</span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </span>
    </li>
    );         

} 