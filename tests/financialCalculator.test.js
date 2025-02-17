import { describe, it, expect } from 'vitest';
import { execFile } from 'child_process';
import { promisify } from 'util';

const execFilePromise = promisify(execFile);

describe('financialCalculator CLI', function () {
  it('should correctly compute metrics for a complex set of transactions', async function () {
    // This test uses a mix of valid numbers, negative values, and non-numeric inputs.
    // Expected valid transactions (after filtering): 50, 20, -10, 30, -40, 10, 0, 100, -5, 15
    // totalTransactions: 10
    // totalSum: 50 + 20 + (-10) + 30 + (-40) + 10 + 0 + 100 + (-5) + 15 = 170
    // averageTransaction: 170 / 10 = 17
    // totalIncome: 50 + 20 + 30 + 10 + 100 + 15 = 225
    // totalExpenses: (-10) + (-40) + (-5) = -55
    // netBalance: 225 + (-55) = 170
    const args = ['50', '20', '-10', 'abc', '30', '-40', 'xyz', '10', '0', '100', '-5', '15'];
    const { stdout } = await execFilePromise('node', ['./financialCalculator.js', ...args]);

    // Check that the output includes the labels and expected values.
    expect(stdout).toContain("Total Transactions");
    expect(stdout).toContain("Total Sum");
    expect(stdout).toContain("Average Transaction");
    expect(stdout).toContain("Total Income");
    expect(stdout).toContain("Total Expenses");
    expect(stdout).toContain("Net Balance");

    // Validate computed numeric values
    expect(stdout).toContain("10");    // total transactions
    expect(stdout).toContain("170");   // total sum and net balance
    expect(stdout).toContain("17");    // average transaction
    expect(stdout).toContain("225");   // total income
    expect(stdout).toContain("-55");   // total expenses
  });

  it('should output usage message when no valid transactions are provided', async function () {
    try {
      await execFilePromise('node', ['./financialCalculator.js', 'foo', 'bar']);
      throw new Error("Expected an error for invalid input, but none was thrown.");
    } catch (error) {
      expect(error.stderr).toContain("Usage: node financialCalculator.js");
    }
  });

  it('should correctly compute metrics for a single transaction', async function () {
    // For a single transaction input of "100":
    // totalTransactions: 1, totalSum: 100, averageTransaction: 100,
    // totalIncome: 100, totalExpenses: 0, netBalance: 100.
    const { stdout } = await execFilePromise('node', ['./financialCalculator.js', '100']);

    expect(stdout).toContain("Total Transactions");
    expect(stdout).toContain("Total Sum");
    expect(stdout).toContain("Average Transaction");
    expect(stdout).toContain("Total Income");
    expect(stdout).toContain("Total Expenses");
    expect(stdout).toContain("Net Balance");

    expect(stdout).toContain("1");     // total transactions
    expect(stdout).toContain("100");   // total sum, average, total income, net balance
    expect(stdout).toContain("0");     // total expenses
  });
});
