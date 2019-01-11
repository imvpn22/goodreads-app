// AJAX Request
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        var xmlString = this.responseText;
        var parser = new DOMParser();
        var xml = parser.parseFromString(xmlString, "text/xml");

        populateData(xml);

        // var obj = JSON.stringify(xmlToJson(xml));
        // console.log(JSON.parse(obj));
    }
};
xhttp.open("GET", "https://www.goodreads.com/search.xml?key=tmNs0wHYZNwx5cr20pTg&q=Ender%27s+Game", true);
xhttp.send();


const populateData = xml => {
    let a = xml.getElementsByTagName("results");

    console.log(xmlToJson(a));
};
