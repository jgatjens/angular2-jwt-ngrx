import { ActionReducer, Action } from '@ngrx/store';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export interface IUser {
  gender:   string,
  name:     string,
  email:    string,
  username: string,
  password: string,
  phone: 	  string,
  cell: 	  string,
  location: {
  	street: string,
	  city: string,
	  state: string,
	  zip: number
  },
  picture: {
  	large:     string
  	medium:    string
  	thumbnail: string
  }
}

export const usersReducer: ActionReducer<IUser> = (state = undefined, action: Action) => {

	switch (action.type) {
		case USER_LOGIN:
			return Object.assign({}, action.payload);

		case USER_LOGOUT:
			return undefined;

		default:
			return state;
	}
}
