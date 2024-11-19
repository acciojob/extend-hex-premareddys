const extendHex = (shortHex) => {
	let res='#';
		for(let i=0;i<shortHex.length;i++){
			if(shortHex[i]!='#'){
				res+=shortHex[i];
				res+=shortHex[i];
			}
		}
		return res;
  // write your code here
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
