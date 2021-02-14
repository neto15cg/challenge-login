export interface LoginDataTypes {
  username: string;
  password: string;
}

export interface LoginProps {
  onLogin: (data: LoginDataTypes) => void;
  loading: boolean;
  isSuccess: boolean;
}
