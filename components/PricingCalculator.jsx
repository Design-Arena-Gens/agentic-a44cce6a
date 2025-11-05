"use client";

import { useMemo, useState } from "react";

export default function PricingCalculator() {
  const [perceivedValue, setPerceivedValue] = useState(3); // 1-5
  const [marketSize, setMarketSize] = useState("thousands"); // hundreds | thousands | niche
  const [hours, setHours] = useState(10);
  const [costs, setCosts] = useState(0);
  const [goalRevenue, setGoalRevenue] = useState(1000);

  const result = useMemo(() => {
    const base = 9;
    const valueMultiplier = 1 + (perceivedValue - 3) * 0.35; // -0.7 .. +0.7
    const marketMultiplier = marketSize === "hundreds" ? 1.2 : marketSize === "thousands" ? 0.9 : 1.4;
    const effortPremium = 1 + Math.min(0.8, hours / 100);
    const recommended = Math.round((base * valueMultiplier * marketMultiplier * effortPremium) + costs / 10);

    // Tiering
    const starter = Math.max(5, Math.round(recommended * 0.6));
    const standard = Math.max(starter + 2, recommended);
    const pro = Math.max(standard + 5, Math.round(recommended * 1.6));

    const neededSales = {
      starter: Math.ceil(goalRevenue / starter),
      standard: Math.ceil(goalRevenue / standard),
      pro: Math.ceil(goalRevenue / pro),
    };

    return { starter, standard, pro, neededSales };
  }, [perceivedValue, marketSize, hours, costs, goalRevenue]);

  return (
    <div>
      <div className="row">
        <div>
          <label className="label">Perceived value</label>
          <select className="select" value={perceivedValue} onChange={(e) => setPerceivedValue(Number(e.target.value))}>
            <option value={1}>Low</option>
            <option value={2}>Below average</option>
            <option value={3}>Average</option>
            <option value={4}>High</option>
            <option value={5}>Very high</option>
          </select>
        </div>
        <div>
          <label className="label">Market size</label>
          <select className="select" value={marketSize} onChange={(e) => setMarketSize(e.target.value)}>
            <option value="niche">Niche (very specific)</option>
            <option value="hundreds">Hundreds of buyers</option>
            <option value="thousands">Thousands of buyers</option>
          </select>
        </div>
      </div>

      <div style={{ height: 10 }} />

      <div className="row">
        <div>
          <label className="label">Build effort (hours)</label>
          <input className="input" type="number" min={0} value={hours} onChange={(e) => setHours(Number(e.target.value))} />
        </div>
        <div>
          <label className="label">Hard costs ($)</label>
          <input className="input" type="number" min={0} value={costs} onChange={(e) => setCosts(Number(e.target.value))} />
        </div>
      </div>

      <div style={{ height: 10 }} />

      <div>
        <label className="label">Revenue goal ($)</label>
        <input className="input" type="number" min={0} value={goalRevenue} onChange={(e) => setGoalRevenue(Number(e.target.value))} />
      </div>

      <div style={{ height: 14 }} />

      <div className="row">
        <div className="pill">Starter: ${result.starter} ? {result.neededSales.starter} sales to goal</div>
        <div className="pill">Standard: ${result.standard} ? {result.neededSales.standard} sales to goal</div>
      </div>

      <div style={{ height: 10 }} />

      <div className="pill">Pro: ${result.pro} ? {result.neededSales.pro} sales to goal</div>
    </div>
  );
}
