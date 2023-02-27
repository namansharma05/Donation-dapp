import './App.css';
import {ethers} from 'ethers';
import {donationDappContractAddress,abi} from './constant';
import { useEffect, useState } from 'react';
import Buy from './components/Buy';
import Memos from './components/Memos';
import chai from './chai.png';

function App() {
	const [state, setState] = useState({
		provider:null,
		signer:null,
		contract:null,
	});
	const [account, setAccount] = useState("");
	const connectWallet = async()=>{
		try {
			const {ethereum} = window;
			if(ethereum){
				const account = await ethereum.request({method:"eth_requestAccounts",})
				setAccount(account);
			} else {
				alert("metamask not found");
			}
			const provider = new ethers.providers.Web3Provider(ethereum);
			const signer = await provider.getSigner();
			const contract = new ethers.Contract(
				donationDappContractAddress,
				abi,
				signer
			);

			setState({provider,signer,contract});
		} catch(err){
			console.error(err);
		}
	}
	useEffect(()=>{
		connectWallet();
	},[]);
	// console.log("state of the app : ",state);
	return (
		<div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
			<img src={chai} className="img-fluid" alt=".." width="100%" />
			<p
				className="text-muted lead "
				style={{ marginTop: "10px", marginLeft: "5px" }}
			>
				<small>Connected Account - {account}</small>
			</p>
			<div className="container">
				<Buy state={state} />
				<Memos state={state} />
			</div>
		</div>
	);
}

export default App;
