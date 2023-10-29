import { isValidCompanyNo } from '../src';

test('Validate a valid company number correctly', () => {
	const result = isValidCompanyNo('993061875');
	expect(result).toBeTruthy();
});

test('Validate an invalid company number correctly', () => {
	const result = isValidCompanyNo('916796318');
	expect(result).toBeFalsy();
});
