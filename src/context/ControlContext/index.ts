import React from 'react';
import { initialState } from '../../constants/initialState';
import { ControlState } from '../../models';



export const ControlContext = React.createContext<ControlState>(initialState);