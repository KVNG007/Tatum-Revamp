import React, { createContext, useCallback, useState } from "react";

export const MouseContext = createContext({
	cursorType: "",
	cursorChangeHandler: () => {},
});

const MouseContextProvider = (props) => {
	const [cursorType, setCursorType] = useState("");

	const cursorChangeHandler = useCallback((cursorType) => {
		setCursorType(cursorType);
	}, []);

	return (
		<MouseContext.Provider
			value={{
				cursorType: cursorType,
				cursorChangeHandler: cursorChangeHandler,
			}}>
			{props.children}
		</MouseContext.Provider>
	);
};

export default MouseContextProvider;
