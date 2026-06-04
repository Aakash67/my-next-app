import Image from "next/image";

export default function ProductImage() {
  return (
    <Image
      src="/product.jpg"
      alt="Product"
      width={600}
      height={400}
    />
  );
}