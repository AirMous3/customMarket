import bear from '@/assets/sliderImages/bear.webp';
import nike from '@/assets/sliderImages/nike.webp';
import simpsons from '@/assets/sliderImages/simpsons.webp';
import { SlidePropsType } from '@/components/Slider/types';

export const sliderConfig: SlidePropsType[] = [
  {
    path: '#ololo',
    title: 'sell your listings on custom market',
    subtitle: 'featured sellers',
    image: simpsons,
  },
  {
    path: '#ololo',
    title: 'sell your listings on custom market',
    subtitle: 'featured sellers',
    image: nike,
  },
  {
    path: '#lolo',
    title: 'sell your listings on custom market',
    subtitle: 'featured sellers',
    image: bear,
  },
];
