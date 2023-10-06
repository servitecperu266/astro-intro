import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const ButtonSubcribe = () => {
	const [subcribe, setSubcribe] = useState(null);

	useEffect(() => {
		subcribe
			? toast.success("Felicidades")
			: toast.error("Ya no estas suscrito");
	}, [subcribe]);

	return (
		<>
			<button
				onClick={() => {
					setSubcribe(!subcribe);
				}}
			>
				{subcribe ? "Estas subcrito" : "No estas subcrito"}
			</button>

			<ToastContainer autoClose={2000} />
		</>
	);
};
