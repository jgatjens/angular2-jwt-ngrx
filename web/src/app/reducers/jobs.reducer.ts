import { ActionReducer, Action } from '@ngrx/store';

export const JOBS_LOAD = 'JOBS_LOAD';

export interface IJob {
	title: string,
  header: string,
  post_by: string,
  about: string,
  skills: string,
  aditional_info: string,
  contract: string,
  location:string,
  date: string,
  active?: boolean,
  category?:string,
  duration?: number,
  requirement?:string,
  responsability?:string,
  shareTitle?:string,
  shareAbout?:string,
  attachImageLink?:string,
  attachImageName?:string,
  applicants?: [string]
}
export interface IJobArray extends Array<IJob> {};

export const jobsReducer: ActionReducer<IJobArray> = (state = [], action: Action) => {

	switch (action.type) {
		case JOBS_LOAD:
			return action.payload;

		default:
			return state;
	}
}
