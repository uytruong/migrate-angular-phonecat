export interface PhoneData {
  imageUrl: string;
  id: string;
  name: string;
  snippet: string;
  images: string[];
  description: string;
  availability: string[];
  "battery": {
    "standbyTime": string,
    "talkTime": string,
    "type": string
  },
  "storage": {
    "flash": string,
    "ram": string
  },
  "connectivity": {
    "bluetooth": string,
    "cell": string,
    "gps": boolean,
    "infrared": boolean,
    "wifi": string
  },
  "android": {
    "os": string,
    "ui": string
  },
  "sizeAndWeight": {
    "dimensions": string[],
    "weight": string
  },
  "display": {
    "screenResolution": string,
    "screenSize": string,
    "touchScreen": boolean
  },
  "hardware": {
    "accelerometer": boolean,
    "audioJack": string,
    "cpu": string,
    "fmRadio": false,
    "physicalKeyboard": boolean,
    "usb": string
  },
  "camera": {
    "features": string[],
    "primary": string
  },
  "additionalFeatures": string
}