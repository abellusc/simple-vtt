import { action } from "./base";

export const showModal = (modalName, options) => action('SHOW_MODAL', 'modals', 'client', { modalName, options });
export const hideModal = (modalName) => action('HIDE_MODAL', 'modals', 'client', { modalName });
