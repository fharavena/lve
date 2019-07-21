import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ConfiguracionServicio } from '../servicios/configuracion.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class ConfiguracionGuard implements CanActivate{
    constructor(
        private Router: Router,        
        private configuracionServicio: ConfiguracionServicio
    ){}

    canActivate(): Observable<boolean>{
        return this.configuracionServicio.getConfiguracion().pipe(
            map (configuracion => {
                if(configuracion.permitirRegistro){
                    return true;
                }
                else{
                    this.Router.navigate(['/login']);
                    return false;
                }
            })
        )
    }
}