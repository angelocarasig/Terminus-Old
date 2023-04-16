import { UserService } from "src/app/services/user/user.service";

export interface IUser {
	loginMode: string;
	uid: number;
	username: string;
	apiToken: string | null;

	verifyUser(): Promise<boolean>;
	verifyToken(): Promise<boolean>;
	setUser(): void;
}

export class User implements IUser {
	loginMode: string;
	uid: number;
	username: string;
	apiToken: string | null;
  
	
	constructor(private userService: UserService, loginMode: string, uid: number, username: string, apiToken?: string) {
		this.loginMode = loginMode;
		this.uid = uid;
		this.username = username;
		this.apiToken = apiToken ?? null;
	}

	public async verifyUser(): Promise<boolean> {
		return this.userService.verifyUser(this);
	  }
	  
	  public async verifyToken(): Promise<boolean> {
		return this.userService.verifyToken(this);
	  }
	  
  
	setUser(): void {
	}
  }