const url=`http://localhost:3000/files/`;
const xhr=new XMLHttpRequest();
xhr.open('GET',url,true);
xhr.onreadystatechange = function() {
    if (this.readyState === this.DONE) {
        console.log(this.responseText) // do something; the request has completed
    }
}
xhr.send();