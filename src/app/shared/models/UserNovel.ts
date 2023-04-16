import { UserNovelLabel } from "./UserNovelLabel";
import { VisualNovel } from "./VisualNovel";
import { VisualNovelRelease } from "./VisualNovelRelease";

export interface IUserNovel {
	id: string;
	added: number; // UNIX Timestamp
	voted: number | null; // UNIX Timestamp
	lastmod: number | null; // UNIX Timestamp
	vote: number | null;
	started: string | null; // YYYY-MM-DD Format
	finished: string | null; // YYYY-MM-DD Format
	notes: string | null;
	labels: Array<UserNovelLabel>;
	releases: Array<VisualNovelRelease>;

	vn: VisualNovel;
}

export class UserNovel implements IUserNovel {
	id: string;
	added: number;
	voted: number | null;
	lastmod: number | null;
	vote: number | null;
	started: string | null;
	finished: string | null;
	notes: string | null;
	labels: Array<UserNovelLabel>;
	releases: Array<VisualNovelRelease>;

	vn: VisualNovel;
  }