import React, { Dispatch, SetStateAction } from 'react';

// Simulation Types

export type simulation_stages =
  | 'simulation'
  | 'pretest'
  | 'evaluation'
  | 'posttest'
  | 'additional';

export type setStageType = Dispatch<SetStateAction<simulation_stages>>;

export interface evaluationValsType {
  balance: number;
  income: number;
  rent: number;
  food: number;
  transport: number;
}
