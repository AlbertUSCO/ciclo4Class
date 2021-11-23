import React from "react";
import { request } from "../helper/helper";
import { Container, Row, Col } from "react-bootstrap";
import "./empleados.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
    PaginationProvider,
    PaginationListStandalone,
    SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

const products = [
    {
        id: 1,
        name: "producto 1",
        price: 1000,
    },
    {
        id: 2,
        name: "producto 2",
        price: 1000,
    },
    {
        id: 3,
        name: "producto 3",
        price: 1000,
    },
    {
        id: 4,
        name: "producto 4",
        price: 1000,
    },
    {
        id: 5,
        name: "producto 5",
        price: 1000,
    },
    {
        id: 6,
        name: "producto 6",
        price: 1000,
    },
    {
        id: 7,
        name: "producto 7",
        price: 1000,
    },
    {
        id: 8,
        name: "producto 8",
        price: 1000,
    },
    {
        id: 9,
        name: "producto 9",
        price: 1000,
    },
    {
        id: 10,
        name: "producto 10",
        price: 1000,
    },
    {
        id: 11,
        name: "producto 11",
        price: 1000,
    },
    {
        id: 12,
        name: "producto 12",
        price: 1000,
    },
];
const columns = [
    {
        dataField: "id",
        text: "Product ID",
    },
    {
        dataField: "name",
        text: "Product Name",
    },
    {
        dataField: "price",
        text: "Product Price",
    },
];

export default class empleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const options = {
            custom: true,
            totalSize: products.length,
        };

        return (
            <Container id="empleados-buscar-container" >
                <ToolkitProvider
                    keyField="tp"
                    data={products}
                    columns={columns}
                    search
                >
                    {(props) => (
                        <>
                            <PaginationProvider pagination={paginationFactory(options)}>
                                {({ paginationProps, paginationTableProps }) => (
                                    <>
                                        <Row>
                                            <Col>
                                                <SizePerPageDropdownStandalone {...paginationProps} />
                                            </Col>
                                            <Col>
                                                <SearchBar {...props.searchProps} />
                                            </Col>
                                        </Row>

                                        <BootstrapTable
                                            keyField="bt"
                                            data={this.state.rows}
                                            columns={this.props.columns}
                                            {...paginationTableProps}
                                            {...props.baseProps}
                                        />
                                        <PaginationListStandalone {...paginationProps} />
                                    </>
                                )}
                            </PaginationProvider>
                        </>
                    )}
                </ToolkitProvider>
            </Container>
        );
    }
}
