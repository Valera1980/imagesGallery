export interface IFileAndMeta {
    readonly comment: string;
    readonly created: Date;
    readonly file: any; // Blob
    readonly id: number | string;
    readonly isNew: boolean;
    readonly name: string;
}

export class ModelFileAndMeta implements IFileAndMeta {
    readonly comment: string;
    readonly created: Date;
    readonly file: any; // Blob
    readonly id: number | string;
    readonly isNew: boolean;
    readonly name: string;
    constructor({
        comment,
        created,
        file,
        id,
        isNew,
        name,
    }: Partial<IFileAndMeta> = {}) {
        this.name = name;
        this.id = id;
        this.isNew = isNew;
        this.comment = comment;
        this.created = created;
        this.file = file; // Blob
    }
    serialize(): IFileAndMeta {
        return {
            name: this.name,
            id: this.id,
            isNew: this.isNew,
            comment: this.comment,
            created: this.created,
            file: this.file, // Blob
        };
    }
}
