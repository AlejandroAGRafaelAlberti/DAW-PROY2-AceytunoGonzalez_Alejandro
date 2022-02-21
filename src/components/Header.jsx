import React from 'react'
const Header = (props) => {
    function changeSection(event) {
      props.onChange(event);
    }
    return(
    <header className='fixed-top bg-light'>
        <ul className="nav nav-tabs nav-justified">
        <li className="nav-item">
            <a id="About" className="nav-link" href="#top" onClick={e => changeSection(e.target.id)}>Sobre Mi</a>
        </li>
        <li className="nav-item">
            <a id="Academics" className="nav-link" href="#top" onClick={e => changeSection(e.target.id)}>Formación</a>
        </li>
        <li className="nav-item">
            <a id="PortFolio" className="nav-link" href="#top" onClick={e => changeSection(e.target.id)}>Portfolio</a>
        </li>
        <li className="nav-item">
            <a id="Utility" className="nav-link" href="#top" onClick={e => changeSection(e.target.id)}>Generador de Imagenes</a>
        </li>
        </ul>
    </header>
    )
}
export default Header
