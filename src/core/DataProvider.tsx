import React, { createContext } from "react"

function DataProvider({ children }: { children: React.ReactElement[] }) {
    const DataContext = createContext<any>(null)
    React.Children.forEach(children, (child: any) => {
        console.log(child)
    })

    const listOfchildren: Array<any> = React.Children.toArray(children)
    console.log(listOfchildren)



    return (
        <DataContext.Provider value="viral">
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider