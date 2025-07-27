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

export type Location = {
    address: string;
    coords: [number, number];
};

export type BookingInfo = {
    id: string;
    location: Location;
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
};

export type BookingInfoList = BookingInfo[];

export type QuestBooking = {
    date: string;
    time: string;
    contactPerson: string;
    phone: string;
    withChildren: boolean;
    peopleCount: number;
    placeId: string;
}

export type PostData = {
    postData: QuestBooking;
    id: string;
  }

export type MyQuest = QuestBooking & {
    id: string;
    location: Location;
    quest: QuestItem;
};

export type MyQuestList = MyQuest[];
