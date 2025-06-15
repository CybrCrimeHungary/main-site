import Hero from "@/components/hero";
import ImageAsText from "@/components/image-as-text";
import ServiceCard from "@/components/service-card";
import { Button } from "@/components/ui/button";

import CloudServiceImage from "@/public/backgrounds/cloud_services.jpg";
import DevelopmentServiceImage from "@/public/backgrounds/development.jpg";
import HeroBackground from "@/public/backgrounds/digital_connectivity.jpg";
import EventSoundServiceImage from "@/public/backgrounds/event_sound.jpg";
import StreamServiceImage from "@/public/backgrounds/live_streaming.jpg";
import NetworkingServiceImage from "@/public/backgrounds/networking.jpg";
import HostingServiceImage from "@/public/backgrounds/webhosting.jpg";
import AminGrdaient from "@/public/gradients/amin.jpg";


export default function Home() {
  return (
    <>
      <Hero
        title="A káosz nem akadály, hanem kiindulópont a változáshoz." 
        description="A jövő nem sablonokra épül. Olyan technológiát szállítunk, ami tényleg számít. Csatlakozz küldetésünkhöz, és lépjünk együtt a digitális kor új szintjére!"
        CTA={
          <>
            <Button variant="default" size="lg">
                Szintet lépek!
            </Button>
            <Button variant="outline" size="lg" className="text-white dark:text-black">
                Többet szeretnék tudni
            </Button>
          </>
        }
        backgroundImage={HeroBackground}
      />
      <section className="py-20 mx-5 md:mx-10 lg:mx-15">
        <ImageAsText
          image={AminGrdaient}
        >
          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            Szolgáltatásaink
            <span className="text-xl pb-[30px]">
              &#9650;
            </span>
          </h3>
        </ImageAsText>
        <p className="mt-2 text-center">
          A jövőt nem várjuk, mi alakítjuk. Olyan rendszereket építünk, amik túlmutatnak az általános trendeken.
        </p>
        <section className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <ServiceCard
            title="Alkalmazásfejlesztés"
            description="A céljaidhoz szabott digitális megoldások."
            image={DevelopmentServiceImage}
          />
          <ServiceCard
            title="Üzemeltetés"
            description="Üzemidőre hangolva, leállás nélkül."
            image={NetworkingServiceImage}
          />
          <ServiceCard
            title="Felhőszolgáltatások"
            description="Skálázható. Rugalmas. Jövőálló."
            image={CloudServiceImage}
          />
          <ServiceCard
            title="Tárhelyszolgáltatás"
            description="A projekted otthona. Bármilyen méretben."
            image={HostingServiceImage}
          />
          <ServiceCard
            title="Live Stream"
            description="Az élő adás, amire mindig számíthatsz."
            image={StreamServiceImage}
          />
          <ServiceCard
            title="Rendezvény Hangosítás"
            description="Amikor a hang számít, mi vagyunk a megoldás."
            image={EventSoundServiceImage}
          />
        </section>
      </section>
    </>
  );
}
