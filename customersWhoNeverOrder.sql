-- Suppose that a website contains two tables, the Customers table and the Orders table. Write a SQL query to find all customers who never order anything.

-- Table: Customers.

-- +----+-------+
-- | Id | Name  |
-- +----+-------+
-- | 1  | Joe   |
-- | 2  | Henry |
-- | 3  | Sam   |
-- | 4  | Max   |
-- +----+-------+
-- Table: Orders.

-- +----+------------+
-- | Id | CustomerId |
-- +----+------------+
-- | 1  | 3          |
-- | 2  | 1          |
-- +----+------------+
-- Using the above tables as example, return the following:

-- +-----------+
-- | Customers |
-- +-----------+
-- | Henry     |
-- | Max       |
-- +-----------+
SELECT Name AS Customers FROM Customers WHERE Customers.Id NOT IN (SELECT CustomerId FROM Orders)

SELECT Name AS Customers FROM Customers WHERE NOT EXISTS (SELECT * FROM Orders WHERE Customers.Id = Orders.CustomerId)

SELECT Name AS Customers FROM Customers LEFT JOIN Orders ON Orders.CustomerId = Customers.Id WHERE Orders.CustomerId IS NULL