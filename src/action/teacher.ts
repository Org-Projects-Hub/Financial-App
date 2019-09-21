import api from '../api';

let getClasses = (setResClass: Function, setContentLoaded: Function,  setModal: Function)  => {
    api.getClass()
        .then((res)=> {
            if(res.success)setResClass(res.class);
            else alert(res.message);
            setContentLoaded(true);
        })
        .catch((err)=>{
            alert(err);
            setContentLoaded(true);
        })
        .finally(() => {setModal(false)});  
}

let createClass = (className : string, school: string, resClass: any, setResClass: Function, setContentLoaded: Function,  setModal: Function) => {
    setContentLoaded(false);

    api.createClass({className, school})
        .then((res) => {
            if(res.success)setResClass([...resClass, res.class]);
            else alert(res.message);
            getClasses(setResClass,  setContentLoaded, setModal)

        })
        .catch((err) => {alert(err)})
        .finally(() => setModal(false))
}

let joinClass = (code: string, setResClass: Function, setContentLoaded: Function, setModal: Function) => {
    setContentLoaded(false);
    api.addClass({code})
        .then((res) => {
            if(!res.success) {
                alert(res.message);
                setContentLoaded(true);
            }
            else getClasses(setResClass,  setContentLoaded, setModal);
        })
        .catch((err) => {alert(err)})
        .finally(() => {setModal(false)});
}

export { getClasses, joinClass, createClass};