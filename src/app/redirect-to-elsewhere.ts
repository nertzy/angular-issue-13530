import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class RedirectToElsewhere implements CanActivate {

  constructor(private router: Router) {
  }

  public canActivate(): boolean {
    console.log("[RedirectToElsewhere] redirecting to /elsewhere");
    this.router.navigate(["elsewhere"]);
    return false;
  }
}
