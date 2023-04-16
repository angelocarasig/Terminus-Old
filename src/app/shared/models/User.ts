import { UserService } from "src/app/services/user/user.service";
import { UserNovel } from "./UserNovel";
import { VNDBService } from "src/app/services/vndb/vndb.service";

export interface IUser {
	loginMode: string;
	uid: number;
	username: string;
	apiToken: string | null;
	ulist: Array<UserNovel> | null;

	verifyUser(): Promise<boolean>;
	verifyToken(): Promise<boolean>;
	setUList(): void;
}

export class User implements IUser {
	loginMode: string;
	uid: number;
	username: string;
	apiToken: string | null;
	ulist: Array<UserNovel> | null;
	
	constructor(private userService: UserService, private vndbService: VNDBService, loginMode: string, username: string, apiToken?: string) {
		this.loginMode = loginMode;
		this.username = username;
		this.apiToken = apiToken ?? null;
	}

	public async verifyUser(): Promise<boolean> {
		return this.userService.verifyUser(this);
	}
	  
	  public async verifyToken(): Promise<boolean> {
		return this.userService.verifyToken(this);
	}

	public async setUList(): Promise<void> {
		this.ulist = await this.vndbService.getUList(this);
	}
  }