import {
  User,
  Mail,
  Phone,
  MapPin,
  ShoppingBag,
  LogOut,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
import api from "../config/api";
import { useEffect, useState } from "react";



const MyAccount = () => {
  const user = JSON.parse(localStorage.getItem("auth_user") || "{}");

  const [stats, setStats] = useState({
  totalOrders: 0,
  totalAddresses: 0,
  totalSpending: 0
});



const fetchStats = async () => {
  try {
    const { data } = await api.get("/account/stats");
    console.log("API RESPONSE =>", data);
    setStats(data);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchStats();
}, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">

            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
              <User className="w-12 h-12 text-green-700" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {user?.name || "Customer"}
              </h1>

              <p className="text-gray-500">
                Welcome to your SwiftCart account
              </p>
            </div>
          </div>
        </div>

        {/* Profile & Quick Actions */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">
              Profile Information
            </h2>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <User className="text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p>{user?.name || "Not Available"}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p>{user?.email || "Not Available"}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p>{user?.phone || "Not Added"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">
              Quick Actions
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <Link
                to="/orders"
                className="p-5 border rounded-xl hover:border-green-500 hover:bg-green-50 transition"
              >
                <ShoppingBag className="text-green-600 mb-2" />
                <h3 className="font-semibold">My Orders</h3>
                <p className="text-sm text-gray-500">
                  View and track all orders
                </p>
              </Link>

              <Link
                to="/addresses"
                className="p-5 border rounded-xl hover:border-green-500 hover:bg-green-50 transition"
              >
                <MapPin className="text-green-600 mb-2" />
                <h3 className="font-semibold">Saved Addresses</h3>
                <p className="text-sm text-gray-500">
                  Manage delivery locations
                </p>
              </Link>

              <Link
                to="/privacy"
                className="p-5 border rounded-xl hover:border-green-500 hover:bg-green-50 transition"
              >
                <Settings className="text-green-600 mb-2" />
                <h3 className="font-semibold">Privacy & Security</h3>
                <p className="text-sm text-gray-500">
                  Review privacy settings
                </p>
              </Link>

              <button
                onClick={() => {
                  localStorage.removeItem("auth_token");
                  localStorage.removeItem("auth_user");
                  window.location.href = "/login";
                }}
                className="text-left p-5 border rounded-xl hover:border-red-500 hover:bg-red-50 transition"
              >
                <LogOut className="text-red-500 mb-2" />
                <h3 className="font-semibold text-red-500">
                  Logout
                </h3>
                <p className="text-sm text-gray-500">
                  Sign out of your account
                </p>
              </button>

            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <h3 className="text-3xl font-bold text-green-600">
              {stats.totalOrders}
            </h3>
            <p className="text-gray-500 mt-2">
              Total Orders
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <h3 className="text-3xl font-bold text-green-600">
              {stats.totalAddresses}
            </h3>
            <p className="text-gray-500 mt-2">
              Saved Addresses
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <h3 className="text-3xl font-bold text-green-600">
              ₹{stats.totalSpending.toLocaleString()}
            </h3>
            <p className="text-gray-500 mt-2">
              Total Spending
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyAccount;