const initialState = {
    config: {
        apiUrl: 'http://localhost:8080', // rest api
        wsUrl: 'http://localhost:8081', // websocket
    },
    account: {
        loggedIn: false,
        accountToken: null,
        user: null,
        signup: {
            username: null,
            password: null,
        },
        login: {
            username: null,
            password: null,
        }
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
    session: {
        id: null,
        status: 'AWAITING_CODE',
        sessionToken: null,
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
        signup: {
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
        joinSession: {
            display: false,
            options: {}
        },
        createSession: {
            display: false,
            options: {}
        },
        connecting: {
            display: false,
            options: {}
        }
    }
};
function toolsReducer(toolsState, action) {
    let newToolsState = {
        ...toolsState,
    };

    console.log('FIRING ACTION ON TOOLS REDUCER', action);

    switch(action.type) {
        case 'SET_TOOL':
            console.log('[Action Received]', 'Set tool.');
            newToolsState.tools.currentTool = action.payload.toolId;
            break;
        case 'SET_TOOL_OPTIONS':
            console.log('[Action Received]', 'Set tool options for tool.');
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
            // set all to not showing
            Object.keys(newModalState.modals).forEach((modalName) => {
                if (newModalState.modals[modalName].display) {
                    console.log('overriding modal:', modalName);
                    newModalState.modals[modalName].display = false;
                }
            });

            newModalState.modals[action.payload.modalName] = {
                display: true,
                options: action.payload.options,
            }
            console.log('set', action.payload.modalName, 'to showing');
        break;
        case 'HIDE_MODAL':
            newModalState.modals[action.payload.modalName] = {
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
function sessionsReducer(state, action) {
    let newState = {
        ...state,
    };

    switch (action.type) {
        case 'VALIDATE_INVITE_BY_CODE': // check the invite code and retrieve session, check bans
            console.log('[Action Received]', 'Initialized validation of session invite code.');
            newState.session.status = 'connecting';
            newState.modals.joinSession.display = false;
            newState.modals.connecting.display = true;
            break;
        case 'VALIDATE_SESSION_PASSWORD': // check the session password
            console.log('[Action Received]', 'Initialized session password validation.');
            newState.session.status = 'checking password';
            break;
        case 'RETRIEVE_PLAYER_KEY': // api key for players
            console.log('[Action Received]', 'Initialized player key retrieval.');
            newState.session.status = 'retrieving key';
            break;
        case 'SET_INVITE_CODE':
            console.log('[Action Received]', 'Set invite code.');
            if (action.payload.inviteCode.length === 8) {
                newState.session.id = action.payload.inviteCode;
            } else {
                console.error('Unable to set session id - not 8 characters.');
            }
            break;
        default:
            break;
    }

    return newState;
}

function accountReducer = (state, action) {
    let newState = {
        ...state,
    };

    switch (action.type) {
        case 'SIGNUP_SET_USERNAME':
            newState.account.signup.username = action.payload.username;
            break;
        case 'SIGNUP_SET_PASSWORD':
            newState.account.signup.password = action.payload.password;
            break;
        case 'LOGIN_SET_USERNAME':
            newState.account.login.username = action.payload.username;
            break;
        case 'LOGIN_SET_PASSWORD':
            newState.account.login.password = action.payload.password;
            break;
        case 'CHECK_LOGIN':
            break;
        default:
            break;
    }

    return newState;
}

function rootReducer(state = initialState, action) {
    let newState = {
        ...state
    };

    console.log('REDUCING STATE', action.reducer);

    // reducer context handler
    switch (action.reducer) {
        case 'tools': newState = { ...newState, ...toolsReducer(state, action) }; break; // manages toolbar
        case 'sessions': newState = { ...newState, ...sessionsReducer(state, action) }; break; // manages sessions
        case 'account': break; // manages account stuff like logging in
        case 'gamemaster': break; // manages gamemaster special tools (advanced tools)
        case 'invite': break; // manages creation and accepting of invites and tripcodes
        case 'canvas': break; // manages drawing on the canvas
        case 'modals': newState = { ...newState, ...modalReducer(state, action) }; break; // manages showing and hiding of modals
        case 'toast': break; // manages showing and hiding of toasts
        case 'chat': break; // manages account stuff like logging in
        case 'roll': break; // manages rolling of dice on the secure rolling server
        default: break;
    }

    console.warn('Final State', newState);

    return newState;
};

export default rootReducer;
