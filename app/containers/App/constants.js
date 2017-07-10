/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const SET_USERNAME = 'app/SET_USERNAME';
export const SET_THEME = 'app/SET_THEME';
export const SET_LOADING = 'app/SET_APP_LOADING';
export const SET_ERROR = 'app/SET_APP_ERROR';