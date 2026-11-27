---
title: "Unreal - PCG"
date: 2026-11-27T00:00:00+01:00
description: "An overview of PCG in Unreal Engine 5.8.4+"
template: "notes.html"
tags:
    - Unreal
---


!!! info "Megaplants"

    - [ ] Plugins required
        - Procedural vegitation editor
    - [ ] Project settings:
        - Nanite foliage : Enable


!!! tip "Megaplants"

    - [ ] Plugins required
        - Procedural Content Generation Framework (PCG)
        - PCG Geometry Script Interop
            - Mesh Sampler: Samples a static mesh asset directly using triangles, vertices, or voxelization. Requires enabling the PCG Geometry Script Interop plugin and




* Add a PCG Volume actor to the scene
* Add an empty PCG Graph in Content browser
* In the details pane of the PCG Volume actor PCG > Graph > set the empty graph
* Open up the graph, add a mesh sampler
    * now we want to set the mesh to scatter on
    * select a static mesh actor in the world outliner that you wish to scatter on
    * navigate to the static mesh of this actor and make sure it is selected
    * Set the mesh (Settings > Mesh of the mesh sampler) to the selected mesh