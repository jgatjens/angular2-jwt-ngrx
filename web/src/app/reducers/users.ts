import { ActionReducer, Action } from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const usersReducer: ActionReducer<{}> = (state: {} = 0, action: Action) => {
	switch (action.type) {
		case LOGIN:
			return Object.assign({}, state);

		case LOGOUT:
			return {};

		default:
			return state;
	}
}
