export type Action = { type: string, class ?: any[], contentLoaded ?: boolean, error ?: boolean, modal ?: boolean };
export interface ClassState {class: any[], contentLoaded: boolean, error: boolean, modal : boolean };

export function reducer(state: ClassState, action: Action): ClassState {
    switch (action.type) {
        case 'GET_CLASSES':
            console.log(action.class)
            return {
                class: action.class,
                contentLoaded: true,
                error: action.error || false,
                modal: false
            };

        case 'CREATE_CLASS':
            return {
                class: action.class.concat(state.class),
                contentLoaded: true,
                error: action.error || false,
                modal: false
            };
            
        case 'API_CALL':
            return {
                ...state,
                contentLoaded: false
            };

        case 'ERROR':
            return {
                ...state,
                error: true,
                contentLoaded: true
            };
        case 'DISABLE_MODAL':
            return {
                ...state,
                modal: false
            };
        case 'ACTIVATE_MODAL':
            return {
                ...state,
               modal: true
            };
            case 'CONTENT_LOADED':
                return {
                    ...state,
                   contentLoaded: true
                };
        default:
            JSON.parse(JSON.stringify(state))
    };
}