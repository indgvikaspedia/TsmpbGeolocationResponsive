import { useCookies } from 'react-cookie';
import { user_cookie } from '../properties/constant';

export const isUserloggedIn = () => {
    const [cookie, removeCookie] = useCookies([user_cookie.JWT_TOKEN]);
    let userToken = cookie.xtrygdddht;

    if(userToken != null && userToken != undefined && userToken != '' && userToken != 'undefined')
        return true
    else 
        return false
}

export const isUserExpert = () => {
    const [cookie, removeCookie] = useCookies(['uehucuejjy']);
    let userRole = cookie.uehucuejjy;

    if(userRole == 5)
        return true
    else 
        return false
}

export const isUserAdmin = () => {
    const [cookie, removeCookie] = useCookies(['uehucuejjy']);
    let userRole = cookie.uehucuejjy;

    if(userRole == 6)
        return true
    else
        return false
}

export const isUserSubAdmin=()=>{
    const [cookie,removeCookie] = useCookies(['uehucuejjy']);
    let userRole = cookie.uehucuejjy;

    if(userRole == 8)
        return true
    else
        return false
}

export default{
    isUserloggedIn,
    isUserExpert,
    isUserSubAdmin,
    isUserAdmin
}