import React, { useState, useCallback } from 'react';

import { GLOBAL_BUS } from './Bus.js';


export default function A({ bus }) {
	const [content, setContent] = useState('');

	return (
		<>
			<input placeholder="Message" value={content} onInput={useCallback((e) => setContent(e.target.value), [])} />
			<button onClick={useCallback(() => (bus || GLOBAL_BUS).emit('ping', content), [bus, content])}>
				Send
			</button>
		</>
	)
}