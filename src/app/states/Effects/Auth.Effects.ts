import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "rxjs/internal/scheduler/Action";
import { AuthService } from "../../Services/auth.service";

@Injectable()
export class AuthEffects{
    constructor(private action$:Actions,private auth:AuthService){}

    // registerUser$ = createEffect(()=>{
    //     this.action$.pipe(
    //     )
    // })

}