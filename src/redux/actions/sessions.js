import { action } from "./base";

export const validateInviteByCode = (inviteCode) => action('VALIDATE_INVITE_BY_CODE', 'sessions', 'client', { inviteCode });
export const setInviteCode = (inviteCode) => action('SET_INVITE_CODE', 'sessions', 'client', { inviteCode });