import TabLink from "./components/TabLink";

const SubHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-3">
      <h1 className="font-dm-sans text-3xl font-medium tracking-wide">Our Collection</h1>
      <div className="w-full xl:px-[300px] md:px-[120px] sm:px-8 px-5">
        <p className="text-text-secondary leading-5">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
      </div>
      <div className="flex gap-3 mt-">
        <TabLink active={true}>All Products</TabLink>
        <TabLink>Available Now</TabLink>
      </div>
    </div>
  );
}
 
export default SubHeader;