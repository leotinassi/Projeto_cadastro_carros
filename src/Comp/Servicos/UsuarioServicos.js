import axios from 'axios';

const urlbase = "http://localhost:8080/usuario";
const url_usuario = "http://localhost:8080/usuario/all";

class UsuarioServicos{
    getUsuario(){
        return axios.get(urlbase+"/all");
    }
    createCar(usuario){
        return axios.post(urlbase+"/addCar",usuario);

    }
    getUsuarioById(id){
       return axios.get(urlbase+"/locate_Car/"+id) ;
    }
    editCar(usuario){
        return axios.put(urlbase+"/update_car/"+usuario.id_usuario,usuario);

    }

    deleteCar(id){
        return axios.delete(urlbase+ "/delete_Car/"+id)

    }



} export default new UsuarioServicos();