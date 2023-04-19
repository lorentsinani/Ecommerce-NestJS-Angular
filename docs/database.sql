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
    user_id INTEGER NOT NULL PRIMARY KEY,
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
    user_id INTEGER NOT NULL PRIMARY KEY,
    permission_level PermissionLevel NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);



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

CREATE TABLE category
(
    id        SERIAL PRIMARY KEY,
    category_name      VARCHAR(100) NOT NULL,
    category_desc      TEXT,
    category_image_url VARCHAR(255),
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


CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  product_code VARCHAR(50) UNIQUE NOT NULL,
  supplier_id INTEGER NOT NULL,
  category_id INTEGER NOT NULL,
  released_date DATE NOT NULL,
  price_with_vat DECIMAL(10, 2) NOT NULL,
  price_without_vat DECIMAL(10, 2) NOT NULL,
  vat DECIMAL(10, 2),
  availability_in_stock INTEGER NOT NULL,
  discount DECIMAL(5, 2),
  product_details_id INTEGER UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  CONSTRAINT fk_supplier_id FOREIGN KEY (supplier_id) REFERENCES supplier (id),
  CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES category (id),
  CONSTRAINT fk_product_details_id FOREIGN KEY (product_details_id) REFERENCES product_details (id)
);


CREATE TABLE product_details (
  id SERIAL PRIMARY KEY,
  origin VARCHAR(255),
  producer_id INTEGER NOT NULL REFERENCES producer(id),
  warranty VARCHAR(255),
  color VARCHAR(255),
  size VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);  

CREATE TABLE producer  ( 
    id serial primary key , 
    name varchar() , 
    country varchar() , 
    established_year Year, 
    contact_email: varchar(255), 
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
)





-- Newsletter subscribers

CREATE TABLE Newsletter (
    id SERIAL PRIMARY KEY,
    email varchar(100) NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)





-- Finished ^ 










-- Not finished



-- Product related 


CREATE TABLE product_images (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES product(id) ON DELETE CASCADE,
  image_url VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);


CREATE TABLE reviews
(
    id              SERIAL PRIMARY KEY,
    product_id      INTEGER REFERENCES products(id),
    customer_id     INTEGER DEFAULT -1, -- Use -1 as a default value for guest users
    guest_name      varchar(50) default null,
    rating          INTEGER CHECK (rating >= 1 AND rating <= 5),
    review_text     TEXT,
    review_date     TIMESTAMP DEFAULT NOW()
);



CREATE TABLE wishlists (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  UNIQUE (customer_id, product_id),
);








-- Order Related
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  order_code VARCHAR(10),
  customer_id INT NOT NULL,
  order_comment VARCHAR(255),
  currency_id INT,
  employee_id INT,
  order_status_id INT,
  order_status ENUM ('pending', 'shipped', 'delivered', 'cancelled') NOT NULL,
  address_id INTEGER NOT NULL REFERENCES address(id),
  order_date DATE,
  total_amount_with_vat DECIMAL(10, 2),
  total_amount_without_vat DECIMAL(10, 2),
  vat DECIMAL(10, 2),
  CONSTRAINT fk_order_status_id FOREIGN KEY (order_status_id) REFERENCES order_status(id),
  CONSTRAINT fk_currency_id FOREIGN KEY (currency_id) REFERENCES currency(id),
  CONSTRAINT fk_customer_id FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  CONSTRAINT fk_employee_id FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);


-- Order Items represent the specific product in a particular order
CREATE TABLE order_items (
  order_item_id SERIAL PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  price_with_vat DECIMAL(10, 2) NOT NULL,
  price_without_vat DECIMAL(10, 2) NOT NULL,
  vat DECIMAL(10, 2),
  total_amount DECIMAL(10, 2),
  CONSTRAINT fk_order_id FOREIGN KEY (order_id) REFERENCES orders(id),
  CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES products(product_id)
);


-- Orders status represent status of orders  
CREATE TABLE orders_status (
  id SERIAL PRIMARY KEY,
  status_name ENUM('Pending', 'Processing', 'Shipped', 'Delivered') NOT NULL,
  description VARCHAR(255) NOT NULL,
  UNIQUE(status_name)
);




-- Just the employees can se the deliveries table. 
-- The tables is created to show more additional information for the order  
CREATE TABLE deliveries (
    id SERIAL PRIMARY KEY,
    delivery_date DATE,
    delivery_comments VARCHAR(255),
    delivery_cost NUMERIC,
    delivery_method_id INTEGER REFERENCES delivery_method(id),
    delivery_status ENUM ('pending', 'in_transit', 'delivered', 'failed'), 
    delivery_order_id INTEGER,
    promised_delivery_date DATE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    CONSTRAINT fk_delivery_order_id FOREIGN KEY (delivery_order_id) REFERENCES orders(id)
);




CREATE TABLE delivery_methods
(
    id SERIAL PRIMARY KEY,
    delivery_method_name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    delivery_time INTERVAL NOT NULL,
    delivery_method ENUM ('pickup', 'courier', 'shipping') NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);








CREATE TABLE payments (
  payment_id SERIAL PRIMARY KEY,
  order_id INT NOT NULL,
  payment_amount DECIMAL(10, 2) NOT NULL,
  payment_method VARCHAR(255) NOT NULL,
  payment_status VARCHAR(255) NOT NULL,
  payment_date TIMESTAMP NOT NULL,
  CONSTRAINT fk_order_id FOREIGN KEY (order_id) REFERENCES orders(id)
);


-- Payment Information
CREATE TABLE payment_info (
    id SERIAL PRIMARY KEY,
    last_updated_at TIMESTAMP DEFAULT NOW(),
    payment_id INT NOT NULL,
    additional_notes TEXT,
    is_confirmed BOOLEAN NOT NULL DEFAULT FALSE,
    confirmed_by INTEGER,
    confirmed_at TIMESTAMP,
    CONSTRAINT fk_payment_id FOREIGN KEY (payment_id) REFERENCES payments(payment_id) ON DELETE CASCADE,
    CONSTRAINT fk_confirmed_by FOREIGN KEY (confirmed_by) REFERENCES employees(employee_id)
);
