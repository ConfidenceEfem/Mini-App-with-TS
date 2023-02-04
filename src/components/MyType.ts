export interface MyData {
    _id: string,
    updatedAt: string,
    createdAt: string,
    email: string,
    name: string,
    post: (string | null)[],
}

export type MainData = {
    token: string,
    data?: MyData[],
}