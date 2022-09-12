import Home from './Home'
import Grid from './Grid'
import { fetchPopularRepos } from './api';
import NewPage from './components/NewPage';
import PostQuery from './components/body/PostQuery';
import UserDashboard from './components/body/UserDashboard';
import MyDashboard from './components/body/MyDashboard';
import {LoadableMyPage, LoadableMyLogin, LoadableMyWebRegister} from './components/loadable/LoadableMyPage';
import ReplyQuery from './components/expert/ReplyQuery'
import AdminDashboard from './components/admin/AdminDashboard'
import ForgotPassword from './components/body/user/ForgotPassword';
import ManageExpert from './components/expert/ManageExpert';
import Expert from './components/expert/Expert';
import ResetPasswordPage from './components/body/user/ResetPasswordPage';
import ViewSpecificQuery from './components/body/query/ViewSpecificQuery';
import ClusterRegistration from './components/tsmpb/Subsidy/ClusterRegistration';
import FarmerRegistration from './components/tsmpb/Subsidy/FarmerRegistration';
import Body from './components/medicinalplants/Body';
import BodyAlphabetic from './components/medicinalplants/BodyAlphabetic';
import Default from './components/medicinalplants/Default';
import HomePage from './components/tsmpb/HomePage';
import PlantDetails from './components/medicinalplants/PlantDetails';
import TSMPBHomePage from './components/tsmpb/TSMPBHomePage';
import IndividualPlant from './components/medicinalplants/IndividualPlant';
import InspectionPage from './components/tsmpb/Inspection/InspectionPage';
import SubsidyHome from './components/tsmpb/Subsidy/SubsidyHome';
import FooterAboutUS from './components/tsmpb/footer/FooterAboutUs';
import FooterFeedback from './components/tsmpb/footer/FooterFeedback';
import FooterTermsConditions from './components/tsmpb/footer/FooterTermsConditions';
import FooterPrivacyPolicy from './components/tsmpb/footer/FooterPrivacyPolicy';
import FooterCopyrightPolicy from './components/tsmpb/footer/FooterCopyrightPolicy';
import FooterHyperlinkPolicy from './components/tsmpb/footer/FooterHyperlinkPolicy';
import App from '../App';

const routes = [
    {
        path: '/',
        exact: true,
        component: App,
    },
    {
        path:'/homepage/default',
        exact: true,
        component: Default,
    },
    {
        path:'/homepage/plantdetails/:id',
        exact: true,
        component: PlantDetails,
    },
    {
        path:'/homepage/:id',
        exact:true,
        component:HomePage,
    },
    {
        path:'/homepage',
        exact: true,
        component: HomePage,
    },
    {
        path:'/medicinalplants/alphabtic',
        exact: true,
        component: BodyAlphabetic,
    },
    {
        path:'/registerfarmer',
        exact:true,
        component: FarmerRegistration,
    },
    {
        path:'/inspection',
        exact:true,
        component: InspectionPage,
    },
    {
        path:'/subsidyhome',
        exact:true,
        component:SubsidyHome
    },
    {
        path:'/aboutus',
        exact:true,
        component:FooterAboutUS
    },
    {
        path:'/feedback',
        exact:true,
        component:FooterFeedback
    },
    {
        path:'/termsandconditions',
        exact:true,
        component:FooterTermsConditions
    },
    {
        path:'/privacypolicy',
        exact:true,
        component:FooterPrivacyPolicy
    },
    {
        path:'/copyrightpolicy',
        exact:true,
        component:FooterCopyrightPolicy
    },
    {
        path:'/hyperlinkpolicy',
        exact:true,
        component:FooterHyperlinkPolicy
    }
    // ,
    // {
    //     path: '/nmpbhelpline',
    //     exact: true,
    //     component: UserDashboard,
    // },
    // {
    //     path: '/nmpbhelpline/popular/:id',
    //     component: Grid,
    //     fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())
    // },
    // {
    //     path: '/nmpbhelpline/newpage',
    //     component: NewPage
    // },
    // {
    //     path: '/nmpbhelpline/dashboard',
    //     component: UserDashboard
    // },
    // {
    //     path: '/nmpbhelpline/register',
    //     component: LoadableMyPage
    // },
    // {
    //     path: '/nmpbhelpline/registerweb',
    //     component: LoadableMyWebRegister
    // },
    // {
    //     path: '/nmpbhelpline/login',
    //     component: LoadableMyLogin
    // },
    // {
    //     path: '/nmpbhelpline/postquery',
    //     component: PostQuery
    // },
    // {
    //     path: '/nmpbhelpline/manageexpert',
    //     component: ManageExpert
    // },
    // {
    //     path: '/nmpbhelpline/expert/:id',
    //     component: Expert
    // },
    // {
    //     path: '/nmpbhelpline/mydashboard',
    //     component: MyDashboard
    // },
    // {
    //     path: '/nmpbhelpline/replyquery',
    //     component : ReplyQuery
    // },
    // {
    //     path:  '/nmpbhelpline/admindashboard',
    //     component: AdminDashboard
    // },
    // {
    //     path: '/nmpbhelpline/forgotpass',
    //     component : ForgotPassword
    // },
    // {
    //     path: '/nmpbhelpline/changepassword/**',
    //     component : ResetPasswordPage
    // },
    // {
    //     path: '/nmpbhelpline/viewquery/:id',
    //     component: ViewSpecificQuery
    // },
]

export default routes
