import { ControlState } from "../models";

export const initialState: ControlState = {
    commands: '',
    executing: false,
    position: {x: 0, y: 0},
    direction: 'right',
};