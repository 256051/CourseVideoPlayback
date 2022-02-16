export interface VideoDto {
    type:   string;
    videos: Video[];
}

export interface Video {
    name: string;
    url:  string;
}
