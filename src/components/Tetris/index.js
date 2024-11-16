import React, { useState } from "react";

import StartPage from "../StartPage";
import Game from "../Game";

const Tetris = () => {
	const [runing, setRuning] = useState(false);
	// TODO: MINT NFT	
	return runing ? (
		<Game stopClick={() => setRuning(false)} />
	) : (
		<StartPage startClick={() => setRuning(true)} />
	);
};

export default Tetris;
