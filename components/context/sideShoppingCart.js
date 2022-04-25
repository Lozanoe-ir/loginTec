import {useReducer, useContext, createContext} from 'react'

const SideShoppingCartStateContext = createContext()
const SideShoppingCartDispatchContext = createContext()


const reducer = (state, action) => {
    
    switch (action.type)
    {
        
        case 'open':
            console.log('Action ', action.open);
            return {
                ...state,
                open: action.open,          
            };

        case 'openModal':
            console.log('Action ', action.openModal);
            return {
                    ...state,
                    openModal: action.openModal,          
            };

        case 'openSearch':
            //console.log('Action ', action.open);
            return {
                ...state,
                openSearch: action.openSearch,          
        };
    


        case 'openModalConfirmation':
            console.log('Action ', action.openModalConfirmation);
            return {
                    ...state,
                    openModalConfirmation: action.openModalConfirmation,          
            };
    

        default:
            throw new Error(`Unknown action: ${action.type}`)
    }

}


export const SideShoppingCartProvider = ({ children }) => {
    
    const sideShop={
        open: false,
        openSearch:false,
        openModal:false,
        openModalConfirmation:false,
    };
    
    const [state, dispatch] = useReducer(reducer,sideShop);

    return(
        

        <SideShoppingCartDispatchContext.Provider value={dispatch}>
            <SideShoppingCartStateContext.Provider value={state}>
                {children}
            </SideShoppingCartStateContext.Provider>
        </SideShoppingCartDispatchContext.Provider>

    )  

}


export const useSideShoppingCart = () => useContext(SideShoppingCartStateContext)
export const useSideShoppingCartDispatch = () => useContext(SideShoppingCartDispatchContext)