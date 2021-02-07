//Declaring UI Elements for data population
const caseCollection = document.querySelector(".case-collection");

//Objects Design

// User Object has a name (Early design may be subject to change)
function User(userName){
    this.userName = userName; 
}

/*  
    Case Object design must have ID, status, plaintiff, defendant
    and courtLevel (level at which the case is currently being heard)
    finally a method for changing courtLevel and status
*/
function Case(caseID, status, plaintiff, defendant, judge, courtLevel) {
    this.caseID = caseID;
    this.status = status;
    this.plaintiff = plaintiff;
    this.defendant = defendant;
    this.courtLevel = courtLevel;
    this.judge = judge;
    
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






// let Court;
// //Opening database upon document loading
// document.addEventListener('DOMContentLoaded', () => {
//     let db = indexedDB.open("CourtSystem", 1);

//     // Initialize the database
//     db.onupgradeneeded = function(e){
//         db = e.target.result;
//         if (!db.objectStoreNames.contains("Cases")) {
//             db.createObjectStore("Cases");
//         }

//     } 
// });