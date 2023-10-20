import React from 'react'
import { Link } from 'react-router-dom';

const DashboardButton = ({ label, onClick }) => (
    <button
        onClick={onClick}
        className="mx-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        aria-label={label}
    >
        {label}
    </button>
);

const Dashboard = () => {
    return (
        <div className="min-h-full">
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="flex space-x-4 px-4 py-6 sm:px-0">
                        <Link to="/add-products">
                        <DashboardButton label="Add Product"/>
                        </Link>
                        <Link to="/all-addedproducts">
                        <DashboardButton label="All Product" />
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
