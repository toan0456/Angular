import { CanActivateFn } from '@angular/router';

export const privaceAuthGuard: CanActivateFn = (route, state) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}")
  if(!user || user.user.id !== 1){
    return false;
  }
  return true;
};
