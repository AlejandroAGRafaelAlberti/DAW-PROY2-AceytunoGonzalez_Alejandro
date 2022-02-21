import React, {useState} from 'react';

const Utility = () => {
    const [width, setWidth] = useState(1600)
    const [height, setHeight] = useState(800)
    const ChangeImage = () =>{
        let image = document.getElementById("image")
        fetch("https://picsum.photos/"+width+"/"+height)
        image.insertAdjacentHTML('afterend',"<img id=\"image\"src=\"https://picsum.photos/"+width+"/"+height+"\" alt=\"error\" />")
        image.remove()
    }
    return(
        <div id="main" className='container-fluid'>
            <h1 className='display-3 text-center'>Generador de Imagenes</h1>
            <div className='row'>
                <div className='col-4 border border-muted py-5  border-bottom-0 d-flex align-items-center justify-content-center text-primary'>
                    <button className='btn btn-primary' onClick={ChangeImage}>Genera una imagen</button>
                </div>
                <div className='col-4 border border-muted py-5  border-bottom-0 d-flex align-items-center justify-content-center text-primary flex-column'>
                    <p>Ancho</p>
                    <input type="text" className="" placeholder="Cambia el ancho" onChange={e=> setWidth(e.target.value)} value={width}/>
                </div>
                <div className='col-4 border border-muted py-5  border-bottom-0 d-flex align-items-center justify-content-center text-primary flex-column'>
                    <p>Alto</p>
                    <input type="text" className="" placeholder="Cambia el alto" onChange={e=> setHeight(e.target.value)} value={height}/>
                </div>
            </div>
            
            <div className='row'>
                <div className='col-12 border border-muted py-5  d-flex align-items-center justify-content-center text-primary'>
                    <img id="image"src="https://picsum.photos/1600/800" alt="error" />
                </div>
            </div>
        </div>
    )
}

export default Utility