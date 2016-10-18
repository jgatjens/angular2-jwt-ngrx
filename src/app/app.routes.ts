import { RouterModule } from '@angular/router';

const routes = [
    {path: '', loadChildren: 'app/template/template.module'},
    {path: 'login', loadChildren: 'app/login/login.module'}
];

export default RouterModule.forRoot(routes);
