export interface RegulationSanction {
    id: number;
    description: string;
    penaltyPoints: number;
    penaltyType: string; // Ajusta el tipo según lo que realmente devuelva el JSON
  }