/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var count = 0;
  for (n=1; n<=preferences.length; n++) {
  	k1 = preferences[n-1];
  	k2 = preferences[k1-1];
  	k3 = preferences[k2-1];
  	if ((k3 == n) && (k1!==k2) && (k2!==k3) && (k3!==k1)) {
  		count++;
  	} 
  }
  return count/3;
};
