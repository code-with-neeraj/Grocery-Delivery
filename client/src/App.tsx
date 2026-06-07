import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import AppLayout from "./pages/AppLayout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductPage from "./pages/ProductPage"
import SearchResults from "./pages/SearchResults"
import FlashDeals from "./pages/FlashDeals"
import CheckOut from "./pages/CheckOut"
import MYOrders from "./pages/MYOrders"
import OrderTracking from "./pages/OrderTracking"
import Addresses from "./pages/Addresses"
import ProtectedRoute from "./components/ProtectedRoute"
import AdminLayout from "./pages/admin/AdminLayout"
import AdminDashboard from "./pages/admin/AdminDashboard"
import AdminProducts from "./pages/admin/AdminProducts"
import AdminProductForm from "./pages/admin/AdminProductForm"
import AdminOrders from "./pages/admin/AdminOrders"
import AdminDeliveryPartners from "./pages/admin/AdminDeliveryPartners"
import DeliveryLogin from "./pages/delivery/DeliveryLogin"
import DeliveryLayout from "./pages/delivery/DeliveryLayout"
import DeliveryDashboard from "./pages/delivery/DeliveryDashboard"
import HelpCenter from "./pages/HelpCenter"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import MyAccount from "./pages/MyAccount"


const App = () => {
  return (
    <>
    <Toaster position="top-right" toastOptions={{duration: 3000, 
      style:{background: "#1B3022", color: "#fff", borderRadius: "12px", fontSize: "14px"}}}/>

      <Routes>
        {/* Auth pages - No Navbar/Footer  */}
        <Route path='/login' element={<Login />} />

        {/* Main pages - With Navbar/Footer  */}
        <Route path='/' element={<AppLayout />} >
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductPage />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="deals" element={<FlashDeals />} />
            <Route path="help" element={<HelpCenter />} />
            <Route path="privacy" element={<PrivacyPolicy />} />

            <Route element={<ProtectedRoute />}>
              <Route path="checkout" element={<CheckOut />} />
              <Route path="orders" element={<MYOrders />} />
              <Route path="orders/:id" element={<OrderTracking />} />
              <Route path="addresses" element={<Addresses />} />
              <Route path="my-account" element={<MyAccount />} />
            </Route>
        </Route>
        {/* Admin Pages  */}
        <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<AdminDashboard />}/>
            <Route path="products" element={<AdminProducts />}/>
            <Route path="products/new" element={<AdminProductForm />}/>
            <Route path="products/:id/edit" element={<AdminProductForm />}/>
            <Route path="orders" element={<AdminOrders />}/>
            <Route path="delivery-partners" element={<AdminDeliveryPartners />}/>
        </Route>

        {/* Delivery Partner Pages  */}
         <Route path="/delivery/login" element={<DeliveryLogin />}/>
         <Route path="/delivery" element={<DeliveryLayout />}>
             <Route index element={<DeliveryDashboard />}/>
          </Route>
      </Routes>

    </>
  )
}

export default App