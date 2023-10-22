import { Settings } from "../data/settings";

export abstract class SettingsRepository {
    public abstract get settings(): Settings[]
}
