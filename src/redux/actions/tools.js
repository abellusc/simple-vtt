import { action } from "./base";

export const setToolById = (toolId) => action('tools', 'SET_TOOL', 'client', { toolId });
export const setToolOptionsById = (toolId, options) => action('tools', 'SET_TOOL_OPTIONS', 'client', { toolId, options });
