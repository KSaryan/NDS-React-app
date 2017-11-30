/** Add request parameters to a GET URL **/
const makeGetURL = (url, params) => {
    let eUC = encodeURIComponent;
    let queryString = Object.keys(params)
                            .map(k => `${eUC(k)}=${eUC(params[k])}`)
                            .join("&");
    return `${url}?${queryString}`;
}


/** Convert a plain object into a FormData object **/
const objToFormData = (obj) =>{
    
    let formData = new FormData();
    for ( var key in obj ) {
        formData.append(key, obj[key]);
    }
    return formData;
}


/** Fetch a JSON resource, returning a promise **/
const fetchToJSON = (url, method="GET", params={}) => {

    //set the method
    let fetchOptions = {"method": method};

    //if there's data to be passed with the request, format it correctly
    //for the given method
    if (params) {
        if (method.toUpperCase() === "GET") {
            url = makeGetURL(url, params);
        }
        if (method.toUpperCase() === "POST") {
            fetchOptions.body = objToFormData(params);
        }
    }

    //return a promise of JSON data
    return fetch(url, fetchOptions)
        .then(function (results) {
            console.log("in then after fetch");
            console.log(results);
            return results.json();
        });

}

export default fetchToJSON;