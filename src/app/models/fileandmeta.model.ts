export interface IFileAndMeta {
    readonly comment: string;
    readonly created: Date | string;
    readonly file: File; // Blob
    readonly id: number | string;
    readonly isNew: boolean;
    readonly name: string;
    readonly size: number;
    readonly type: string;
    readonly url: string;
}

export class ModelFileAndMeta implements IFileAndMeta {
    readonly comment: string;
    readonly created: Date | string;
    readonly file: File; // Blob
    readonly id: number | string;
    readonly isNew: boolean;
    readonly name: string;
    readonly size: number;
    readonly type: string;
    readonly url: string;

    constructor({
        comment,
        created,
        file,
        id,
        isNew,
        name,
        size = 0,
        type = '',
        url = ''
    }: Partial<IFileAndMeta> = {}) {
        this.name = name;
        this.id = id;
        this.isNew = isNew;
        this.comment = comment;
        this.created = created;
        this.file = file; // Blob
        this.size = size;
        this.type = type;
        this.url = url;
    }
    serialize(): IFileAndMeta {
        return {
            name: this.name,
            id: this.id,
            isNew: this.isNew,
            comment: this.comment,
            created: this.created,
            file: this.file, // Blob
            size: this.size,
            type: this.type,
            url: this.url
        };
    }
}
