import useHTTP from "../../hooks/useHTTP";

import CoffeeCard from "../../components/card/CoffeeCard";
import { useEffect, useState } from "react";

const CoffeeListing = () => {
  const { getRequest } = useHTTP();
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    retrieveCoffeeListing();
  }, []);

  const retrieveCoffeeListing = async () => {
    const response = await getRequest({ url: 'simple-coffee-listing-data.json' });
    if (response?.result) {
      setCoffeeList(response?.responseData ?? []);
    } else {
      setCoffeeList([]);
    }
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 xl:px-28 md:px-20 sm:px-14 px-5">
      {coffeeList.map((each) => (
        <CoffeeCard 
          { ...each }
        />
      ))}
    </div>
  );
}
 
export default CoffeeListing;