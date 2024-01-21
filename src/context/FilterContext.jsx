import { createContext, useState, useCallback } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
	const [filterList, setFilterList] = useState([]);

	const handleFilter = useCallback((filter) => {
		setFilterList((prev) => [...prev, filter]);
	}, []);

	const removeFilter = useCallback((filter) => {
		setFilterList((prev) => prev.filter(item => item !== filter));
	}, []);

	const value = {
		filterList,
		setFilterList,
		handleFilter,
		removeFilter
	};

	return (
		<FilterContext.Provider value={value}>
			{children}
		</FilterContext.Provider>
	);
};
