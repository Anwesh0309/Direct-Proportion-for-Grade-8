/* =========================================================================
   AUDIO MAP — Mapping fixed text keys to audio files and speech text
   - Wonder & Story phases: Narrates complete on-screen text specially.
   - Simulation phase: Guides stations and interactive activities.
   - Practice phase: 10 Worlds x 10 Questions narration.
   ========================================================================= */
import { PRACTICE_QUESTIONS } from './mathData.js';

export const AUDIO_MAP = {
  // --- WONDER PHASE (Special On-Screen Text Audio Narration) ---
  "wonder_1": {
    text: "How Can One Recipe Feed 4 or 400 People? Every Ingredient times 10! Chef Zara uses 2 cups of rice to feed 4 people. To feed 40 people, she multiplies every ingredient by exactly the same number, so she needs 20 cups of rice! How can we predict one quantity when another changes, without any guessing?",
    style: "question",
    file: "/assets/audio/wonder_1.mp3"
  },

  // --- STORY PHASE (Special On-Screen Text Audio Narration: Title + Body + Quote + Mascot) ---
  "story_1": {
    text: "Quantities That Travel Together. Look around! The more fuel a car uses, the farther it travels. The more notebooks you buy, the more you pay. Some quantities rise and fall together. But how do we know if they change in a perfectly fair, predictable way? Many quantities in daily life are linked together! Let's discover the secret rule behind quantities that grow together!",
    style: "statement",
    file: "/assets/audio/story_1.mp3"
  },
  "story_2": {
    text: "What is Direct Proportion? Two quantities are in direct proportion when they increase or decrease together at the same rate. If one quantity doubles, the other doubles too. If one is cut in half, the other is cut in half as well. Double one, double the other! Same factor on both sides: that is the heart of direct proportion!",
    style: "emphasis",
    file: "/assets/audio/story_2.mp3"
  },
  "story_3": {
    text: "The Constant Ratio k. One notebook costs 15 rupees. Two cost 30, three cost 45 and four cost 60. Divide each cost y by the number of notebooks x and you always get 15. This fixed number is called the constant of proportionality, k. k equals y divided by x stays the same for every pair! If y divided by x changes, it is not direct proportion!",
    style: "statement",
    file: "/assets/audio/story_3.mp3"
  },
  "story_4": {
    text: "Master Formula: y equals k x. Since y divided by x always equals k, we multiply both sides by x to get our master formula. Put x into the machine, multiply it by k, and out comes y. For 3 notebooks, y equals 15 times 3, which is 45 rupees. y equals k times x. Find k once, then you can find y for any x!",
    style: "celebration",
    file: "/assets/audio/story_4.mp3"
  },
  "story_5": {
    text: "The Graph Tells the Story. Plot the pairs of a direct proportion and the points line up perfectly on a straight line that passes through the origin, 0 comma 0. The bigger the value of k, the steeper the line climbs. Straight line plus passes through 0 comma 0 equals Direct Proportion! A steeper line means a bigger k. Zero of one means zero of the other!",
    style: "emphasis",
    file: "/assets/audio/story_5.mp3"
  },
  "story_6": {
    text: "Real or Fake Proportion? Be a detective! Buying notebooks is direct proportion, because zero notebooks cost zero rupees. But a taxi charges a fixed starting fare plus a price per kilometre, so y divided by x keeps changing. That is not direct proportion. Test it: is y divided by x the same for every pair, and does it start at zero? Divide, compare, and check the origin. Then you will know!",
    style: "emphasis",
    file: "/assets/audio/story_6.mp3"
  },
  "story_7": {
    text: "Solving with the Unitary Method. If 5 pens cost 60 rupees, how much do 8 pens cost? Step 1: find the cost of one pen, 60 divided by 5, which is 12 rupees. Step 2: multiply by 8 to get 96 rupees. Find one, then scale to any amount! Divide to find one unit, then multiply to find any amount! You can also write it as a balanced ratio: 60 divided by 5 equals what divided by 8!",
    style: "encouragement",
    file: "/assets/audio/story_7.mp3"
  },
  "story_8": {
    text: "Step Into the Simulation Lab! Awesome job! You now know ratios, the constant k, the formula y equals k x, and the straight line graph. Step into the lab to mix smoothies, plot points, balance scales, and navigate maps! Ready to test your direct proportion skills? Click below to enter the interactive lab!",
    style: "celebration",
    file: "/assets/audio/story_8.mp3"
  },

  // --- SIMULATION PHASE: STATION INTROS ---
  "sim_1": {
    text: "Welcome to Station 1: Ratio Lab! Explore how x and y move together, and discover how the constant ratio k stays unchanged.",
    style: "encouragement",
    file: "/assets/audio/sim_1.mp3"
  },
  "sim_2": {
    text: "Welcome to Station 2: Prove-It Studio! Complete the data tables, plot coordinates on the graph grid, and sort real direct proportions from the fakes.",
    style: "statement",
    file: "/assets/audio/sim_2.mp3"
  },
  "sim_3": {
    text: "Welcome to Station 3: Mission Control! Apply the unitary method and balanced scale ratios to solve real-world proportion challenges.",
    style: "question",
    file: "/assets/audio/sim_3.mp3"
  },

  // --- SIMULATION PHASE: 9 INTERACTIVE ACTIVITY GUIDES ---
  "sim_1_1": {
    text: "Welcome to the Smoothie Blender Bar! Zara's stand sells fresh mango smoothies for 15 rupees each. Pick the number of cups, blend the smoothies to update the ingredients and receipt, and spot the fixed constant k!",
    style: "encouragement",
    file: "/assets/audio/sim_1_1.mp3"
  },
  "sim_1_2": {
    text: "Activity 2: Coastal Cycling Journey! Zara rides along the coast at a steady speed k. Follow her along the road and observe how distance y and time x trace a straight line passing through 0 comma 0!",
    style: "statement",
    file: "/assets/audio/sim_1_2.mp3"
  },
  "sim_1_3": {
    text: "Activity 3: Stationery Doubling Machine! 4 exam pencils cost 20 rupees. Press the scaling factors and observe how both pencils and price scale by the exact same multiplier!",
    style: "emphasis",
    file: "/assets/audio/sim_1_3.mp3"
  },
  "sim_2_1": {
    text: "Activity 1: Ribbon Craft Table! Zara buys decorative satin ribbon for festival gift boxes. Use the known clue that 3 metres cost 45 rupees to find the unit rate k, and complete the ledger!",
    style: "encouragement",
    file: "/assets/audio/sim_2_1.mp3"
  },
  "sim_2_2": {
    text: "Activity 2: Rainwater Harvest Tank! The eco-tap fills the school rainwater drum at 2 litres every minute. Observe the water level at each minute, and plot the coordinates on the grid!",
    style: "statement",
    file: "/assets/audio/sim_2_2.mp3"
  },
  "sim_2_3": {
    text: "Activity 3: Case File Detective! Inspect real-world receipts for apples, taxis, books, and child growth. Test if y divided by x stays fixed and check the 0 comma 0 rule to stamp your verdict!",
    style: "question",
    file: "/assets/audio/sim_2_3.mp3"
  },
  "sim_3_1": {
    text: "Activity 1: Bakery Truffle Ladder! Climb the unitary ladder: use the 8-truffle box price of 96 rupees to find 1 truffle, then scale up to custom orders with zero guessing!",
    style: "encouragement",
    file: "/assets/audio/sim_3_1.mp3"
  },
  "sim_3_2": {
    text: "Activity 2: Road Trip Fuel Balance! Zara's car travels 90 kilometres on 6 litres of fuel. Balance the precision scale to find how far 10 litres of fuel will take her on the mountain highway!",
    style: "statement",
    file: "/assets/audio/sim_3_2.mp3"
  },
  "sim_3_3": {
    text: "Activity 3: Expedition Map Navigator! On Zara's hiking map, 3 centimetres represent 60 kilometres. Use the scale ratio k equals 20 to convert map distances to real distances and back!",
    style: "celebration",
    file: "/assets/audio/sim_3_3.mp3"
  },

  // --- REFLECT & FEEDBACK AUDIO ---
  "reflect_1": {
    text: "Great work completing the module! In your own words, explain what direct proportion is and how the constant k, the formula y equals k x, and the straight line graph help us solve problems.",
    style: "thinking",
    file: "/assets/audio/reflect_1.mp3"
  },
  "fb_correct": {
    text: "Correct! Excellent proportion thinking!",
    style: "celebration",
    file: "/assets/audio/fb_correct.mp3"
  },
  "fb_wrong": {
    text: "Not quite! Check the ratio and try the next one.",
    style: "encouragement",
    file: "/assets/audio/fb_wrong.mp3"
  },
  "fb_sim_win": {
    text: "Awesome! You nailed it!",
    style: "celebration",
    file: "/assets/audio/fb_sim_win.mp3"
  },
  "fb_sim_try": {
    text: "Almost there! Look at the ratio and try again.",
    style: "encouragement",
    file: "/assets/audio/fb_sim_try.mp3"
  },
  "fb_reflect_done": {
    text: "Outstanding reflection! Lesson complete!",
    style: "celebration",
    file: "/assets/audio/fb_reflect_done.mp3"
  }
};

// --- POPULATE 10 WORLDS x 10 PRACTICE QUESTIONS AUDIO MAP (100 QUESTIONS) ---
for (let w = 0; w < 10; w++) {
  const qs = PRACTICE_QUESTIONS[w] || [];
  qs.forEach(q => {
    AUDIO_MAP[q.audioKey] = {
      text: q.audioText || q.prompt,
      style: "question",
      file: `/assets/audio/${q.audioKey}.mp3`
    };
  });
}
