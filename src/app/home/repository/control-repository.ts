import { Control } from "../data/control";

export abstract class ControlRepository {
    public abstract get control(): Control[]
}
