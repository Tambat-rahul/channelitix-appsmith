export default {
	myVar1: [],
	myVar2: {},
	myFun2: async () => {
		var deptCode = {
			"ICONTX" : "txapi",
			"ICONCX" : "cxapi",
			"CIPLA" : "chlapi"
		};
		var data = {}

		
		var authToken = appsmith.URL.queryParams.authToken;
	  data = JSON.parse(atob(authToken.split('.')[1]));
		var orgCode = data.org_code;
		storeValue("main",deptCode[orgCode]);
	}
}