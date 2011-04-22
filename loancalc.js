(function(global) {
	global.LOANCALC = {
		monthlyPayment: function(principal, rate, months) {
			var payment = 0,
				interest = rate / (12 * 100);

			if (principal > 0 && months > 0) {
				// Here's a pretty version of what we're doing here:
				//
				//                                   interest
				// payment = principal x --------------------------------
				//                        1 - ((1 + interest) ^ -months)
				//
				// found this rad formula here: http://www.hughchou.org/calc/formula.html
				if (rate != 0) {
					payment = principal * (interest / (1 - Math.pow((1 + interest), -(months))));
				} else {
					// In case they want to calculate a payment schedule with 0% interest
					payment = principal / months;
				}
			}
			return payment;
		},

		interestOnBalance: function(balance, rate) {
			// For calculating monthly interest.
			//
			// rate is a percentage.  For example, for a 6% interest rate, rate should be 6.
			// (that is, don't pass 0.06)
			return balance * (rate / (12 * 100));
		}
	};
}(this));
