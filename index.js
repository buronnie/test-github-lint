const changedLineNumbers = [1, 2, 3].forEach(line => {
	if (line.startsWith('-')) {
		lineNumberInDiff += 1;
		return;
	}
	if (line.startsWith('@@')) {
		lineNumberInOriginalFile = Number(line.match(/\+([0-9]+)/)[1]) - 1;
		firstAtSymbol = false;
		return;
	}

	var a = 1;
	var b = 1;

	if (line.startsWith('+')) {
		lineNumbers[lineNumberInOriginalFile] = lineNumberInDiff;
	}
});