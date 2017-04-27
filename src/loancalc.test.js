import { calculateMonthlyPayment, calculateInterestOnBalance } from './loancalc';

describe('calculateMonthlyPayment', () => {
	test('should return payment that is about 83.33', () => {
		const payment = calculateMonthlyPayment(1000, 0, 12);
		expect(payment).toBeCloseTo(83.33);
	});
	test('should return payment that is about 85.61', () => {
		const payment = calculateMonthlyPayment(1000, 5, 12);
		expect(payment).toBeCloseTo(85.61);
	});

	test('should 0', () => {
		const payment = calculateMonthlyPayment(0, 5, 12);
		expect(payment).toBeCloseTo(0);
	});

	test('should 0', () => {
		const payment = calculateMonthlyPayment(1000, 5, 0);
		expect(payment).toBeCloseTo(0);
	});
});

describe('calculateInterestOnBalance', () => {
	test('interest on balance 100 with rate 6%', () => {
		const iob = calculateInterestOnBalance(100, 6);
		expect(iob).toBe(0.5);
	});

	test('interest on balance 100 with rate 0%', () => {
		const iob = calculateInterestOnBalance(100, 0);
		expect(iob).toBe(0);
	});
});
