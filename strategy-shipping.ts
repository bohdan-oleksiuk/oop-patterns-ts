// Порахувати вартість доставки FedEx, UPS, Usps
// Є клас ShippingCostCalculator з методом calculateCost


// Цю задачу можна рішити за допомогою паттерна стратегія:

interface ShippingStrategy {
    calculateCost(weight: number, distance: number): number;
}

class FedExStrategy implements ShippingStrategy {
    calculateCost(weight: number, distance: number): number {
        return weight * distance * 0.5;
    }
}

class UPSStrategy implements ShippingStrategy {
    calculateCost(weight: number, distance: number): number {
        return weight * distance * 0.7;
    }
}

class UspsStrategy implements ShippingStrategy {
    calculateCost(weight: number, distance: number): number {
        return weight * distance * 0.3;
    }
}

class ShippingCostCalculator {
    shippingStrategy: ShippingStrategy;

    constructor(strategy: ShippingStrategy) {
        this.shippingStrategy = strategy;
    }

    calculateCost(weight: number, distance: number) {
        return this.shippingStrategy.calculateCost(weight, distance);
    }
}

const fedExStrategy = new FedExStrategy();
const upsStrategy = new UPSStrategy();
const uspsStrategy = new UspsStrategy();

let cost;

const calculator = new ShippingCostCalculator(fedExStrategy);
cost = calculator.calculateCost(10, 100);
console.log(cost);

calculator.shippingStrategy = upsStrategy;
cost = calculator.calculateCost(10, 100);
console.log(cost);

calculator.shippingStrategy = uspsStrategy;
cost = calculator.calculateCost(10, 100);
console.log(cost);
