function Letter () {
	this.letter;
	this.character;
	this.show = false;
	this.displayLetter = function(){
		if (this.show == false){
			return("_");
		};
	}
};

module.exports = Letter;