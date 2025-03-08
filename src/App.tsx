import {
	User,
	ShoppingBag,
	Heart,
	Gift,
	MapPin,
	Home,
	Coffee,
} from "lucide-react";

const App = () => {
	return (
		<div className="flex flex-col h-screen">
			{/* Main content */}
			<div className="flex-1 overflow-auto px-6 pb-20 pt-10">
				{/* Welcome section */}
				<div className="mb-6">
					<h1 className="text-3xl font-bold text-gray-800">
						Welcome to{" "}
						<span className="text-tims-red italic font-bold">Tims</span>
					</h1>
					<p className="text-gray-700 mt-2">
						Join now to order ahead, earn rewards, and enjoy exclusive offers.
					</p>
					<div className="flex mt-4 space-x-4 items-center">
						<button className="bg-tims-red text-white px-8 py-3 rounded-md font-bold">
							Join now
						</button>
						<button className="text-tims-red font-bold py-3">Sign In</button>
					</div>
				</div>

				{/* Order and Rewards cards */}
				<div className="grid grid-cols-2 gap-4 mb-6">
					<div className="bg-white p-4 rounded-xl shadow-sm">
						<h2 className="text-xl font-bold text-gray-800 mb-2">Order</h2>
						<div className="flex justify-center mb-4">
							<Coffee size={64} className="text-tims-red" />
						</div>
						<p className="text-center text-gray-700 text-sm">
							Start an Order for your Tims favourites.
						</p>
					</div>

					<div className="bg-white p-4 rounded-xl shadow-sm">
						<h2 className="text-xl font-bold text-gray-800 mb-2">Rewards</h2>
						<div className="flex flex-col justify-center items-center mb-4 h-[64px]">
							<div className="text-4xl font-bold text-tims-red">0</div>
							<div className="text-sm font-medium">Points</div>
						</div>
						<p className="text-center text-gray-700 text-sm">
							Earn points with every order
						</p>
					</div>
				</div>

				{/* Feature grid */}
				<div className="grid grid-cols-4 gap-4 mb-6">
					{/* Row 1 */}
					<div className="flex flex-col items-center">
						<div className="bg-white p-4 rounded-xl shadow-sm w-16 h-16 flex items-center justify-center mb-2">
							<div className="w-10 h-6 bg-gray-800 rounded"></div>
						</div>
						<p className="text-center text-xs font-medium">Tims Financial</p>
					</div>

					<div className="flex flex-col items-center">
						<div className="bg-white p-4 rounded-xl shadow-sm w-16 h-16 flex items-center justify-center mb-2">
							<div className="w-8 h-8 bg-yellow-400 rounded-lg transform rotate-45"></div>
						</div>
						<p className="text-center text-xs font-medium">Offers</p>
					</div>

					<div className="flex flex-col items-center">
						<div className="bg-white p-4 rounded-xl shadow-sm w-16 h-16 flex items-center justify-center mb-2">
							<div className="w-8 h-8 text-red-500">🛵</div>
						</div>
						<p className="text-center text-xs font-medium">Delivery</p>
					</div>

					<div className="flex flex-col items-center">
						<div className="bg-white p-4 rounded-xl shadow-sm w-16 h-16 flex items-center justify-center mb-2">
							<div className="w-8 h-8 text-amber-700">🛍️</div>
						</div>
						<p className="text-center text-xs font-medium">TimShop</p>
					</div>

					{/* Row 2 */}
					<div className="flex flex-col items-center">
						<div className="bg-white p-4 rounded-xl shadow-sm w-16 h-16 flex items-center justify-center mb-2">
							<Heart size={24} className="text-tims-red" />
						</div>
						<p className="text-center text-xs font-medium">Community</p>
					</div>

					<div className="flex flex-col items-center">
						<div className="bg-white p-4 rounded-xl shadow-sm w-16 h-16 flex items-center justify-center mb-2">
							<div className="grid grid-cols-2 gap-1">
								<div className="w-3 h-3 bg-red-500 flex items-center justify-center text-white text-xs">
									W
								</div>
								<div className="w-3 h-3 bg-amber-700 flex items-center justify-center text-white text-xs">
									O
								</div>
								<div className="w-3 h-3 bg-red-800 flex items-center justify-center text-white text-xs">
									R
								</div>
								<div className="w-3 h-3 bg-yellow-500 flex items-center justify-center text-white text-xs">
									D
								</div>
							</div>
						</div>
						<p className="text-center text-xs font-medium">
							Tims Word Challenge
						</p>
					</div>

					<div className="flex flex-col items-center">
						<div className="bg-white p-4 rounded-xl shadow-sm w-16 h-16 flex items-center justify-center mb-2">
							<div className="w-8 h-8 text-amber-700">🏒</div>
						</div>
						<p className="text-center text-xs font-medium">
							Tims NHL® Challenge
						</p>
					</div>

					<div className="flex flex-col items-center">
						<div className="bg-white p-4 rounded-xl shadow-sm w-16 h-16 flex items-center justify-center mb-2">
							<Gift size={24} className="text-tims-red" />
						</div>
						<p className="text-center text-xs font-medium">Give</p>
					</div>

					{/* Row 3 */}
					<div className="flex flex-col items-center">
						<div className="bg-white p-4 rounded-xl shadow-sm w-16 h-16 flex items-center justify-center mb-2">
							<MapPin size={24} className="text-red-500" />
						</div>
						<p className="text-center text-xs font-medium">
							Restaurant Locator
						</p>
					</div>

					<div className="flex flex-col items-center">
						<div className="bg-white p-4 rounded-xl shadow-sm w-16 h-16 flex items-center justify-center mb-2">
							<div className="w-8 h-8 text-amber-800">🤝</div>
						</div>
						<p className="text-center text-xs font-medium">Join our team</p>
					</div>
				</div>
			</div>

			{/* Bottom navigation */}
			<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
				<div className="flex justify-around items-center h-16">
					<div className="flex flex-col items-center">
						<div className="h-1 w-16 bg-tims-red mb-2"></div>
						<div className="flex flex-col items-center">
							<Home size={24} className="text-tims-red" />
							<span className="text-xs font-bold text-tims-red mt-1">Home</span>
						</div>
					</div>

					<div className="flex flex-col items-center">
						<div className="flex flex-col items-center">
							<div className="w-6 h-6 border-2 border-gray-800 rounded mt-1"></div>
							<span className="text-xs font-bold text-gray-800 mt-1">Scan</span>
						</div>
					</div>

					<div className="flex flex-col items-center">
						<div className="flex flex-col items-center">
							<User size={24} className="text-gray-800" />
							<span className="text-xs font-bold text-gray-800 mt-1">
								Profile
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
