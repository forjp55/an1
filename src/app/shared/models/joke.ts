export interface Joke {
    category: string;
    type: string;
    joke?: string;
    setup?: string;
    delivery?: string;
    flags: Flags;
    id: number;
    error: boolean
}

export interface Flags {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
}

