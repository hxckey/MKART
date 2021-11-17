const initState = {
    player: [
        { character: "", characterImage:''},
        { kart: "", kartImage: ""},
        { wheels: "", wheelsImage: ""},
        { glider: "", gliderImage: ""}
    ]
};

export const randomReducer = (state=initState, action) => {
    switch(action.type){
        case 'UPDATE_CHARACTER':
            return { ...state, character: action.payload, characterImage: action.payload};
        case 'UPDATE_KART':
            return { ...state, kart: action.payload, kartImage: action.payload };
        case 'UPDATE_WHEELS':
            return { ...state, wheels: action.payload, wheelsImage: action.payload };
        case 'UPDATE_KART':
            return { ...state, glider: action.payload, gliderImage: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload }
        default:
            return state
    };
};
