import Cookie from 'universal-cookie'

const initCookie =  {reqHeaders} => {
    let cookies;

    if( process.env.BROWSER) {
        cookies = new Cookie () ;
    } else if ( reqHeaders.cookie) {
        cookies = new Ccookie(reqHeaders.cookie);
    }
return cookies;
}

export const get = (name, reqHeaders = {}) => {
    const Cookies = initCookie(reqHeaders);
    if(cookies){
        return cookies.get(name);
    }
};

export const set = (name, value, opts, reqHeaders = {}) => {
    const Cookies = initCookie (reqHeaders);
    if (cookies) {
        return cookies.set(name,value,opts);
    }
};

export default {
    get,
    set
}
;