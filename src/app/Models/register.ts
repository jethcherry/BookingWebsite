export interface User {
    Name: string;
    password: string;
    Email: string; 
  }
  export interface RegisterResponse {
    message:string
  }

  export interface LoginReq{
    Email: string
    Password:string
  }
  export interface LoginResponse{
    message:string
    token:string
    isSuccess:boolean
    role: number

  }
  
  