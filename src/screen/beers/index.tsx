import React from "react";
import RadarChart, { ChartData } from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

export const BeersScreen = () => {
  // 仮のビールのデータ
  const beer = {
    name: "ペールエール",
    image:
      "https://hatoya-beer.com/_assets/images/products/products-beer-001.jpg",
    type: "エール",
    description:
      "フルーティーな香りとホップの苦味が特徴のクラフトビール。穏やかな味わいで人気があります。",
    characteristics: {
      aroma: 0.8,
      body: 0.7,
      bitterness: 0.9,
      acidity: 0.4,
      sweetness: 0.6,
    },
    foodPairing: "グリルチキン",
    foodPairingImage: "https://shokuzai-pro.com/upload/product/14693_gx378.jpg",
  };

  return <div>Beers</div>;
};
