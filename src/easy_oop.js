// @flow
/**
 * Example 1
 * Easy OOP 
 */

class Animal {}
class Dog extends Animal {bark() {}}
class Cat extends Animal { meow() {}}

const dogs: Dog[] = [new Dog(), new Dog()];

const animals: Animal[] = dogs;

dogs.forEach(a => a.bark());