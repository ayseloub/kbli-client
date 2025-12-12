import Footer from '@/shared/container/footer/footer';
import Navbar from '@/shared/container/navbar/navbar';
import HomeContainer from './container/HomeContainer';

export default function HomePage() {
  return (
    <>
      <main className="">
        <Navbar />
        <HomeContainer />
        <Footer />
      </main>
    </>
  );
}
