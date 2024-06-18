type FuelLevel = 'low' | 'normal' | 'high';

// const currentFuelLevel: FuelLevel = 'high'

function getFuelLevel(level: FuelLevel) {
  switch (level) {
    case 'low':
      return 'Fuel is low';
    case 'normal':
      return 'Fuel is normal';
    case 'high':
      return 'Fuel is high';
    default:
      const exhaustiveCheck: never = level;
      return exhaustiveCheck;
  }
}
