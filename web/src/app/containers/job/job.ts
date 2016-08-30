import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IJobArray, JOBS_LOAD } from '../../reducers/jobs.reducer';
import { ApiService } from '../../services';

@Component({})
export class Job {
	jobs: Observable <any>;
	
	constructor(
		private api: ApiService,
		private store: Store <IJobArray>
	) {

		this.jobs = this.store.select('jobs');

		this.api.get('/jobs').subscribe((res) => {
			this.store.dispatch({ type: JOBS_LOAD, payload: res });
		});		
	}


}
