/**
 * @description - Check the give number is a valid company number or not
 * @param {string} companyNo - Company number value to be validate
 */
export function isValidCompanyNo(companyNo: string): boolean {
	try {
		if (companyNo) {
			const cNumber = companyNo.toString().replace(/\D/g, '');
			if (cNumber && cNumber.length == 9) {
				const checkDigit = cNumber[cNumber.length - 1];
				let total = 0;
				for (let i = 0; i < 8; i++) {
					if (i < 2) {
						total +=
							parseInt(cNumber[i]) *
							(3 - i);
					} else {
						total +=
							parseInt(cNumber[i]) *
							(9 - i);
					}
				}
				const remainder = total % 11;
				return 11 - remainder == parseInt(checkDigit);
			} else {
				return false;
			}
		} else {
			return false;
		}
	} catch (error) {
		return false;
	}
}
