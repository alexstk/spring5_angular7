package com.bolsadeideas.springboot.backend.apirest.models.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.bolsadeideas.springboot.backend.apirest.models.entity.Usuario;

public interface IUsuarioDao extends CrudRepository<Usuario, Long>{

	public Usuario fingByUsername(String username);
	
	// Con cualquiera da lo mismo
	@Query("select u from Usuario u where u.username=?1")
	public Usuario fingByUsername2(String username);
		
}
