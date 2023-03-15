function getRecord_CareerWins(pURL) {
	
	var arrURL = new Array();   arrURL = arguments[0];
	var arrData	= new Array();   arrData = getData_Participants();	
	var arrWorking = new Array();
	var arrReturnGolfers = new Array();
	var arrReturnWinCount = new Array();
	var arrUniqueGolfers = new Array();
	var vReturnIndex = 0;
	var vCounter = 0
	var vTempGolfer = "";
	var vMatchFound = 0;
	
	//Get Unique List of Golfers
	for (x = 0; x < arrData.length; x++) {
		
		if (arrData[x][4] == 1) {
			
			//Check to see if that golfer is unique
			for (y = 0; y < arrUniqueGolfers.length; y++) {
				
				if (arrData[x][2] == arrUniqueGolfers[y]) {
					
					vMatchFound = 1;
					
				}
				
			}
			
			if (vMatchFound == 0) {
				
				arrUniqueGolfers[vReturnIndex] = arrData[x][2]; //Golfer Name
				//add on alertbox text detailing each win
			
				vReturnIndex++;
				
			}
			
			vMatchFound = 0;
			
		}
		
	}
	
	vReturnIndex = 0;
	arrUniqueGolfers = arrUniqueGolfers.sort();
	
	for (y = 0; y < arrUniqueGolfers.length; y++) {
	
		for (x = 0; x < arrData.length; x++) {
			
			if (arrData[x][4] == 1 && arrData[x][2] == arrUniqueGolfers[y]) {
				
				vCounter++;
				
			}
			
		}
		
		arrReturnGolfers[vReturnIndex] = arrUniqueGolfers[y];
		arrReturnWinCount[vReturnIndex] = vCounter;
		
		vReturnIndex++;
		vCounter = 0;
		
	}
	
	return [arrReturnGolfers, arrReturnWinCount];
	
}