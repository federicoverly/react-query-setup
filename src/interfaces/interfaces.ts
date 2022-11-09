export interface IUser {
  id: number;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
  createdAt?: string;
}

export interface ISupport {
  text: string;
  url: string;
}

export interface IData {
  data: IUser[];
  page: number;
  per_page: number;
  support: ISupport;
  total: number;
  total_pages: number;
}
