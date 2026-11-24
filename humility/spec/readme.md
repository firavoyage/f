spec

formal spec for complex implementation and big changes

# guide

define goal, i.e. what's considered done for now.

define non goals only if explicitly decided.

focus on happy path. define what should happen for each normal user flow. what they would see. what should happen under the hood.

define edge cases behavior only when needed.

specify the constants like default timeout or max length when it can be measured, exact classnames or visible label text on ui.

when creating new files or adding new features, define the file structure and every fn signature inside each, and data flow. specify internal implementation only when matters.

when updating behavior or changing archi, go as if building from ground up and see existing code as some foss libs or products from competitors, keep only when useful.

when discussing or revising spec, modify in place and only keep the final decisions. no version suffix.
