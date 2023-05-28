// import { Ability } from '@casl/ability';
// import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
// import { AuthService } from '../services/auth/auth.service';

// @Directive({
//   selector: '[appAbility]'
// })
// export class AbilityDirective {
//   private ability: Ability;

//   constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private authService: AuthService) {
//     this.ability = authService.ability;
//   }

//   @Input() set appCan(permission: any) {
//     if (this.ability.can(permission.action, permission.subject)) {
//       this.viewContainer.createEmbeddedView(this.templateRef);
//     } else {
//       this.viewContainer.clear(0);
//     }
//   }
// }
