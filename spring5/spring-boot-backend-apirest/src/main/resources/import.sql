/* Populate tabla Regiones*/
INSERT INTO regiones (id, nombre) VALUES (1, 'Sudamérica');
INSERT INTO regiones (id, nombre) VALUES (2, 'Centroamérica');
INSERT INTO regiones (id, nombre) VALUES (3, 'Norteamérica');
INSERT INTO regiones (id, nombre) VALUES (4, 'Europa');
INSERT INTO regiones (id, nombre) VALUES (5, 'Asia');
INSERT INTO regiones (id, nombre) VALUES (6, 'África');
INSERT INTO regiones (id, nombre) VALUES (7, 'Oceanía');
INSERT INTO regiones (id, nombre) VALUES (8, 'Antártica');

/* Populate tabla clientes*/
insert into clientes (region_id, nombre, apellido, email, create_at) values (1, 'Andrés', 'Gusmán', 'profesor@bolsadeideas.com', '2018-01-01');
insert into clientes (region_id, nombre, apellido, email, create_at) values (2, 'Mr. John', 'Doe', 'john.doe@gmail.com', '2018-01-02');
insert into clientes (region_id, nombre, apellido, email, create_at) values (4, 'Linux', 'Torvalds', 'linux.torvals@gmail.com', '2018-01-03');
insert into clientes (region_id, nombre, apellido, email, create_at) values (4, 'Rasmus', 'Lerdorff', 'rasmus.lerdorff@gmail.com', '2018-01-04');
insert into clientes (region_id, nombre, apellido, email, create_at) values (4, 'Erich', 'Gamma', 'erich.gamma@gmail.com', '2018-02-01');
insert into clientes (region_id, nombre, apellido, email, create_at) values (3, 'Richard', 'Helm', 'richard.helm@gmail.com', '2018-02-10');
insert into clientes (region_id, nombre, apellido, email, create_at) values (3, 'Ralf', 'Johnson', 'ralf.johson@gmail.com', '2018-02-18');
insert into clientes (region_id, nombre, apellido, email, create_at) values (3, 'John', 'Vlissides', 'john.vlissides@gmail.com', '2018-02-28');
insert into clientes (region_id, nombre, apellido, email, create_at) values (3, 'James', 'Gosling', 'james.gosling@gmail.com', '2018-03-03');
insert into clientes (region_id, nombre, apellido, email, create_at) values (5, 'Magma', 'Lee', 'magma.lee@gmail.com', '2018-03-04');
insert into clientes (region_id, nombre, apellido, email, create_at) values (6, 'Tornado', 'Roe', 'tornado.roe@gmail.com', '2018-03-05');
insert into clientes (region_id, nombre, apellido, email, create_at) values (7, 'Jade', 'Doe', 'jade.doe@gmail.com', '2018-03-06');

/* Creando algunos usuarios con sus roles */
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('andres','$2a$10$DUmbsiLSUhLLGtvJ4pBkkeweJi8EFBITMvANvRI0.dqtoiJ5tBEIu',1, 'Andrés', 'Guzman', 'profesor@bolsadeideas.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('admin','$2a$10$.r3tsr0Xqp00tC7lR4jDV.aek9O8INzdrWSChytHqHFFqCBqFcgdy',1, 'John', 'Doe', 'john.doe@bolsadeideas.com');

INSERT INTO roles (nombre) VALUES ('ROLE_USER');
INSERT INTO roles (nombre) VALUES ('ROLE_ADMIN');

INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (1,1);
INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (2,2);
INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (2,1);

/* Populate tabla productos */
INSERT INTO productos (nombre, precio, create_at) VALUES('Panasonic Pantalla LCD', 259990, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES('Sony Camara digital DSC-W320B', 123490, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES('Apple iPod shuffle', 1499990, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES('Sony Notebook Z110', 37990, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES('Hewlett Packard Multifuncional F2280', 69990, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES('Bianchi Bicicleta Aro 26', 69990, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES('Mica Comoda 5 Cajones', 299990, NOW());

/* Creamos algunas facturas */
INSERT INTO facturas (descripcion, observacion, cliente_id, create_at) VALUES('Factura equipos de oficina', null, 1, NOW());

INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES(1, 1, 1);
INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES(2, 1, 4);
INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES(1, 1, 5);
INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES(1, 1, 7);

INSERT INTO facturas (descripcion, observacion, cliente_id, create_at) VALUES('Factura Bicicleta', 'Alguna nota importante!', 1, NOW());
INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES(3, 2, 6);
