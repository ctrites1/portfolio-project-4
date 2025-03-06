const TopCards = () => {
	return (
		<div className="flex gap-4 px-4 mb-6">
			<div className="bg-white rounded-lg p-4 flex-1 flex flex-col items-center text-center shadow-sm">
				<div className="w-32 h-24 mb-4">
					<img
						src="/api/placeholder/128/96"
						alt="Tim Hortons Food"
						className="w-full h-full object-contain"
					/>
				</div>
				<h3 className="font-medium text-gray-800">Start an Order for your</h3>
				<p className="text-gray-800">Tims favourites.</p>
			</div>

			<div className="bg-white rounded-lg p-4 flex-1 flex flex-col items-center text-center shadow-sm">
				<div className="flex-1 flex flex-col items-center justify-center">
					<div className="text-5xl font-bold text-red-600 mb-2">1,369</div>
					<div className="text-lg font-medium text-gray-800">Points</div>
					<div className="w-32 h-6 relative mt-2">
						<div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
							<div className="w-3/4 h-full bg-red-600 rounded-full"></div>
						</div>
					</div>
				</div>
				<h3 className="font-medium text-gray-800 mt-2">
					Redeem your points for a
				</h3>
				<p className="text-gray-800">reward!</p>
			</div>
		</div>
	);
};

export default TopCards;
