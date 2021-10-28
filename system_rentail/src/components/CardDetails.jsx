import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';

export default function(props) {

    const [view, setView] = React.useState('list');

    const handleChange = (event, nextView) => {
        setView(nextView);
      }

    return (
        <>
        <div className="box-img">
                <header>
                    <h2>{props.publication[0].title}</h2>
                </header>
                <img src={props.publication[0].product[0].image} alt={props.publication[0].title} />
            </div>
            <div className="details-primary">
                <section className="box-details">
                    <article className="details-secundary">
                    <h2>{props.publication[0].amount} Existencias - Producto Disponible</h2>
                        <h3>Datos de Arrendador</h3>
                        <p>Nombre: {props.publication[0].lessor[0].firstname} {props.publication[0].lessor[0].lastname}</p>
                        <p>Ubicacion: {props.publication[0].location}</p>
                        <h3>Detalles del Producto</h3>
                        <p>Producto: {props.publication[0].product[0].name}</p>
                        <p>Descripcion: {props.publication[0].product[0].description}</p>
                        <p>Categoria: {props.publication[0].category[0].name}</p>
                    </article>
                    <section className="actions-box">
                    <h3>Envia una solicitud de Renta</h3>
                    <form className="form-actions">
                    <p>Selecciona una opcion</p>
                    <ToggleButtonGroup
                    orientation="vertical"
                    value={view}
                    exclusive
                    onChange={handleChange}
                    >
                    {props.publication[0].prices.map((price, index) => {
                            return <ToggleButton style={{ fontSize: '0.8em' }} value={index}>{props.publication[0].periods[index]} dias por: $ {price}</ToggleButton> 
                        })
                    })
                    </ToggleButtonGroup>
                    <Button style={{marginTop: '5%', width:'70%', backgroundColor: '#153E90'}} variant="contained"
                    id="demo-simple-select"
                    >Enviar</Button>
                    </form>
                    </section>
                </section>
            </div>
        </>
    )
}