function greet(name: string): string {
  return `Hello, ${name}!`;
}

class Greeter {
  constructor(private name: string) {}

  greet(): string {
    return `Hello, ${this.name}!`;
  }
}

export { greet, Greeter };