import Adress from "./Pages/UserPanel/Adress/Adress";
import Comments from "./Pages/UserPanel/Comments/Comments";
import Main from "./Pages/UserPanel/Index/Main";
import MainPage from "./Pages/UserPanel/MainPage/MainPage";
import Notifications from "./Pages/UserPanel/Notifications/Notifications";
import OrderPage from "./Pages/UserPanel/OrderPage/OrderPage";
import LikelyProducts from "./Pages/UserPanel/LikelyProducts/LikelyProducts";
import DiscountCode from "./Pages/UserPanel/DiscountCode/DiscountCode";
import Blog from "./Pages/Blog/Blog";
import ArticleCategory from "./Pages/ArticleCategory/ArticleCategory";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ContactUs from "./Pages/ContactUs/ContactUs";
import NotFound from "./Pages/NotFound/NotFound";
import Tickets from "./Pages/UserPanel/Tickets/Tickets";
import AnswerTicket from "./Pages/UserPanel/AnswerTicket/AnswerTicket";
import SendTicket from "./Pages/UserPanel/SendTicket/SendTicket";
import Profile from "./Pages/UserPanel/Profile/Profile";
import ArticlePage from "./Pages/ArticlePage/ArticlePage";
import Card from "./Pages/Card/Card";
import DetailPay from "./Pages/DetailPay/DetailPay";
import SuccessFullPay from "./Pages/SuccessFullPay/SuccessFullPay";
import FaildPay from "./Pages/FaildPay/FaildPay";
import SearchPage from "./Pages/SearchPage/SearchPage";
import Compare from "./Pages/Compare/Compare";
import AboutUs from "./Pages/AboutUs/AboutUs";
import OtpLogin from "./Pages/OptLogin/OtpLogin";
import MainAdminPage from "./Pages/AdminPanel/Index/Index";
import MainAdmin from "./Pages/AdminPanel/Main/Main";
import UsersPage from "./Pages/AdminPanel/Users/UsersPage";
import Products from "./Pages/AdminPanel/Products/Products";
import CommentsAdminPage from "./Pages/AdminPanel/Commnets/Comments";
import Orders from "./Pages/AdminPanel/Orders/Orders";
import Discount from "./Pages/AdminPanel/DiscountCode/DiscountCode";
import TicketsAdminPage from "./Pages/AdminPanel/Tickets/Tickets";
import ArticlesAdminPage from "./Pages/AdminPanel/Articles/Articles";
import Campaign from "./Pages/AdminPanel/Campaign/Campaign";
import BannerAdminPage from "./Pages/AdminPanel/Banners/Banners";
import Category from "./Pages/AdminPanel/Categoty/Category";
import FeaturePage from "./Pages/AdminPanel/Features/Features";
import AdvancePage from "./Pages/AdminPanel/Advance/Advance";
import Colors from "./Pages/AdminPanel/Colors/Colors";
import Menus from "./Pages/AdminPanel/Menus/Menus";
import DraftArticle from "./Pages/AdminPanel/DraftArticle/DraftArticle";
import ContactUsAdminPage from "./Pages/AdminPanel/ConatctUs/ContactUs";
import CampaignBanner from "./Pages/AdminPanel/CampaignBanner/CampaignBanner";
import NewsLetter from "./Pages/AdminPanel/NewsLetter/NewsLetter";
import Static from "./Pages/AdminPanel/Static/Static";
import MyInfo from "./Pages/AdminPanel/MyInfo/MyInfo";
import PowerOff from "./Pages/AdminPanel/PowerOff/PowerOff";
import IsLogin from "./Pages/Private/IsLogin";
import { Suspense, lazy } from "react";
import Loader from "./Components/Loader/Loader";

const ProductPage = lazy(() => import("./Pages/ProductPage/ProductPage"));
const Index = lazy(() => import("./Pages/Index/Index"));
const ProductsPage = lazy(() => import("./Pages/ProductsPage/ProductsPage"));
const ProductsCategory = lazy(() =>
  import("./Pages/ProductsCategory/ProductsCategory")
);

const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Index />
      </Suspense>
    ),
  },
  { path: "/blog", element: <Blog /> },
  {
    path: "/product/:productName",
    element: (
      <Suspense fallback={<Loader />}>
        <ProductPage />
      </Suspense>
    ),
  },
  { path: "/category-blog/:articleCategory", element: <ArticleCategory /> },
  { path: "/article/:articleName", element: <ArticlePage /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "/contact-us", element: <ContactUs /> },
  {
    path: "/products",
    element: (
      <Suspense fallback={<Loader />}>
        <ProductsPage />
      </Suspense>
    ),
  },
  {
    path: "/category-products/:categoryName",
    element: (
      <Suspense fallback={<Loader />}>
        <ProductsCategory />
      </Suspense>
    ),
  },
  { path: "/order/card", element: <Card /> },
  { path: "/order/detail", element: <DetailPay /> },
  { path: "/order/successfull", element: <SuccessFullPay /> },
  { path: "/order/fail", element: <FaildPay /> },
  { path: "/search/:value", element: <SearchPage /> },
  { path: "/compare", element: <Compare /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/otp-login", element: <OtpLogin /> },
  { path: "*", element: <NotFound /> },
  {
    path: "/my-account/*",
    element: <Main />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "main", element: <MainPage /> },
      { path: "profile", element: <Profile /> },
      { path: "orders", element: <OrderPage /> },
      { path: "address", element: <Adress /> },
      { path: "notifications", element: <Notifications /> },
      { path: "comments", element: <Comments /> },
      { path: "Favorite", element: <LikelyProducts /> },
      { path: "offs-code", element: <DiscountCode /> },
      { path: "tickets", element: <Tickets /> },
      { path: "tickets/answer-ticket/:ticketID", element: <AnswerTicket /> },
      { path: "tickets/send-ticket", element: <SendTicket /> },
    ],
  },
  {
    path: "/admin-panel/*",
    element: <MainAdminPage />,
    children: [
      { path: "", element: <MainAdmin /> },
      { path: "main", element: <MainAdmin /> },
      { path: "users", element: <UsersPage /> },
      { path: "products", element: <Products /> },
      { path: "comments", element: <CommentsAdminPage /> },
      { path: "orders", element: <Orders /> },
      { path: "discount", element: <Discount /> },
      { path: "tickets", element: <TicketsAdminPage /> },
      { path: "articles", element: <ArticlesAdminPage /> },
      { path: "capmaign", element: <Campaign /> },
      { path: "ads-banner", element: <BannerAdminPage /> },
      { path: "ads-banner/campaign", element: <CampaignBanner /> },
      { path: "category", element: <Category /> },
      ,
      { path: "products/colors", element: <Colors /> },
      { path: "products/feature", element: <FeaturePage /> },
      { path: "products/advance", element: <AdvancePage /> },
      { path: "menus", element: <Menus /> },
      { path: "articles/draft", element: <DraftArticle /> },
      { path: "contact-us", element: <ContactUsAdminPage /> },
      { path: "newsletter", element: <NewsLetter /> },
      { path: "static", element: <Static /> },
      { path: "my-info", element: <MyInfo /> },
      { path: "off", element: <PowerOff /> },
    ],
  },
];

export default routes;
