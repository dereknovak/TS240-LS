```ts
type UserSettings = {
  readonly colorScheme: string;
  readonly notifications: ReadonlyArray<string>;
};

const userSettings: UserSettings = {
  colorScheme: "dark",
  notifications: ["email", "push"],
};

(userSettings as any).colorScheme = "light";
(userSettings as any).notifications.push("sms");

console.log(userSettings.colorScheme);
console.log(userSettings.notifications);
```

This example will not contain any errors. Because the type assertion of `any` is used on `userSettings`, its type, along with all of its nested types, are treated as `any` and therefore will not create any compilation errors, despite attempting to reassign a property with `readonly`. It's important to note that this is bad practice and should be avoided.

The example will log `light` and `['email', 'push', 'sms']` to the console. Even if the `readonly` rules were enforced, JavaScript's runtime will run as if TypeScript is not present.