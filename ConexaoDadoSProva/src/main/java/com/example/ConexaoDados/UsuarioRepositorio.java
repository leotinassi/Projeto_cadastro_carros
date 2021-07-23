package com.example.ConexaoDados;
import org.springframework.data.repository.CrudRepository;
import java.util.List;
import java.util.Optional;

import com.example.ConexaoDados.*;




public interface UsuarioRepositorio extends CrudRepository<Usuario, Long>{
	List<Usuario> findByCarro(String Carro);
	List<Usuario> findByLitragem(String Litragem);
	List<Usuario> findByMotor(String Motor);
	
	Optional<Usuario> findById(Long id);

}
