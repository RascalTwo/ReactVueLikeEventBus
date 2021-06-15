import React, { useEffect, useState } from 'react';

import { Bus } from './Bus';

import A from './A'
import B from './B'


function App() {
	const [bus, setBus] = useState();
	
	useEffect(() => {
		setBus(new Bus('AppBus'));
	}, []);

  return (
    <main>
			<h1>GlobalBus</h1>
			<A/>
			<B/>
			<h1>AppBus</h1>
			{bus
				? <>
						<A bus={bus}/>
						<B bus={bus}/>
					</>
				: null}
    </main>
  );
}

export default App;