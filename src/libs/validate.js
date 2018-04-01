
class Validate {

	static isNumber(value) {
		return !isNaN(parseFloat(value)) && isFinite(value);
	}

	static checkQty(value) {
		if(value < 0 || Validate.isNumber(value) === false) {
			return false;
		}
		return true;
	}
}

export default Validate;