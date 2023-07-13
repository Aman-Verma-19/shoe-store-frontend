import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import ProjectTeam from "@/components/ProjectTeam";
import SubMainContent from "@/components/SubMainContent";
import Wrapper from "@/components/Wrapper";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import { fetchDataFromApi } from "@/utils/api";

export default function Home({ products }) {
  return (
    <main>
      <HeroBanner />

      <SubMainContent />
      <Wrapper>
        {/* heading and paragrap start */}
        <div className="App mb-20">
          <h1 className="flex justify-center pb-1 text-[28px] md:text-[48px] mb-1 font-extrabold font-AbrilFatface leading-tight">
            Never Settle, Never Done
          </h1>
          <h3 className="flex justify-center pb-5 text-[28px] md:text-[28px] mb-5 font-extrabold font-AbrilFatface leading-tight underline">
            Nike
          </h3>
          <YoutubeEmbed embedId="PZIqV7wNyyU" />
        </div>

        <div className="text-center max-w-[800px] mx-auto my-[50px] " id="show_product" >
          <div className="text-[28px] scroll-smooth md:text-[48px] mb-5 font-extrabold font-AbrilFatface leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl  font-AbrilFatface  sm:text-lg  text-gray-600">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running
          </div>
        </div>

        {/* heading and paragrap end */}

        {/* product grid  start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0 pb-10">
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>

        
        {/* product grid  end */}
        <ProjectTeam />
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
    props: { products },
  };
}
