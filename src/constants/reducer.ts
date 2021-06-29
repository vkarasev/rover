import { Action, ControlState } from "../models";
import { initialState } from "./initialState";

export const reducer = (state: ControlState, action: Action): ControlState => {
    switch (action.type) {
        case 'execute':
            return {...state, commands: action.payload, executing: true};
        case 'move': {
            return {...state,  commands: state.commands.slice(1), position: action.payload};
        }
        case 'reset':
            return initialState;
        case 'rotate': {
            return {...state, commands: state.commands.slice(1), direction: action.payload};
        }
        case 'stopExecution': {
            return {...state, executing: false};
        }        
        default:
            throw new Error();
    }
};