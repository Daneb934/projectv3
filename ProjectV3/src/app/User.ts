export class User {
  id: number;
  login: string;
  password: string;
  liked: number[];
  myOrders: number[];
  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
    this.liked = [];
    this.myOrders = [];
  }
}
