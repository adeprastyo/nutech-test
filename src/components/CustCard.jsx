import { Card } from "flowbite-react";

export default function CustCard({ name, desc, imgUrl, price }) {
  return (
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={imgUrl}
      className="w-1/4 text-justify"
    >
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p className="text-center">{name}</p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 ">{desc}</p>
      <p className="font-medium text-gray-700 dark:text-gray-400">Rp{price}</p>
    </Card>
  );
}
