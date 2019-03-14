// Initialize Firebase
var config = {
apiKey: "AIzaSyCS90s6WnRvtzvXtaKkYpUxPm6wSOPRRk8",
authDomain: "dotto-4f171.firebaseapp.com",
databaseURL: "https://dotto-4f171.firebaseio.com",
projectId: "dotto-4f171",
storageBucket: "dotto-4f171.appspot.com",
messagingSenderId: "13665435551"
};
firebase.initializeApp(config);
var trial = document.getElementById("trial"); 
var ref = firebase.database().ref();
ref.on("value", function(snapshot) {
var data = snapshot.val(); 
// console.log(data);

Object.size = function(obj) {
var size = 0, key;
for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
}
return size;
};

// Get the size of an object
var size = Object.size(data);

var array_data = Object.entries(data); 
// for(let i = 0; i< size; i++){
//     console.log(array_data[i][1].ProgramName);
    
// }
for(let i = 0; i < size; i++){
    // console.log(array_data[i][1].ProgramName);
    //creating elements
    var database_div_name = document.createElement('h1'); 
    var database_div_contact = document.createElement('p1'); 
    var database_div_description = document.createElement('p2'); 
    var database_div_duration= document.createElement('p3')
    var database_div_focus= document.createElement('p4'); 
    var database_div_a = document.createElement("a"); 
    var database_div_link= document.createElement('button'); 
    var database_div_link_span = document.createElement("span"); 
    var database_div_location= document.createElement('p5'); 
    var database_div_image = document.createElement('img'); 
    var database_div = document.createElement("div"); 
    var database_div_imagediv = document.createElement("div"); 
    var database_div_text = document.createElement("div"); 
    var database_button = document.createElement("button"); 
    var database_div_button = document.createElement("div"); 
    var database_html = document.createElement("html"); 
    var data_collection= document.getElementById("datacollection"); 
    //setting class of elements
    database_div.setAttribute("class", "database");
    database_div_name.setAttribute("class", "name");
    database_div_contact.setAttribute("class", "contact");
    database_div_description.setAttribute("class", "description");
    database_div_duration.setAttribute("class", "duration");
    database_div_focus.setAttribute("class", "focus");
    database_div_link.setAttribute("class", "link");
    database_div_a.setAttribute("class", "linkinfo"); 
    database_div_location.setAttribute("class", "location");
    database_div_image.setAttribute("class", "logo"); 
    database_div_imagediv.setAttribute("class", "imagediv"); 
    database_div_text.setAttribute("class", "textdiv"); 
    database_div_link_span.setAttribute("class", "linkspan"); 
    database_div_button.setAttribute("class", "buttondiv"); 
    var buttonid = "morebtn" + array_data[i][1].ProgramName +""; 
    database_button.setAttribute("id", buttonid); 
    //set firebase data into elements
    database_div_name.innerHTML = array_data[i][1].ProgramName; 
    database_div_contact.innerHTML = array_data[i][1].contactInfo; 
    if(typeof array_data[i][1].description === "object"){
        var string = "";
        var ar = ["cat","dog"] 
        for(let a = 0; a < array_data[i][1].description.length-1; a++){
            var string1 = window.atob(window.atob(array_data[i][1].description[a.toString()]))+ window.atob(window.atob(array_data[i][1].description[(a+1).toString()])); 
        }
            // console.log(string1);
            database_div_description.innerHTML = string1; 
    }
    else{
        database_div_description.innerHTML = window.atob(array_data[i][1].description); 
    }
    
    database_div_duration.innerHTML = array_data[i][1].duration; 
    database_div_focus.innerHTML = array_data[i][1].focus; 
    database_div_link.innerHTML = "Website"; 
    database_div_link_span.innerText;
    database_div_link.appendChild(database_div_link_span); 
    database_div_a.setAttribute("href", window.atob("" + array_data[i][1].link + "")); 
    database_div_a.appendChild(database_div_link);
    //console.log(database_div_a);
    // var fafa_map_marker = document.getElementById("fa fa-map-marker id"); 
    // var fafa_map_marker_new = document.createElement("iframe"); 
    // fafa_map_marker_new.appendChild(fafa_map_marker); 

    // console.log(fafa_map_marker_new);
    // fafa_map_marker_new.appendChild(database_div_location);
    database_div_location.appendChild(database_div_focus);
    database_div_location.innerHTML = array_data[i][1].location;
    database_div_image.setAttribute("src", window.atob("" + array_data[i][1].image + "")); 
    database_button.setAttribute("class","More");
    database_button.innerText = "More"; 
    database_button.setAttribute("ahref", database_html); 

    //append elements into div
    database_div_imagediv.appendChild(database_div_image); 
    database_div.appendChild(database_div_imagediv);
    database_div_text.appendChild(database_div_name);  
    database_div_text.appendChild(database_div_contact); 
    database_div_contact.style.display= "none"; 
    database_div_text.appendChild(database_div_location);
    database_div_text.appendChild(database_div_focus);
    database_div_text.appendChild(database_div_duration);
    database_div_text.appendChild(database_div_description); 
    //database_div_a.appendChild(database_div_link); 
    database_div_button.appendChild(database_div_a);
    database_div_button.appendChild(database_button); 
    database_div_text.appendChild(database_div_button); 
    

    database_div.appendChild(database_div_text); 
    // database_div.appendChild(database_div_a); 
    document.body.appendChild(database_div); 
    data_collection.appendChild(database_div); 
    // database_button.addEventListener("click",makeDocument()); 
}

$("#datacollection").on("click", ".More", function (event) {
    //console.log('New Hacks');
    var morebtn = document.getElementsByClassName('More');
    // console.log(morebtn);
    for(let i = 0; i< morebtn.length; i++){
        // console.log(event.target.id.substring(7));
        var idname = "morebtn" + event.target.id.substring(7) + ""; 
        if(morebtn[i].id === idname){
            console.log(i);
            console.log(event.target);
            morebtn[i].addEventListener("click", makeDocument(event.target.id.substring(7),i,event.target));
        }   
    }
    
   })
},

);


