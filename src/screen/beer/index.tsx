import React from "react";
import RadarChart, { ChartData } from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

export const BeerScreen = () => {
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
  // グラフのラベル
  const labels = Object.keys(beer.characteristics);
  // グラフのデータ
  const data: ChartData[] = [
    {
      data: beer.characteristics,
      meta: { color: "#FFD700" }, // クラフトビールらしい色を使用
    },
  ];

  return (
    <div className="max-w-xl mx-auto mt-8 bg-yellow-100 p-4 rounded-lg shadow-lg">
      <div className="flex flex-col items-center border-b border-gray-400 pb-4">
        <img
          className="w-full h-auto rounded-md"
          src={beer.image}
          alt={beer.name}
        />
        <h2 className="text-xl font-bold text-brown-800 mt-4">{beer.name}</h2>
      </div>
      <div className="mt-4">
        <p className="text-base mb-2">
          <span className="inline-block bg-yellow-300 text-brown-800 px-4 py-1 rounded-full">
            {beer.type}
          </span>
        </p>
        <p className="text-base mb-2">{beer.description}</p>
        <div className="mt-4 flex flex-col items-center">
          {/* RadarChartコンポーネントをここに追加 */}
          <RadarChart
            captions={{
              aroma: "香り",
              body: "ボディ",
              bitterness: "苦味",
              acidity: "酸味",
              sweetness: "甘味",
            }}
            data={data}
            size={400}
          />
        </div>

        <div className="flex flex-col  border-b border-gray-400 pb-4">
          <p className="text-base my-4">
            <span className="font-semibold">フードペアリング:</span>
            <span className="inline-block bg-yellow-300 text-brown-800 mx-2 px-4 py-1 rounded-full">
              {beer.foodPairing}
            </span>
          </p>{" "}
          <img
            className="w-full h-auto rounded-md"
            src={beer.foodPairingImage}
            alt={beer.name}
          />
        </div>
      </div>
    </div>
  );
};
