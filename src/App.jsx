import React, { useEffect, useState } from 'react';

import { Bus } from './Bus';

import A from './A'
import B from './B'

const useBus = (name) => {
	const [bus, setBus] = useState();

	useEffect(() =>
		setBus(new Bus(name))
		, [name]
	);

	useEffect(() =>
		bus ? () => bus.destroy() : undefined
		, [bus]
	);

	return bus;
}

function App() {
	const bus = useBus('AppBus');

	return (
		<main>
			<h1>GlobalBus</h1>
			<A />
			<B />
			<h1>AppBus</h1>
			{bus
				? <>
					<A bus={bus} />
					<B bus={bus} />
				</>
				: null}
		</main>
	);
}

export default App;