import { action } from "./base";

export const setSignupUsername = (username) => action('SIGNUP_SET_USERNAME', 'account', 'client', { username });
export const setSignupPassword = (password) => action('SIGNUP_SET_PASSWORD', 'account', 'client', { password });

export const setLoginUsername = (username) => action('LOGIN_SET_USERNAME', 'account', 'client', { username });
export const setLoginPassword = (password) => action('LOGIN_SET_PASSWORD', 'account', 'client', { password });