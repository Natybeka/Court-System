//Declaring UI Elements for data population


//Objects Design
function User(userName, password){
    this.userName = userName;
    this.password = password;
}

function Case(caseID, status, plaintiff, defendant, courtLevel) {
    this.caseID = caseID;
    this.status = status;
    this.plaintiff = plaintiff;
    this.defendant = defendant;
    this.courtLevel = courtLevel;
    this.staffAttended = staffAttended;
    
    this.changeStatus = function(newStatus) {
        if (newStatus != this.status) {
            this.status = newStatus;
        }    
    }
    
    this.changeCourtLevel = function(newCourtLevel) {
        if (this.courtLevel != newCourtLevel) {
            
        }
    }

}