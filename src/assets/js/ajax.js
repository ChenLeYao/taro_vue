 var http_url = 'http://139.224.230.131/';
 //var http_url = 'http://localhost/';
function get( url , data , callback ) {
    url =  http_url + url ;
    var xhr = new XMLHttpRequest();
    var dataString = '';
    xhr.open(  'get' ,url );
    if ( data ){
        if ( data && typeof data == 'object'){
            for ( var attr in data ){
                dataString += `${attr}=${data[attr]}&`;
            }
            data = dataString ;
        }
        xhr.send(data);
    }else{
        xhr.send();
    }
    xhr.onreadystatechange = function () {
        if ( xhr.readyState == 4 && xhr.status == 200 ){
            console.log(xhr.responseText);
            let responseText = JSON.parse(xhr.responseText );
            callback && callback (responseText );
        }
    }
}
function post( url ,data , callback ) {
    url =  http_url + url ;
    var xhr = new XMLHttpRequest();
    var dataString = '';
    xhr.open( 'post' , url );
    xhr.setRequestHeader('Content-type' ,'application/x-www-form-urlencoded');
    if ( data && typeof data == 'object'){
        for ( var attr in data ){
            dataString += `${attr}=${data[attr]}&`
        }
        data = dataString;
        xhr.send(data);
    }else{
       console.log('there is need data typeof json');
    }
    xhr.onreadystatechange = function () {
        if ( xhr.readyState == 4 && xhr.status == 200 ){
            let responseText = xhr.responseText.replace(/\\/ , '');
            responseText = JSON.parse(responseText );
            callback && callback (responseText );
        }
    }
}

function file( url ,data , callback ) {
    url =  http_url + url ;
    var xhr = new XMLHttpRequest();
    var dataString = '';
    //var formData = new FormData();
    xhr.open( 'post' , url );
    xhr.setRequestHeader('Content-type' ,'application/x-www-form-urlencoded');
    // xhr.setRequestHeader('Content-type' ,'multipart/form-data;');
    if ( data && typeof data == 'object'){
        for ( var attr in data ){
            dataString += `${attr}=${data[attr]}&`;
        }
        data = dataString ;
        xhr.send(data);
    }else{
        console.log('there is need data typeof json');
    }
    xhr.onreadystatechange = function () {
        if ( xhr.readyState == 4 && xhr.status == 200 ){
            let responseText = JSON.parse(xhr.responseText );
            callback && callback (responseText );
        }
    }
}

function download() {

}

var request = {
    get : get ,
    post : post ,
    file : file ,
    download : download
};
export default request;
//module.exports =  { request } ;
