package com.example.ConexaoDados;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RequestMapping("/usuario")
@CrossOrigin(origins="*")
public class UsuarioController {
	@Autowired
	private UsuarioRepositorio repositorio;
	
	@PostMapping(path="/add")
	public @ResponseBody String novoUsuario(@RequestParam String carro, @RequestParam String litragem, @RequestParam String motor) {
	 Usuario user = new Usuario();
	user.setCarro(carro);
	user.setLitragem(litragem);
	user.setMotor(motor);
	repositorio.save(user);
	
	return "Valores Salvos com sucesso";
	}
	
	@PostMapping(path= "/addCar")
	public @ResponseBody String novoCarro2(@RequestBody Usuario newUser) {
		 repositorio.save(newUser);
		return "Carro adicionado com sucesso";
	}

	@GetMapping(path= "/all")
	public @ResponseBody Iterable<Usuario> retornaTodos(){
		return repositorio.findAll();
	}
	
	@GetMapping(path = "/user")
	public @ResponseBody Optional<Usuario> retornaUser (@RequestParam String id){
		return repositorio.findById(Long.parseLong(id));
	}
	@GetMapping(path = "/locate_Car/{id}")
	public @ResponseBody Optional<Usuario> retornaUser2(@PathVariable(required = true,name="id")String id){
		return repositorio.findById(Long.parseLong(id));
	}
	
	@DeleteMapping (path = "delete_Car/{id}")
	public @ResponseBody String deleteUser(@PathVariable(required = true, name = "id")String id) {
		Optional<Usuario> user= repositorio.findById(Long.parseLong(id));
		if(user.isPresent()) {
			repositorio.delete(user.get());
			return "usuario Deletado com Sucesso";
		}
		return "usuario não encontrado";
	}
	
	@PutMapping(path = "update_car/{id}")
	public @ResponseBody Optional<Usuario> updateCar(@PathVariable(required = true, name="id")String id,
			@RequestBody Usuario user){
		Optional<Usuario> u = repositorio.findById(Long.parseLong(id));
		  if(u.isPresent()) {
			 u.get().setCarro(user.getCarro()); 
			 u.get().setLitragem(user.getLitragem());
			 u.get().setMotor(user.getMotor());
			  repositorio.save(u.get());
			  return u;
		  }
		return null;
	}
	
	@PutMapping(path = "/user/{id}")
	public @ResponseBody ResponseEntity<Usuario> alteraCar(@PathVariable(required = true, name="id")String id,
			@RequestBody Usuario user){
		Optional<Usuario> u = repositorio.findById(Long.parseLong(id));
		  if(u.isPresent()) {
			  u.get().setCarro(user.getCarro()); 
				 u.get().setLitragem(user.getLitragem());
				 u.get().setMotor(user.getMotor());
			 return ResponseEntity.ok(repositorio.save(u.get()));

		  }
		return ResponseEntity.status(404).build();
	}
	
	@GetMapping(path="locate_by_nome/{Carro}")
	public @ResponseBody List<Usuario> locateByNome(@PathVariable(required = true, name="carro")String Carro){
		return repositorio.findByCarro(Carro);
	}
	
	
	@GetMapping(path="locate_by_Litragem/{Litragem}")
	public @ResponseBody List<Usuario> locateBySobrenome(@PathVariable(required = true, name="Litragem")String Litragem){
		return repositorio.findByLitragem(Litragem);
	}
	
	
	@GetMapping(path="locate_by_Motor/{Motor}")
	public @ResponseBody List<Usuario> locateByEmail(@PathVariable(required = true, name="Motor")String Motor){
		return repositorio.findByMotor(Motor);
	}
	
	
}