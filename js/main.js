String.prototype.format = function() {
    var s = this,
        i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};

function callApi (method) {

    console.log("callApi\\init.")
    var xhttp;
    var url;
    var resp; 
    var data; 
    xhttp = new XMLHttpRequest();
    
    
    console.log("callApi\\setting events.")
    
    
    xhttp.onload = function(e){
        
        
        resp = e;
        
        console.log("This is my response to ");
        console.log(resp);
        console.log("checkin");
        console.log(resp.target.responseText);
        
        
        var changeOfActing = JSON.parse(resp.target.responseText);
       
       
        console.log("chageOfActing.");
        console.log(changeOfActing);
        
        console.log("end") ;
                
        
        
        finish(changeOfActing);
    
        
    }
    
    var str = "callApi\\{0}.".format(method)
    console.log(str);
    xhttp.open("GET", method, true);
    xhttp.send();
// 
}

    
function finish (json) {
    
    console.log("Starting Finish.")
    
    document.getElementById("Container").innerHTML = writeContainer(json) 
    
}


function writeContainer(json) {
    
    var location;
    
    console.log("DIS BTCH");
    console.log(window.location.pathname);
    
    location = window.location.pathname
    console.log();
    
    switch (location) {
        
        case "/":
            return writeHome();
        
        case "/about.html":
            return writeAbout();
        
    }
    
    //console.log(json.Posts.shift())
    
    
    function writeHome(){
    
        return "{0}\n{1}\n{2}\n".format(
            printHeader(json.Header),
            printBody(json),
            printFooter(json.Footer)
        )        
    }
    
    function writeAbout(){
        
        return "{0}\n{1}\n{2}\n".format(
            printHeader(json.Header),
            function(){ return "ABOUT ME!" },
            printFooter(json.Footer)
        )
        
    }
    
    
    
}




function printHeader(header) {
    
    
    
    console.log("Start printHead");
    var head = "<div class='page-header'><h1>{0}</h1></div>".format(header);
    
    return head;
}

function printBody(body){
    
    
    var count;
    var string;
    var p;
        
    count = body.Posts.length;
    
    
    console.log(count);
    
    console.log("Start printBody");
    
    
    string = Array();
    
    for (i = 0; i < count; i++) { 
        
        
        p = body.Posts.shift();
        
        console.log(p.Title);
        
        postString = "<h2>" + p.Title + "</h2>" + "\n" + p.Body;
        
        
        
        string += postString;
        
            
        
    }
    
    console.log(string)
    
    var body = '<div class="body">{0}</div>'.format(string);
    
    return body;
}
    
function printFooter(footer){
    
    var footer;
    product = '<div id="footer" class="panel-footer">{0}</div>'.format(footer);
    return product;
    
}


var a;


console.log("Starting Script");

callApi("blob.json");
console.log("ge");





//console.log(a);
//console.log("end");




//
//resp = xhttp.responseText
//console.log("http")
//console.log(xhttp)
//console.log(resp)
// 
//data = JSON.parse(resp)
//
//
//console.log("data")
//console.log(data)
//
//
// Use PowerShell to build static file API, as json object result of build process. Site uses the site as an api and retrieves the data.