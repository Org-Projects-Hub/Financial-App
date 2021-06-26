// Simulation Types

export type simulation_stages =
  | 'simulation'
  | 'pretest'
  | 'evaluation'
  | 'posttest';

export interface evaluationValsType {
  balance: number;
  income: number;
  rent: number;
  food: number;
  transport: number;
}
