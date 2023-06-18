export class SettingOption {
    public static readonly General = 'General';
    public static readonly Novel = 'Novel';
    public static readonly User = 'User';
}

//TODO: Refactor to enum
export class ImageSensitivity {
    public static readonly Safe = 0;
    public static readonly Questionable = 1;
    public static readonly Explicit = 2;
}

export class Settings {
    imageSensitivity: ImageSensitivity;

    constructor() {
        this.imageSensitivity = ImageSensitivity.Safe;
    }
}