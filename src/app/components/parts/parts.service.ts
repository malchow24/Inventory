import { Injectable } from "@angular/core";
import { Part } from "./parts.model";


@Injectable({
    providedIn: 'root',
})

export class PartsData {

    constructor() {}

    public parts: Part[] = [
        {
            partNumber: '620-0026',
            description: 'grinding pad',
            uom: 'EA',
            min: 150,
            max: 350,
            location: 'E1A'
        }
    ]
}