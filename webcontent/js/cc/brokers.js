var brokerDomain = {
  fixapi: "127.0.0.1"
};
var brokerPort = {
  fixapi: ":8080"
};
var brokerProtocol = {
  fixapi: "http://"
};
var shopDomain = {
  fixapi: "fintechee.shop"
};
var brokerName = {
  fixapi: "localhost"
};
var signInShownBrokerName = {
  fixapi: "FIX API Individual Version"
};
var shownBrokerName = {
  fixapi: "FIX API Individual Version"
};
var brokerCtx = [];
brokerCtx[brokerName.fixapi] = {
	brokerName: brokerName.fixapi,
	dataStreamURL: brokerProtocol.fixapi + brokerDomain.fixapi + brokerPort.fixapi,
	dataBaseURL: brokerProtocol.fixapi + brokerDomain.fixapi + brokerPort.fixapi,
	orderStreamURL: brokerProtocol.fixapi + brokerDomain.fixapi + brokerPort.fixapi,
	orderBaseURL: brokerProtocol.fixapi + brokerDomain.fixapi + brokerPort.fixapi,
	shopURL: brokerProtocol.fixapi + shopDomain.fixapi,
	logoURL: "/images/logo.png",
	syncServerSettingStatus: false,
	// server setting
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "Liquidity Provider",
	startEndHour: 21,
	swapCalcHour: 21,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
	// server setting
}
var BROKER_NAME = {
  DEMO: "Fintechee Demo",
  FINTECHEE_DEMO: "Fintechee Demo",
  OANDA_DEMO: "Oanda Demo",
  OANDA_LIVE: "Oanda Live",
  FIXAPI: shownBrokerName.fixapi
}

