import api from '../../api';
import { action } from '../../models';

export function joinClass(code : string): action {
    return { type: 'JOIN_CLASS', code};
}

export function createClass(school : string, className : string): action{
    return { type: 'CREATE_CLASS', school, className};
}

export function getClasses() : action{
    return { type: 'GET_CLASSES'};
}

