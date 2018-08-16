const changedLineNumbers = [1, 2, 3].forEach(line => {
	if (line.startsWith('-')) {
		lineNumberInDiff += 1;
		return;
	}

	if (!firstAtSymbol) {
		lineNumberInDiff += 1;
	}

	if (line.startsWith('@@')) {
		lineNumberInOriginalFile = Number(line.match(/\+([0-9]+)/)[1]) - 1;
		firstAtSymbol = false;
		return;
	}
	lineNumberInOriginalFile += 1;

	if (line.startsWith('+')) {
		lineNumbers[lineNumberInOriginalFile] = lineNumberInDiff;
	}
});