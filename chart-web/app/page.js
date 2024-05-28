export default async function MyComponent() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col items-center px-5 pb-5 w-full bg-gray-900 max-md:max-w-full">
        
        <div className="mt-10 text-3xl font-bold tracking-tighter text-center text-white mb-10">
          Doge Forecast
        </div>
        <div>
        <div className="text-lg font-bold tracking-tight text-white max-md:ml-2.5">
          Real-Time Dogecoin Price Prediction
        </div>
        <div className="justify-center p-4 mt-2 w-full max-w-[960px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start p-6 text-base font-medium text-white rounded-xl border border-solid border-slate-700 max-md:px-5 max-md:mt-8">
                <div className="leading-[150%]">$0.2905</div>
                <div className="mt-2 text-2xl font-bold tracking-tight">
                  Current Price
                </div>
                <div className="mt-2 text-green-500 leading-[150%]">+0.12%</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start p-6 text-base font-medium text-white rounded-xl border border-solid border-slate-700 max-md:px-5 max-md:mt-8">
                <div className="leading-[150%]">$0.2935</div>
                <div className="mt-2 text-2xl font-bold tracking-tight">
                  Predicted Price
                </div>
                <div className="mt-2 text-red-500 leading-[150%]">-0.05%</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start p-6 text-base font-medium text-white rounded-xl border border-solid border-slate-700 max-md:px-5 max-md:mt-8">
                <div className="leading-[150%]">0.29%</div>
                <div className="mt-2 text-2xl font-bold tracking-tight">
                  Confidence Level
                </div>
                <div className="mt-2 text-green-500 leading-[150%]">+0.29%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-4 py-6 w-full text-base leading-6 max-w-[960px] text-slate-400 max-md:max-w-full">
          <div className="flex flex-col p-6 rounded-xl border border-solid border-slate-700 max-md:px-5 max-md:max-w-full">
            <div className="self-start font-medium text-white">
              Real-Time Price Chart
            </div>
            <div className="self-start mt-2">1D</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/766a18c71ed8e58a17cd13133d8fe772ed43ba381239aa8c66cd7abc4dd724c8?apiKey=9d9828c90f724a1aaaf800f0335e4543&"
              className="mt-10 w-full aspect-[5.88] max-md:max-w-full"
            />
            <div className="flex gap-5 justify-between mt-6 text-sm font-bold tracking-normal max-md:flex-wrap max-md:max-w-full">
              <div>8:00 AM</div>
              <div>10:00 AM</div>
              <div>12:00 PM</div>
              <div>2:00 PM</div>
              <div>4:00 PM</div>
              <div>6:00 PM</div>
            </div>
          </div>
        </div>
        <div className="self-start mt-10 text-lg font-bold tracking-tight text-white max-md:ml-2.5">
          AI Prediction Model
        </div>
        <div className="flex gap-5 justify-between px-4 py-3 mt-2 w-full bg-gray-900 max-w-[960px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-4 pr-20 max-md:flex-wrap">
            <div className="flex justify-center items-center px-3 w-12 h-12 rounded-lg bg-slate-800">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5952519871808ea928740e8da0692b8f8c1ea63310e9f1da855c864d6aea9ab5?apiKey=9d9828c90f724a1aaaf800f0335e4543&"
                className="w-6 aspect-square"
              />
            </div>
            <div className="flex flex-col justify-center self-start leading-[150%]">
              <div className="text-base font-medium text-white">Buy</div>
              <div className="text-sm text-slate-400">High Confidence</div>
            </div>
          </div>
          <div className="my-auto text-base leading-6 text-white">$0.30</div>
        </div>
        <div className="flex gap-5 justify-between px-4 py-3 w-full bg-gray-900 max-w-[960px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-4 pr-20 max-md:flex-wrap">
            <div className="flex justify-center items-center px-3 w-12 h-12 rounded-lg bg-slate-800">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/acac936a0ea30b9a13f4a286ee6012dc1e5db757cad502220e37c9b517b23fa2?apiKey=9d9828c90f724a1aaaf800f0335e4543&"
                className="w-6 aspect-square"
              />
            </div>
            <div className="flex flex-col justify-center self-start leading-[150%]">
              <div className="text-base font-medium text-white">Hold</div>
              <div className="text-sm text-slate-400">Medium Confidence</div>
            </div>
          </div>
          <div className="my-auto text-base leading-6 text-white">$0.29</div>
        </div>
        <div className="flex gap-5 justify-between px-4 py-3 w-full bg-gray-900 max-w-[960px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-4 pr-20 max-md:flex-wrap">
            <div className="flex justify-center items-center px-3 w-12 h-12 rounded-lg bg-slate-800">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7510969102b2ed7ae023ae178a0e159b1d1f970e74b057678b306a2c0e975d1d?apiKey=9d9828c90f724a1aaaf800f0335e4543&"
                className="w-6 aspect-square"
              />
            </div>
            <div className="flex flex-col justify-center self-start leading-[150%]">
              <div className="text-base font-medium text-white">Sell</div>
              <div className="text-sm text-slate-400">Low Confidence</div>
            </div>
          </div>
          <div className="my-auto text-base leading-6 text-white">$0.28</div>
        </div>
        <div className="self-start mt-10 text-lg font-bold tracking-tight text-white max-md:ml-2.5">
          Key Technical Indicators
        </div>
        <div className="flex gap-5 justify-between px-4 py-3 mt-2 w-full bg-gray-900 max-w-[960px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-4 pr-20 max-md:flex-wrap">
            <div className="flex justify-center items-center px-3 w-12 h-12 rounded-lg bg-slate-800">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce9e53d1c26effb310187afce2365786a2cf67a25fa9f9141374f5f3519f8699?apiKey=9d9828c90f724a1aaaf800f0335e4543&"
                className="w-6 aspect-square"
              />
            </div>
            <div className="flex flex-col justify-center my-auto whitespace-nowrap leading-[150%]">
              <div className="text-base font-medium text-white">RSI</div>
              <div className="text-sm text-slate-400">Neutral</div>
            </div>
          </div>
          <div className="my-auto text-base leading-6 text-white">50</div>
        </div>
        <div className="flex gap-5 justify-between px-4 py-3 w-full bg-gray-900 max-w-[960px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-4 pr-20 max-md:flex-wrap">
            <div className="flex justify-center items-center px-3 w-12 h-12 rounded-lg bg-slate-800">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc00ec295dc449a8956453081c5a32b64461b0da6d4f0930a282bdfc1715cf71?apiKey=9d9828c90f724a1aaaf800f0335e4543&"
                className="w-6 aspect-square"
              />
            </div>
            <div className="flex flex-col justify-center my-auto whitespace-nowrap leading-[150%]">
              <div className="text-base font-medium text-white">MACD</div>
              <div className="text-sm text-slate-400">Neutral</div>
            </div>
          </div>
          <div className="my-auto text-base leading-6 text-white">0</div>
        </div>
        <div className="flex gap-5 justify-between px-4 py-3 w-full bg-gray-900 max-w-[960px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-4 pr-20 max-md:flex-wrap">
            <div className="flex justify-center items-center px-3 w-12 h-12 rounded-lg bg-slate-800">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce2603abd3d763ae449dfb6b55c29eb0f1ef4a57e4feb196b325ac51d646abfb?apiKey=9d9828c90f724a1aaaf800f0335e4543&"
                className="w-6 aspect-square"
              />
            </div>
            <div className="flex flex-col justify-center my-auto leading-[150%]">
              <div className="text-base font-medium text-white">
                Moving Averages
              </div>
              <div className="text-sm text-slate-400">Golden Cross</div>
            </div>
          </div>
          <div className="my-auto text-base leading-6 text-white">Bullish</div>
        </div>

        </div>
        
      </div>
    </div>
  );
}


