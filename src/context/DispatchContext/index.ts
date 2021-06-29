import React from 'react';
import { Action } from '../../models';

export const DispatchContext = React.createContext<React.Dispatch<Action>>(() => {'reset';});
