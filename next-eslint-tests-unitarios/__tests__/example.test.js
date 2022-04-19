/* eslint-disable */
describe("Testing numbers", ()=>{

	test('null', () => {
		const n = null;
		expect(n).toBeNull();
		expect(n).toBeDefined();
		expect(n).not.toBeUndefined();
		expect(n).not.toBeTruthy();
		expect(n).toBeFalsy();
	});
	
	test('two plus two is four', () => {
		expect(2 + 2).not.toEqual(3)
	})
	
	test('adding positive numbers is not zero', () => {
		for (let a = 1; a < 10; a++) {
		  for (let b = 1; b < 10; b++) {
			expect(a + b).not.toBe(0);
		  }
		}
	});
	  
	test('zero', () => {
		const z = 0;
		expect(z).not.toBeNull();
		expect(z).toBeDefined();
		expect(z).not.toBeUndefined();
		expect(z).not.toBeTruthy();
		expect(z).toBeFalsy();
	});


})