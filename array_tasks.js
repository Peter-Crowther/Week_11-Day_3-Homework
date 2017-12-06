var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
			arr.splice(index, 0, itemToAdd);
			return arr;
	},

	square: function (arr) {
		let newArr = [];
		for(item of arr){
			result = item * item
			newArr.push(result);
		}
		return newArr;
	},

	sum: function (arr) {
		total = 0
		for(item of arr){
			total += item;
		}
		return total;
	},

	findDuplicates: function (arr) {
		let result = [];
		arr.forEach(function(element, index) {
		if (arr.indexOf(element, index + 1) > -1) {
		if (result.indexOf(element) === -1) {
		result.push(element);
		      }
		    }
		  });
		return result;
	},

	removeAndClone: function (arr, valueToRemove) {

	},

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
