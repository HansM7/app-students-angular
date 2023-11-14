export interface IUser extends IUserForm {
  id: number;
}

export interface IUserForm {
  fullname: string;
  email: string;
  role: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}
