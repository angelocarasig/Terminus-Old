import { VisualNovelImage } from "./VisualNovelImage";
import { VisualNovelScreenshot } from "./VisualNovelScreenshot";
import { VisualNovelTag } from "./VisualNovelTag";
import { VisualNovelTitle } from "./VisualNovelTitle";

// Actual vn content, correlates to the actual vn for the user's stats for a given visual novel.
export interface IVisualNovel {
	id: number;
	vndbid: number;
	title: string;
	alttitle: string | null;
	titles: Array<VisualNovelTitle>;
	aliases: Array<string>;
	olang: string;
	devstatus: number;
	released: number | null;
	languages: Array<string>;
	platforms: Array<string>;
	image: VisualNovelImage | null;
	length: number | null;
	length_minutes: number | null;
	length_votes: number;
	description: string | null;
	rating: number | null;
	popularity: number;
	votecount: number;
	screenshots: Array<VisualNovelScreenshot> | null;
	tags: Array<VisualNovelTag> | null;
  }
  

export class VisualNovel implements IVisualNovel {
	id: number;
	vndbid: number;
	title: string;
	alttitle: string | null;
	titles: Array<VisualNovelTitle>;
	aliases: Array<string>;
	olang: string;
	devstatus: number;
	released: number | null;
	languages: Array<string>;
	platforms: Array<string>;
	image: VisualNovelImage | null;
	length: number | null;
	length_minutes: number | null;
	length_votes: number;
	description: string | null;
	rating: number | null;
	popularity: number;
	votecount: number;
	screenshots: Array<VisualNovelScreenshot> | null;
	tags: Array<VisualNovelTag> | null;
}