import { size } from "../../constants/size";
import { Action, ControlState, Direction } from "../../models";

const moveForvard = (control: ControlState, dispatch: React.Dispatch<Action>) => {
    const position = control.position;
    const direction = control.direction;
    const newPosition = {...position};
    
    switch (direction) {
        case 'right': {
            if (position.x + 1 < size) {
                newPosition.x = position.x+1;
            }
            break;
        }
        case 'left': {
            if (position.x - 1 >= 0) {
                newPosition.x = position.x-1;
            }
            break;
        }
        case 'up': {
            if (position.y - 1 >= 0) {
                newPosition.x = position.y-1;
            }
            break;
        }
        case 'down': {
            if (position.y + 1 < size) {
                newPosition.y = position.y+1;
            }
            break;
        }
    }

    dispatch({type: 'move', payload: newPosition});
};

 const rotateRover = (control: ControlState, dispatch: React.Dispatch<Action>, command: string) => {
    const directionSequense: Direction[] = ['up', 'right', 'down', 'left'];
    let index = directionSequense.indexOf(control.direction);
    if (command === 'r') {
        index++;
        if (index >= directionSequense.length) index = 0;
    } else {
        index--;
        if (index < 0) index = directionSequense.length - 1;
    }

    const direction = directionSequense[index];

    dispatch({type: 'rotate', payload: direction});
};

export const executeCommand = (control: ControlState, dispatch: React.Dispatch<Action>): void => {
    if (!control || !dispatch) return;
    if (!control.commands.length) {
        if (control.executing) {
            dispatch({type: 'stopExecution'});
        }
    } else {
        const currentCommand = control.commands.slice(0, 1);

        if (currentCommand === 'f') {
            moveForvard(control, dispatch);
        } else {
            rotateRover(control, dispatch, currentCommand);
        }
    }
};