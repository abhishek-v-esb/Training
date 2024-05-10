create database service_center;
use service_center;


-- service center section

create table service_centers(
	id int primary key,
    phone varchar(15),
    email varchar(50),
    city varchar(30),
    state varchar(30),
    address varchar(50),
    pincode int,
    create_time datetime not null default current_timestamp,
    update_time datetime not null default current_timestamp on update current_timestamp
);

create table owners(
	id int primary key,
    sc_id int ,
    first_name varchar(30),
    last_name varchar(30),
    dob date,
    phone varchar(15),
    email varchar(50),
    address varchar(100),
    create_time datetime not null default current_timestamp,
    update_time datetime not null default current_timestamp on update current_timestamp,
    foreign key (sc_id) references service_centers(id)
);

create table staff(
	id int primary key,
    sc_id int,
    first_name varchar(30),
    last_name varchar(30),
    dob date,
    phone varchar(15),
    joining_date date,
    email varchar(50),
    address varchar(100),
    create_time datetime not null default current_timestamp,
    update_time datetime not null default current_timestamp on update current_timestamp,
    foreign key (sc_id) references service_centers(id)
);

-- customer section

create table customers(
	id int primary key,
    first_name varchar(30),
    last_name varchar(30),
    dob date,
    phone varchar(15),
    email varchar(50),
    address varchar(100),
    vehicle_id int,
    create_time datetime not null default current_timestamp,
    update_time datetime not null default current_timestamp on update current_timestamp
);

create table vehicles(
	id int primary key,
    cus_id int,
    num_plate int,
    model varchar(10),
    company varchar(15),
    type varchar(15),
    foreign key (cus_id) references customers(id),
    create_time datetime not null default current_timestamp,
    update_time datetime not null default current_timestamp on update current_timestamp
);

-- scheduling

create table services(
	id int primary key,
    service varchar(40),
    cost int
);

create table schedules(
	id int primary key,
    sc_id int,
    customer_id int,
    vehicle_id int,
    service_id int,
    slot_from datetime,
    slot_to datetime,
    service_date date,
	foreign key (sc_id) references service_centers(id),
	foreign key (customer_id) references customers(id),
	foreign key (vehicle_id) references vehicles(id),
    create_time datetime not null default current_timestamp,
    update_time datetime not null default current_timestamp on update current_timestamp
);

-- authorization

create table passwords(
	id int primary key,
    email varchar(100),
    role varchar(30),
    salt varchar(10),
    password varchar(200),
    create_time datetime not null default current_timestamp,
    update_time datetime not null default current_timestamp on update current_timestamp
);

create table activation(
	id int primary key,
    email varchar(100),
    role varchar(15),
    activation_code varchar(200),
    create_time datetime not null default current_timestamp,
    update_time datetime not null default current_timestamp on update current_timestamp
);

create table login_attempts(
	id int primary key,
    email varchar(100),
    roel varchar(15),
    status boolean,
    create_time datetime not null default current_timestamp
    

);