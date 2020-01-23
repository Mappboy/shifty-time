import { Shift } from '~/types/shift';
import { Email } from '~/types/email';
import { User } from '~/types/user';

export interface RootState {
  shift: Shift;
  user: User;
  attendees: Email[];
}
