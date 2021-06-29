import { useContext } from "react";
import { ControlContext, DispatchContext } from "../../context";
import { Action, ControlState } from "../../models";

export const useControlContext = (): ControlState => {
    const control = useContext(ControlContext);

    if (!control) {
        throw new Error('outside of context');
    }

    return control;
};

export const useDispatchContext = ():  React.Dispatch<Action> => {
    const dispatch = useContext(DispatchContext);

    if (!dispatch) {
        throw new Error('outside of context'); 
    }

    return dispatch;
};