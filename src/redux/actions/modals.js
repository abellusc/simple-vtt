import { action } from "./base";

export const showModal = (modalName, options) => action('modals', 'SHOW_MODAL', 'client', { modalName, options });
export const hideModal = (modalName) => action('modals', 'HIDE_MODAL', 'client', { modalName });
