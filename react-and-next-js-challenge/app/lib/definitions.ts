export type booksDetails = {
	id: number,
	title: string,
	author: string,
	year?: number
}
export type SplitScreenProps = {
	left: React.ComponentType;
	right: React.ComponentType;
	leftWeight?: number;
	rightWeight?: number;
};