import { useCookies } from 'react-cookie';
import { user_cookie } from '../properties/constant';

// export const setCustomCookie = (values) => {
//     const [cookie, setCookie] = useCookies(['user_cookie.JWT_TOKEN']);

//     setCookie('user_cookie.JWT_TOKEN', values.accessToken)
//     setCookie('skjdiewcbj', values.user.users_id)
//     setCookie('kljuueghgh', values.user.full_name)
//     setCookie('uehucuejjy', values.user.stakeholderType.id)
// };

export const getCustomCookie = (name) => {
  const [cookie, setCookie] = useCookies([user_cookie.JWT_TOKEN]);
  return cookie.name
};

export default{
    getCustomCookie
}