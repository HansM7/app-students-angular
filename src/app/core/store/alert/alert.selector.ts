import { createFeatureSelector } from '@ngrx/store';
import { alertFeatureName } from './alert.reducer';

export const selectAlertState = createFeatureSelector(alertFeatureName);
