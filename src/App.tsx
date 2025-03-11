import { useState } from "react";
import {
	User,
	QrCode,
	Home,
	Coffee,
	Sparkles,
	ShoppingBag,
	ChevronRight,
	Bell,
	CreditCard,
	Building,
	Heart,
	Briefcase,
	ArrowLeft,
} from "lucide-react";

const App = () => {
	const [activeTab, setActiveTab] = useState("home");
	const [currentPage, setCurrentPage] = useState("main");

	const renderTimsPlusPage = () => {
		return (
			<div className="flex flex-col h-screen bg-gray-50">
				<header className="px-6 pt-6 pb-4 flex justify-between items-center">
					<div className="flex items-center">
						<button onClick={() => setCurrentPage("main")} className="mr-3 p-1">
							<ArrowLeft size={24} className="text-gray-700" />
						</button>
						<span className="text-xl italic font-bold text-red-600">Tims+</span>
					</div>
				</header>

				<div className="flex-1 overflow-auto px-6 pb-20">
					<div className="mb-6">
						<h1 className="text-2xl font-bold text-gray-800 mb-4">
							<span className="italic">Tims+ </span>
							Services
						</h1>
						<p className="text-gray-600">
							Access additional services and opportunities from Tim Hortons.
						</p>
					</div>

					<div className="space-y-4 mb-8">
						<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center">
							<div className="p-3 rounded-full bg-red-50 mr-4">
								<CreditCard size={28} className="text-red-600" />
							</div>
							<div>
								<h3 className="font-bold text-gray-800">Tims Financial</h3>
								<p className="text-sm text-gray-600">
									Credit cards, banking, and financial services
								</p>
							</div>
							<ChevronRight size={20} className="text-gray-400 ml-auto" />
						</div>

						<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center">
							<div className="p-3 rounded-full bg-red-50 mr-4">
								<ShoppingBag size={28} className="text-red-600" />
							</div>
							<div>
								<h3 className="font-bold text-gray-800">TimShop</h3>
								<p className="text-sm text-gray-600">
									Merchandise, gifts, and exclusive items
								</p>
							</div>
							<ChevronRight size={20} className="text-gray-400 ml-auto" />
						</div>

						<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center">
							<div className="p-3 rounded-full bg-red-50 mr-4">
								<Building size={28} className="text-red-600" />
							</div>
							<div>
								<h3 className="font-bold text-gray-800">Community</h3>
								<p className="text-sm text-gray-600">
									Local events and community initiatives
								</p>
							</div>
							<ChevronRight size={20} className="text-gray-400 ml-auto" />
						</div>

						<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center">
							<div className="p-3 rounded-full bg-red-50 mr-4">
								<Heart size={28} className="text-red-600" />
							</div>
							<div>
								<h3 className="font-bold text-gray-800">Give</h3>
								<p className="text-sm text-gray-600">
									Charitable donations and fundraising
								</p>
							</div>
							<ChevronRight size={20} className="text-gray-400 ml-auto" />
						</div>

						<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center">
							<div className="p-3 rounded-full bg-red-50 mr-4">
								<Briefcase size={28} className="text-red-600" />
							</div>
							<div>
								<h3 className="font-bold text-gray-800">Find Jobs</h3>
								<p className="text-sm text-gray-600">
									Career opportunities at Tim Hortons
								</p>
							</div>
							<ChevronRight size={20} className="text-gray-400 ml-auto" />
						</div>
					</div>
				</div>

				<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
					<div className="flex justify-around items-center h-16">
						<button className="flex flex-col items-center w-1/4">
							<div className="h-1 w-16 bg-transparent mb-1"></div>
							<Home size={22} className="text-gray-400" />
							<span className="text-xs font-bold mt-1 text-gray-400">Home</span>
						</button>
						<button className="flex flex-col items-center w-1/4">
							<div className="h-1 w-16 bg-transparent mb-1"></div>
							<QrCode size={22} className="text-gray-400" />
							<span className="text-xs font-bold mt-1 text-gray-400">Scan</span>
						</button>
						<button className="flex flex-col items-center w-1/4">
							<div className="h-1 w-16 bg-transparent mb-1"></div>
							<Sparkles size={22} className="text-gray-400" />
							<span className="text-xs font-bold mt-1 text-gray-400">
								Offers
							</span>
						</button>
						<button className="flex flex-col items-center w-1/4">
							<div className="h-1 w-16 bg-transparent mb-1"></div>
							<User size={22} className="text-gray-400" />
							<span className="text-xs font-bold mt-1 text-gray-400">
								Profile
							</span>
						</button>
					</div>
				</div>
			</div>
		);
	};

	if (currentPage === "timsPlus") {
		return renderTimsPlusPage();
	}

	return (
		<div className="flex flex-col h-screen bg-gray-50">
			<header className="px-6 pt-6 pb-2 flex justify-between items-center">
				<div className="flex items-center">
					<span className="text-xl italic font-bold text-red-600">Tims</span>
				</div>
				<div className="flex items-center space-x-3">
					<button className="relative p-1 rounded-full bg-white shadow-sm">
						<Bell size={20} className="text-gray-700" />
						<span className="absolute -top-1 -right-1 bg-red-600 w-4 h-4 rounded-full text-white text-xs flex items-center justify-center">
							3
						</span>
					</button>
				</div>
			</header>

			<div className="flex-1 overflow-auto px-6 pb-20">
				<div className="mb-8 mt-2">
					<h1 className="text-3xl font-bold text-gray-800">
						Welcome to{" "}
						<span className="text-red-600 italic font-bold">Tims</span>
					</h1>
					<p className="text-gray-600 mt-2">
						Join now to order ahead, earn rewards, and enjoy exclusive offers.
					</p>
					<div className="flex flex-col mt-5 w-full space-y-3">
						<button className="bg-red-600 text-white py-3 rounded-full font-bold shadow-md w-full">
							Join now
						</button>
						<button className="text-red-600 font-bold py-3 border border-red-600 rounded-full w-full">
							Already a member? Sign in
						</button>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-4 mb-8">
					<div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex flex-col h-64">
						<h2 className="text-xl font-bold text-gray-800 mb-3">Order</h2>
						<div className="flex-1 flex items-center justify-center mb-8">
							<div className="p-3 bg-red-50 rounded-full">
								<Coffee size={48} className="text-red-600" />
							</div>
						</div>
						<p className="text-center text-gray-600 text-sm">
							Start an Order for your Tims favourites.
						</p>
					</div>

					<div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex flex-col h-64">
						<h2 className="text-xl font-bold text-gray-800 mb-3">Rewards</h2>
						<div className="flex-1 flex flex-col items-center justify-center mb-8">
							<div className="text-4xl font-bold text-red-600">0</div>
							<div className="text-sm font-medium text-gray-500">Points</div>
						</div>
						<p className="text-center text-gray-600 text-sm">
							Earn points with every order
						</p>
					</div>
				</div>

				<div className="mb-8">
					<button
						onClick={() => setCurrentPage("timsPlus")}
						className="w-full text-left"
					>
						<div className="bg-gradient-to-r from-red-700 to-red-600 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<h2 className="text-xl italic font-bold text-white mr-2">
										Tims+
									</h2>
									<p className="text-sm text-white font-medium">
										Financial, Shop, Community, and More
									</p>
								</div>
								<ChevronRight size={20} className="text-white" />
							</div>
						</div>
					</button>
				</div>

				<div className="mb-6">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-xl font-bold text-gray-800">Tims Challenges</h2>
						<button className="text-red-600 text-sm font-medium">
							View All
						</button>
					</div>
					<div className="flex pb-4 space-x-4">
						<div className="flex flex-col items-center flex-shrink-0">
							<div className="bg-white p-4 rounded-xl shadow-sm w-20 h-20 flex items-center justify-center mb-2 border border-gray-100">
								<div className="grid grid-cols-2 gap-1">
									<div className="w-4 h-4 bg-red-500 flex items-center justify-center text-white text-xs rounded-sm">
										W
									</div>
									<div className="w-4 h-4 bg-amber-700 flex items-center justify-center text-white text-xs rounded-sm">
										O
									</div>
									<div className="w-4 h-4 bg-red-800 flex items-center justify-center text-white text-xs rounded-sm">
										R
									</div>
									<div className="w-4 h-4 bg-yellow-500 flex items-center justify-center text-white text-xs rounded-sm">
										D
									</div>
								</div>
							</div>
							<p className="text-center text-xs font-medium text-gray-700">
								Word Challenge
							</p>
						</div>

						<div className="flex flex-col items-center flex-shrink-0">
							<div className="bg-white p-4 rounded-xl shadow-sm w-20 h-20 flex items-center justify-center mb-2 border border-gray-100">
								<div className="text-2xl">🏒</div>
							</div>
							<p className="text-center text-xs font-medium text-gray-700">
								NHL® Challenge
							</p>
						</div>
					</div>
				</div>

				<div className="mb-8">
					<h2 className="text-xl font-bold text-gray-800 mb-4">Featured</h2>
					<div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
						<div className="h-40 bg-gradient-to-r from-amber-700 to-amber-500 flex items-center justify-center">
							<div className="text-center text-white">
								<p className="font-bold text-2xl">Buy One, Get One</p>
								<p className="italic">Limited time offer</p>
							</div>
						</div>
						<div className="p-4">
							<h3 className="font-bold text-lg text-gray-800">
								Morning Special
							</h3>
							<p className="text-gray-600 text-sm mt-1">
								Buy any breakfast sandwich and get a coffee free!
							</p>
							<button className="mt-3 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
								View Offer
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
				<div className="flex justify-around items-center h-16">
					<button
						onClick={() => setActiveTab("home")}
						className="flex flex-col items-center w-1/4"
					>
						<div
							className={`h-1 w-16 ${
								activeTab === "home" ? "bg-red-600" : "bg-transparent"
							} mb-1`}
						></div>
						<Home
							size={22}
							className={
								activeTab === "home" ? "text-red-600" : "text-gray-600"
							}
						/>
						<span
							className={`text-xs font-bold mt-1 ${
								activeTab === "home" ? "text-red-600" : "text-gray-600"
							}`}
						>
							Home
						</span>
					</button>

					<button
						onClick={() => setActiveTab("scan")}
						className="flex flex-col items-center w-1/4"
					>
						<div
							className={`h-1 w-16 ${
								activeTab === "scan" ? "bg-red-600" : "bg-transparent"
							} mb-1`}
						></div>
						<QrCode
							size={22}
							className={
								activeTab === "scan" ? "text-red-600" : "text-gray-600"
							}
						/>
						<span
							className={`text-xs font-bold mt-1 ${
								activeTab === "scan" ? "text-red-600" : "text-gray-600"
							}`}
						>
							Scan
						</span>
					</button>

					<button
						onClick={() => setActiveTab("offers")}
						className="flex flex-col items-center w-1/4"
					>
						<div
							className={`h-1 w-16 ${
								activeTab === "offers" ? "bg-red-600" : "bg-transparent"
							} mb-1`}
						></div>
						<Sparkles
							size={22}
							className={
								activeTab === "offers" ? "text-red-600" : "text-gray-600"
							}
						/>
						<span
							className={`text-xs font-bold mt-1 ${
								activeTab === "offers" ? "text-red-600" : "text-gray-600"
							}`}
						>
							Offers
						</span>
					</button>

					<button
						onClick={() => setActiveTab("profile")}
						className="flex flex-col items-center w-1/4"
					>
						<div
							className={`h-1 w-16 ${
								activeTab === "profile" ? "bg-red-600" : "bg-transparent"
							} mb-1`}
						></div>
						<User
							size={22}
							className={
								activeTab === "profile" ? "text-red-600" : "text-gray-600"
							}
						/>
						<span
							className={`text-xs font-bold mt-1 ${
								activeTab === "profile" ? "text-red-600" : "text-gray-600"
							}`}
						>
							Profile
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
