import { StaticImageData } from "next/image";
import icon1 from '@/shared/assets/icon/layanan-1.svg';
import icon2 from '@/shared/assets/icon/layanan-2.svg';
import icon3 from '@/shared/assets/icon/layanan-3.svg';

interface ILayananItem {
    Title: string;
    Desc: string;
    Icon: StaticImageData;
}

export const layananList: ILayananItem[] = [
  {
    Title: "Data Durasi",
    Desc: "Prediksi durasi proses perizinan berdasarkan data historis",
    Icon: icon1,
  },
  {
    Title: "Konsultasi",
    Desc: "Bantuan dari tim ahli kami",
    Icon: icon2,
  },
  {
    Title: "FAQ",
    Desc: "Jawaban pertanyaan umum",
    Icon: icon3,
  },
];