export function taskFirst() {
	if (true)
	{
		const task = 'I prefer const when I can.';
		return task;
	}
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
	if (true)
	{
		let combination = 'But sometimes let';
		combination += getLast();
		return combination;
	}
}
