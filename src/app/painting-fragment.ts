export class PaintingFragment {
    public id: number;
    public name: string;
    public value: number = 0;

    public constructor(init?: Partial<PaintingFragment>) {
        Object.assign(this, init);
    }
}
