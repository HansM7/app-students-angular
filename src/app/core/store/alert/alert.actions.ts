import { createActionGroup, emptyProps } from '@ngrx/store';

export const AlertActions = createActionGroup({
  source: 'alert',
  events: {
    show: emptyProps(), //props en caso reciba valores
    hidden: emptyProps(),
  },
});
