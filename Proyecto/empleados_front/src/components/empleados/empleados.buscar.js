import React from "react";
import { request } from "../helper/helper";
import { Container, Row, Col } from "react-bootstrap";
import "./empleados.css";
import DataGrid from "../grid/grid";


const columns = [
    {
        dataField: "_id",
        text: "Product ID",
        hidden: true
    },
    {
        dataField: "nombre",
        text: "Nombre",
    },
    {
        dataField: "apellido_p",
        text: "Primer Apellido",
    },
    {
        dataField: "apellido_m",
        text: "Segundo Apellido",
    },
    {
        dataField: "telefono",
        text: "Telefono",
    },
    {
        dataField: "email",
        text: "Correo",
    },
    {
        dataField: "direccion",
        text: "Direccion",
    },
];

export default class empleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }
    render() {

        return (
            <Container id="empleados-buscar-container" >
                <Row>
                    <h1>Buscar empleados</h1>
                </Row>
                <Row>
                    <DataGrid url="/empleados" columns={columns} />
                </Row>
            </Container>
        );
    }
}
