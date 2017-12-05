
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
                alert('I do not know why but I was only able to get the weather to show when I disable the security of the webpage');
                handler('Ajax error, status: ' + this.status);           
            }       
        }    
    };
    req.open('GET', url);
    req.send();
}

