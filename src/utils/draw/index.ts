import { gridSize } from "../../constants/gridSize";
import { Direction, Position } from "../../models";

export const draw = (ctx: CanvasRenderingContext2D, position: Position, direction: Direction): void => {       
    ctx.beginPath();
    switch (direction) {
        case 'right': {
            ctx.moveTo(position.x * gridSize + 5, position.y * gridSize + 5);
            ctx.lineTo((position.x + 1) * gridSize - 5, (position.y * gridSize) + gridSize / 2);
            ctx.lineTo(position.x * gridSize + 5, (position.y + 1) * gridSize - 5);
            break;
        }
        case 'left': {
            ctx.moveTo((position.x + 1) * gridSize - 5, position.y * gridSize + 5);
            ctx.lineTo((position.x) * gridSize + 5, (position.y * gridSize) + gridSize / 2);
            ctx.lineTo((position.x + 1) * gridSize - 5, (position.y + 1) * gridSize - 5);
            break;
        }
        case 'up': {
            ctx.moveTo(position.x * gridSize + 5, (position.y + 1) * gridSize - 5);
            ctx.lineTo((position.x * gridSize) + gridSize / 2 , (position.y * gridSize) + 5);
            ctx.lineTo((position.x + 1) * gridSize - 5, (position.y + 1) * gridSize - 5);
            break;
        }
        case 'down': {
            ctx.moveTo(position.x * gridSize + 5, position.y * gridSize + 5);
            ctx.lineTo((position.x + 1) * gridSize - 5,  position.y * gridSize + 5);
            ctx.lineTo(position.x * gridSize + gridSize / 2, (position.y + 1) * gridSize - 5);
            break;
        }
    }
    ctx.fill();
};