export interface IUser extends IUserForm {
  id: number;
}

export interface IUserForm {
  fullname: string;
  email: string;
  password: string;
}
