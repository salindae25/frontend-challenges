export function filterJobs(jobs: Job[], filters: string[]): Job[] {
	const filteredJobs: Job[] = jobs;

	return filteredJobs.filter((job) => compareJobFilter([...job.languages, job.level, job.role, ...job.tools], filters));
}

export function addFilter(filters: string[], category: string): string[] {
	const indexOfItem = filters.indexOf(category);

	if (indexOfItem > -1) {
		filters.splice(indexOfItem, 1);
	} else {
		filters.push(category);
	}
	return filters;
}

function compareJobFilter(compareList: string[], filters: string[]) {
	// check if compareList has all filters
	if (filters.length === 0) {
		return true;
	}

	for (let i = 0; i < filters.length; i++) {
		if (compareList.indexOf(filters[i]) === -1) {
			return false;
		}
	}

	return true;
}
