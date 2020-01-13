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
            required: false,
            title: 'sign in or sign up!',
            options: {}
        },
        invite: {
            display: false,
            required: false,
            title: 'send or accept invite',
            options: {}
        },
        gm: {
            display: false,
            required: false,
            title: '<gm> gamemaster tools',
            options: {}
        },
    }
};
function toolsReducer(toolsState, action) {
    let newToolsState = {
        ...toolsState,
    };

    switch(action.action) {
        case 'SET_TOOL':
            newToolsState = { ...newToolsState, currentTool: action.payload.toolId };
            break;
        case 'SET_TOOL_OPTIONS':
            break;
    }

    return newToolsState;
}
function rootReducer(state = initialState, action) {
    let newState = {
        ...state
    };

    // reducer context handler
    switch (action.type) {
        case 'tools': newState = { ...newState, ...(toolsReducer(state.tools, action)) }; break; // manages toolbar
        case 'account': break; // manages account stuff like logging in
        case 'gamemaster': break; // manages gamemaster special tools (advanced tools)
        case 'invite': break; // manages creation and accepting of invites and tripcodes
        case 'canvas': break; // manages drawing on the canvas
        case 'modal': break; // manages showing and hiding of modals
        case 'toast': break; // manages showing and hiding of toasts
        case 'chat': break; // manages account stuff like logging in
        case 'roll': break; // manages rolling of dice on the secure rolling server
    }
    return state;
};

export default rootReducer;
