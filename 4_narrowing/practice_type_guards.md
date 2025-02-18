# 1

```ts
type Video = {
  title: string;
  creator: string;
};

function printVideoInfo(videoOrVideos: Video | Video[]) {
  if ("length" in videoOrVideos) {
    videoOrVideos.forEach((v) =>
      console.log(`"${v.title}" by ${v.creator}`)
    );
  } else {
    console.log(`"${videoOrVideos.title}" by ${videoOrVideos.creator}`);
  }
}

printVideoInfo({
  title: "Introduction to TypeScript",
  creator: "John Doe",
});
```

This will work as intended. If the input is an array of `Video` types, then the `"length"` property can be used to iterate through all objects. Because the passed in object is not an array, narrowing forces the parameter `videoOrVideos` to follow the `else` branch, logging its title and creator to the console.

# 2

```ts
type Video = {
  title: string;
  creator: string;
  length: number;
};

function printVideoInfo(videoOrVideos: Video | Video[]) {
  if ("length" in videoOrVideos) {
    videoOrVideos.forEach((v) =>
      console.log(`"${v.title}" by ${v.creator}`)
    );
  } else {
    console.log(`"${videoOrVideos.title}" by ${videoOrVideos.creator}`);
  }
}

printVideoInfo({
  title: "Introduction to TypeScript",
  creator: "John Doe",
  length: 100,
});
```

This will cause an error, as the `forEach` method does not exist for object literals. The difference with this problem from the last is that type `Video` now has a defined `"length"` property, which will cause the type guard to follow the `if` branch for both objects and arrays.