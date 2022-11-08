import React, { createContext, useReducer, useEffect } from 'react'
import { Props } from '../types/type'
enum Reduce_Login_Type {
  INITIALIZE,
  LOGIN_SUCCESS,
  LOGOUT
}

export interface User {
  username: string,
  password: string
}

interface Action {
  type: Reduce_Login_Type,
  payload: User | null
}
interface AuthState {
  isInit: boolean,
  isAuthen: boolean,
  user: User | null,

}

const initialState: any = {
  isInit: false,
  isAuthen: false,
  user: {
    username: "ntd@gmail.com",
    password: "123"
  },

}
const reducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case Reduce_Login_Type.INITIALIZE:

      return { ...state, isInit: true, isAuthen: false, user: null };
    case Reduce_Login_Type.LOGIN_SUCCESS:

      return { ...state, user: action.payload, isAuthen: true, isInit: true };

    case Reduce_Login_Type.LOGOUT:
      return { ...state, user: null, isAuthen: false, isInit: true };
    default:
      return { ...state };
  }
}
const AuthContext = createContext(initialState);
function AuthProvider({ children }: Props) {
  useEffect(() => {

    let username = window.localStorage.getItem("username")!;
    let password = window.localStorage.getItem("password")!;
    if (!username || !password) {
      dispatch({ type: Reduce_Login_Type.INITIALIZE, payload: null })
    }
    else {
      dispatch({ type: Reduce_Login_Type.LOGIN_SUCCESS, payload: { username, password } })
    }


  }, [])

  const [state, dispatch] = useReducer(reducer, initialState);

  const login = (user: User, callback: Function) => {


    if (user.username && user.password) {

      dispatch({ type: Reduce_Login_Type.LOGIN_SUCCESS, payload: user })
      window.localStorage.setItem("username", user.username);
      window.localStorage.setItem("password", user.password);
      callback();
    }
  }
  const logout = (callback: Function) => {
    dispatch({ type: Reduce_Login_Type.LOGOUT, payload: null })
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("password");
    callback();

  }
  return (
    <AuthContext.Provider value={{ state, login, logout }}>{children}</AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }