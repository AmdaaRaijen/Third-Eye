import Button from '../components/Button';
import ButtonOutline from '../components/ButtonOutline';
import MemberCard from '../components/MemberCard';
import Fotbar from '../Assets/FotbarResized.jpg';
import FotoValen from '../Assets/ValenResized.jpg';
import Najwa from '../Assets/NajwaResized.jpg';
import Bintang from '../Assets/BintangResized.jpg';
import Naya from '../Assets/Naya.jpg';

const Home = () => {
  return (
    <>
      <section className="text-center min-h-screen flex justify-center items-center flex-col mx-auto max-w-4xl container gap-5 font-roboto">
        <h1 className="text-5xl leading-snug font-bold text-primary">Building a Artificial Intelligence Product, Implement of Computer Vision</h1>
        <p className="text-md mx-auto max-w-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odit ducimus porro officia beatae, numquam perspiciatis autem voluptatibus tempora est, temporibus vero architecto omnis quasi eius, aliquam reiciendis delectus
          quidem.
        </p>
        <ButtonOutline name="Meet team" />
      </section>
      <section className="mx-auto max-w-6xl container mt-9 space-y-5 font-roboto">
        <div className="bg-highlight p-8 px-16 py-24 rounded-md grid grid-cols-2 gap-5 items-center">
          <div className="max-w-xl mx-auto text-left">
            <h2 className="font-bold text-3xl text-primary">Lorem, ipsum dolor sit amet consectetur adipisicing elit</h2>

            <p className="mt-4 block opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
            </p>
          </div>

          <img alt="Fotbar" src={Fotbar} className="rounded-md" />
        </div>
      </section>
      <section className="mx-auto grid grid-cols-4 gap-5 max-w-6xl container mt-9 font-roboto">
        <MemberCard
          name="Valencia Amadhea"
          jobs="CEO"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur vero assumenda placeat ducimus excepturi aut debitis perferendis provident! Qui, a. Ut, iure tempora? Numquam, esse. Suscipit molestias nam accusantium nemo?"
          image={FotoValen}
        />
        <MemberCard
          name="Najwa Yogi"
          jobs="Researcher"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur vero assumenda placeat ducimus excepturi aut debitis perferendis provident! Qui, a. Ut, iure tempora? Numquam, esse. Suscipit molestias nam accusantium nemo?"
          image={Najwa}
        />
        <MemberCard
          name="Inayah Nursabrina"
          jobs="Designer"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur vero assumenda placeat ducimus excepturi aut debitis perferendis provident! Qui, a. Ut, iure tempora? Numquam, esse. Suscipit molestias nam accusantium nemo?"
          image={Naya}
        />
        <MemberCard
          name="Bintang Triadmaja"
          jobs="Programmer"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur vero assumenda placeat ducimus excepturi aut debitis perferendis provident! Qui, a. Ut, iure tempora? Numquam, esse. Suscipit molestias nam accusantium nemo?"
          image={Bintang}
        />
      </section>
    </>
  );
};

export default Home;