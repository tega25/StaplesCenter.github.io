
function ajax(url, handler) {
    var req = new XMLHttpRequest();
    if (!req) {
        alert('Browser not supported.');
        return;
    }

    req.onreadystatechange = function() {        
        var resp;        
        if (this.readyState === XMLHttpRequest.DONE) {           
            if (this.status === 200) {               
                resp = this.responseText;            
                handler(resp);
                console.log(handler);
            } else {
                alert('Please be sure to enter the exact name of the city.');
                handler('Ajax error, status: ' + this.status);           
            }       
        }    
    };
    req.open('GET', url);
    req.send();
}

