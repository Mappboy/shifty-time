import { Shift } from '~/types/shift';
import { Email } from '~/types/email';

export interface RootState {
  shift: Shift;
  attendees: Email[];
}
