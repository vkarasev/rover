import React, { useState } from "react";
import { useControlContext, useDispatchContext } from "../../hooks";

export const Control = (): JSX.Element  => {
    const dispatch = useDispatchContext();
    const control = useControlContext();
    const [commands, saveCommands] = useState('');
    const [valid, setValid] = useState(true);

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const line = ev.target.value.toLowerCase();
        saveCommands(line);
        if (line.length && line.split('').filter((char) => char !=='f' && char !== 'r' && char !== 'l').length) {
            setValid(false);
        } else if (!valid){
            setValid(true);
        }
    };

    const handleReset = () => {
        saveCommands('');
        dispatch({type: 'reset'});
        setValid(true);
    };

    return (
        <div className="control">
            <div className="input-wrapper">
            <input value={commands} onChange={handleChange}></input>
                {
                    !valid && <span className="error">Invalid command! Valid commands are: f, r, l</span>
                }
            </div>
            <div className="actions">
                <button disabled={!valid || control.executing} onClick={() => dispatch({type: 'execute', payload: commands})}>Move</button>
                <button disabled={control.executing} onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};