export type booksDetails = {
	id: number,
	title: string,
	author: string,
	year?: number
}
export type SplitScreenProps = {
	leftWeight?: number;
	rightWeight?: number;
	children: React.ReactNode[];
};