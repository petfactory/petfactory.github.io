---
title: "Lego Jeep - 02"
date: 2025-02-15T00:00:00+01:00
draft: false
description: "Houdini"
poster: "lego_jeep_vat_04_960.jpg"
tags: ["Houdini"]
info: ["Houdini"]
template: "work_single.html"
---

<div style="position: relative; width: 100%; padding-bottom: 56.25%">
<iframe src="https://www.youtube.com/embed/oMGFwPyNtSk" 
        title="Lego - Porsche 911 RSR - 01" frameborder="0" allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        style="position: absolute; width: 100%; height: 100%;">
</iframe>
</div>


In a previous project I explored Vertex Animation Textures (VAT). In short VAT is a way to animate meshes on the GPU, using only textures, shaders and data stored on the mesh as vertex colors and custom uv channels. In this project I wanted to visualize the texture being sampled and the resulting animation. The position, orientation and colors are driven by the textures. The grid in the background visualizes the pixels in the texture and the moving section are the pixels currently being sampled. A line is drawn between the currently sampled pixels and the corresponding pieces of the mesh. The project is made in Houdini and rendered using Karma XPU.

Lego model: n1LS on mecabricks.com

![Houdini](../assets/work/lego_jeep_vat_02_960.jpg)
![Houdini](../assets/work/lego_jeep_vat_04_960.jpg)
![Houdini](../assets/work/lego_jeep_vat_05_960.jpg)

