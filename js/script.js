$(document).ready(function() {
	getData();
});


function getData() {	
	
	$.getJSON("js/columbia.json", function(schoolsData) {
		//Callback runs after the data is loaded.
		loopThroughData(schoolsData);
	});
}


function loopThroughData(s) {
	
	for (i=0; i<s.length; i++) {

    var schoolName = s[i]["SCHOOL_NAME"];
    var year = s[i]["YEAR"];
    var gradPct = s[i]["GRADUATES_PCT"];
    var grads = s[i]["GRADUATES"];

		// if (gradPct < 60 && gradPct > 0) {
		// 	//...Do this.
		// 	console.log(year, schoolName, gradPct);
		// }

		//var barWidth = gradPct * 10;
        var barWidth = grads * 1.5;

		//if (schoolName === "FREDERICK DOUGLASS HIGH") {
        if (schoolName === "COLUMBIA-HICKMAN HIGH") {
            
			$(".chart").append(
                
             "<p>"+year+": "+grads+" graduates"+"</p>"+
				"<div class='bar' style='width: "+barWidth+"px'></div>" +  "<br>"
			);
            

		}


	}

}



