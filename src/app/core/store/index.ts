import { ActionReducerMap } from '@ngrx/store';
import { alertFeatureName, reducer } from './alert/alert.reducer';

export const appReducer: ActionReducerMap<any> = {
  [alertFeatureName]: reducer,
};
