export type QuestItem = {
    id: string;
    title: string;
    previewImg: string;
    previewImgWebp: string;
    level: string;
    type: string;
    peopleMinMax: number[];
};

export type QuestList = QuestItem[];

export type Quest = QuestItem & {
    description: string;
    coverImg: string;
    coverImgWebp: string;
};

export type AuthData = {
    email: string;
    password: string;
};

export type UserData = AuthData & {
    token: string;
};

export type BookingInfo = {
    id: string;
    location: {
        address: string;
        coords: [number];
    };
    slots: {
        today: [{
            time: string;
            isAvailable: boolean;
        }];
        tomorrow: [{
            time: string;
            isAvailable: boolean;
        }];
    };
}[];

export type Location = {
    address: string;
    coords: [number, number];
}
