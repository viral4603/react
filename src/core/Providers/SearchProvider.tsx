import { ReactElement, createContext } from "react"

export const SeacrhContext = createContext<string | null>(null)

function SearchProvider({ children }: { children: ReactElement }) {
    return (
        <SeacrhContext.Provider value="headphone">
            {children}
        </SeacrhContext.Provider>
    )
}

export default SearchProvider