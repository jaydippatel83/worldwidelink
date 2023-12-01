export const LiquidStakeContext = createContext(undefined);


export const LiquidStakeContextProvider = (props) => {


    return (
        <LiquidStakeContext.Provider
            value={{



            }}

            {...props}
        >
            {props.children}
        </LiquidStakeContext.Provider>
    )
}