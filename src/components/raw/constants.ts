import type { TInteractionInfo } from "./RwaInteractionInfo";

export const engInteractorCriertia: TInteractionInfo[] = [
  {
    title: "Asset Liquidity",
    description1: `Evaluates how easily the asset can be traded in the market. High liquidity assets have lower investment risks than low liquidity assets.`,
    description2: `Evaluation Factors: Trading frequency, trading volume, number of market participants, market depth, etc.`,
  },
  {
    title: "Legal Stability and Compliance",
    description1: `Evaluates the legal framework and regulatory environment in which the asset operates. A stable legal environment and regulatory compliance significantly impact investment safety.`,
    description2: `Evaluation Factors: Legal stability in the asset's country, regulatory compliance, consistency with international regulations, etc.`,
  },
  {
    title: "Market Demand and Growth Potential",
    description1: `Evaluates the current and future market demand for the asset. Assets with high growth potential offer long-term profitability.`,
    description2: `Evaluation Factors: Market demand, market growth rate, competitive landscape, potential for technological innovation and change, etc.`,
  },
  {
    title: "Profitability",
    description1: `Evaluates the profit or potential profitability generated by the asset.`,
    description2: `Evaluation Factors: Current yield, past performance, expected future returns, asset cost structure, etc.`,
  },
  {
    title: "Risk Profile",
    description1: `Evaluates the risk factors associated with the asset. This is a crucial factor in making investment decisions.`,
    description2: `Evaluation Factors: Credit risk, market risk, liquidity risk, legal risk, operational risk, etc.`,
  },
];

export const engInteractoMethodology: TInteractionInfo[] = [
  {
    title: "Quantitative Analysist",
    description1: `A method of evaluating the value of an asset based on quantified data.`,
    description2: `Methodology: Financial statement analysis, yield calculations, volatility analysis, simulation modeling, etc., to derive objective indicators.`,
    description3: `Tools: Financial ratio analysis (ROI, ROE, etc.), VaR (Value at Risk), Monte Carlo simulation, etc.`,
  },
  {
    title: "Qualitative Analysis",
    description1: `A method of evaluating non-financial factors related to the asset.`,
    description2: `Methodology: Industry analysis, management capability evaluation, legal risk assessment, market trend analysis, etc.`,
    description3: `Tools: SWOT analysis, Porter's Five Forces analysis, PESTEL analysis, etc.`,
  },
  {
    title: "Rating Model",
    description1: `A method of rating assets based on the results of quantitative and qualitative analysis.`,
    description2: `Methodology: Assign weights to each evaluation factor, calculate a composite score, and classify the asset's rating from CCC to AAA based on that score.`,
    description3: `Tools: Rating evaluation algorithms, statistical analysis models, machine learning-based predictive models, etc.`,
  },
  {
    title: "Scenario Analysis",
    description1: `A method of predicting the asset's performance under various market conditions.`,
    description2: `Methodology: Set various scenarios such as economic downturn, interest rate hikes, regulatory changes, and evaluate asset value changes under each scenario.`,
    description3: `Tools: Scenario planning tools, stress tests, sensitivity analysis, etc.`,
  },
];

export const engInteractoProvision: TInteractionInfo[] = [
  {
    title: "Summary Report",
    description1: `Provides a brief summary of the main evaluation results and ratings for each RWA project.`,
    description2: `Evaluation Factors: Trading frequency, trading volume, number of market participants, market depth, etc.`,
  },
  {
    title: "Detailed Report",
    description1: `Describes in detail all data and analysis methods used in the evaluation, allowing investors to transparently understand the evaluation process and results.`,
    description2: `Evaluation Factors: Trading frequency, trading volume, number of market participants, market depth, etc.`,
  },
  {
    title: "Risk and Opportunity Assessment",
    description1: `Specifically analyzes the major risks and opportunities of the asset, helping investors make informed decisions.`,
    description2: `Evaluation Factors: Trading frequency, trading volume, number of market participants, market depth, etc.`,
  },
];
