import React, {useEffect, useRef} from "react";

import ground from '../../assets/ground.png';
import { size } from "../../constants/size";
import { useControlContext, useDispatchContext } from "../../hooks";
import { draw } from "../../utils";
import { executeCommand } from "../../utils/executeCommand";


export const Field = (): JSX.Element => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const gridSize = 50;
    const control = useControlContext();
    const dispatch = useDispatchContext();


    useEffect(() => {
        const canvas = canvasRef.current;
        let animationFrameId = 0;
        let timer: NodeJS.Timeout;
        if (canvas) {
            const context  = canvas.getContext('2d') as CanvasRenderingContext2D ;

            const surface = new Image();
            surface.src = ground;
            surface.onload = () => {
                context.drawImage(surface, 0, 0);
            };

            const render = () => {
                draw(context, control.position, control.direction);

                animationFrameId = window.requestAnimationFrame(render);
            };
            
            render();
            timer = setTimeout(() => executeCommand(control, dispatch), 1000);
        }

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            clearTimeout(timer);
        };
    }, [control]);

    return (
        <canvas 
            ref={canvasRef} 
            style={{maxWidth: `${size * gridSize}px`}} 
            width={size * gridSize} 
            height={size * gridSize}>
        Your browser doesnt support canvas
        </canvas>
    );
};