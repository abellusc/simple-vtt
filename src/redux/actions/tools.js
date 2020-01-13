import { action } from "./base";

export const setToolById = (toolId) => action('SET_TOOL', 'tools', 'client', { toolId });
export const setToolOptionsById = (toolId, options) => action('SET_TOOL_OPTIONS', 'tools', 'client', { toolId, options });
