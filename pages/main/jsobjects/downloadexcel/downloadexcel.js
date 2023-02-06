export default {
	Myfun2: () => {
    const excelRows = Fetch_Targets.data;
    const objArr = [];
    const headers = excelRows[0].split(',');
        for(let i = 1; i < excelRows.length; i++) {
            const rowObj = {};
            objArr.push(rowObj);
            const rowArr = excelRows[i].split(',');
            rowArr.forEach((val, index) => {
                rowObj[headers[index]] = val;
            });
        }
    download(objArr, "AllData.xlsx", "data:text/xlsx")
}
}