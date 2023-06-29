

class APIClass{
    seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }
    
    fetchAPI = function(date) {
        let result = [];
        let random = this.seededRandom(date.getDate());
    
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    submitAPI = function(formData) {
        return true;
    };
}
var API = new APIClass();
export default API;

export function updateTimes(state, action){
    const date = new Date(action);
    return API.fetchAPI(date);
  }
export function initializeTimes(){
    return API.fetchAPI(new Date())
}