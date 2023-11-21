import { createReducer, on } from '@ngrx/store';
import { AlertActions } from './alert.actions';

interface AlertState {
  active: boolean;
}

const initialState: AlertState = {
  active: false,
};

export const alertFeatureName = 'alert';

export const reducer = createReducer(
  initialState,
  on(AlertActions.show, (state) => {
    //si en caso se envia props se puede recibir como (state)
    return {
      ...state, //opcional en caso tengas mas de una propiedad xd
      active: true,
    };
  }),
  on(AlertActions.hidden, (state) => {
    //si en caso se envia props se puede recibir como (state)
    return {
      ...state, //opcional en caso tengas mas de una propiedad xd
      active: false,
    };
  })
);
