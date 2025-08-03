import { useRouter } from "next/router";
import PropertyDetail from "@/pages/property/PropertyDetail";
import BookingSection from "@/pages/property/BookingSection";
import ReviewSection from "@/pages/property/ReviewSection";
import { useEffect, useState } from "react";

interface Address {
  state: string;
  city: string;
  country: string;
}

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  address: Address;
  category: string[];
}

const PropertyPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<Property | null>(null);

  // Fake property data (replace with API call or static props as needed)
  useEffect(() => {
    if (id) {
      // Simulate fetching by ID
      const sampleProperty: Property = {
        id: id as string,
        title: "Luxury Beachfront Villa",
        description:
          "Experience the ultimate in luxury with this stunning beachfront villa, offering breathtaking ocean views and private pool.",
        price: 1200,
        image: "/villa.jpg",
        address: {
          state: "California",
          city: "Malibu",
          country: "USA",
        },
        category: ["Luxury Villa", "Pool", "Free Parking"],
      };

      setProperty(sampleProperty);
    }
  }, [id]);

  if (!property) return <div className="p-8">Loading property...</div>;

  return (
    <div className="p-6">
      <PropertyDetail property={property} />
      <div className="mt-8">
        <BookingSection propertyId={property.id} price={property.price} />
      </div>
      <div className="mt-8">
        <ReviewSection propertyId={property.id} />
      </div>
    </div>
  );
};

export default PropertyPage;
