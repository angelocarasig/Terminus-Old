export interface IVisualNovelTitle {
	lang: string;
	title: string;
	latin: string | null;
	official: boolean;
	main: boolean;
}

export class VisualNovelTitle implements IVisualNovelTitle {
	lang: string;
	title: string;
	latin: string | null;
	official: boolean;
	main: boolean;
}