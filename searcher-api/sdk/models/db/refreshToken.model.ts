export interface IRefreshToken {
  id: number;
  value: string;
  userId: number;
  expiresAt: Date;
}
