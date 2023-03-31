export type User = {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
};

export type Token = {
  refresh_token: string;
  access_token: string;
};
