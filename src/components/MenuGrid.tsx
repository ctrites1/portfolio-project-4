import {
	Coffee,
	Tag,
	Truck,
	ShoppingBag,
	Heart,
	Gift,
	MapPin,
	Users,
	Grid,
} from "lucide-react";

interface MenuGridItemProps {
	icon: React.ReactNode;
	label: string;
}

const MenuGridItem = ({ icon, label }: MenuGridItemProps) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm">
				{icon}
			</div>
			<span className="text-xs text-center text-gray-800">{label}</span>
		</div>
	);
};

// Menu Grid
const MenuGrid = () => {
	return (
		<div className="px-4 mb-6">
			<div className="grid grid-cols-4 gap-6 mb-8">
				<MenuGridItem
					icon={
						<div className="w-8 h-8 bg-red-100 rounded-md flex items-center justify-center">
							<Coffee size={20} className="text-red-600" />
						</div>
					}
					label="Tims Financial"
				/>
				<MenuGridItem
					icon={
						<div className="w-8 h-8 bg-yellow-100 rounded-md flex items-center justify-center">
							<Tag size={20} className="text-yellow-600" />
						</div>
					}
					label="Offers"
				/>
				<MenuGridItem
					icon={
						<div className="w-8 h-8 bg-red-100 rounded-md flex items-center justify-center">
							<Truck size={20} className="text-red-600" />
						</div>
					}
					label="Delivery"
				/>
				<MenuGridItem
					icon={
						<div className="w-8 h-8 bg-amber-100 rounded-md flex items-center justify-center">
							<ShoppingBag size={20} className="text-amber-600" />
						</div>
					}
					label="TimShop"
				/>
			</div>

			<div className="grid grid-cols-4 gap-6 mb-8">
				<MenuGridItem
					icon={
						<div className="w-8 h-8 bg-red-100 rounded-md flex items-center justify-center">
							<Heart size={20} className="text-red-600" />
						</div>
					}
					label="Community"
				/>
				<MenuGridItem
					icon={
						<div className="w-8 h-8 bg-orange-100 rounded-md flex items-center justify-center">
							<Grid size={20} className="text-orange-600" />
						</div>
					}
					label="Tims Word Challenge"
				/>
				<MenuGridItem
					icon={
						<div className="w-8 h-8 bg-amber-100 rounded-md flex items-center justify-center">
							<Coffee size={20} className="text-amber-600" />
						</div>
					}
					label="Tims NHL® Challenge"
				/>
				<MenuGridItem
					icon={
						<div className="w-8 h-8 bg-red-100 rounded-md flex items-center justify-center">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="text-red-600 w-5 h-5"
							>
								<path d="m6 9 6 6 6-6" />
							</svg>
						</div>
					}
					label="Roll Up To Win"
				/>
			</div>

			<div className="grid grid-cols-3 gap-6">
				<MenuGridItem
					icon={
						<div className="w-8 h-8 bg-red-100 rounded-md flex items-center justify-center">
							<Gift size={20} className="text-red-600" />
						</div>
					}
					label="Give"
				/>
				<MenuGridItem
					icon={
						<div className="w-8 h-8 bg-red-100 rounded-md flex items-center justify-center">
							<MapPin size={20} className="text-red-600" />
						</div>
					}
					label="Restaurant Locator"
				/>
				<MenuGridItem
					icon={
						<div className="w-8 h-8 bg-amber-100 rounded-md flex items-center justify-center">
							<Users size={20} className="text-amber-600" />
						</div>
					}
					label="Join our team"
				/>
			</div>
		</div>
	);
};

export default MenuGrid;
