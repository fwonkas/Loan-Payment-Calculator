export const calculateMonthlyPayment = (principal, rate, months) => {
	const interest = calculateInterest(rate);

	if (principal <= 0 || months <= 0) {
		return 0;
	}

	return principal * ((rate === 0) ? (1 / months) : (interest / (1 - Math.pow((1 + interest), -(months)))));
};

export const calculateInterestOnBalance = (balance, rate) => balance * calculateInterest(rate);

const calculateInterest = rate => rate / 1200;
