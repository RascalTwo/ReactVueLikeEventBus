import React, { useState, useEffect } from 'react';
import { Bus, GLOBAL_BUS } from './Bus.js'

export default function B({ bus }){
	const [ponged, setPonged] = useState(new Date());

	useEffect(() => {
		return (bus || GLOBAL_BUS).listen('ping', setPonged)
	}, [bus]);

	return (
		<p>Content: {ponged.toString()}</p>
	)
}