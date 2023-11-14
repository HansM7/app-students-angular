// user.actions.ts
import { createAction, props } from '@ngrx/store';
import { IUser } from '../models/interface/user.interface';

export const setUser = createAction(
  '[User] Set User',
  props<{ user: IUser }>()
);
