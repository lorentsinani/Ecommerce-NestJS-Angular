CREATE TYPE UserType AS ENUM ('customer', 'employee', 'admin');

CREATE TABLE users
(
    id SERIAL PRIMARY KEY, 
    user_type UserType NOT NULL,
    first_name VARCHAR(50) NOT NULL, 
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL, 
    password VARCHAR(255) NOT NULL, 
    country VARCHAR(50) NOT NULL, 
    city VARCHAR(50) NOT NULL,
    birthdate DATE NOT NULL,
    gender CHAR(1) NOT NULL, 
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE employees 
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL UNIQUE,
    hire_date DATE NOT NULL,
    job_title VARCHAR(50) NOT NULL,
    address VARCHAR(100),
    photo_url VARCHAR(255),
    salary DECIMAL(10,2) CHECK (salary > 250),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TYPE PermissionLevel AS ENUM (
    'basic',
    'administrative',
    'superuser'
);

CREATE TABLE admins
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL UNIQUE,
    permission_level PermissionLevel NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);



CREATE TABLE order_status
(
    id serial PRIMARY KEY,
    status ENUM ('pending', 'shipped', 'delivered', 'cancelled') NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);



CREATE TABLE employees
(
    id     SERIAL PRIMARY KEY,
    first_name      VARCHAR(50) NOT NULL,
    last_name       VARCHAR(50) NOT NULL,
    username        VARCHAR(50) UNIQUE,
    email           VARCHAR(100) UNIQUE,
    hashed_password   VARCHAR(255) NOT NULL,
    birthdate       DATE NOT NULL,
    hire_date       DATE NOT NULL,
    job_title       VARCHAR(50) NOT NULL,
    address         VARCHAR(100) NOT NULL,
    city            VARCHAR(50) NOT NULL,
    country         VARCHAR(50) NOT NULL,
    phone_number    VARCHAR(20) NOT NULL,
    photo_url       VARCHAR(255),
    salary          DECIMAL(10,2) NOT NULL CHECK (salary > 0),
    created_at         TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMP NOT NULL DEFAULT NOW()
);




INSERT INTO employees (first_name, last_name, username, email, hashed_password, birthdate, hire_date, job_title, address, city, country, phone_number, photo_url, salary)
VALUES
    ('John', 'Doe', 'Johnd', 'johndoe@example.com', '$2y$12$6N5j6ca5U6VQ0M8Wd7AHi.qHlRME.eUVav.EkkszD3qAPujwnjIb6', '1985-02-15', '2015-07-01', 'Sales Manager', '123 Main St', 'Anytown', 'USA', '555-123-4567', 'https://example.com/photos/johndoe.jpg', 75000.00),
    ('Jane', 'Smith', 'Janes', 'janesmith@example.com', '$2y$12$6N5j6ca5U6VQ0M8Wd7AHi.qHlRME.eUVav.EkkszD3qAPujwnjIb6', '1990-06-10', '2017-02-15', 'Marketing Coordinator', '456 Elm St', 'Anycity', 'Canada', '555-555-1234', NULL, 50000.00),
    ('Mark', 'Johnson', 'Markj', 'markjohnson@example.com', '$2y$12$6N5j6ca5U6VQ0M8Wd7AHi.qHlRME.eUVav.EkkszD3qAPujwnjIb6', '1982-09-21', '2008-03-01', 'Software Engineer', '789 Oak St', 'Anystate', 'USA', '555-789-1234', 'https://example.com/photos/markjohnson.jpg', 100000.00),
    ('Sarah', 'Lee', 'Sarahl', 'sarahlee@example.com', '$2y$12$6N5j6ca5U6VQ0M8Wd7AHi.qHlRME.eUVav.EkkszD3qAPujwnjIb6', '1995-12-05', '2020-01-01', 'Customer Support Representative', '1010 Pine St', 'Anycity', 'USA', '555-333-4444', NULL, 40000.00),
    ('David', 'Nguyen', 'Davidn', 'davidnguyen@example.com', '$2y$12$6N5j6ca5U6VQ0M8Wd7AHi.qHlRME.eUVav.EkkszD3qAPujwnjIb6', '1998-03-28', '2021-02-01', 'Intern', '2468 Maple St', 'Anystate', 'Canada', '555-987-6543', NULL, 25000.00);



CREATE TABLE suppliers
(
    id    SERIAL PRIMARY KEY,
    company_name   VARCHAR(100) NOT NULL,
    contact_name   VARCHAR(100) NOT NULL,
    contact_title  VARCHAR(50),
    address        VARCHAR(100) NOT NULL,
    city           VARCHAR(50) NOT NULL,
    region         VARCHAR(50),
    postal_code    VARCHAR(20) NOT NULL,
    country        VARCHAR(50) NOT NULL,
    phone_number   VARCHAR(20) NOT NULL,
    fax_number     VARCHAR(20),
    email          VARCHAR(100) UNIQUE,
    created_at         TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO suppliers (company_name, contact_name, contact_title, address, city, region, postal_code, country, phone_number, fax_number, email) VALUES
('ABC Corporation', 'John Smith', 'Sales Manager', '123 Main St', 'Anytown', 'NY', '12345', 'USA', '555-123-4567', '555-987-6543', 'john@abccorp.com'),
('XYZ Enterprises', 'Jane Doe', 'Purchasing Manager', '456 Oak Ave', 'Smallville', 'CA', '67890', 'USA', '555-555-1212', '555-555-1213', 'jane@xyzent.com'),
('Acme Products', 'Bob Johnson', 'CEO', '789 Elm St', 'Bigtown', 'TX', '54321', 'USA', '555-555-5555', NULL, 'bob@acmeprod.com'),
('Global Trading Co.', 'Maria Rodriguez', 'Marketing Director', '321 Maple Rd', 'Midtown', 'FL', '09876', 'USA', '555-555-9876', '555-555-1213', 'maria@globaltradingco.com'),
('Gizmos R Us', 'Bill Thompson', 'VP of Operations', '987 Cherry St', 'Downtown', 'GA', '13579', 'USA', '555-555-5555', NULL, 'bill@gizmosrus.com');


CREATE TABLE category
(
    id        SERIAL PRIMARY KEY,
    category_name      VARCHAR(100) NOT NULL,
    category_desc      TEXT,
    category_image_url VARCHAR(255),
    parent_category_id INTEGER,
    created_at         TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMP NOT NULL DEFAULT NOW()
);




INSERT INTO category (category_name, category_desc, category_image_url, parent_category_id)
VALUES
    ('Electronics', 'Electronic devices and components', 'https://example.com/electronics.png', NULL),
    ('Clothing', 'Apparel and accessories', 'https://example.com/clothing.png', NULL),
    ('Books', 'Printed and digital books', 'https://example.com/books.png', NULL),
    ('Home & Garden', 'Furniture and home decor', 'https://example.com/home-garden.png', NULL),
    ('Toys & Games', 'Games and toys for all ages', 'https://example.com/toys-games.png', NULL);


CREATE TABLE products
(
    id          SERIAL PRIMARY KEY,
    product_name        VARCHAR(255) NOT NULL,
    product_code        VARCHAR(10) UNIQUE,
    supplier_id         INTEGER REFERENCES suppliers(id) ON DELETE CASCADE,
    category_id         INTEGER REFERENCES category(id) ON DELETE SET NULL,
    unit_price          DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    units_in_stock      INTEGER NOT NULL DEFAULT 0,
    units_on_order      INTEGER NOT NULL DEFAULT 0,
    reorder_level       INTEGER,
    discontinued        BOOLEAN NOT NULL DEFAULT false,
    discontinued_date   DATE,
    created_at          TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT positive_unit_price CHECK (unit_price >= 0),
    CONSTRAINT positive_units_in_stock CHECK (units_in_stock >= 0),
    CONSTRAINT positive_units_on_order CHECK (units_on_order >= 0)
);


INSERT INTO products (product_name, product_code, supplier_id, category_id, unit_price, units_in_stock, units_on_order, reorder_level, discontinued, created_at, updated_at)
VALUES ('Product A', 'A001', 1, 1, 10.99, 100, 50, 20, false, NOW(), NOW()),
       ('Product B', 'B002', 2, 2, 20.99, 50, 20, 10, false, NOW(), NOW()),
       ('Product C', 'C003', 1, 1, 15.99, 200, 100, 50, false, NOW(), NOW()),
       ('Product D', 'D004', 3, 3, 5.99, 300, 150, 75, false, NOW(), NOW()),
       ('Product E', 'E005', 2, 2, 12.99, 75, 30, 15, false, NOW(), NOW());


CREATE TABLE delivery_method
(
    id   SERIAL PRIMARY KEY,
    delivery_method_name VARCHAR(50) NOT NULL,
    phone_number         VARCHAR(50) NOT NULL,
    delivery_time        INTERVAL NOT NULL,
    created_at           TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at           TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO delivery_method (delivery_method_name, phone_number, delivery_time)
VALUES
  ('Express', '555-1234', '2 hours'),
  ('Standard', '555-5678', '1 day'),
  ('International', '555-9012', '5 days'),
  ('Overnight', '555-3456', 'overnight');





INSERT INTO customers (first_name, last_name, email, hashed_password, phone, address_line1, city, state, postal_code, country)
VALUES
    ('John', 'Doe', 'johndoe@example.com', '$2y$12$6N5j6ca5U6VQ0M8Wd7AHi.qHlRME.eUVav.EkkszD3qAPujwnjIb6', '123-456-7890', '123 Main St', 'Los Angeles', 'CA', '90001', 'USA'),
    ('Jane', 'Smith', 'janesmith@example.com', '$2y$12$6N5j6ca5U6VQ0M8Wd7AHi.qHlRME.eUVav.EkkszD3qAPujwnjIb6', '456-789-0123', '456 Oak Ave', 'San Francisco', 'CA', '94102', 'USA'),
    ('Bob', 'Johnson', 'bobjohnson@example.com', '$2y$12$6N5j6ca5U6VQ0M8Wd7AHi.qHlRME.eUVav.EkkszD3qAPujwnjIb6', '789-012-3456', '789 Elm St', 'New York', 'NY', '10001', 'USA');


CREATE TABLE address
(
    id           SERIAL PRIMARY KEY,
    address_line1        VARCHAR(255) NOT NULL,
    address_line2        VARCHAR(255),
    city                 VARCHAR(100),
    state                VARCHAR(50),
    postal_code          VARCHAR(15),
    country              VARCHAR(100),
    email                VARCHAR(100),
    phone                VARCHAR(20),
    first_name           VARCHAR(50) NOT NULL,
    last_name            VARCHAR(50) NOT NULL,
    created_at           TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at           TIMESTAMP NOT NULL DEFAULT NOW()
);
INSERT INTO address (address_line1, address_line2, city, state, postal_code, country, email, phone, first_name, last_name)
VALUES
    ('123 Main St', 'Apt 2', 'Anytown', 'CA', '12345', 'USA', 'john@example.com', '555-1234', 'John', 'Doe'),
    ('456 Oak Ave', NULL, 'Smallville', 'NY', '54321', 'USA', 'jane@example.com', '555-5678', 'Jane', 'Smith'),
    ('789 Elm St', NULL, 'Big City', 'TX', '98765', 'USA', 'sam@example.com', '555-2468', 'Sam', 'Johnson'),
    ('321 Maple Ln', 'Unit 10', 'Somewhere', 'FL', '24680', 'USA', 'kate@example.com', '555-3690', 'Kate', 'Lee');


CREATE TABLE order_discount
(
    id              SERIAL PRIMARY KEY,
    order_id        INTEGER,
    amount          NUMERIC(10, 2),
    description     VARCHAR(255),
    percentage      NUMERIC(5, 2),
    vat_amount      NUMERIC(10, 2),
    amount_with_vat NUMERIC(10, 2) GENERATED ALWAYS AS (amount + vat_amount) STORED,
    created_at      TIMESTAMP DEFAULT NOW(),
    updated_at      TIMESTAMP DEFAULT NOW()
);

INSERT INTO order_discount (order_id, amount, description, percentage, vat_amount)
VALUES
    (1, 50.00, 'Discount 1', 10.00, 5.00),
    (2, 20.00, 'Discount 2', 5.00, 1.00),
    (3, 75.00, 'Discount 3', 15.00, 6.00),
    (4, 30.00, 'Discount 4', 7.50, 2.00),
    (5, 100.00, 'Discount 5', 20.00, 10.00);



CREATE TABLE currency
(
    id              SERIAL PRIMARY KEY,
    code            CHAR(3) NOT NULL,
    exchange_rate   NUMERIC(10, 6) NOT NULL,
    is_base         BOOLEAN NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMP DEFAULT NOW(),
    updated_at      TIMESTAMP DEFAULT NOW()
);

INSERT INTO currency (code, exchange_rate, is_base)
VALUES
    ('USD', 1.000000, FALSE),
    ('EUR', 1.128779, TRUE),
    ('JPY', 0.009140, FALSE),
    ('GBP', 1.378625, FALSE);


CREATE TABLE payment_info (
    id                  SERIAL PRIMARY KEY,
    amount              NUMERIC,
    billing_address_id  INTEGER REFERENCES address,
    order_id            INTEGER,
    payment_date        TIMESTAMP,
    transaction_number  VARCHAR(255),
    vat_amount          NUMERIC,
    vat_percentage      NUMERIC,
    external_message    TEXT,
    created_at          TIMESTAMP DEFAULT NOW(),
    updated_at          TIMESTAMP DEFAULT NOW()
);

INSERT INTO payment_info (amount, billing_address_id, order_id, payment_date, transaction_number, vat_amount, vat_percentage)
VALUES
    (100.50, 1, 1, '2023-03-23 10:30:00', '12345', 10.05, 10),
    (50.75, 2, 2, '2023-03-24 15:45:00', '67890', 5.08, 10),
    (75.20, 1, 3, '2023-03-25 12:15:00', '24680', 7.52, 10),
    (120.00, 3, 4, '2023-03-26 18:00:00', '13579', 12.00, 10);

CREATE TABLE additional_payment_info
(
    id                   SERIAL PRIMARY KEY,
    last_updated_at      TIMESTAMP DEFAULT NOW(),
    payment_info_id      INTEGER REFERENCES payment_info(id) ON DELETE CASCADE,
    additional_notes     TEXT,
    is_confirmed         BOOLEAN NOT NULL DEFAULT FALSE,
    confirmed_by         INTEGER REFERENCES employees(id),
    confirmed_at         TIMESTAMP
);


CREATE TABLE deliveries
(
    id                       SERIAL PRIMARY KEY,
    delivery_date            DATE,
    delivery_comments        VARCHAR(255),
    delivery_address_id      INTEGER REFERENCES address(id),
    delivery_cost            NUMERIC,
    delivery_method_id       INTEGER REFERENCES delivery_method(id),
    delivery_status_id       CHAR REFERENCES order_status(id),
    delivery_order_id        INTEGER,
    promised_delivery_date   DATE,
    created_at               TIMESTAMP DEFAULT NOW(),
    updated_at               TIMESTAMP DEFAULT NOW()
);


CREATE TABLE orders
(
    id                      SERIAL PRIMARY KEY,
    order_comments          VARCHAR(255),
    product_id              INTEGER REFERENCES products(id),
    currency_id             INTEGER REFERENCES currency(id),
    customer_id             INTEGER REFERENCES customers(id),
    employee_id             INTEGER REFERENCES employees(id),
    last_updated_at         TIMESTAMP DEFAULT NOW(),
    order_date              TIMESTAMP,
    order_status            CHAR REFERENCES order_status(id),
    total                   NUMERIC,
    total_delivery_cost     NUMERIC,
    total_delivery_cost_vat NUMERIC,
    total_discount          NUMERIC,
    grand_total             NUMERIC
);


CREATE TABLE order_history
(
    id                      SERIAL PRIMARY KEY,
    order_comments          VARCHAR(255),
    product_id              INTEGER REFERENCES products(id),
    currency_id             INTEGER REFERENCES currency(id),
    customer_id             INTEGER REFERENCES customers(id),
    employee_id             INTEGER REFERENCES employees(id),
    last_updated_date       TIMESTAMP DEFAULT NOW(),
    order_date              TIMESTAMP,
    order_status            CHAR REFERENCES order_status(id),
    total                   NUMERIC,
    total_delivery_cost     NUMERIC,
    total_delivery_cost_vat NUMERIC,
    total_discount          NUMERIC,
    grand_total             NUMERIC
);



CREATE TABLE reviews
(
    id              SERIAL PRIMARY KEY,
    product_id      INTEGER REFERENCES products(id),
    customer_id     INTEGER REFERENCES customers(id),
    rating          INTEGER CHECK (rating >= 1 AND rating <= 5),
    review_text     TEXT,
    review_date     TIMESTAMP DEFAULT NOW()
);


CREATE TABLE wishlists (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

