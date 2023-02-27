'use client'

import { useState, useEffect, useRef } from "react";

const useIntersectionObserver = (ref, options = {} ) => {

	const [isIntersecting, setIsIntersecting] = useState(false);
	const observerRef = useRef(null);
	useEffect(() => {
		if (!ref.current) return;
		const handleIntersect = (entries) => {
			setIsIntersecting(entries[0].isIntersecting);
		};

		observerRef.current = new IntersectionObserver(handleIntersect, options);
		observerRef.current.observe(ref.current);

		return () => {
			observerRef.current.disconnect();
		};
	}, [ref, options]);

	return isIntersecting;
}
export default useIntersectionObserver;
