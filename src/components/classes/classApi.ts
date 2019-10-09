import api from '../../api/index';
export const getInitClasses = (dispatch : any) => {
    dispatch({type: 'API_CALL'});
    api.getClass()
        .then((res)=> {
            if(res.success)dispatch({type: 'GET_CLASSES', class: res.class});
            else dispatch({type: 'GET_CLASSES', error: true, class: [] });
        })
        .catch((err)=>alert(err))
        .finally(()=> dispatch({ type: 'CONTENT_LOADED'}))
}

export const createNewClass = (dispatch : any, data: any) => {
    let {className, school} : any = data;
    dispatch({type: 'API_CALL'});
    api.createClass({className, school})
        .then((res) => {
            console.log(res)
            if(res.success) dispatch({type: 'CREATE_CLASS', class:  [{c_id : res.class}]});
            else alert(res.message);
        })
        .catch((err) => {alert(err)})
        .finally(() => {dispatch({ type: 'DISABLE_MODAL'})
                        dispatch({ type: 'CONTENT_LOADED'})})
}

export const joinClass = (dispatch: any, code: string) => {
    dispatch({type: 'API_CALL'});
    api.addClass({code})
        .then((res) => {
            if(!res.success) alert(res.message);
            else getInitClasses(dispatch);
        })
        .catch((err) => {alert(err)})
        .finally(() => {dispatch({ type: 'DISABLE_MODAL'})
                        dispatch({ type: 'CONTENT_LOADED'})})
}