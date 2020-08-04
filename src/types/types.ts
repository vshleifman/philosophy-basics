export interface PeriodDataType {
  img_url: string;
  title: string;
  description: string;
  era: Era;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  dates: string;
  period_enum: Period;
  period_id: number;
}

export enum Period {
  PRESOCRATIC = "presocratic",
  SOCRATIC = "socratic",
  HELLENISTIC = "hellenistic",
  ROMAN = "roman",
  MEDIEVAL = "medieval",
  RENAIISANCE = "renaissance",
  REASON = "reason",
  ENLIGHTENMENT = "enlightenment",
  MODERN = "modern",
}

export enum Era {
  ANCIENT = "Ancient",
  MEDIEVAL = "Medieval",
  MODERN = "Modern",
}

export interface PhilType {
  philosopherId: number;
  fname: string;
  lname: string;
  topname: string;
  nation: string;
  dates: string;
  image_url: string;
  image_desc: string;
  text_intro: string;
  text_life: string;
  text_work: string;
  PeriodId: number;
}
