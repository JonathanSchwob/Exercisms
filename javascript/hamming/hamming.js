function Hamming() {
}

Hamming.prototype.compute = function(a, b) {
	var total = 0;

	if (a.length !== b.length) {
		throw new Error('DNA strands must be of equal length.');
	}

	for (var i = 0; i < a.length; i ++) {
		if (a[i] !== b[i]) {
			total ++;
		} else if (a === b) {
			
		}
	}
	return total;
};

module.exports = Hamming;