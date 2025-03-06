import { UserCircle, Plus } from "lucide-react";

const AppBar = ({ username = "Christine" }) => {
	return (
		<div className="pt-6 px-6 pb-2 bg-white">
			<div className="flex justify-between items-start">
				<div>
					<div className="text-3xl font-bold text-stone-800">Good morning,</div>
					<div className="text-3xl font-bold text-stone-800">{username}.</div>
				</div>

				<div className="flex gap-3">
					<button className="w-10 h-10 flex items-center justify-center rounded-full">
						<Plus size={24} className="text-stone-800" />
					</button>

					<button className="w-10 h-10 flex items-center justify-center rounded-full">
						<UserCircle size={28} className="text-stone-800" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default AppBar;
