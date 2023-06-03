export type Mods = Record<string, boolean | string | undefined>;

export const classes = (
	cls: string,
	mods: Mods = {},
	additional: Array<string | undefined> = [],
): string => {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter(([classname, value]) => Boolean(value))
			.map(([classname]) => classname),
	].join(' ');
};