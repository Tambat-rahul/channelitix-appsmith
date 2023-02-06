export default {
  myVar1: [],
  myVar2: {},
	fetchAllData: async () => {
		let records = [];
		let currentCount = 1000;
		let idx = 0;
		while (currentCount == 1000) {
			let fetchedData = await Fetch_Targets.run();
			currentCount = fetchedData.length;
			idx++;
			records = [...records, ...fetchedData];
		}
    const arr = [Object.keys(records[0])].concat(records);
    const data = arr
        .map((it) => {
          return Object.values(it).toString();
        })
        .join("\n");
		download(data ,"AllData.xlsx", "data:text/xlsx");
	}
};