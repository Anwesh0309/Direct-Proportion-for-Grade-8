/* =========================================================================
   MATH DATA & PRACTICE QUESTION REPOSITORY
   10 Themed Worlds x 10 High-Quality Curated Direct Proportion Questions
   Complete with Diagrams, Distractors, Explanations, and Audio Mappings.
   ========================================================================= */

export const PRACTICE_WORLDS = [
  { id: 0, name: "Smoothie Stand", icon: "🥤", range: "Q1–10", difficulty: 1 },
  { id: 1, name: "Notebook Nook", icon: "📓", range: "Q11–20", difficulty: 1 },
  { id: 2, name: "Fuel Station", icon: "⛽", range: "Q21–30", difficulty: 2 },
  { id: 3, name: "Bakery Street", icon: "🥖", range: "Q31–40", difficulty: 2 },
  { id: 4, name: "Cycle Track", icon: "🚴", range: "Q41–50", difficulty: 3 },
  { id: 5, name: "Map Mountain", icon: "🗺️", range: "Q51–60", difficulty: 3 },
  { id: 6, name: "Paint Factory", icon: "🎨", range: "Q61–70", difficulty: 3 },
  { id: 7, name: "Currency Bazaar", icon: "💱", range: "Q71–80", difficulty: 4 },
  { id: 8, name: "Rocket Launchpad", icon: "🚀", range: "Q81–90", difficulty: 4 },
  { id: 9, name: "Golden Graph Gallery", icon: "🏆", range: "Q91–100", difficulty: 4 }
];

export const PRACTICE_QUESTIONS = {
  // WORLD 0: Smoothie Stand (k ~ ₹6–₹9 per cup)
  0: [
    {
      id: "q_0_0", audioKey: "q_0_0", rule: "y = kx",
      prompt: "Emma notes that 1 cup of smoothie costs ₹6. How much do 4 cups cost?",
      audioText: "Emma notes that 1 cup of smoothie costs 6 rupees. How much do 4 cups cost?",
      options: ["₹24", "₹20", "₹18", "₹30"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Cups", yLab: "Cost (₹)", xVal: 4, kVal: 6, yVal: "?" },
      explanation: "y = kx = 6 × 4 = ₹24."
    },
    {
      id: "q_0_1", audioKey: "q_0_1", rule: "UNITARY METHOD",
      prompt: "Zara finds that 2 cups of smoothie cost ₹14. How much do 5 cups cost?",
      audioText: "Zara finds that 2 cups of smoothie cost 14 rupees. How much do 5 cups cost?",
      options: ["₹35", "₹28", "₹42", "₹30"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Cups", yLab: "Cost (₹)", xs: [2, 5], ys: [14, "?"] },
      explanation: "1 cup = 14 ÷ 2 = ₹7. Then 5 cups = 7 × 5 = ₹35."
    },
    {
      id: "q_0_2", audioKey: "q_0_2", rule: "CONSTANT RATIO",
      prompt: "In the table, smoothie cost y is directly proportional to cups x. What is k if 3 cups cost ₹21?",
      audioText: "In the table, smoothie cost y is directly proportional to cups x. What is k if 3 cups cost 21 rupees?",
      options: ["k = 7", "k = 6", "k = 8", "k = 18"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Cups", yLab: "Cost (₹)", xs: [1, 2, 3], ys: [7, 14, 21] },
      explanation: "k = y ÷ x = 21 ÷ 3 = 7."
    },
    {
      id: "q_0_3", audioKey: "q_0_3", rule: "SAME FACTOR",
      prompt: "2 cups of smoothie need 4 mangoes. If Oliver makes 3 times as many cups, what happens to mangoes needed?",
      audioText: "2 cups of smoothie need 4 mangoes. If Oliver makes 3 times as many cups, what happens to mangoes needed?",
      options: ["Multiplied by 3", "Increased by 3", "Divided by 3", "Stays the same"], correctIndex: 0,
      diagramData: { mode: "factor", xLab: "Cups", yLab: "Mangoes", xVal: 2, yVal: 4, m: 3 },
      explanation: "In direct proportion, when cups are multiplied by 3, mangoes are also multiplied by 3."
    },
    {
      id: "q_0_4", audioKey: "q_0_4", rule: "FIND x",
      prompt: "1 cup of smoothie costs ₹8. How many cups can be bought for ₹32?",
      audioText: "1 cup of smoothie costs 8 rupees. How many cups can be bought for 32 rupees?",
      options: ["4 cups", "3 cups", "5 cups", "6 cups"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Cups", yLab: "Cost (₹)", xVal: "?", kVal: 8, yVal: 32 },
      explanation: "x = y ÷ k = 32 ÷ 8 = 4 cups."
    },
    {
      id: "q_0_5", audioKey: "q_0_5", rule: "DIRECT TEST",
      prompt: "0 cups cost ₹0, and 3 cups cost ₹24. Is smoothie cost directly proportional to cups?",
      audioText: "Zero cups cost zero rupees, and 3 cups cost 24 rupees. Is smoothie cost directly proportional to cups?",
      options: ["Yes, passes through (0, 0) with fixed ratio", "No, cost must increase faster", "No, ratios change", "Only for even numbers"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Cups", yLab: "Cost (₹)", xs: [0, 3], ys: [0, 24] },
      explanation: "Direct proportions always pass through (0, 0) and maintain a fixed ratio y ÷ x = 8."
    },
    {
      id: "q_0_6", audioKey: "q_0_6", rule: "COMPLETE TABLE",
      prompt: "In the smoothie table, 2 cups cost ₹16 and 4 cups cost ₹32. What is the missing cost for 5 cups?",
      audioText: "In the smoothie table, 2 cups cost 16 rupees and 4 cups cost 32 rupees. What is the missing cost for 5 cups?",
      options: ["₹40", "₹38", "₹45", "₹48"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Cups", yLab: "Cost (₹)", xs: [2, 4, 5], ys: [16, 32, "?"] },
      explanation: "k = 16 ÷ 2 = ₹8 per cup. For 5 cups: 5 × 8 = ₹40."
    },
    {
      id: "q_0_7", audioKey: "q_0_7", rule: "GRAPH READING",
      prompt: "On the smoothie price graph through (0, 0) and (2, 18), what is the cost for x = 6 cups?",
      audioText: "On the smoothie price graph through 0 comma 0 and 2 comma 18 rupees, what is the cost for x equals 6 cups?",
      options: ["₹54", "₹48", "₹36", "₹60"], correctIndex: 0,
      diagramData: { mode: "graph", xa: 2, ya: 18, x2: 6 },
      explanation: "k = 18 ÷ 2 = 9. For x = 6, y = 9 × 6 = ₹54."
    },
    {
      id: "q_0_8", audioKey: "q_0_8", rule: "UNIT RATE",
      prompt: "A stand sells 6 cups of smoothie for ₹48. What is the unit price of 1 cup?",
      audioText: "A stand sells 6 cups of smoothie for 48 rupees. What is the unit price of 1 cup?",
      options: ["₹8", "₹6", "₹7", "₹9"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Cups", yLab: "Cost (₹)", xVal: 1, kVal: "?", yVal: 8 },
      explanation: "Unit price = 48 ÷ 6 = ₹8 per cup."
    },
    {
      id: "q_0_9", audioKey: "q_0_9", rule: "y = kx",
      prompt: "If total cost y equals 9x, what is the cost for 7 cups of smoothie?",
      audioText: "If total cost y equals 9 times x, what is the cost for 7 cups of smoothie?",
      options: ["₹63", "₹56", "₹72", "₹69"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Cups", yLab: "Cost (₹)", xVal: 7, kVal: 9, yVal: "?" },
      explanation: "y = 9 × 7 = ₹63."
    }
  ],

  // WORLD 1: Notebook Nook (k ~ ₹12–₹16 per notebook)
  1: [
    {
      id: "q_1_0", audioKey: "q_1_0", rule: "y = kx",
      prompt: "Liam notes that 1 notebook costs ₹15. How much do 4 notebooks cost?",
      audioText: "Liam notes that 1 notebook costs 15 rupees. How much do 4 notebooks cost?",
      options: ["₹60", "₹55", "₹45", "₹65"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Notebooks", yLab: "Cost (₹)", xVal: 4, kVal: 15, yVal: "?" },
      explanation: "y = 15 × 4 = ₹60."
    },
    {
      id: "q_1_1", audioKey: "q_1_1", rule: "UNITARY METHOD",
      prompt: "Alex finds that 3 notebooks cost ₹45. How much do 7 notebooks cost?",
      audioText: "Alex finds that 3 notebooks cost 45 rupees. How much do 7 notebooks cost?",
      options: ["₹105", "₹90", "₹115", "₹100"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Notebooks", yLab: "Cost (₹)", xs: [3, 7], ys: [45, "?"] },
      explanation: "1 notebook = 45 ÷ 3 = ₹15. Then 7 notebooks = 15 × 7 = ₹105."
    },
    {
      id: "q_1_2", audioKey: "q_1_2", rule: "CONSTANT RATIO",
      prompt: "In the stationery table, cost y is directly proportional to notebooks x. What is k if 4 notebooks cost ₹64?",
      audioText: "In the stationery table, cost y is directly proportional to notebooks x. What is k if 4 notebooks cost 64 rupees?",
      options: ["k = 16", "k = 14", "k = 18", "k = 12"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Notebooks", yLab: "Cost (₹)", xs: [1, 2, 4], ys: [16, 32, 64] },
      explanation: "k = y ÷ x = 64 ÷ 4 = 16."
    },
    {
      id: "q_1_3", audioKey: "q_1_3", rule: "SAME FACTOR",
      prompt: "3 notebooks cost ₹36. If Sophia buys 2 times as many notebooks, what happens to the total cost?",
      audioText: "3 notebooks cost 36 rupees. If Sophia buys 2 times as many notebooks, what happens to the total cost?",
      options: ["Multiplied by 2", "Increased by 2", "Divided by 2", "Stays the same"], correctIndex: 0,
      diagramData: { mode: "factor", xLab: "Notebooks", yLab: "Cost (₹)", xVal: 3, yVal: 36, m: 2 },
      explanation: "Direct proportion: multiplying notebooks by 2 multiplies total cost by 2."
    },
    {
      id: "q_1_4", audioKey: "q_1_4", rule: "FIND x",
      prompt: "1 notebook costs ₹14. How many notebooks can be bought for ₹70?",
      audioText: "1 notebook costs 14 rupees. How many notebooks can be bought for 70 rupees?",
      options: ["5 notebooks", "4 notebooks", "6 notebooks", "7 notebooks"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Notebooks", yLab: "Cost (₹)", xVal: "?", kVal: 14, yVal: 70 },
      explanation: "x = 70 ÷ 14 = 5 notebooks."
    },
    {
      id: "q_1_5", audioKey: "q_1_5", rule: "DIRECT TEST",
      prompt: "A shop charges ₹18 per notebook with no delivery fee. Is total cost directly proportional to notebooks?",
      audioText: "A shop charges 18 rupees per notebook with no delivery fee. Is total cost directly proportional to notebooks?",
      options: ["Yes, 0 notebooks cost ₹0 and y/x is fixed", "No, prices always vary", "No, only if you buy 10", "Depends on tax"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Notebooks", yLab: "Cost (₹)", xs: [0, 1], ys: [0, 18] },
      explanation: "Because cost starts at (0, 0) and increases at fixed rate ₹18, it is a direct proportion."
    },
    {
      id: "q_1_6", audioKey: "q_1_6", rule: "COMPLETE TABLE",
      prompt: "In the notebook ledger, 2 notebooks cost ₹30 and 4 cost ₹60. What is the cost for 6 notebooks?",
      audioText: "In the notebook ledger, 2 notebooks cost 30 rupees and 4 cost 60 rupees. What is the cost for 6 notebooks?",
      options: ["₹90", "₹85", "₹95", "₹100"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Notebooks", yLab: "Cost (₹)", xs: [2, 4, 6], ys: [30, 60, "?"] },
      explanation: "k = 30 ÷ 2 = ₹15. For 6 notebooks: 6 × 15 = ₹90."
    },
    {
      id: "q_1_7", audioKey: "q_1_7", rule: "GRAPH READING",
      prompt: "On the notebook graph through (0, 0) and (3, 42), what is the cost at x = 5 notebooks?",
      audioText: "On the notebook graph through 0 comma 0 and 3 comma 42 rupees, what is the cost at x equals 5 notebooks?",
      options: ["₹70", "₹65", "₹75", "₹60"], correctIndex: 0,
      diagramData: { mode: "graph", xa: 3, ya: 42, x2: 5 },
      explanation: "k = 42 ÷ 3 = 14. For x = 5, y = 14 × 5 = ₹70."
    },
    {
      id: "q_1_8", audioKey: "q_1_8", rule: "UNIT RATE",
      prompt: "Maya buys 5 notebooks for ₹75. Using the unitary method, what is the cost of 1 notebook?",
      audioText: "Maya buys 5 notebooks for 75 rupees. Using the unitary method, what is the cost of 1 notebook?",
      options: ["₹15", "₹12", "₹18", "₹20"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Notebooks", yLab: "Cost (₹)", xVal: 1, kVal: "?", yVal: 15 },
      explanation: "Unit cost = 75 ÷ 5 = ₹15."
    },
    {
      id: "q_1_9", audioKey: "q_1_9", rule: "y = kx",
      prompt: "If notebook cost follows y = 16x, what is the cost of 8 notebooks?",
      audioText: "If notebook cost follows y equals 16 times x, what is the cost of 8 notebooks?",
      options: ["₹128", "₹120", "₹136", "₹144"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Notebooks", yLab: "Cost (₹)", xVal: 8, kVal: 16, yVal: "?" },
      explanation: "y = 16 × 8 = ₹128."
    }
  ],

  // WORLD 2: Fuel Station (k ~ 12–15 km/L)
  2: [
    {
      id: "q_2_0", audioKey: "q_2_0", rule: "y = kx",
      prompt: "Lucas notes that 1 litre of fuel lets a car travel 14 km. How far can the car travel on 5 litres?",
      audioText: "Lucas notes that 1 litre of fuel lets a car travel 14 kilometres. How far can the car travel on 5 litres?",
      options: ["70 km", "65 km", "75 km", "80 km"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Fuel (L)", yLab: "Distance (km)", xVal: 5, kVal: 14, yVal: "?" },
      explanation: "y = 14 × 5 = 70 km."
    },
    {
      id: "q_2_1", audioKey: "q_2_1", rule: "UNITARY METHOD",
      prompt: "Zara finds that 4 litres of fuel give 52 km. How far can the car travel on 8 litres?",
      audioText: "Zara finds that 4 litres of fuel give 52 kilometres. How far can the car travel on 8 litres?",
      options: ["104 km", "96 km", "112 km", "100 km"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Fuel (L)", yLab: "Distance (km)", xs: [4, 8], ys: [52, "?"] },
      explanation: "1 L = 52 ÷ 4 = 13 km. Then 8 L = 13 × 8 = 104 km."
    },
    {
      id: "q_2_2", audioKey: "q_2_2", rule: "CONSTANT RATIO",
      prompt: "In the fuel table, distance y is directly proportional to fuel x. If 3 litres give 39 km, what is k?",
      audioText: "In the fuel table, distance y is directly proportional to fuel x. If 3 litres give 39 kilometres, what is k?",
      options: ["k = 13", "k = 12", "k = 14", "k = 15"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Fuel (L)", yLab: "Distance (km)", xs: [1, 2, 3], ys: [13, 26, 39] },
      explanation: "k = y ÷ x = 39 ÷ 3 = 13 km/L."
    },
    {
      id: "q_2_3", audioKey: "q_2_3", rule: "SAME FACTOR",
      prompt: "On 5 litres a car travels 65 km. If the driver takes 3 times as much fuel, what happens to distance?",
      audioText: "On 5 litres a car travels 65 kilometres. If the driver takes 3 times as much fuel, what happens to distance?",
      options: ["Multiplied by 3", "Divided by 3", "Increased by 3 km", "Stays the same"], correctIndex: 0,
      diagramData: { mode: "factor", xLab: "Fuel (L)", yLab: "Distance (km)", xVal: 5, yVal: 65, m: 3 },
      explanation: "Both fuel and distance scale by the same factor of 3."
    },
    {
      id: "q_2_4", audioKey: "q_2_4", rule: "FIND x",
      prompt: "A car travels 15 km per litre of petrol. How many litres are needed to travel 90 km?",
      audioText: "A car travels 15 kilometres per litre of petrol. How many litres are needed to travel 90 kilometres?",
      options: ["6 litres", "5 litres", "7 litres", "8 litres"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Fuel (L)", yLab: "Distance (km)", xVal: "?", kVal: 15, yVal: 90 },
      explanation: "x = 90 ÷ 15 = 6 litres."
    },
    {
      id: "q_2_5", audioKey: "q_2_5", rule: "DIRECT TEST",
      prompt: "A car travels 0 km on 0 litres and has constant mileage. Is distance directly proportional to fuel?",
      audioText: "A car travels 0 kilometres on 0 litres and has constant mileage. Is distance directly proportional to fuel?",
      options: ["Yes, passes through (0, 0) with constant k", "No, depends on road", "No, fuel always runs out", "Only on highways"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Fuel (L)", yLab: "Distance (km)", xs: [0, 2], ys: [0, 30] },
      explanation: "Since 0 fuel gives 0 km and mileage is constant, distance is directly proportional to fuel."
    },
    {
      id: "q_2_6", audioKey: "q_2_6", rule: "COMPLETE TABLE",
      prompt: "In the fuel table, 2 L give 28 km and 4 L give 56 km. What distance do 6 L give?",
      audioText: "In the fuel table, 2 litres give 28 kilometres and 4 litres give 56 kilometres. What distance do 6 litres give?",
      options: ["84 km", "80 km", "78 km", "88 km"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Fuel (L)", yLab: "Distance (km)", xs: [2, 4, 6], ys: [28, 56, "?"] },
      explanation: "k = 28 ÷ 2 = 14 km/L. For 6 L: 6 × 14 = 84 km."
    },
    {
      id: "q_2_7", audioKey: "q_2_7", rule: "GRAPH READING",
      prompt: "On the fuel graph through (0, 0) and (2, 26 km), what distance is reached with x = 7 litres?",
      audioText: "On the fuel graph through 0 comma 0 and 2 comma 26 kilometres, what distance is reached with x equals 7 litres?",
      options: ["91 km", "84 km", "98 km", "88 km"], correctIndex: 0,
      diagramData: { mode: "graph", xa: 2, ya: 26, x2: 7 },
      explanation: "k = 26 ÷ 2 = 13. For x = 7, y = 13 × 7 = 91 km."
    },
    {
      id: "q_2_8", audioKey: "q_2_8", rule: "UNIT RATE",
      prompt: "A truck travels 108 km on 9 litres of diesel. What is the distance travelled per litre?",
      audioText: "A truck travels 108 kilometres on 9 litres of diesel. What is the distance travelled per litre?",
      options: ["12 km/L", "11 km/L", "13 km/L", "14 km/L"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Fuel (L)", yLab: "Distance (km)", xVal: 1, kVal: "?", yVal: 12 },
      explanation: "Distance per litre = 108 ÷ 9 = 12 km/L."
    },
    {
      id: "q_2_9", audioKey: "q_2_9", rule: "y = kx",
      prompt: "If distance y equals 13 times fuel x, what is the distance for 10 litres?",
      audioText: "If distance y equals 13 times fuel x, what is the distance for 10 litres?",
      options: ["130 km", "120 km", "140 km", "125 km"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Fuel (L)", yLab: "Distance (km)", xVal: 10, kVal: 13, yVal: "?" },
      explanation: "y = 13 × 10 = 130 km."
    }
  ],

  // WORLD 3: Bakery Street (k ~ 70–85 g flour per loaf)
  3: [
    {
      id: "q_3_0", audioKey: "q_3_0", rule: "y = kx",
      prompt: "Chloe notes that 1 loaf needs 75 g of flour. How much flour do 4 loaves need?",
      audioText: "Chloe notes that 1 loaf needs 75 grams of flour. How much flour do 4 loaves need?",
      options: ["300 g", "280 g", "320 g", "350 g"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Loaves", yLab: "Flour (g)", xVal: 4, kVal: 75, yVal: "?" },
      explanation: "y = 75 × 4 = 300 g."
    },
    {
      id: "q_3_1", audioKey: "q_3_1", rule: "UNITARY METHOD",
      prompt: "Ethan finds that 2 loaves need 160 g of flour. How much flour do 5 loaves need?",
      audioText: "Ethan finds that 2 loaves need 160 grams of flour. How much flour do 5 loaves need?",
      options: ["400 g", "380 g", "420 g", "450 g"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Loaves", yLab: "Flour (g)", xs: [2, 5], ys: [160, "?"] },
      explanation: "1 loaf = 160 ÷ 2 = 80 g. Then 5 loaves = 80 × 5 = 400 g."
    },
    {
      id: "q_3_2", audioKey: "q_3_2", rule: "CONSTANT RATIO",
      prompt: "In the bakery table, flour y is directly proportional to loaves x. If 3 loaves need 210 g, what is k?",
      audioText: "In the bakery table, flour y is directly proportional to loaves x. If 3 loaves need 210 grams, what is k?",
      options: ["k = 70 g", "k = 65 g", "k = 75 g", "k = 80 g"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Loaves", yLab: "Flour (g)", xs: [1, 2, 3], ys: [70, 140, 210] },
      explanation: "k = y ÷ x = 210 ÷ 3 = 70 g per loaf."
    },
    {
      id: "q_3_3", audioKey: "q_3_3", rule: "SAME FACTOR",
      prompt: "4 loaves need 280 g of flour. If the baker makes 2 times as many loaves, what happens to flour needed?",
      audioText: "4 loaves need 280 grams of flour. If the baker makes 2 times as many loaves, what happens to flour needed?",
      options: ["Multiplied by 2", "Divided by 2", "Increased by 2 g", "Stays unchanged"], correctIndex: 0,
      diagramData: { mode: "factor", xLab: "Loaves", yLab: "Flour (g)", xVal: 4, yVal: 280, m: 2 },
      explanation: "Flour scales by the same factor as loaves, so it is multiplied by 2."
    },
    {
      id: "q_3_4", audioKey: "q_3_4", rule: "FIND x",
      prompt: "1 loaf requires 85 g of flour. How many loaves can be baked with 510 g of flour?",
      audioText: "1 loaf requires 85 grams of flour. How many loaves can be baked with 510 grams of flour?",
      options: ["6 loaves", "5 loaves", "7 loaves", "8 loaves"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Loaves", yLab: "Flour (g)", xVal: "?", kVal: 85, yVal: 510 },
      explanation: "x = 510 ÷ 85 = 6 loaves."
    },
    {
      id: "q_3_5", audioKey: "q_3_5", rule: "DIRECT TEST",
      prompt: "Zero loaves need zero flour, and each loaf takes 70 g. Is flour directly proportional to loaves?",
      audioText: "Zero loaves need zero flour, and each loaf takes 70 grams. Is flour directly proportional to loaves?",
      options: ["Yes, passes through (0, 0) with fixed ratio", "No, depends on oven temperature", "No, waste changes ratio", "Only for white bread"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Loaves", yLab: "Flour (g)", xs: [0, 1], ys: [0, 70] },
      explanation: "Direct proportion: 0 loaves = 0 g and flour increases at constant rate."
    },
    {
      id: "q_3_6", audioKey: "q_3_6", rule: "COMPLETE TABLE",
      prompt: "In the recipe ledger, 2 loaves need 140 g and 4 loaves need 280 g. How much flour do 6 loaves need?",
      audioText: "In the recipe ledger, 2 loaves need 140 grams and 4 loaves need 280 grams. How much flour do 6 loaves need?",
      options: ["420 g", "380 g", "400 g", "450 g"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Loaves", yLab: "Flour (g)", xs: [2, 4, 6], ys: [140, 280, "?"] },
      explanation: "k = 140 ÷ 2 = 70 g. For 6 loaves: 6 × 70 = 420 g."
    },
    {
      id: "q_3_7", audioKey: "q_3_7", rule: "GRAPH READING",
      prompt: "On the bakery graph through (0, 0) and (2, 130 g), how much flour is needed for x = 6 loaves?",
      audioText: "On the bakery graph through 0 comma 0 and 2 comma 130 grams, how much flour is needed for x equals 6 loaves?",
      options: ["390 g", "360 g", "400 g", "420 g"], correctIndex: 0,
      diagramData: { mode: "graph", xa: 2, ya: 130, x2: 6 },
      explanation: "k = 130 ÷ 2 = 65. For x = 6, y = 65 × 6 = 390 g."
    },
    {
      id: "q_3_8", audioKey: "q_3_8", rule: "UNIT RATE",
      prompt: "A master baker uses 450 g of flour for 5 artisanal loaves. How much flour is in 1 loaf?",
      audioText: "A master baker uses 450 grams of flour for 5 artisanal loaves. How much flour is in 1 loaf?",
      options: ["90 g", "85 g", "95 g", "80 g"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Loaves", yLab: "Flour (g)", xVal: 1, kVal: "?", yVal: 90 },
      explanation: "Flour per loaf = 450 ÷ 5 = 90 g."
    },
    {
      id: "q_3_9", audioKey: "q_3_9", rule: "y = kx",
      prompt: "If flour y equals 80 times loaves x, how much flour is required for 7 loaves?",
      audioText: "If flour y equals 80 times loaves x, how much flour is required for 7 loaves?",
      options: ["560 g", "540 g", "580 g", "600 g"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Loaves", yLab: "Flour (g)", xVal: 7, kVal: 80, yVal: "?" },
      explanation: "y = 80 × 7 = 560 g."
    }
  ],

  // WORLD 4: Cycle Track (k ~ 15–20 km/h)
  4: [
    {
      id: "q_4_0", audioKey: "q_4_0", rule: "y = kx",
      prompt: "Jack notes that a cyclist rides 16 km every hour. How far does the cyclist ride in 4 hours?",
      audioText: "Jack notes that a cyclist rides 16 kilometres every hour. How far does the cyclist ride in 4 hours?",
      options: ["64 km", "60 km", "68 km", "72 km"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Time (h)", yLab: "Distance (km)", xVal: 4, kVal: 16, yVal: "?" },
      explanation: "y = 16 × 4 = 64 km."
    },
    {
      id: "q_4_1", audioKey: "q_4_1", rule: "UNITARY METHOD",
      prompt: "Harper finds that a cyclist rides 36 km in 2 hours. How far does the cyclist ride in 5 hours?",
      audioText: "Harper finds that a cyclist rides 36 kilometres in 2 hours. How far does the cyclist ride in 5 hours?",
      options: ["90 km", "85 km", "95 km", "100 km"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Time (h)", yLab: "Distance (km)", xs: [2, 5], ys: [36, "?"] },
      explanation: "1 h = 36 ÷ 2 = 18 km. Then 5 h = 18 × 5 = 90 km."
    },
    {
      id: "q_4_2", audioKey: "q_4_2", rule: "CONSTANT RATIO",
      prompt: "In the cycling table, distance y is directly proportional to time x. If 3 hours give 45 km, what is k?",
      audioText: "In the cycling table, distance y is directly proportional to time x. If 3 hours give 45 kilometres, what is k?",
      options: ["k = 15 km/h", "k = 14 km/h", "k = 16 km/h", "k = 18 km/h"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Time (h)", yLab: "Distance (km)", xs: [1, 2, 3], ys: [15, 30, 45] },
      explanation: "k = y ÷ x = 45 ÷ 3 = 15 km/h."
    },
    {
      id: "q_4_3", audioKey: "q_4_3", rule: "SAME FACTOR",
      prompt: "In 2 hours a cyclist travels 30 km. If the cyclist rides for 3 times as many hours, what happens to distance?",
      audioText: "In 2 hours a cyclist travels 30 kilometres. If the cyclist rides for 3 times as many hours, what happens to distance?",
      options: ["Multiplied by 3", "Divided by 3", "Increased by 3 km", "Stays the same"], correctIndex: 0,
      diagramData: { mode: "factor", xLab: "Time (h)", yLab: "Distance (km)", xVal: 2, yVal: 30, m: 3 },
      explanation: "Direct proportion: multiplying time by 3 multiplies distance by 3."
    },
    {
      id: "q_4_4", audioKey: "q_4_4", rule: "FIND x",
      prompt: "A cyclist travels at a constant speed of 18 km/h. How many hours are needed to cover 72 km?",
      audioText: "A cyclist travels at a constant speed of 18 kilometres per hour. How many hours are needed to cover 72 kilometres?",
      options: ["4 hours", "3 hours", "5 hours", "6 hours"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Time (h)", yLab: "Distance (km)", xVal: "?", kVal: 18, yVal: 72 },
      explanation: "x = 72 ÷ 18 = 4 hours."
    },
    {
      id: "q_4_5", audioKey: "q_4_5", rule: "DIRECT TEST",
      prompt: "At zero hours distance is zero, and speed is steady throughout. Is distance directly proportional to time?",
      audioText: "At zero hours distance is zero, and speed is steady throughout. Is distance directly proportional to time?",
      options: ["Yes, passes through (0, 0) and has constant speed", "No, rider gets tired", "No, depends on bicycle gear", "Only on flat tracks"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Time (h)", yLab: "Distance (km)", xs: [0, 1], ys: [0, 20] },
      explanation: "Constant speed starting from 0 distance at 0 time is the definition of direct proportion."
    },
    {
      id: "q_4_6", audioKey: "q_4_6", rule: "COMPLETE TABLE",
      prompt: "In the ride log, 2 hours give 34 km and 4 hours give 68 km. What distance is covered in 5 hours?",
      audioText: "In the ride log, 2 hours give 34 kilometres and 4 hours give 68 kilometres. What distance is covered in 5 hours?",
      options: ["85 km", "80 km", "88 km", "90 km"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Time (h)", yLab: "Distance (km)", xs: [2, 4, 5], ys: [34, 68, "?"] },
      explanation: "k = 34 ÷ 2 = 17 km/h. For 5 hours: 5 × 17 = 85 km."
    },
    {
      id: "q_4_7", audioKey: "q_4_7", rule: "GRAPH READING",
      prompt: "On the cycling graph through (0, 0) and (2, 38 km), what is the distance for x = 4 hours?",
      audioText: "On the cycling graph through 0 comma 0 and 2 comma 38 kilometres, what is the distance for x equals 4 hours?",
      options: ["76 km", "70 km", "80 km", "72 km"], correctIndex: 0,
      diagramData: { mode: "graph", xa: 2, ya: 38, x2: 4 },
      explanation: "k = 38 ÷ 2 = 19. For x = 4, y = 19 × 4 = 76 km."
    },
    {
      id: "q_4_8", audioKey: "q_4_8", rule: "UNIT RATE",
      prompt: "A cyclist rides 84 km in 4 hours at a steady pace. What is the distance covered in 1 hour?",
      audioText: "A cyclist rides 84 kilometres in 4 hours at a steady pace. What is the distance covered in 1 hour?",
      options: ["21 km", "20 km", "22 km", "24 km"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Time (h)", yLab: "Distance (km)", xVal: 1, kVal: "?", yVal: 21 },
      explanation: "Speed = 84 ÷ 4 = 21 km/h."
    },
    {
      id: "q_4_9", audioKey: "q_4_9", rule: "y = kx",
      prompt: "If distance y equals 20 times time x, what is the distance after 6 hours?",
      audioText: "If distance y equals 20 times time x, what is the distance after 6 hours?",
      options: ["120 km", "110 km", "130 km", "125 km"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Time (h)", yLab: "Distance (km)", xVal: 6, kVal: 20, yVal: "?" },
      explanation: "y = 20 × 6 = 120 km."
    }
  ],

  // WORLD 5: Map Mountain (k ~ 15–20 km/cm)
  5: [
    {
      id: "q_5_0", audioKey: "q_5_0", rule: "y = kx",
      prompt: "Ava notes that 1 cm on the map shows 15 km in real life. What real distance does 4 cm show?",
      audioText: "Ava notes that 1 centimetre on the map shows 15 kilometres in real life. What real distance does 4 centimetres show?",
      options: ["60 km", "55 km", "65 km", "70 km"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Map (cm)", yLab: "Real (km)", xVal: 4, kVal: 15, yVal: "?" },
      explanation: "y = 15 × 4 = 60 km."
    },
    {
      id: "q_5_1", audioKey: "q_5_1", rule: "UNITARY METHOD",
      prompt: "Noah finds that 3 cm on a map show 48 km. What real distance do 6 cm show?",
      audioText: "Noah finds that 3 centimetres on a map show 48 kilometres. What real distance do 6 centimetres show?",
      options: ["96 km", "90 km", "102 km", "108 km"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Map (cm)", yLab: "Real (km)", xs: [3, 6], ys: [48, "?"] },
      explanation: "1 cm = 48 ÷ 3 = 16 km. Then 6 cm = 16 × 6 = 96 km."
    },
    {
      id: "q_5_2", audioKey: "q_5_2", rule: "CONSTANT RATIO",
      prompt: "In the map table, real km y is directly proportional to map cm x. If 2 cm show 36 km, what is k?",
      audioText: "In the map table, real kilometres y is directly proportional to map centimetres x. If 2 centimetres show 36 kilometres, what is k?",
      options: ["k = 18 km/cm", "k = 16 km/cm", "k = 20 km/cm", "k = 15 km/cm"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Map (cm)", yLab: "Real (km)", xs: [1, 2, 4], ys: [18, 36, 72] },
      explanation: "k = y ÷ x = 36 ÷ 2 = 18 km/cm."
    },
    {
      id: "q_5_3", audioKey: "q_5_3", rule: "SAME FACTOR",
      prompt: "2 cm on the map represent 30 km. If map distance is doubled, what happens to real distance?",
      audioText: "2 centimetres on the map represent 30 kilometres. If map distance is doubled, what happens to real distance?",
      options: ["Doubled", "Halved", "Increased by 2 km", "Stays the same"], correctIndex: 0,
      diagramData: { mode: "factor", xLab: "Map (cm)", yLab: "Real (km)", xVal: 2, yVal: 30, m: 2 },
      explanation: "Doubling map distance doubles real distance."
    },
    {
      id: "q_5_4", audioKey: "q_5_4", rule: "FIND x",
      prompt: "The scale is 18 km per cm. How many centimetres on the map represent 90 km in real life?",
      audioText: "The scale is 18 kilometres per centimetre. How many centimetres on the map represent 90 kilometres in real life?",
      options: ["5 cm", "4 cm", "6 cm", "7 cm"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Map (cm)", yLab: "Real (km)", xVal: "?", kVal: 18, yVal: 90 },
      explanation: "x = 90 ÷ 18 = 5 cm."
    },
    {
      id: "q_5_5", audioKey: "q_5_5", rule: "DIRECT TEST",
      prompt: "0 cm on the map is 0 km, with a constant scale factor k. Is map distance directly proportional to real distance?",
      audioText: "0 centimetres on the map is 0 kilometres, with a constant scale factor k. Is map distance directly proportional to real distance?",
      options: ["Yes, ratio is constant and passes through (0, 0)", "No, maps are flat and earth is curved", "No, depends on compass", "Only for straight roads"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Map (cm)", yLab: "Real (km)", xs: [0, 1], ys: [0, 20] },
      explanation: "Map scales are textbook examples of direct proportion: y = kx."
    },
    {
      id: "q_5_6", audioKey: "q_5_6", rule: "COMPLETE TABLE",
      prompt: "In the map key table, 2 cm show 26 km and 4 cm show 52 km. What real distance do 5 cm show?",
      audioText: "In the map key table, 2 centimetres show 26 kilometres and 4 centimetres show 52 kilometres. What real distance do 5 centimetres show?",
      options: ["65 km", "60 km", "70 km", "68 km"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Map (cm)", yLab: "Real (km)", xs: [2, 4, 5], ys: [26, 52, "?"] },
      explanation: "k = 26 ÷ 2 = 13 km/cm. For 5 cm: 5 × 13 = 65 km."
    },
    {
      id: "q_5_7", audioKey: "q_5_7", rule: "GRAPH READING",
      prompt: "On the map scale graph through (0, 0) and (3, 60 km), what is the real distance for x = 7 cm?",
      audioText: "On the map scale graph through 0 comma 0 and 3 comma 60 kilometres, what is the real distance for x equals 7 centimetres?",
      options: ["140 km", "130 km", "150 km", "135 km"], correctIndex: 0,
      diagramData: { mode: "graph", xa: 3, ya: 60, x2: 7 },
      explanation: "k = 60 ÷ 3 = 20. For x = 7, y = 20 × 7 = 140 km."
    },
    {
      id: "q_5_8", audioKey: "q_5_8", rule: "UNIT RATE",
      prompt: "A mountain trail of 6 cm on the map equals 120 km in reality. What distance does 1 cm represent?",
      audioText: "A mountain trail of 6 centimetres on the map equals 120 kilometres in reality. What distance does 1 centimetre represent?",
      options: ["20 km", "18 km", "22 km", "25 km"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Map (cm)", yLab: "Real (km)", xVal: 1, kVal: "?", yVal: 20 },
      explanation: "Distance per cm = 120 ÷ 6 = 20 km."
    },
    {
      id: "q_5_9", audioKey: "q_5_9", rule: "y = kx",
      prompt: "If real distance y equals 22 times map cm x, what real distance is shown by 5 cm?",
      audioText: "If real distance y equals 22 times map centimetres x, what real distance is shown by 5 centimetres?",
      options: ["110 km", "105 km", "115 km", "120 km"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Map (cm)", yLab: "Real (km)", xVal: 5, kVal: 22, yVal: "?" },
      explanation: "y = 22 × 5 = 110 km."
    }
  ],

  // WORLD 6: Paint Factory (k ~ 8–12 m²/L)
  6: [
    {
      id: "q_6_0", audioKey: "q_6_0", rule: "y = kx",
      prompt: "Mason notes that 1 litre of paint covers 9 m² of wall. What area do 5 litres cover?",
      audioText: "Mason notes that 1 litre of paint covers 9 square metres of wall. What area do 5 litres cover?",
      options: ["45 m²", "40 m²", "50 m²", "42 m²"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Paint (L)", yLab: "Area (m²)", xVal: 5, kVal: 9, yVal: "?" },
      explanation: "y = 9 × 5 = 45 m²."
    },
    {
      id: "q_6_1", audioKey: "q_6_1", rule: "UNITARY METHOD",
      prompt: "Ella finds that 3 litres of paint cover 33 m². What area do 7 litres cover?",
      audioText: "Ella finds that 3 litres of paint cover 33 square metres. What area do 7 litres cover?",
      options: ["77 m²", "70 m²", "84 m²", "72 m²"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Paint (L)", yLab: "Area (m²)", xs: [3, 7], ys: [33, "?"] },
      explanation: "1 L = 33 ÷ 3 = 11 m². Then 7 L = 11 × 7 = 77 m²."
    },
    {
      id: "q_6_2", audioKey: "q_6_2", rule: "CONSTANT RATIO",
      prompt: "In the paint table, area y is directly proportional to litres x. If 4 litres cover 48 m², what is k?",
      audioText: "In the paint table, area y is directly proportional to litres x. If 4 litres cover 48 square metres, what is k?",
      options: ["k = 12 m²/L", "k = 10 m²/L", "k = 14 m²/L", "k = 16 m²/L"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Paint (L)", yLab: "Area (m²)", xs: [1, 2, 4], ys: [12, 24, 48] },
      explanation: "k = y ÷ x = 48 ÷ 4 = 12 m²/L."
    },
    {
      id: "q_6_3", audioKey: "q_6_3", rule: "SAME FACTOR",
      prompt: "2 litres cover 24 m². If a painter takes 3 times as much paint, what happens to the area covered?",
      audioText: "2 litres cover 24 square metres. If a painter takes 3 times as much paint, what happens to the area covered?",
      options: ["Multiplied by 3", "Divided by 3", "Increased by 3 m²", "Stays the same"], correctIndex: 0,
      diagramData: { mode: "factor", xLab: "Paint (L)", yLab: "Area (m²)", xVal: 2, yVal: 24, m: 3 },
      explanation: "Both litres and area scale by the same factor of 3."
    },
    {
      id: "q_6_4", audioKey: "q_6_4", rule: "FIND x",
      prompt: "1 litre of primer covers 11 m². How many litres are needed to cover 77 m² of wall?",
      audioText: "1 litre of primer covers 11 square metres. How many litres are needed to cover 77 square metres of wall?",
      options: ["7 litres", "6 litres", "8 litres", "9 litres"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Paint (L)", yLab: "Area (m²)", xVal: "?", kVal: 11, yVal: 77 },
      explanation: "x = 77 ÷ 11 = 7 litres."
    },
    {
      id: "q_6_5", audioKey: "q_6_5", rule: "DIRECT TEST",
      prompt: "0 litres cover 0 m², and every litre covers 8 m². Is the painted area directly proportional to litres?",
      audioText: "0 litres cover 0 square metres, and every litre covers 8 square metres. Is the painted area directly proportional to litres?",
      options: ["Yes, passes through (0, 0) and has constant k", "No, paint dries at different rates", "No, second coat changes ratio", "Only for gloss paint"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Paint (L)", yLab: "Area (m²)", xs: [0, 1], ys: [0, 8] },
      explanation: "Starting at 0 and having a constant area per litre means direct proportion."
    },
    {
      id: "q_6_6", audioKey: "q_6_6", rule: "COMPLETE TABLE",
      prompt: "In the paint ledger, 2 litres cover 20 m² and 4 litres cover 40 m². What area do 6 litres cover?",
      audioText: "In the paint ledger, 2 litres cover 20 square metres and 4 litres cover 40 square metres. What area do 6 litres cover?",
      options: ["60 m²", "55 m²", "65 m²", "70 m²"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Paint (L)", yLab: "Area (m²)", xs: [2, 4, 6], ys: [20, 40, "?"] },
      explanation: "k = 20 ÷ 2 = 10 m²/L. For 6 L: 6 × 10 = 60 m²."
    },
    {
      id: "q_6_7", audioKey: "q_6_7", rule: "GRAPH READING",
      prompt: "On the paint coverage graph through (0, 0) and (3, 36 m²), what area is covered by x = 5 litres?",
      audioText: "On the paint coverage graph through 0 comma 0 and 3 comma 36 square metres, what area is covered by x equals 5 litres?",
      options: ["60 m²", "54 m²", "64 m²", "72 m²"], correctIndex: 0,
      diagramData: { mode: "graph", xa: 3, ya: 36, x2: 5 },
      explanation: "k = 36 ÷ 3 = 12. For x = 5, y = 12 × 5 = 60 m²."
    },
    {
      id: "q_6_8", audioKey: "q_6_8", rule: "UNIT RATE",
      prompt: "A decorator uses 6 litres of lacquer to cover 78 m². How many square metres does 1 litre cover?",
      audioText: "A decorator uses 6 litres of lacquer to cover 78 square metres. How many square metres does 1 litre cover?",
      options: ["13 m²", "12 m²", "14 m²", "15 m²"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Paint (L)", yLab: "Area (m²)", xVal: 1, kVal: "?", yVal: 13 },
      explanation: "Coverage per litre = 78 ÷ 6 = 13 m²."
    },
    {
      id: "q_6_9", audioKey: "q_6_9", rule: "y = kx",
      prompt: "If area y equals 12 times litres x, what area is covered by 8 litres of paint?",
      audioText: "If area y equals 12 times litres x, what area is covered by 8 litres of paint?",
      options: ["96 m²", "88 m²", "104 m²", "92 m²"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Paint (L)", yLab: "Area (m²)", xVal: 8, kVal: 12, yVal: "?" },
      explanation: "y = 12 × 8 = 96 m²."
    }
  ],

  // WORLD 7: Currency Bazaar (k ~ ₹80–₹85 per $)
  7: [
    {
      id: "q_7_0", audioKey: "q_7_0", rule: "y = kx",
      prompt: "James notes that 1 dollar is exchanged for ₹80. How many rupees will 4 dollars give?",
      audioText: "James notes that 1 dollar is exchanged for 80 rupees. How many rupees will 4 dollars give?",
      options: ["₹320", "₹300", "₹340", "₹360"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Dollars ($)", yLab: "Rupees (₹)", xVal: 4, kVal: 80, yVal: "?" },
      explanation: "y = 80 × 4 = ₹320."
    },
    {
      id: "q_7_1", audioKey: "q_7_1", rule: "UNITARY METHOD",
      prompt: "Mia finds that 3 dollars give ₹246. How many rupees will 5 dollars give?",
      audioText: "Mia finds that 3 dollars give 246 rupees. How many rupees will 5 dollars give?",
      options: ["₹410", "₹390", "₹425", "₹400"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Dollars ($)", yLab: "Rupees (₹)", xs: [3, 5], ys: [246, "?"] },
      explanation: "1 dollar = 246 ÷ 3 = ₹82. Then 5 dollars = 82 × 5 = ₹410."
    },
    {
      id: "q_7_2", audioKey: "q_7_2", rule: "CONSTANT RATIO",
      prompt: "In the exchange table, rupees y is directly proportional to dollars x. If 2 dollars give ₹164, what is k?",
      audioText: "In the exchange table, rupees y is directly proportional to dollars x. If 2 dollars give 164 rupees, what is k?",
      options: ["k = 82", "k = 80", "k = 84", "k = 85"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Dollars ($)", yLab: "Rupees (₹)", xs: [1, 2, 4], ys: [82, 164, 328] },
      explanation: "k = y ÷ x = 164 ÷ 2 = 82."
    },
    {
      id: "q_7_3", audioKey: "q_7_3", rule: "SAME FACTOR",
      prompt: "4 dollars are exchanged for ₹320. If James exchanges 2 times as many dollars, what happens to rupees?",
      audioText: "4 dollars are exchanged for 320 rupees. If James exchanges 2 times as many dollars, what happens to rupees?",
      options: ["Multiplied by 2", "Divided by 2", "Increased by 2 rupees", "Stays the same"], correctIndex: 0,
      diagramData: { mode: "factor", xLab: "Dollars ($)", yLab: "Rupees (₹)", xVal: 4, yVal: 320, m: 2 },
      explanation: "Rupees received scale by the exact same factor (multiplied by 2)."
    },
    {
      id: "q_7_4", audioKey: "q_7_4", rule: "FIND x",
      prompt: "The exchange rate is ₹85 per dollar. How many dollars can be exchanged for ₹425?",
      audioText: "The exchange rate is 85 rupees per dollar. How many dollars can be exchanged for 425 rupees?",
      options: ["5 dollars", "4 dollars", "6 dollars", "7 dollars"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Dollars ($)", yLab: "Rupees (₹)", xVal: "?", kVal: 85, yVal: 425 },
      explanation: "x = 425 ÷ 85 = 5 dollars."
    },
    {
      id: "q_7_5", audioKey: "q_7_5", rule: "DIRECT TEST",
      prompt: "Exchanging 0 dollars gives ₹0 with no fixed transaction fee. Is the exchange directly proportional?",
      audioText: "Exchanging 0 dollars gives 0 rupees with no fixed transaction fee. Is the exchange directly proportional?",
      options: ["Yes, passes through (0, 0) and has constant k", "No, currencies fluctuate", "No, bank always takes commission", "Only for tourist currency"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Dollars ($)", yLab: "Rupees (₹)", xs: [0, 1], ys: [0, 80] },
      explanation: "With zero fees and a fixed rate, exchanging currency is directly proportional."
    },
    {
      id: "q_7_6", audioKey: "q_7_6", rule: "COMPLETE TABLE",
      prompt: "In the bazaar ledger, 2 dollars give ₹166 and 4 give ₹332. How many rupees do 6 dollars give?",
      audioText: "In the bazaar ledger, 2 dollars give 166 rupees and 4 give 332 rupees. How many rupees do 6 dollars give?",
      options: ["₹498", "₹480", "₹510", "₹495"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Dollars ($)", yLab: "Rupees (₹)", xs: [2, 4, 6], ys: [166, 332, "?"] },
      explanation: "k = 166 ÷ 2 = 83. For 6 dollars: 6 × 83 = ₹498."
    },
    {
      id: "q_7_7", audioKey: "q_7_7", rule: "GRAPH READING",
      prompt: "On the exchange graph through (0, 0) and (2, ₹168), how many rupees are received for x = 5 dollars?",
      audioText: "On the exchange graph through 0 comma 0 and 2 comma 168 rupees, how many rupees are received for x equals 5 dollars?",
      options: ["₹420", "₹400", "₹440", "₹415"], correctIndex: 0,
      diagramData: { mode: "graph", xa: 2, ya: 168, x2: 5 },
      explanation: "k = 168 ÷ 2 = 84. For x = 5, y = 84 × 5 = ₹420."
    },
    {
      id: "q_7_8", audioKey: "q_7_8", rule: "UNIT RATE",
      prompt: "A bank gives ₹435 for 5 dollars. What is the exchange rate for 1 dollar?",
      audioText: "A bank gives 435 rupees for 5 dollars. What is the exchange rate for 1 dollar?",
      options: ["₹87", "₹85", "₹89", "₹82"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Dollars ($)", yLab: "Rupees (₹)", xVal: 1, kVal: "?", yVal: 87 },
      explanation: "Rate = 435 ÷ 5 = ₹87 per dollar."
    },
    {
      id: "q_7_9", audioKey: "q_7_9", rule: "y = kx",
      prompt: "If rupees y equals 82 times dollars x, how many rupees will 7 dollars yield?",
      audioText: "If rupees y equals 82 times dollars x, how many rupees will 7 dollars yield?",
      options: ["₹574", "₹560", "₹584", "₹590"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Dollars ($)", yLab: "Rupees (₹)", xVal: 7, kVal: 82, yVal: "?" },
      explanation: "y = 82 × 7 = ₹574."
    }
  ],

  // WORLD 8: Rocket Launchpad (k ~ 30–45 L/s fuel)
  8: [
    {
      id: "q_8_0", audioKey: "q_8_0", rule: "y = kx",
      prompt: "Logan notes that a rocket burns 30 litres of fuel every second. How much fuel does it burn in 5 seconds?",
      audioText: "Logan notes that a rocket burns 30 litres of fuel every second. How much fuel does it burn in 5 seconds?",
      options: ["150 L", "140 L", "160 L", "175 L"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Time (s)", yLab: "Fuel (L)", xVal: 5, kVal: 30, yVal: "?" },
      explanation: "y = 30 × 5 = 150 litres."
    },
    {
      id: "q_8_1", audioKey: "q_8_1", rule: "UNITARY METHOD",
      prompt: "Charlotte finds that a rocket burns 96 litres in 3 seconds. How much fuel does it burn in 6 seconds?",
      audioText: "Charlotte finds that a rocket burns 96 litres in 3 seconds. How much fuel does it burn in 6 seconds?",
      options: ["192 L", "180 L", "204 L", "190 L"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Time (s)", yLab: "Fuel (L)", xs: [3, 6], ys: [96, "?"] },
      explanation: "1 s = 96 ÷ 3 = 32 L. Then 6 s = 32 × 6 = 192 L."
    },
    {
      id: "q_8_2", audioKey: "q_8_2", rule: "CONSTANT RATIO",
      prompt: "In the rocket table, fuel y is directly proportional to seconds x. If 4 seconds burn 160 litres, what is k?",
      audioText: "In the rocket table, fuel y is directly proportional to seconds x. If 4 seconds burn 160 litres, what is k?",
      options: ["k = 40 L/s", "k = 35 L/s", "k = 45 L/s", "k = 30 L/s"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Time (s)", yLab: "Fuel (L)", xs: [1, 2, 4], ys: [40, 80, 160] },
      explanation: "k = y ÷ x = 160 ÷ 4 = 40 L/s."
    },
    {
      id: "q_8_3", audioKey: "q_8_3", rule: "SAME FACTOR",
      prompt: "In 2 seconds the engine burns 70 litres. If burn time is tripled, what happens to fuel burnt?",
      audioText: "In 2 seconds the engine burns 70 litres. If burn time is tripled, what happens to fuel burnt?",
      options: ["Multiplied by 3", "Divided by 3", "Increased by 3 L", "Stays the same"], correctIndex: 0,
      diagramData: { mode: "factor", xLab: "Time (s)", yLab: "Fuel (L)", xVal: 2, yVal: 70, m: 3 },
      explanation: "Fuel burnt scales by the same factor (multiplied by 3)."
    },
    {
      id: "q_8_4", audioKey: "q_8_4", rule: "FIND x",
      prompt: "A rocket thruster burns 40 litres of fuel per second. For how many seconds can 280 litres burn?",
      audioText: "A rocket thruster burns 40 litres of fuel per second. For how many seconds can 280 litres burn?",
      options: ["7 seconds", "6 seconds", "8 seconds", "9 seconds"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Time (s)", yLab: "Fuel (L)", xVal: "?", kVal: 40, yVal: 280 },
      explanation: "x = 280 ÷ 40 = 7 seconds."
    },
    {
      id: "q_8_5", audioKey: "q_8_5", rule: "DIRECT TEST",
      prompt: "At 0 seconds 0 fuel is burnt, and fuel burns at a constant rate. Is fuel burnt directly proportional to time?",
      audioText: "At 0 seconds 0 fuel is burnt, and fuel burns at a constant rate. Is fuel burnt directly proportional to time?",
      options: ["Yes, passes through (0, 0) and has constant burn rate", "No, gravity pulls fuel down", "No, rocket becomes lighter", "Only in outer space"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Time (s)", yLab: "Fuel (L)", xs: [0, 1], ys: [0, 35] },
      explanation: "Constant flow rate beginning from 0 at time 0 is a direct proportion."
    },
    {
      id: "q_8_6", audioKey: "q_8_6", rule: "COMPLETE TABLE",
      prompt: "In the flight log, 2 seconds burn 90 litres and 4 seconds burn 180 litres. How much fuel burns in 5 seconds?",
      audioText: "In the flight log, 2 seconds burn 90 litres and 4 seconds burn 180 litres. How much fuel burns in 5 seconds?",
      options: ["225 L", "210 L", "240 L", "230 L"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Time (s)", yLab: "Fuel (L)", xs: [2, 4, 5], ys: [90, 180, "?"] },
      explanation: "k = 90 ÷ 2 = 45 L/s. For 5 s: 5 × 45 = 225 L."
    },
    {
      id: "q_8_7", audioKey: "q_8_7", rule: "GRAPH READING",
      prompt: "On the telemetry graph through (0, 0) and (2, 72 L), how much fuel is burned at x = 6 seconds?",
      audioText: "On the telemetry graph through 0 comma 0 and 2 comma 72 litres, how much fuel is burned at x equals 6 seconds?",
      options: ["216 L", "200 L", "224 L", "210 L"], correctIndex: 0,
      diagramData: { mode: "graph", xa: 2, ya: 72, x2: 6 },
      explanation: "k = 72 ÷ 2 = 36. For x = 6, y = 36 × 6 = 216 L."
    },
    {
      id: "q_8_8", audioKey: "q_8_8", rule: "UNIT RATE",
      prompt: "A satellite booster burns 225 litres of fuel over 5 seconds. How much fuel does it burn in 1 second?",
      audioText: "A satellite booster burns 225 litres of fuel over 5 seconds. How much fuel does it burn in 1 second?",
      options: ["45 L", "40 L", "50 L", "42 L"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Time (s)", yLab: "Fuel (L)", xVal: 1, kVal: "?", yVal: 45 },
      explanation: "Burn rate = 225 ÷ 5 = 45 L/s."
    },
    {
      id: "q_8_9", audioKey: "q_8_9", rule: "y = kx",
      prompt: "If fuel y equals 45 times seconds x, how much fuel is consumed in 8 seconds?",
      audioText: "If fuel y equals 45 times seconds x, how much fuel is consumed in 8 seconds?",
      options: ["360 L", "340 L", "380 L", "350 L"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Time (s)", yLab: "Fuel (L)", xVal: 8, kVal: 45, yVal: "?" },
      explanation: "y = 45 × 8 = 360 litres."
    }
  ],

  // WORLD 9: Golden Graph Gallery (k ~ ₹25–₹35 per ticket)
  9: [
    {
      id: "q_9_0", audioKey: "q_9_0", rule: "y = kx",
      prompt: "Oliver notes that 1 gallery ticket costs ₹25. How much do 5 tickets cost?",
      audioText: "Oliver notes that 1 gallery ticket costs 25 rupees. How much do 5 tickets cost?",
      options: ["₹125", "₹115", "₹130", "₹135"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Tickets", yLab: "Cost (₹)", xVal: 5, kVal: 25, yVal: "?" },
      explanation: "y = 25 × 5 = ₹125."
    },
    {
      id: "q_9_1", audioKey: "q_9_1", rule: "UNITARY METHOD",
      prompt: "Sophia finds that 3 tickets cost ₹96. How much do 7 tickets cost?",
      audioText: "Sophia finds that 3 tickets cost 96 rupees. How much do 7 tickets cost?",
      options: ["₹224", "₹210", "₹230", "₹240"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Tickets", yLab: "Cost (₹)", xs: [3, 7], ys: [96, "?"] },
      explanation: "1 ticket = 96 ÷ 3 = ₹32. Then 7 tickets = 32 × 7 = ₹224."
    },
    {
      id: "q_9_2", audioKey: "q_9_2", rule: "CONSTANT RATIO",
      prompt: "In the gallery table, cost y is directly proportional to tickets x. If 4 tickets cost ₹140, what is k?",
      audioText: "In the gallery table, cost y is directly proportional to tickets x. If 4 tickets cost 140 rupees, what is k?",
      options: ["k = 35", "k = 30", "k = 40", "k = 32"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Tickets", yLab: "Cost (₹)", xs: [1, 2, 4], ys: [35, 70, 140] },
      explanation: "k = y ÷ x = 140 ÷ 4 = 35."
    },
    {
      id: "q_9_3", audioKey: "q_9_3", rule: "SAME FACTOR",
      prompt: "2 tickets cost ₹60. If a family buys 4 times as many tickets, what happens to the total cost?",
      audioText: "2 tickets cost 60 rupees. If a family buys 4 times as many tickets, what happens to the total cost?",
      options: ["Multiplied by 4", "Divided by 4", "Increased by 4 rupees", "Stays the same"], correctIndex: 0,
      diagramData: { mode: "factor", xLab: "Tickets", yLab: "Cost (₹)", xVal: 2, yVal: 60, m: 4 },
      explanation: "Total cost is multiplied by the same factor of 4."
    },
    {
      id: "q_9_4", audioKey: "q_9_4", rule: "FIND x",
      prompt: "1 VIP ticket costs ₹35. How many VIP tickets can be bought with ₹280?",
      audioText: "1 VIP ticket costs 35 rupees. How many VIP tickets can be bought with 280 rupees?",
      options: ["8 tickets", "7 tickets", "9 tickets", "10 tickets"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Tickets", yLab: "Cost (₹)", xVal: "?", kVal: 35, yVal: 280 },
      explanation: "x = 280 ÷ 35 = 8 tickets."
    },
    {
      id: "q_9_5", audioKey: "q_9_5", rule: "DIRECT TEST",
      prompt: "0 tickets cost ₹0, and the cost per ticket is constant. Does this graph represent direct proportion?",
      audioText: "0 tickets cost 0 rupees, and the cost per ticket is constant. Does this graph represent direct proportion?",
      options: ["Yes, straight line passing through (0, 0)", "No, must be curved", "No, prices always rise", "Only on weekends"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Tickets", yLab: "Cost (₹)", xs: [0, 1], ys: [0, 30] },
      explanation: "A straight line passing through (0, 0) represents direct proportion."
    },
    {
      id: "q_9_6", audioKey: "q_9_6", rule: "COMPLETE TABLE",
      prompt: "In the ticket table, 2 tickets cost ₹70 and 4 tickets cost ₹140. How much do 6 tickets cost?",
      audioText: "In the ticket table, 2 tickets cost 70 rupees and 4 tickets cost 140 rupees. How much do 6 tickets cost?",
      options: ["₹210", "₹190", "₹220", "₹200"], correctIndex: 0,
      diagramData: { mode: "table", xLab: "Tickets", yLab: "Cost (₹)", xs: [2, 4, 6], ys: [70, 140, "?"] },
      explanation: "k = 70 ÷ 2 = 35. For 6 tickets: 6 × 35 = ₹210."
    },
    {
      id: "q_9_7", audioKey: "q_9_7", rule: "GRAPH READING",
      prompt: "On the gallery graph through (0, 0) and (2, ₹64), what is the total cost for x = 6 tickets?",
      audioText: "On the gallery graph through 0 comma 0 and 2 comma 64 rupees, what is the total cost for x equals 6 tickets?",
      options: ["₹192", "₹180", "₹204", "₹190"], correctIndex: 0,
      diagramData: { mode: "graph", xa: 2, ya: 64, x2: 6 },
      explanation: "k = 64 ÷ 2 = 32. For x = 6, y = 32 × 6 = ₹192."
    },
    {
      id: "q_9_8", audioKey: "q_9_8", rule: "UNIT RATE",
      prompt: "A school group pays ₹360 for 9 exhibition passes. What is the unit cost of 1 pass?",
      audioText: "A school group pays 360 rupees for 9 exhibition passes. What is the unit cost of 1 pass?",
      options: ["₹40", "₹35", "₹45", "₹38"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Tickets", yLab: "Cost (₹)", xVal: 1, kVal: "?", yVal: 40 },
      explanation: "Unit cost = 360 ÷ 9 = ₹40."
    },
    {
      id: "q_9_9", audioKey: "q_9_9", rule: "y = kx",
      prompt: "If ticket cost y equals 30 times tickets x, what is the total cost for 8 tickets?",
      audioText: "If ticket cost y equals 30 times tickets x, what is the total cost for 8 tickets?",
      options: ["₹240", "₹220", "₹250", "₹260"], correctIndex: 0,
      diagramData: { mode: "machine", xLab: "Tickets", yLab: "Cost (₹)", xVal: 8, kVal: 30, yVal: "?" },
      explanation: "y = 30 × 8 = ₹240."
    }
  ]
};

export function makeQuestion(worldIndex = 0, qIndex = 0) {
  const worldQs = PRACTICE_QUESTIONS[worldIndex] || PRACTICE_QUESTIONS[0];
  const q = worldQs[qIndex % worldQs.length];
  return {
    ...q,
    world: PRACTICE_WORLDS[worldIndex] || PRACTICE_WORLDS[0]
  };
}
