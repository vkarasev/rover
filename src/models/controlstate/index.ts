import { Direction } from "../direction";
import { Position } from "../position";

export type ControlState = {
    commands: string,
    executing: boolean,
    direction: Direction,
    position: Position,
}