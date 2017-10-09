import {
    FETCH_USERS
} from './types';

export function fetchUser() {
    return {
      type: FETCH_USERS,
      payload: [
        { name: 'Nidia' },
        { name: 'Aida' },
        { name: 'Xicu' }  
      ]
    }
}