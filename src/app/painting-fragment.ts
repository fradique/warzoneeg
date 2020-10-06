export class PaintingFragment {
    public id: number;
    public name: string;
    public value: number;
    public modifier: number;

    public constructor(init?: Partial<PaintingFragment>) {
        Object.assign(this, init);
    }
}
