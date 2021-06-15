import React, { useState, useEffect, useMemo } from 'react';

import { GLOBAL_BUS } from './Bus.js'


const useBusMessage = (bus, initialValue) => {
	const [message, setMessage] = useState(initialValue);

	useEffect(() =>
		(bus || GLOBAL_BUS).listen('ping', setMessage)
		, [bus]
	);

	return message;
}

export default function B({ bus }) {
	const message = useBusMessage(
		useMemo(() => bus || GLOBAL_BUS, [bus]),
		useMemo(() => new Date(), [])
	);

	return (
		<p>Content: {message.toString()}</p>
	)
}