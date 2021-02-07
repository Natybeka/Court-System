//Declaring UI Elements for data population
const caseCollection = document.querySelector(".case-collection");

//Objects Design

// User Object has a name (Early design may be subject to change)
function User(userName, accessType, password){
    this.userName = userName;
    this.accessType = accessType;
    this.password = password; 
}

/*  
    Case Object design must have ID, status, plaintiff, defendant
    and courtLevel (level at which the case is currently being heard)
    finally a method for changing courtLevel and status
*/
function Case(caseID, status, plaintiff, defendant, judge, courtLevel, nextCourtDate) {
    this.caseID = caseID;
    this.status = status;
    this.plaintiff = plaintiff;
    this.defendant = defendant;
    this.courtLevel = courtLevel;
    this.judge = judge;
    this.nextCourtDate = nextCourtDate;
    
    this.changeStatus = function(newStatus) {
        if (newStatus != this.status) {
            this.status = newStatus;
        }    
    }
    
    this.changeCourtLevel = function(newCourtLevel) {
        if (this.courtLevel != newCourtLevel) {
            this.courtLevel = new courtLevel;
        }
    }

    this.changeJudge = function(newJudge) {
        this.judge = newJudge;
    }
}

// Request Objects to store the 
function Request(requestID, requestType, handled, userRequested) {
    this.requestID = requestID;
    this.requestType = requestType;
    this.requested = userRequested;
    this.handled = handled;
}



//Global Variable to hold the database
let Court;
//Opening database upon document loading
document.addEventListener('DOMContentLoaded', () => {
    let db = indexedDB.open("CourtSystem", 1);

    // Initialize the database
    db.onupgradeneeded = function(e){
        db = e.target.result;
        //Creating the Object store and the necessary indices for the db 
        let cases = db.createObjectStore("Cases");
        cases.createIndex('by_caseno', 'caseID', {unique:true});
        cases.createIndex('by_judge', 'judge');
        cases.createIndex('by_status', 'status');
        cases.createIndex('by_nextDate', 'nextCourtDate');
        cases.createIndex('by_level', 'courtLevel');

        let users = db.createObjectStore('Users');
        users.createIndex('by_password', 'password');
        users.createIndex('by_access', 'accessType');

        let userRequests = db.createObjectStore('Request');
        userRequests.createIndex('by_requestID', 'requestID');
        userRequests.createIndex('by_status', 'handled'); 
    };

    //Assign to global variable if database already exists
    db.onsuccess = function() {
        Court = db.result; 
    };

    db.onerror = function() {
        console.log("Error opening database");
    }

});