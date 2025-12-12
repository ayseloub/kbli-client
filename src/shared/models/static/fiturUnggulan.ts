import { StaticImageData } from "next/image";
import icon1 from '@/shared/assets/icon/time.svg';
import icon2 from '@/shared/assets/icon/buble-chat.svg';
import icon3 from '@/shared/assets/icon/shield.svg';

interface IFiturUnggulanItem {
    Title: string;
    Desc: string;
    Icon: StaticImageData;
    accents?: string;
}

export const fiturUnggulanList: IFiturUnggulanItem[] = [
  {
    Title: "Layanan 24/7",
    Desc: "Akses informasi kapan saja, di mana saja tanpa perlu menunggu jam operasional kantor",
    Icon: icon1,
    accents: "border-kbli-primary"
  },
  {
    Title: "Respons Cepat",
    Desc: "Dapatkan jawaban instan untuk pertanyaan Anda dengan teknologi AI yang canggih",
    Icon: icon2,
    accents: "border-kbli-secondary"
  },
  {
    Title: "Aman & Terpercaya",
    Desc: "Data dan informasi Anda terlindungi dengan sistem keamanan tingkat tinggi",
    Icon: icon3,
    accents: "border-kbli-primary"
  },
];