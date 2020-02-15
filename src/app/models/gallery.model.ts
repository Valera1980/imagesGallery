import { IFileAndMeta, ModelFileAndMeta } from './fileandmeta.model';

export interface IGallery {
    readonly name: string;
    readonly files: IFileAndMeta[] | ModelFileAndMeta[];
}

export class ModelGallery implements IGallery {
    readonly name: string;
    readonly files: ModelFileAndMeta[];
    constructor({
        files = [],
        name,
    }: Partial<IGallery> = {}) {
        this.name = name;
        this.files = isArrayOfModelFileAndMeta(files) ?
                                     files :
                                     files.map(i => new ModelFileAndMeta());
    }
    serialize(): IGallery {
        return {
            name: this.name,
            files: this.files, // Blob
        };
    }
}

function isArrayOfModelFileAndMeta(arr: ModelFileAndMeta[] | IFileAndMeta[]): arr is ModelFileAndMeta[] {
    return Array.length && arr[0] instanceof ModelFileAndMeta;
}
