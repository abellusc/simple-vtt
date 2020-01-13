const initialState = {
    account: {
        loggedIn: false,
        user: null,
    },
    brand: {
        brandName: 'roll for initiative',
    },
    board: {
        refreshRate: 60, // set the Hz update speed of the whiteboard here - 10 = 10 frames per second
        canvasWidth: window.innerWidth,
        canvasHeight: window.innerHeight,
        canvasBackground: 'white',
        gridSquareWidth: 50, // width of a square in px
        gridSquareHeight: 50, // height of a square in px
    },
    tools: {
        currentTool: -1,
        options: []
    },
    modals: {
        login: {
            display: false,
            options: {}
        },
        invite: {
            display: false,
            options: {}
        },
        gm: {
            display: false,
            options: {}
        },
    }
};
function toolsReducer(toolsState, action) {
    let newToolsState = {
        ...toolsState,
    };

    console.log('FIRING ACTION ON TOOLS REDUCER', action);

    switch(action.type) {
        case 'SET_TOOL':
            newToolsState = { ...newToolsState, currentTool: action.payload.toolId };
            break;
        case 'SET_TOOL_OPTIONS':
            break;
        default:
            break;
    }

    console.log('new tools state', newToolsState);

    return newToolsState;
}
function modalReducer(modalState, action) {
    let newModalState = {
        ...modalState,
    };

    console.log('FIRING ACTION ON MODAL REDUCER', action);

    switch(action.type) {
        case 'SHOW_MODAL':
            newModalState[action.payload.modalName] = {
                display: true,
                options: action.payload.options,
            }
            console.log('set', action.payload.modalName, 'to showing');
        break;
        case 'HIDE_MODAL':
            newModalState[action.payload.modalName] = {
                display: false,
                options: action.payload.options,
            }
            console.log('set', action.payload.modalName, 'to hidden');
        break;
        default:
            break;
    }

    console.log('new modal state', newModalState);
    return newModalState;
};
function rootReducer(state = initialState, action) {
    let newState = {
        ...state
    };

    console.log('REDUCING STATE', action.reducer);

    // reducer context handler
    switch (action.reducer) {
        case 'tools': newState = { ...newState, tools: toolsReducer(state.tools, action) }; break; // manages toolbar
        case 'account': break; // manages account stuff like logging in
        case 'gamemaster': break; // manages gamemaster special tools (advanced tools)
        case 'invite': break; // manages creation and accepting of invites and tripcodes
        case 'canvas': break; // manages drawing on the canvas
        case 'modals': newState = { ...newState, modals: modalReducer(state.modals, action) }; break; // manages showing and hiding of modals
        case 'toast': break; // manages showing and hiding of toasts
        case 'chat': break; // manages account stuff like logging in
        case 'roll': break; // manages rolling of dice on the secure rolling server
        default: break;
    }

    console.warn('Final State', newState);

    return newState;
};

export default rootReducer;
