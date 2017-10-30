export default function({ dispatch }){
    return next => action => {
        if(!action.payload || !action.payload.then){
            return next(action);
        }

        console.log('we dont have a promise', action);
    }
}