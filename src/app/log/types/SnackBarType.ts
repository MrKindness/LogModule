export enum SnackBarType {
  Error,
  Info,
  NewOrder,
  OrderChanged,
  Warning,
}

export interface SnackBarNotification {
  NotificationType: SnackBarType;
  data: string;
  time: number;
}

export interface SnackBarNotificationsArray {
  array: SnackBarNotification[];
}

export interface DisplayStartPosition {
  StartPosition: number;
}

interface SnackBarInfo {
  TextColor: number[];
  BackgroundColor: number[];
  IconPath: string;
}

export const SnackBarsTypeData = new Map<number, SnackBarInfo>([
  [
    SnackBarType.Error,
    {
      TextColor: [0, 0, 0],
      BackgroundColor: [238, 21, 21],
      IconPath: '../../assets/minus-circle-solid.svg',
    },
  ],
  [
    SnackBarType.Info,
    {
      TextColor: [0, 0, 0],
      BackgroundColor: [185, 185, 185],
      IconPath: '../../assets/info-solid.svg',
    },
  ],
  [
    SnackBarType.NewOrder,
    {
      TextColor: [0, 0, 0],
      BackgroundColor: [68, 235, 68],
      IconPath: '../../assets/cart-plus-solid.svg',
    },
  ],
  [
    SnackBarType.OrderChanged,
    {
      TextColor: [0, 0, 0],
      BackgroundColor: [185, 185, 185],
      IconPath: '../../assets/sync-alt-solid.svg',
    },
  ],
  [
    SnackBarType.Warning,
    {
      TextColor: [0, 0, 0],
      BackgroundColor: [255, 255, 0],
      IconPath: '../../assets/sync-alt-solid.svg',
    },
  ],
]);
