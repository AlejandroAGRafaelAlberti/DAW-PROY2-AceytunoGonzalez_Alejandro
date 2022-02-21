import React from 'react'

const PortFolio = () => {
    return(
        <div id="main" className='container-fluid'>
            <h1 className='display-3 text-center'>Quizas te interese lo que he podido crear</h1>
            <div className='container-fluid mt-3 bg-light text-dark '>
                <div className='row'>
                    <div className='col-4 border border-muted py-5  border-bottom-0 d-flex align-items-center justify-content-center text-primary'>
                        <h2 className=''>TLOZBOTW-Hyrule-Compendium</h2>
                    </div>
                    <div className='col-8 border border-muted py-5 border-left-0 text-center border-bottom-0'>
                        <h2>Este Proyecto de curso fue realizado completamente por mí.</h2>
                        <h3>Se Trata de un portal web, que llama a una Api Publica para su funcionamiento.</h3>
                        <a href="https://alejandroagrafaelalberti.github.io/TLOZBOTW-Hyrule-Compendium/index.html">https://alejandroagrafaelalberti.github.io/TLOZBOTW-Hyrule-Compendium/index.html</a>
                    </div>
                </div>
                <div className='row '>
                    <div className='col-8 border border-muted py-5 text-center border-bottom-0'>
                        <h2>Este Proyecto de curso fue realizado en Flask</h2>
                        <h3>Se Trata de una applicacion web, que administra una competicion de clickers</h3>
                        <a href="https://github.com/IES-Rafael-Alberti/click-competition-AlejandroAGRafaelAlberti">https://github.com/IES-Rafael-Alberti/click-competition-AlejandroAGRafaelAlberti</a>
                    </div>
                    <div className='col-4 border border-muted py-5 border-left-0  border-bottom-0 d-flex align-items-center text-primary justify-content-center'>
                    <h2 className=''>Projecto Flask</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4 border border-muted py-5  border-bottom-0 d-flex align-items-center justify-content-center text-primary'>
                        <h2 className=''>Projecto Laravel</h2>
                    </div>
                    <div className='col-8 border border-muted py-5 border-left-0 text-center border-bottom-0'>
                    <h2>Este Proyecto de curso fue realizado en Laravel</h2>
                        <h3>Se Trata de una applicacion web, tipo instagram, que administra usuarios y fotos</h3>
                        <a href="https://github.com/IES-Rafael-Alberti/clon-instagram-usando-laravel-AlejandroAGRafaelAlberti">https://github.com/IES-Rafael-Alberti/clon-instagram-usando-laravel-AlejandroAGRafaelAlberti</a>
                    </div>
                </div>
                <div className='row '>
                    <div className='col-12 border border-muted py-5 border-left-0  d-flex align-items-center text-primary justify-content-center'>
                        <h2>Y Tengo Ganas de hacer más!</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PortFolio