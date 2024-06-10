// Є клас Device, який моделює наручні часи. У нього є 4 кнопки: функійні кнопки А, B, C і 1 кнопка переключення режима
// Є 2 режима: часи і таймер
// В залежності від вибраного режиму функційні кнопки ведуть себе по різному
// Mode: Clock - A: налаштування, B: подивитись дату, С: Показати погоду
// Mode: Timer - A: старт таймера, B: пауза таймера, С: стоп


// Цю задачу можна рішити за допомогою паттерна стратегія:

interface Strategy {
    doA(): string
    doB(): string
    doC(): string
}

class Clock implements Strategy {
    doA() {
        return 'налаштування';
    }

    doB() {
        return 'подивитись дату';
    }
    doC() {
        return 'показати погоду';
    }
}

class Timer implements Strategy {
    doA() {
        return 'старт таймера';
    }

    doB() {
        return 'пауза таймера';
    }
    doC() {
        return 'стоп таймера';
    }
}

class Device {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setMode(strategy: Strategy) {
        this.strategy = strategy;
    }

    doA() {
        return this.strategy.doA();
    }

    doB() {
        return this.strategy.doB();
    }
    doC() {
        return this.strategy.doC();
    }
}

const clock = new Clock();
const timer = new Timer();

const device = new Device(clock);
console.log(device.doA());
device.setMode(timer);
console.log(device.doA());
console.log(device.doC());
device.setMode(clock);
console.log(device.doA());
