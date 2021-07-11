export enum MatSnackBarType {
  Error,
  Info,
  NewOrder,
  OrderChanged,
  Warning,
}

export interface MatSnackBarNotification {
  NotificationType: MatSnackBarType | string;
  data: string;
  time: number;
  id: string;
}

export const MatSnackBarData = new Map<
  number,
  {
    TextColor: number[];
    BackgroundColor: number[];
    IconPath: string;
  }
>([
  [
    MatSnackBarType.Error,
    {
      TextColor: [0, 0, 0],
      BackgroundColor: [238, 21, 21],
      IconPath: '../../assets/minus-circle-solid.svg',
    },
  ],
  [
    MatSnackBarType.Info,
    {
      TextColor: [0, 0, 0],
      BackgroundColor: [185, 185, 185],
      IconPath: '../../assets/info-solid.svg',
    },
  ],
  [
    MatSnackBarType.NewOrder,
    {
      TextColor: [0, 0, 0],
      BackgroundColor: [68, 235, 68],
      IconPath: '../../assets/cart-plus-solid.svg',
    },
  ],
  [
    MatSnackBarType.OrderChanged,
    {
      TextColor: [0, 0, 0],
      BackgroundColor: [185, 185, 185],
      IconPath: '../../assets/sync-alt-solid.svg',
    },
  ],
  [
    MatSnackBarType.Warning,
    {
      TextColor: [0, 0, 0],
      BackgroundColor: [255, 255, 0],
      IconPath: '../../assets/sync-alt-solid.svg',
    },
  ],
]);
