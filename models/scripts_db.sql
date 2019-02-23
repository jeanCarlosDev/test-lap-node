CREATE TABLE public.employee
(	
	id SERIAL NOT NULL,
    first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
    participation integer NOT NULL,
    PRIMARY KEY (id)
)