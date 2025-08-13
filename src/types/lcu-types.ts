// until types scope is bigger this will do for now

import { AuthenticationOptions } from 'league-connect';

export const authOptions: AuthenticationOptions = {
  awaitConnection: true,
  pollInterval: 2500
};