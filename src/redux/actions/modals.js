import { action } from "./base";

export const showModal = (modalName, required, options) => action('modals', 'SHOW_MODAL', 'client', { modalName, required, options });
export const hideModal = (modalName) => action('modals', 'HIDE_MODAL', 'client', { modalName });
