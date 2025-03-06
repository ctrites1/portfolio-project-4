import { useState } from "react";
import { Home, Scan, Award } from "lucide-react";

const TabMenu = () => {
	const [activeTab, setActiveTab] = useState("home");

	const handleTabChange = (tab: "home" | "scan" | "discover") => {
		setActiveTab(tab);
	};

	return (
		<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 px-4">
			<div
				className="flex flex-col items-center justify-center relative"
				onClick={() => handleTabChange("home")}
			>
				{activeTab === "home" && (
					<div className="absolute -top-2 left-0 right-0 h-1 bg-red-600 rounded-b"></div>
				)}
				<Home
					size={24}
					className={activeTab === "home" ? "text-red-600" : "text-gray-700"}
				/>
				<span
					className={`text-xs mt-1 font-medium ${activeTab === "home" ? "text-red-600" : "text-gray-700"}`}
				>
					Home
				</span>
			</div>

			<div
				className="flex flex-col items-center justify-center relative"
				onClick={() => handleTabChange("scan")}
			>
				{activeTab === "scan" && (
					<div className="absolute -top-2 left-0 right-0 h-1 bg-red-600 rounded-b"></div>
				)}
				<Scan
					size={24}
					className={activeTab === "scan" ? "text-red-600" : "text-gray-700"}
				/>
				<span
					className={`text-xs mt-1 font-medium ${activeTab === "scan" ? "text-red-600" : "text-gray-700"}`}
				>
					Scan
				</span>
			</div>

			<div
				className="flex flex-col items-center justify-center relative"
				onClick={() => handleTabChange("discover")}
			>
				{activeTab === "discover" && (
					<div className="absolute -top-2 left-0 right-0 h-1 bg-red-600 rounded-b"></div>
				)}
				<Award
					size={24}
					className={
						activeTab === "discover" ? "text-red-600" : "text-gray-700"
					}
				/>
				<span
					className={`text-xs mt-1 font-medium ${activeTab === "discover" ? "text-red-600" : "text-gray-700"}`}
				>
					Discover
				</span>
			</div>
		</div>
	);
};

export default TabMenu;
