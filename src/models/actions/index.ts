import { Direction } from "../direction";
import { Position } from "../position";

export type Action = 
{type: 'execute', payload: string} | 
{type: 'move', payload: Position} |
{type: 'reset'} | 
{type: 'rotate', payload: Direction} |
{type: 'stopExecution'}