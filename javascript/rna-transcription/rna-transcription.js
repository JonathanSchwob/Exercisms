var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function (a) {
	var newRNA = '';

	 for (var i = 0; i < a.length; i ++) {
		if (a[i] === 'G') {
			newRNA += 'C';
		} else if (a[i] === 'C') {
			newRNA += 'G';
		} else if (a[i] === 'T') {
			newRNA += 'A';
		} else if (a[i] === 'A') {
			newRNA += 'U'
		}
	};
	return newRNA;
};

module.exports = DnaTranscriber;
