# 0.0

- import:

  - avoid error prone relative path
  - find the tsconfig on the parent folder and add to paths when exporting code in a new folder

    ```json
    "paths": {
      "lib/*": ["./source/lib/*"],
    },
    ```

