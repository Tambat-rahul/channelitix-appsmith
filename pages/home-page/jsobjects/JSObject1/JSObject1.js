export default {
	myFun2: async () => {
		let authTokenvalue = appsmith.URL.queryParams.authToken;
		storeValue("token",authTokenvalue);
		navigateTo("main")
	}
}