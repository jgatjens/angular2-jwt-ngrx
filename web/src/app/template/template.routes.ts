import { RouterModule } from '@angular/router';

import TemplateComponent from './template.component';

const routes = [
    {path: '', component: TemplateComponent }
];

export default RouterModule.forChild(routes);
