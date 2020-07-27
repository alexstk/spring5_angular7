package com.bolsadeideas.springboot.backend.apirest.models.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.bolsadeideas.springboot.backend.apirest.models.entity.Producto;

public interface IProductoDao extends CrudRepository<Producto, Long>{
	
	@Query("select p from Producto p where p.nombre like %?1%")	// Principio o final, Ignora el case!!
	public List<Producto> findByNombre(String term);

	@Query("select p from Producto p where p.nombre like %?1")	// Final!! Ignora el case!!
	public List<Producto> findByNombreEnding(String term);
	
	@Query("select p from Producto p where p.nombre like ?1%")	// Comienzo!! Ignora el case!!
	public List<Producto> findByNombreStarting(String term);

	@Query("select p from Producto p where UPPER(p.nombre) like CONCAT('%', UPPER(?1), '%')")	// UPPER(CONCAT('%', ?1, '%'))
	public List<Producto> findByNombreIgnoreCaseLikeBeginFinal(String term);

	public List<Producto> findByNombreContainingIgnoreCase(String term);	// Principio o fin
	
	public List<Producto> findByNombreStartingWithIgnoreCase(String term);

}
