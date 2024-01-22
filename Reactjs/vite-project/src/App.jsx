import React from 'react'
import Des from './Components/Des'
import data from "./data.json"

const App = () => {
    return ( <
        > {
            data.map((Element) => {
                return ( <
                    Des title = { Element.Title }
                    saal = { Element.Year }
                    />
                )
            })
        } <
        />
    )
}

export default App