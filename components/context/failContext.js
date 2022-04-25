import { useReducer,useContext,createContext } from "react";
const FailStateContext = createContext();
const FailDispatchContext = createContext();

const reducer =(state,action)=>{
    console.log(action)
    switch(action.type){
        
        case 'open':{
            return{
                ...state,
                open:action.open
            }
        }
        case 'openSucces':{
            return{
                ...state,
                openSucces:action.openSucces
            }
        }
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
}

export const FailProvider= ({children})=>{
    const props={
        open:false,
        openSucces:false,
    }
    const[state,dispatch]=useReducer(reducer,props);

    return(
        <FailDispatchContext.Provider value = {dispatch}>
            <FailStateContext.Provider value= {state}>
                {children}
            </FailStateContext.Provider>
        </FailDispatchContext.Provider>
    )
}

export const useFail =()=> useContext(FailStateContext);
export const useFailDispatch =()=> useContext(FailDispatchContext);