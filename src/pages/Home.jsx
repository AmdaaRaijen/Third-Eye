import ButtonOutline from '../components/ButtonOutline';
import MemberCard from '../components/MemberCard';
import Footer from '../components/Footer';
import Fotbar from '../Assets/FotbarResized.jpg';
import FotoValen from '../Assets/ValenResized.jpg';
import Najwa from '../Assets/NajwaResized.jpg';
import Bintang from '../Assets/BintangResized.jpg';
import Naya from '../Assets/Naya.jpg';
import logo from '../Assets/LOGO.png';

const Home = () => {
  return (
    <>
      <section className="text-center min-h-screen p-5 flex justify-center items-center flex-col mx-auto max-w-4xl container gap-5 font-roboto">
        <h1 className="text-3xl leading-snug font-bold text-primary md:text-5xl">Building Artificial Intelegent Products, Implementation of Computer Vision</h1>
        <p className="text-md mx-auto max-w-3xl">
          Menjadikan komputer sebagai mata ke tiga yang membantu manusia untuk melihat hal-hal yang tidak bisa dilihat manusia secara umum. Seperti bisa mendeteksi kerusakan pada suatu benda, mendeteksi penyakit dari gejala yang timbul atau
          bisa dilihat oleh mata.
        </p>
        <a href="#team">
          <ButtonOutline name="Meet team" />
        </a>
      </section>
      <section className="mx-auto max-w-6xl container mt-9 space-y-5 font-roboto " id="about">
        <div className="bg-highlight p-8 px-16 py-24 rounded-md grid grid-cols-1 gap-5 items-center lg:grid-cols-2">
          <div className="max-w-xl mx-auto ">
            <h2 className="font-bold text-justify text-2xl text-primary md:text-left md:text-3xl">This Is Where We Start</h2>

            <p className="mt-4 block text-justify opacity-70 md:text-left">
              Kemajuan teknologi mendorong terciptanya berbagai macam produk yang memanfaatkan teknologi tersebut. Salah satunya adalah produk yang menggunakan teknologi Computer Vision. Computer Vision adalah cabang dari Artificial
              Intelegent yang memanfaatkan teknologi untuk mendeteksi dan mengenali objek yang ada di sekitar kita.
            </p>
          </div>

          <img alt="Fotbar" src={Fotbar} className="rounded-md max-w" />
        </div>
      </section>
      <section id="team" className="p-10 mx-auto max-w-6xl container mt-9 font-roboto">
        <h2 className="font-bold text-center text-2xl text-primary mb-9 md:text-3xl">Our Team</h2>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 md:p-0 md:gap-6">
          <MemberCard name="Valencia Amadhea" jobs="CEO" description="Tadinya ndak berniat jadi CEO, namun tetep kepilih 😐" image={FotoValen} />
          <MemberCard name="Najwa Yogi" jobs="Researcher" description="Saya dimana ini? INFOO INFOO 🤓" image={Najwa} />
          <MemberCard name="Inayah Cikal" jobs="Designer" description="Pusyingg guys, revisi terus nih. 🤕" image={Naya} />
          <MemberCard name="Bintang Triadmaja" jobs="Programmer" description="Dear Ananda, Semoga Sehat Selalu 🙏" image={Bintang} />
        </div>
      </section>
      <section id="filosofi" className="bg-highlight rounded-md container mt-9 min-h-full p-5 flex justify-center items-center flex-col mx-auto max-w-6xl gap-5 font-roboto">
        <h2 className="font-bold text-center text-3xl text-primary font-roboto first-letter:md:text-left">Filosofi Logo</h2>
        <img src={logo} alt="" className=" w-36 h-38" />
        <ul className="mt-4 list-inside space-y-5 list-decimal block md:text-left font-roboto">
          <li className="list-item">
            <span> Dilihat dari segi bentuk </span>melambangkan arti dari nama third eye {' bentuk mata + angka 3 )'}. Yang dimana bentuk tersebut melambangkan nama dan visi perusahaan.
          </li>
          <li className="list-item">
            <span className="mb-5 inline-block">Dilihat dari segi warna</span>
            <ul className="list-disc list-inside ml-10 space-y-5">
              <li>
                <span className=" font-bold"> Kuning</span> {'--->'} merupakan warna yang membawa kesan bahagia dan optimis. Pengunaan warna kuning mudah menarik perhatian karena menyolok jika dibandingkan dengan warna primer lainnya. Warna
                kuning sering dipergunakan oleh perusahaan perusahaan yang berjiwa muda, kreativitas.
              </li>
              <li>
                <span className=" font-bold"> Biru</span> {'--->'} merupakan warna yang membawa kepercayaan dan profesionalisme. Warna ini sangat populer digunakan pada perusahaan keamanan dan teknologi.
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
};

export default Home;
