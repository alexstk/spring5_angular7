package com.bolsadeideas.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.bolsadeideas.springboot.backend.apirest.models.entity.Cliente;

public interface IClienteService {
	
	List<Cliente> findAll();
	
	Page<Cliente> findAll(Pageable pageable);
	
	Cliente findById(Long id);
	
	Cliente save(Cliente cliente);

	void delete(Long id);
}
