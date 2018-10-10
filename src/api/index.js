import axios from 'axios';

axios.interceptors.response.use((response)=> {
    // Do something with response data
    //console.log('interceptors', response);
    return response;
}, (error)=> {
    // Do something with response error
    //console.log('interceptors',error);
    return Promise.reject(error);
});

function api(config) {

    return new Promise(function(resolve, reject) {
        return axios(config).then((response)=>{
                resolve(response) ;
            }).catch((error)=>{
                reject(error);
        });
    });

}

export default api;
