import { MODES } from "./types";

export const WINDOW_PADDING = 4
export const NODE_WIDTH = 2

export const MODE_TOGGLE_MAP = {
    [MODES.FILL_MODE]: MODES.CLEAR_MODE,
    [MODES.CLEAR_MODE]: MODES.FILL_MODE,
    [MODES.START_NODE_MODE]: MODES.START_NODE_MODE,
    [MODES.TARGET_NODE_MODE]: MODES.CLEAR_MODE,
    [MODES.DEFAULT_NODE_MODE]: MODES.CLEAR_MODE,
};