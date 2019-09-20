import { Injectable,  } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate{
	constructor(
		private router: Router,
	){}


	canActivate(): boolean{
        const accessToken = localStorage.getItem('access-token')
        if(!accessToken){
            this.router.navigate(['login-page'])
            return false;
        } else {
            return true;
        }
	}
}