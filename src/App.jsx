import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Nav from "./components/Nav";
import PopularProducts from "./sections/PopularProducts";
import Quality from "./sections/Quality";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import Servises from "./sections/Servises";
function App() {
  return (
    <main className="relative bg-light-gray  text-slate-100">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b ">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <Quality />
      </section>
      <section className="padding-x py-10">
        <Servises />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding  bg-light-gray text-slate-100 ">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32  py-16 w-full ">
        <Subscribe />
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
