write a python script to run in uv

- given
  - a folder w files named like `20261009_210742.jpg` `20261009_210743.jpg`
  - path of the base image of static background
- sort by name
- for each image,
  - ignore if it has no prev img
  - apply blur to img and its prev img, and calc mse, the volume of change
  - substract both by static background, if both are generally non empty (otherwise output a zero vector), calc the center of mass and centroid shift, the direction (int from 0 to 360, excluding 360) and length
- output a yaml file `stats.yaml`, which is like 20261009_210742: volume, direction, length


