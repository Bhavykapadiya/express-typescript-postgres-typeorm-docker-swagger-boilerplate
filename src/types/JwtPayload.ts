export type JwtPayload = {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
};

export type Language = 'en-US' | 'sl-SI';