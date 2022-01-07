
export type Event = {
    id: string;
    name: string;
    filenameBanner: string;
    initialDate?: Date;
    endDate?: Date;
    workshops: Workshop[];
}

export type Workshop = {
    id?: string;
    name: string;
    vacancies: number;
}