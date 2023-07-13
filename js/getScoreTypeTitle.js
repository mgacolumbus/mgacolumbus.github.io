function getScoreTypeTitle(TypeID) {
	switch(TypeID) {
		case "-10":		return "Pars or Better";
		case "-9":		return "Bogeys or Better";
		case "-2":		return "Eagles";
		case "-1":		return "Birdies";
		case "0":		return "Pars";
		case "1":		return "Bogeys";
		case "2":		return "Double Bogeys";
		case "3":		return "Triple Bogeys";
		case "4":		return "Worse Bogeys";
		case "10":		return "Double Bogeys or Worse";
		
		default:		return "Unknown";
	}
}