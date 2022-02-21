import React from 'react'

const About = () => {
    return(
        <div id="main" className='container-fluid'>
            <h1 className='display-1 text-center'>¡Hola, Soy Alejandro!</h1>
            <div className='container-fluid mt-3 bg-light text-dark '>
                <div className='row'>
                    <div className='col-4 border border-muted py-5  border-bottom-0 d-flex align-items-center justify-content-center text-primary'>
                        <h2 className=''>¿Qué es lo que hago?</h2>
                    </div>
                    <div className='col-8 border border-muted py-5 border-left-0 text-center border-bottom-0'>
                        <h2>Soy un Técnico Superior en Desarrollo de Aplicaciones Web.</h2>
                        <h2>Me dedico a programar paginas web a medida, diseñadas especificamente para tí.</h2>
                    </div>
                </div>
                <div className='row '>
                    <div className='col-8 border border-muted py-5 text-center border-bottom-0'>
                        <h2>Me considero una persona creativa, necesito crear algo nuevo, cada día.</h2>
                        <h3>Esto se puede aprovechar, y eso es lo que hago.</h3>
                        <h3>Gracias a mi profesión cualquier empresa puede tener su propia pagina web,</h3>
                        <h3>Y en el proceso, podemos crear algo identificativo y único.</h3>
                    </div>
                    <div className='col-4 border border-muted py-5 border-left-0  border-bottom-0 d-flex align-items-center text-primary justify-content-center'>
                    <h2 className=''>¿Por qué trabajo en esta profesión?</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4 border border-muted py-5  border-bottom-0 d-flex align-items-center justify-content-center text-primary'>
                        <h2 className=''>¿Quien so yo?</h2>
                    </div>
                    <div className='col-8 border border-muted py-5 border-left-0 text-center border-bottom-0'>
                        <h2>Mi nombre es Alejandro Aceytuno González, y vivo en España.</h2>
                        <h3>Aunque todavía no tengo experiencia, eso no significa que no sea capaz de realizar mi trabajo</h3>
                        <h3>Me considero una persona que aprendre rápido, flexible y sobretodo perfeccionista.</h3>
                        <h3>Además, me encanta trabajar en grupo. No tengo problema organizandome y comunicandome con los demás.</h3>
                    </div>
                </div>
                <div className='row '>
                    <div className='col-8 border border-muted py-5 text-center'>
                        <h2>No solo me limito a programar la página web.</h2>
                        <h3>Támbien soy capaz de diseñar la web en su totalidad.</h3>
                        <h3>Puedo realizar una API perfectamente y he usado Laravel y Flask anteriormente.</h3>
                        <h3>En definitiva, se usar Python, Java, C#, Javascript, Css, Html y una multitud de Frameworks.</h3>
                        <h3>¡Pero no tengo miedo a aprender!</h3>
                    </div>
                    <div className='col-4 border border-muted py-5 border-left-0  d-flex align-items-center text-primary justify-content-center'>
                    <h2 className=''>¿Qué es lo que sé hacer?</h2>
                    </div>
                </div>
            </div>
        </div>
        )
}
export default About