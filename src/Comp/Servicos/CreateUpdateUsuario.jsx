import React, { Component } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import UsuarioServicos from './UsuarioServicos';

class CreateUpdateUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_usuario: this.props.match.params.id,
            carro: "",
            litragem: "",
            motor: ""

        }

       // this.changeAno_id_usuarioHandler = this.changeAno_id_usuarioHandler.bind(this);
        this.changeNomeCarroHandler = this.changeNomeCarroHandler.bind(this);
        this.changeLitragemHandler = this.changeLitragemHandler.bind(this);
        this.changeMotorHandler = this.changeMotorHandler.bind(this);
        this.salvarCarro = this.salvarCarro.bind(this);
    }

    componentDidMount() {
        if (this.state.id_usuario === "_add") {
            return false
        } else {
            return UsuarioServicos.getUsuarioById(this.state.id_usuario).then(
                (res) => {
                    let usuario = res.data;
                    this.setState({
                        carro: usuario.carro,
                        litragem: usuario.litragem,
                        motor: usuario.motor
                    });


                }
            )
        }


    }
    salvarCarro() {
        let usuario = {
        
            carro: this.state.carro,
            litragem: this.state.litragem,
            motor: this.state.motor

        }

        if (this.state.id_usuario === "_add") {
            UsuarioServicos.createCar(usuario).then(
                (res)=>{
                    alert(res.data);
                    this.props.history.push("/usuarios");
                }
            )
        } else {
            usuario.id_usuario = this.state.id_usuario
            UsuarioServicos.editCar(usuario).then(
                (res) => {
                    console.log(res.data)
                    
                    });


                }
                this.props.history.push("/usuarios");
            
        }
       

  
//  changeAno_id_usuarioHandler(event) {
//      this.setState({ id_usuario: event.target.value })

//  }
changeNomeCarroHandler(event) {
    this.setState({ carro: event.target.value })

}
changeLitragemHandler(event) {
    this.setState({ litragem: event.target.value })

}
changeMotorHandler(event) {
    this.setState({ motor: event.target.value })


}
cancelar() {
    this.props.history.push("/usuarios");
}

render() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <h1>Cadastro de Um Novo Carro</h1>
            </Row>
            <Form>
                

                <Form.Group controlId="formModelo">
                    <Form.Control type="text" placeholder="NomeCarro" value={this.state.carro} onChange={this.changeNomeCarroHandler} />
                    <Form.Text className="text-muted">
                        Digite o Modelo.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formLitragem">
                    <Form.Control type="text" placeholder="Litragem" value={this.state.litragem} onChange={this.changeLitragemHandler} />
                    <Form.Text className="text-muted">
                        Digite a Litragem
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formMotor">
                    <Form.Control type="text" placeholder="Motor" value={this.state.motor} onChange={this.changeMotorHandler} />
                    <Form.Text className="text-muted">
                        Digite a Quantidade de CV
                    </Form.Text>
                </Form.Group>

                <Row className="float-right">
                    <Button variant="success" style={{ margin: "10px" }} className="btnSubmit" onClick={this.salvarCarro}>
                        Inserir
                    </Button>
                    <Button variant="warning" style={{ margin: "10px" }} onClick={this.cancelar.bind(this)} >
                        Cancelar
                    </Button>
                </Row>

            </Form>
        </Container>


    );
}
}

export default CreateUpdateUsuario;