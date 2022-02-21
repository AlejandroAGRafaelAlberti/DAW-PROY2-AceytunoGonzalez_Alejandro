import React from 'react'

const Footer = () => {
    return(
    <footer className='fixed-bottom bg-dark text-white border border-bottom-0 border-left-0 border-right-0 border-light'>
        <h2 className='text-center'>Datos de contacto:</h2>
        <div className="row text-center p-2">
          <div className="col-md-4">Email: <a href="mailto:alejandroaceytunogonzalez@gmail.com">alejandroaceytunogonzalez@gmail.com</a></div>
          <div className="col-md-4">Teléfono: +34 644 894 226</div>
          <div className="col-md-4">Perfil de LinkedIn: <a href="https://www.linkedin.com/in/alejandro-aceytuno-542290232/">Alejandro Aceytuno González</a></div>
        </div>
    </footer>
    )
}
export default Footer
