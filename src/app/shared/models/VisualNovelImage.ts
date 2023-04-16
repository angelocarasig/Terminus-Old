export interface IVisualNovelImage {
	id: string;
	url: string;
	dims: Array<number>;
	sexual: number;
	violence: number;
	votecount: number;
}

export class VisualNovelImage implements VisualNovelImage {
	id: string;
	url: string;
	dims: Array<number>;
	sexual: number;
	violence: number;
	votecount: number;
}