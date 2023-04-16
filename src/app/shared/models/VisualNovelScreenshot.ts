import { VisualNovelRelease } from "./VisualNovelRelease";

export interface IVisualNovelScreenshot {
	thumbnail: string;
	thumbnail_dims: Array<number>;
	release: Array<VisualNovelRelease>;
}

export class VisualNovelScreenshot implements IVisualNovelScreenshot {
	thumbnail: string;
	thumbnail_dims: Array<number>;
	release: Array<VisualNovelRelease>;
}