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
