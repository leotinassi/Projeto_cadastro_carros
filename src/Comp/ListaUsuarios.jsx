import React, { Component } from 'react';
import { Col, Button, Container, Row, Table } from 'react-bootstrap';
import UsuarioServicos from './Servicos/UsuarioServicos';


class ListaUsuarios extends Component {

    constructor(props) {
        super(props);


        this.state = {
            usuarios: []
        }

        this.voltar = this.voltar.bind(this);
        this.excluir = this.excluir.bind(this);
        this.editar = this.editar.bind(this);
        this.novoCarro = this.novoCarro.bind(this);
    }
    componentDidMount() {
        this.getUsuarios();

    }

    getUsuarios() {
        UsuarioServicos.getUsuario().then(
            (resposta) =>
                this.setState({ usuarios: resposta.data })
        );

    }

    voltar(){
        this.props.history.push("/");

    }
     excluir(id){
         UsuarioServicos.deleteCar(id).then(
             res =>{ alert(res.data)
             this.getUsuarios();
             });

     }
     editar(id){
         this.props.history.push("/usuario/"+id);

     }
     novoCarro(){
        this.props.history.push("/usuario/_add")

     }



    render() {
        return (
            <Container>
                <Row>
                    <h1>Usuarios</h1>
                </Row>

                <Row>
                    <Button variant="link" onClick={this.voltar}>Voltar</Button>
                </Row>

                <Row>
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    Carro
                                </th>

                                <th>
                                    Litragem
                                </th>

                                <th>
                                   Motor(CV)
                                </th>

                                <th>
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.usuarios.map(
                                    usuario =>
                                        <tr
                                            key = {usuario.id_usuario}>
                                            <td>
                                                {usuario.carro}
                                            </td>

                                            <td>
                                                {usuario.litragem}
                                            </td>

                                            <td>
                                                {usuario.motor}
                                            </td>
                                            <td>
                                                <Button variant="warning" onClick={()=>this.editar(usuario.id_usuario)}>Editar</Button>
                                                <Button variant="danger" onClick={()=>this.excluir(usuario.id_usuario)}>Excluir</Button>

                                            </td>
                                        </tr>
                                )
                            }

                        </tbody>

                    </Table>

                </Row>

                <Row >
                    <Col>
                        <Button className="float-left" variant="link" onClick={this.voltar}>Voltar</Button>
                    </Col>
                    <Col>
                        <Button className="float-right" variant="secondary" onClick={this.novoCarro}>Novo Carro</Button>
                    </Col>
                </Row>



            </Container>
        );
    }
}

export default ListaUsuarios;