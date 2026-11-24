spec

formal spec for complex implementation and big changes

# guide

define goal, i.e. what's considered done for now.

define non goals only if explicitly decided.

focus on happy path. define what should happen for each normal user flow. what they would see. what should happen under the hood.

define edge cases behavior only when needed.



specify the constants like default timeout when it can be measured, exact classnames or visible label text on ui.

when creating new files, define the file structure and every fn signature inside each, and data flow. no need to specify internal implementation unless matters.



when discussing or revising spec, modify in place and only keep the final decisions. no version suffix.
