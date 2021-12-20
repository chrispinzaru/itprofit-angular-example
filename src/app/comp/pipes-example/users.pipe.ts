import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../../user-profile/user.interface";

@Pipe({
  name: 'usersNameStartsWith',
  pure: false
})
export class UsersPipe implements PipeTransform {

  transform(value: User[], nameStartsWith: string = ''): User[] {
      return value.filter((user) => user.name.includes(nameStartsWith))
  }

}
