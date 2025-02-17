# Requirements for the Financial Calculator CLI

## 1\. Command-Line Arguments

*   **Expected Input Format:**

    The CLI must be executed with a list of transaction amounts (in addition to the `node` command and the script name):

    node financialCalculator.js transaction1 transaction2 ...

    Each argument is processed; non-numeric arguments are allowed but must be ignored. Positive numbers represent income, and negative numbers represent expenses.

*   **No Valid Numbers Provided:**

    If, after ignoring non-numeric arguments, no valid numbers remain, the CLI must output an error message containing the word "Error" and exit with a non-zero exit code.


## 2\. Financial Calculations and Operations

*   **Total Transactions:** Count the total number of valid transaction inputs.
*   **Total Sum:** Compute the sum of all transaction amounts using the provided `addUpArrayElements` function.
*   **Average Transaction:** Calculate the average value of the transactions (total sum divided by total transactions).
*   **Total Income:** Sum only the positive transactions (income) using appropriate arithmetic operations.
*   **Total Expenses:** Sum only the negative transactions (expenses) using appropriate arithmetic operations.
*   **Net Balance:** Compute the net balance by adding total income and total expenses.

## 3\. Output Format and Exit Codes

*   **Valid Operation:**

    For valid inputs and successful computations, the CLI must display the computed financial metrics in a table format using `console.table()`. The table must include the labels: "Total Transactions", "Total Sum", "Average Transaction", "Total Income", "Total Expenses", and "Net Balance". The process must exit with code 0.

*   **Error Conditions:**

    If no valid transaction amounts are provided after ignoring non-numeric inputs, the CLI must output an error message containing "Usage: node financialCalculator.js" and exit with a non-zero exit code.


## 4\. Additional Considerations

*   **Handling Negative and Floating Point Numbers:** The CLI must correctly process negative numbers and floating point values.
*   **Test Coverage:** All tests in the provided test suite (`financialCalculator.test.js`) must pass. The tests use complex input—including a mix of positive numbers, negative numbers, and non-numeric values—to validate correct computation and proper error handling.
