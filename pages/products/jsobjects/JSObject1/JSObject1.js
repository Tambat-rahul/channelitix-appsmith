export default {
	token: () => {
		let token = appsmith.store.authToken
		console.log(token)
		
		if (token == undefined){
			token = "";
		}
		let tokens = token.split(".");
		if (tokens.length > 2){
			let data = JSON.parse(atob(tokens[1]));
			let expr = data["dept_code"];
			switch (expr) {
				case "GAICONTX":
					data = "txapi.channelitix.com";
					break;
				case "COUNTRY_MNG":
					data="govaxxapi.channelitix.com";
					break;
				case "PFASPIRA":
					data="aspiraapi.channelitix.com";
					break;
				case "CIPOPTIMUS":
					data="optimusapi.channelitix.com";
					break;
				case "PFICONCX":
					data="optimusapi.channelitix.com";
					break;
				case "PFICONRX":
					data="iconapi.channelitix.com";
					break;
				case "PFACE":
					data="aceapi.channelitix.com";
					break;
				case "PFASPIRAPLUS":
					data="aplusapi.channelitix.com";
					break;
				default:
					console.log("error occurred");
			}
			return data
		}
		return "";
	}
}