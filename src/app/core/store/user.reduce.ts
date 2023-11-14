// user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { IUser } from '../models/interface/user.interface';
import { setUser } from './user.action';

export interface UserState {
  user: IUser | null;
}

const initialState: UserState = {
  user: null,
};

export const userReducer = createReducer(
  initialState,
  on(setUser, (state, { user }) => ({ ...state, user }))
);
