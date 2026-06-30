-- Exercise 1 : Control Structures

-- Scenario 1 : Apply 1% Discount to Loan Interest Rates

DECLARE
    CURSOR c_customers IS
        SELECT CustomerID, Age
        FROM Customers;
BEGIN
    FOR cust IN c_customers LOOP
        IF cust.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust.CustomerID;
        END IF;
    END LOOP;

    COMMIT;
END;
/



-- Scenario 2 : Set VIP Status

DECLARE
    CURSOR c_customers IS
        SELECT CustomerID, Balance
        FROM Customers;
BEGIN
    FOR cust IN c_customers LOOP
        IF cust.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust.CustomerID;
        END IF;
    END LOOP;

    COMMIT;
END;
/



-- Scenario 3 : Loan Due Reminder

DECLARE
    CURSOR c_loans IS
        SELECT CustomerID, LoanID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR loan IN c_loans LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer '
            || loan.CustomerID
            || ' has Loan '
            || loan.LoanID
            || ' due on '
            || loan.DueDate
        );
    END LOOP;
END;
/