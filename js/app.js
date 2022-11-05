const WALLETS = [
	'0x31b069967fdfbb606b816dc25a3adbf487213507',
	'0x0658461e6eef857b66281b5f49ed435dca1f5d37',
	'0x0812405fc0c730750777dfd59ab050de1fac9cd3',
	'0x99a4a82409b2304c483925605b08ea677470a351',
	'0x2c47566a6d1640bfe0aa57fd7ea82c1b07a6e596',
	'0x17b5461b85a78a80e92c00c1d30d76696c793ebc',
	'0xeb42ad9ebb7f6404cf1054661c8830a60e10b1ef',
	'0x248ef94e18bc3907769997f4bdd8254601d37f79',
	'0xc1c584f4d3a573e5f6f27e7c4286a152ddbf117d',
	'0x51f78531076222241f496780f816fd325ac92d78',
	'0x32c75a8b5302555cd9a8ffb50b983e2dbb51d4d9',
	'0x2d1cf235aed9e6419e7ad5fc435737385b1414ed',
	'0xf18e35ba84c8e80c56be7dee5c13ebbd4ba2dff9',
	'0x2006d6eaed1ae4bb8ad6afe85e6595adbd20c9ef',
	'0xce9c7da2c0c69ead24936f135eb0ba378a0ca183',
	'0x7169a54d2b534501ba4c3294da2c513413924f3f',
	'0x2f19179f57cc32d11020f32281aa8ba328eadb01',
	'0xbe819ae8a9dc6a0b17ceb68702ad3018f098becd',
	'0xb32919390ee351ffa74f1951e11b48fbf68081a8',
	'0x7d7cb85d3b2ec4a6ccb98109246e95140b491109',
	'0xb9095a2ab32e835a3aa0779104bc5f5a8ffb3dbb',
	'0x00cb2d3fde5e1b9241cc75a9db923d2af481cb0c',
	'0x31bc2bef7f881495e4dd6efa2ed9a8aae368633a',
	'0x86fd2a37526bc000c69ac5ee2be2885c91aad8c3',
	'0x112ffb55dc8bcbf118733595fa36bf93e7307320',
	'0x3b78570b0a540666d96bb21ed325b6536b3326d0',
	'0xd5260e2423b818568481cf1c4dc9ca193f790bfe',
	'0xe48f16ef4b449036179430c9f22020842b8b6354',
	'0x21a351f75bac534aa68e8b56ffae13636b3365f3',
	'0x57682457fb85063a00129b97d72ba753ee6dca9d',
	'0x1d3946a6161dee344ec99ffe37117dc8bb64914f',
	'0xd36f33aeb9d62129a48d4246f0d5cd0b3488f749',
	'0x687a7373748bb3f4d0ae000994d47903b33201d2',
	'0xdd6ee26c836796ae51a2b06438647c048d2e1484',
	'0xc108531f8695ae33658599fe07698f0fed845137',
	'0x8a202ba234fe0e6bcbb73a0d8e47d82ac67aa9e4',
	'0x941686cede6e0940fe086a01e68723c76e8eddeb',
	'0x8e2938d0bdca59b0dfb56ba5775fae5267fb72d4',
	'0x0398f0b52e06b80fb982d78382c559693823f396',
	'0xf9fc7667e6feb05b6ff72b83a3556079e7bec8e6',
	'0xf467d1ba23705b7120b17567123089c1b363890c',
	'0xfa381c9c7bde2d3ee5b8b5c526bc60075ea964f0',
	'0xab6b795fdea7e63f5d0f7a2deff52516c33a49f5',
	'0x3d8b3e9ea162be79994ffafcb98ae756e0af1f81',
	'0xee5564ebf93cbf26d44618656b0ff65ad8b86f1e',
	'0x86a7dd87c2cde541bf739d4225c9720bfcc2ffc5',
	'0x166d4ce9de561eb5417c45e4ad0d1337578056b8',
	'0xe768b7fd0009a46298ae3a46423bb0b1500603a3',
	'0x430c1a61dc24ec0a162bb5fe65c9c45249475f59',
	'0x76d2c1658ffb7a5387bfecff78edcb4710d0635f',
	'0xcd6c6783a354d007fd3c3645cadd5e514024c8f8',
	'0x2bf447f4a808d6fe3ea8666ece370ca13a692de1',
	'0x137a43d52e514e31861dcf0c5cb8180215a75e50',
	'0x7a78f74959fc6ec2050443afacd712125bfe1864',
	'0xc09cc587ae285cc4e1e02bb51a4b26262f2aca15',
	'0x663a7516021888310e99b60665c2f542b49e8b00',
	'0xbdb2d1b5a5b57ee7bdbca88285791953affc8326',
	'0xcbd83ef3b93ac17ee320b79328d6033257c3cc14',
	'0xc459abf5535410c8f9769a002d7c2eb6e5e744bb',
	'0x052de8c78cc9cf148a1bbc3dc745e84b52e38b56',
	'0xd198432416faa96532a563380bf5f8727aa60dc3',
	'0xa9f71701283c0bd07fcc46901476fc19dbad2888',
	'0x1d068830109cf4d6ab892d3ff4a9bb37d9f42453',
	'0x8cbaa20e14d80ef855444dc2e659ea98f44ce6a4',
	'0x6bee192e87969858c0ae8ba27c9d0468c54bbb16',
	'0xaf684038b4e6d41db4347e7becce7b9c8e3a4b99',
	'0x4d9f79bc8e8e44463d0f05acc5a500179dab19dd',
	'0x4c8af9667d5560819676dd63d4f3af3419929f79',
	'0x2165bbfc6fb352322ae24523302d07560c29d2dd',
	'0x66441ab723b019b6fd422ee1e78b3be3122e53a3',
	'0x1842abfb7efaf55af685a0450fe33387492eeb93',
	'0x499fd9efe8f4d17d499af501ecf2c1fcdf7703fb',
	'0x809754adf6b1b0ab9eaf64ed38937fb379a3e214',
	'0x807bde1562e616a8f3a2c9bb2c38c81a67e54316',
	'0x9a490487aae36daef00f0b7927cbad1a8c5d7ac5',
	'0x0cbd0ae466f1146e64a6062ca91763512788c3a3',
	'0xc493fd8f562333316bce1de30693a644a5a795aa',
	'0xcdc3c539f6d1aa01f4089042387c7e761e2f8415',
	'0x1370831b9b66835c6a69465c6f15b6fe4474888c',
	'0xc196f462cf014c1640c0c42a8e66480b82023723',
	'0x39408dc763ac0c28cc46869070e884be55f5e7f4',
	'0x74cdb857ef9d6bdde292e18b18619cde397b608c',
	'0x4f73816c66853e50c7660f2114eb63e356de2235',
	'0xf1be1cc61f6c4ece8f4c492de65f3c6355ff7e6f',
	'0x1f80998a42f38f4e9bc4df0af4bb19efea01b74a',
	'0xcde0fae027a0eefca35f4a33fd0f0bfadc61d124',
	'0xa081b1e88c700944d18bf021c2e59b7ca97fd3e0',
	'0xe76ef9b9f5c55037c3c158a288d22936b2beb964',
	'0x3f487a6654044f1dbcb928e2c8e715295244de11',
	'0xfae21c090f32a742ea9f9400ba736468354d81b5',
	'0x6911205162568a20a3fb5974f3f42498cf64683b',
	'0xe2c9ea4010e8cabafc7831fa316d43758e51fa30',
	'0xf860521a80ef64fed576f6bf7165a06cd11d64bd',
	'0x2022ad12cb58fe6eec50d104d38556b6dfa0b400',
	'0x2fcd98c69403d66beee1a426da05b1ab4907bbcb',
	'0xc0214c275a0ace517bfb7bd0bfd267f1bb923ddb',
	'0x20b6aa367de75cc6c7a6d091b66c3e7dc44999d1',
	'0xb23c6de16ebbc5f10e8f415685600a2c537458a5',
	'0xcfc580f2250ef038a0a03c286f83f0afae3d6ebd',
	'0xd466da1de72e0477e912253fe4aaa3745f77a10e',
	'0xa340232c2728cb8c483269e26d9e87db9e94a146',
	'0x5f4ac12a13fcf8ce007ce48e3980bb3c1aef22e7',
	'0xfde002d6726423923a7d747db851eb7523821f48',
	'0xeafc1aeacae73bfbeee714526b1ca771304d332c',
	'0x068ef2b9bbfe0439fee34992d3f8ed0e68e37f81',
	'0xebf826b00c1972862d95e79b25e9387023e71c4e',
	'0xa46aa57cdd6e4b1346cd572ee76ee6d133008e59',
	'0x78f707fa8fa5b71deb4121be085632d89d9862ef',
	'0x236be5d5d11c5bb7c4c1610ef4cd01bcf47696ee',
	'0x5d862097b246225d33bb792e4152716546aa2364',
	'0xaf35a01d64ccd6caccc6b096dfa375330b0bab9f',
	'0x63805227b438116819d747c26e6fc354b22dc5c5',
	'0xe91f0c716104e80fd613f7b3ee7568296ee28f47',
	'0x46c37599bc7da10dfe91ff29a310c7bdf980e007',
	'0xa65d4309fded9b4cecfd3f53ef8b9cca98ce9d1e',
	'0x4a77d66c981272ba370461a6cf283b493689cd01',
	'0x3ea284eaee8979d5e74101337587728da4a30443',
	'0xdba5e1c7da682f0d0ee7274222ce095d30c0032e',
	'0x4406a79eb38cbe89adce14629dbf2ace4baa8872',
	'0x25f82667872cfeeb6295b9e4250f6e7b8a381d39',
	'0x2cab1a923eb9df2fb17f30668accd559cbcf2a85',
	'0x90263af644fb8bfabcb1bf102e5dc398d3de1de4',
	'0x521b80dc11d48b5c5ebc9b3e8dc3b91fdcb38ccd',
	'0xd851cd35afaf8129d4ea11e0b228971711c1d82e',
	'0x844d42823877453b339ef14da3fb3f3a5f8e9793',
	'0x4e07c08c110cca1ed939058f84d3e44bcbf38519',
	'0xe948c063467aa81bab0567bf38c28e3665a5fe20',
	'0xbc26540058286424b77a5d50fda8d4757076e649',
	'0x5adf7ab539fd42d50844f9e38aeab948315414f1',
	'0xa168ca222d844f38e7544f5027136c5b455e5d87',
	'0xac66e2be8859424c0a9441a5bed202192f3ff05f',
	'0x0c505256ad5fc4ae5046686fc4047e6218f4173c',
	'0xaa7cbf92f2b9e32cb56243f33a0f485071967e01',
	'0xfb63b54647ef38f75a75f22199892cabefe906b1',
	'0x5c71d516e476742b675e49202329233e4d077b2c',
	'0x4c9fdd978fa7ed3704af9b12685389945e272a73',
	'0x5ac400b5378a7751560c489f5958f03ed6d5292c',
	'0x686f68f0db68e3e51617a9ac217292e83dee8e70',
	'0x0ffd3cf1f43a8bdba4408fe95654796cf498248f',
	'0x55f510938a63558f1dc9cc08802ca201037b8c8c',
	'0x084c83988589f58327dc9677166374e827b4d3d0',
	'0x50126fb3f6e6d50c53879093e3bd52d29e2abf12',
	'0x3172a4b5e8541894706f7623a648a2f0e2850b90',
	'0xd42bd14f67b333d14ef5d3bc1f8f340f1e9a3b62',
	'0xfd6831ccc01d652f6898cf37df683af5979dd0c1',
	'0x93b2e4b9627e288439680db9ad60d0e9b0e1c2cc',
	'0xa3937be0c5815019097c86f18ddeba08e89b86b8',
	'0x16a10f5e28a728ee697d663f4c4f534c2283e6ac',
	'0xb7f35372e3f5bf97f1a082c455b46c658ccfbef0',
	'0xf07cf65631468823c5db91cfed5c10f530983cda',
	'0x62b59f85e75f60170f517627c6a91321f5472485',
	'0x1de279ae00e3659a6a513b31a85dc88427e08f9e',
	'0x3bd7b2bf9046afd360ca08b357fddd12ff563b95',
	'0xd6c58b761c7328567d9b46ddce37d24d374f6a64',
	'0x7deab2e965e337154e1fff1764a913e18f88a179',
	'0xbf4d1178c0cd9276e3b46b210b4c249eb8d3ea10',
	'0x68a7cd92b82edce3e686cad9e1d671c2502bd04f',
	'0x4ed371c93bffc8418d25eabe9deec6b660f6e4df',
	'0xf8bc50048cf7a4297d93043476bf6db7c9106d10',
	'0x731c889ca055ab7b48753bfeb7be151b8df4a48d',
	'0x8da4237aa88dde40bc31d7a450a488873b064e6b',
	'0xbe2210a4cfecf2cd3369a9d5386032e89e2ee0e5',
	'0xd020e5408049fb8a4570f782b7e24c2d45741c83',
	'0x6292fcc3a90ca0f6c9f99178ba55905da11bb9ff',
	'0xb544bfc6fcba4d4cc0f2e99153adf4ab58402a81',
	'0x6aed53c718ebe7095e010a7d15ca490d3e8054e9',
	'0x0a5eb7d88be4b52f7f3888f9a3a59abf039ecb4a',
	'0xfaf1e442ba4039c4326d0c2e8ce08c58724ab61c',
	'0x083da1428d0a5205eb685ad9d1ebd2d82f735a64',
	'0x6f104d327ea40a6ff2ae16077d6a7f7b83ae7f8f',
	'0xc3d7cf016d9d9e4dd49e4059af3407be7d3d52b2',
	'0x1e07ff3ff8938e66016ced0011c4adad32fa6d04',
	'0x962fb87dff64ac83bebe64c5cda49489bdc2024f',
	'0x91df0c4faaa732692f19e966a3ec2c052b088525',
	'0x48a091191292855ac190f63b0286264195e284d2',
	'0x6d1d5d9e1d2f8de92ec0b2be9362dc2b0f4df19d',
	'0x9eb76250dc21e6833151ba32c2e856dfb5466918',
	'0x6dec20c32ed78011202d8ba3ffae19b28ba579bf',
	'0x00c942df511c55bfcb81c10db01c59a63de4b2cb',
	'0x698915e59017ad96d944b64b8a718d5598b127c7',
	'0x4bcc1474ec4ddad9bac9ff1a1e5e4b877e59721f',
	'0xe87f812d207f69bc0d11bb6df00b0f935a0b9198',
	'0x067cb0e083c8c4d4b19f50ef6dbf6e1bba22f765',
	'0x696e91531216bd84f034affb7beb08ee22192229',
	'0x8695871944a6f8981c76bc1089019946babf0ce5',
	'0x651edf419d4a3f8ab93183aeca55e2523f54a048',
	'0xc5adef1d0380fff414ebd6c77209f8e2b2e900b9',
	'0x2155c2a16a36726c2af216c80b736a10d5a53e32',
	'0x2d2c6933f756d116578dfa293bec39c38d1316a6',
	'0x4493d9d3fcdef061a8a730469730d058a704e8df',
	'0xf2f0e7472c9731a0a73565424b0c46efe6a4aa81',
	'0xa8b76228dd513baa1bd9714e7388a41f362652fb',
	'0xf1c466d9e101c03709ed7fa387ebeecdb631b8f9',
	'0x706292c3e0df97978b5da60adbd851a3cf16787b',
	'0xb9589d5a7263fa3e7497dd0c0f52ba97dd68360e',
	'0x28f91e88b4ff7ba5ba83e34a8f28939d2e95ae6c',
	'0x278613a808eddf05503f31117812e4f188fcd113',
	'0x214bc65a786b4097450c5d57b7c2095781399c73',
	'0xc8ac0f6d3c576bfafd3998e0143478ed3b9c6d2e',
	'0x0a1963dce2db2aa6b17c899ec98e652c4ccd6bf6'
];
const TRANSACTIONS = {
	 '0xf1c466d9e101c03709ed7fa387ebeecdb631b8f9': [
		 {from: '0x64A7c1569E5749c3c067656eeaa2Cb71D2AAaf49', amt: 400, ts: 1653766271002},
	 ],
	 '0x1Ac396096AB44b2a1B5FA2ed62b15093133B61D4': [
		 {from: '0x64A7c1569E5749c3c067656eeaa2Cb71D2AAaf49', amt: 400, ts: 1647933533525},
		// {from: '0x64A7c1569E5749c3c067656eeaa2Cb71D2AAaf49', amt: 200, ts: 1647860444083},
	 ],
	 '0xDf0C62B3619accf51e6960Ea9078Fa10F1ddc0bF': [
		 {from: '0x64A7c1569E5749c3c067656eeaa2Cb71D2AAaf49', amt: 300, ts: 1650273453666},
		// {from: '0x64A7c1569E5749c3c067656eeaa2Cb71D2AAaf49', amt: 200, ts: 1647860444083},
	 ]
};

let _scope;

const app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.user = getWallet();
	$scope.balance = 0;
	$scope.transactions = {};

	for (let i = 0; i < WALLETS.length; i++) {
		const key = WALLETS[i];

		if (key in TRANSACTIONS) {
			$scope.transactions[key] = TRANSACTIONS[key];
			$scope.transactions[key].forEach(trx => {
				trx.ts = moment(trx.ts).fromNow();

				if ($scope.user == key) $scope.balance += trx.amt;
			});
		}

		else {
			$scope.transactions[key] = [];
		}
	}

	$scope.createWallet = function() {
		$scope.user = newWallet();
	}

	_scope = $scope;
});

function getWallet() {
	const wallet = localStorage.getItem('wallet');
	
	if (wallet == undefined || wallet == null) return null;
	else return wallet;
}

function newWallet() {
	let indexes = localStorage.getItem('indexes');

	if (indexes == undefined || indexes == null) indexes = [];
	else indexes = JSON.parse(indexes);

	let key = null;
	while (true) {
		const index = Math.floor(Math.random() * (WALLETS.length - 1 + 1));
		// console.log(index);
		
		if (indexes.indexOf(index) == -1) {
			key = WALLETS[index];
			// console.log(key);


			indexes.push(index);
			localStorage.setItem('indexes', JSON.stringify(indexes));
			localStorage.setItem('wallet', key);

			break;
		}
	}

	if (key == null) return WALLETS[0];
	return key;
}

function createWalletDirect() {
	_scope.createWallet();
	_scope.$apply();
}

function withdraw() {
	const wUser = document.getElementById('wUser').value.trim();
	if (wUser == '') return alert('Please enter the username or email linked to your account');

	const wAmount = document.getElementById('wAmount').value;

	if (wAmount == '' || isNaN(wAmount)) return alert('Please enter a valid amount');
	else if (_scope.balance == 0) return alert('You don\'t have a balance');
	else if (wAmount > _scope.balance) return alert('Insufficient balance for withdrawal');
	else if (wAmount < 1000) return alert('Minimum withdrawal amount is 1000 USDT');
	else alert('Withdrawal request submitted');
}
