import React from 'react'
import ReactDom from 'react-dom'
// import BomDia from './componentes/BomDia'

// JSX , algo  como o JavaScript extendido

import {BoaTarde, BoaNoite} from './componentes/Multiplos'


//ReactDom.render(<BomDia nome="Guilherme"/>, document.getElementById('root'))

ReactDom.render(
    <div>
        <BoaTarde nome = 'Ana'/>
        <BoaNoite nome = 'Bia'/>
    </div>
    ,document.getElementById('root')
)