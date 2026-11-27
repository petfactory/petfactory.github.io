---
title: "Unreal - PCG"
date: 2026-11-27T00:00:00+01:00
description: "An overview of PCG in Unreal Engine 5.8.4+"
template: "notes.html"
tags:
    - Unreal
    - PCG
---


## General tips

### Inspect data

!!! TIP "Preview data in the PCG graph viewport"
    - Add a *Bounds Modifier*
    - Set *Settings > mode* to *Set*
    - min (-50, -50, -50) max (50, 50, 50)
    - Inspect (A) This will show the points in the viewport 



## Transform PCG with actor transform

!!! info "You probably want to move the PCG points with the actor transform"

* Add *Get Actor Data*
    * *Data Retrieval Settings > Mode* : Get Single Point
* Add a *Copy Points* node
    * connect the output of the *Get Actor Data* to the *Target* input of the *Copy Points* node
* Connect the output from the *Load Alembic* node to the *Source* input of the *Copy Points* node
* Connect the *Out* output of the *Cop Points* node to the "rest of the graph"
* Note!
    * If you do not want the seed to change when the actor is moved (like when you are using poisson sampling)
    * make sure to set the *Settings > seed inheritance* to *source* on the *Copy points* node


## Add blueprint variable to control pcg graph


!!! info "How to add a blueprint variable and use that in PCG"

* Open up the blueprint that holds our PDG graph.
    * Add a variable, lets call it "global_scale"
        * Set the type to float
        * Make it public
        * Set default value and slider min max (optionally value range)
    * Compile and save
* Open up the PDG graph
    * Add a *Get Actor Property* node
        * Set the *Settings > Property Name* -> "global_scale"
        * Set the *Settings > Output Attribute Name* -> "global_scale"
    * Then you can use the Output and connect to whaterver you want to control

<!-- 
* Add a *Multiply* node
    * To Input *In A* connect the points comming from the alembic point cloud 
    * To Input *In B* connect the output fromn the Get actor property node
-->


## PCG spline mesh

!!! info "How to setup a spline mesh in PCG"

* Add a blueprint and open it
    * Add a spline component
    * Add a PCG graph
    * Add a variable called "static_mesh"
        * Type: *static mesh object reference*
        * Make it public
    * Add a variable called "material"
        * Type: *material instance object reference*
        * Make it public
* Open the PCG graph
    * Get the spline component from the blueprint
        * Add *Get Spline Data* node
    * Sample the spline and create a new spline
        * Add a *Spline Sampler* node
            * Conect the output from get spline data node to the *spline* input of the spline sampler 
            * Set the *Settings > Mode* to *Distance*
            * Set the *Settings > Distance Increment*
                * This will we control later by calculating the mesh bounds
        * Add a *Create Spline* node
            * Connect the output of the spline sampler to the input
            * The reason we build a "spline again" is because the mesh will be stretched between the spline control points, and by diving the origimnal input spline we can make sure each segment is adjusted to the length of the input mesh
    * Get the "static_mesh" variable and set attribute
        * Add a *Get Actor Property* node
            * Set the *Settings > Property Name* to "static_mesh" (the same as in the BP)
            * This will get the "static_mesh" variable and will set the mesh
        * Add a *Add Attribute* node
            * Connect the *Out* from the *Create Spline* node to the *In* input of the *Add Attributes* node
            * Connect the *Out* from the *Get Actor Property* node to the *Attributes* input of the *Add Attributes* node
            * Set *Settings > Input Source* to "static_mesh"
            * Set *Settings > Output Target* to "static_mesh"
    * Get the "material" variable and set attribute
        * Add a *Get Actor Property* node
            * Set the *Settings > Property Name* to "material" (the same as in the BP)
            * This will get the "material" variable and will set the mesh
        * Add a *Add Attribute* node
            * Connect the *Out* from the "static_mesh" *Add Attribute* node to the *In* input of the *Add Attributes* node
            * Connect the *Out* from the *Get Actor Property* node to the *Attributes* input of the *Add Attributes* node
            * Set *Settings > Input Source* to "material"
            * Set *Settings > Output Target* to "material"
    * Spawn the spline mesh
        * !!! warning "warning: Failed to attach the component, check logs"
            * If you get this warning you can resolve it by:
            * Setting the default scene root of the containing blueprints mobility to *Static*
            * You could also set the spline component mobility to static
            * Seems like the mobility needs to match 
        * ToDO
            * set the mesh and material
    





## cvar

* if meshes dissapear when you zoom out
    * r.RayTracing.Geometry.InstancedStaticMeshes.Culling 0



<!-- 
# Struct

* Create a struct
    * Lets call it "F_vce_mesh"
    * add 2 varaibles
        * name: mesh type: Static Mesh (object reference)
        * name: mesh_id type: Integer


# Blueprint Primary Data Asset

* Create a blueprint
* expand the all classes, start typing "prima" selct *PrimaryDataAsset*
* call it "BP_vce_data_asset"
* open the blueprint and add a variable called "mesh_data"
    * set the type to the *F_vce_mesh* we just created
    * make sure it is public
    * Set the varaible type to an array

# Data asset

* create a Data Asset
    * rmb conntent browser, start typing "data a..." select *Data Asset*
    * in the *Pick class for data asset instance* select the *BP_vce_data_asset* we just created
    * call it "DA_vce_mesh"
* open up the data asset add a few array elements
    * set the mesh id to 0, 1, 2 etc or what you need
    * select the Static meshes you want to use
    * save the data asset


# PCG & Blueprint

* Root PCG blueprint
    * First we create a blueprint that will hold our PCG graph
    * Create a Blueprint
        * Base class Actor
        * Lets call it "BP_vce_pcg_actor"
        * open the blueprint
        * in the component add a PCG component
        * select the PCG component, and in the details pane scroll to Instance
            * In the dropdown select *Create New Asset* : PCG Graph
            * save it somewhere good and give it the name *PCG_vce_graph*
        * compile and save the blueprint
        * add the blueprint to the level


* Edit the PCG
    * open up the pcg
    * add a *Load Alembic* node 
    * Set the file path on the *Alembic File Path* to point to the alembic file exported from Houdini
    * select the *Load Alembic* and press *D* you should now see some debug points in the viewport
    * To set the transform to work with Houdini coordinates in the *Setup from Standard* dropdown select "City Sample"
        * this will populate the Attribute mapping position, scale & orient
    * also set the *Debug > Scale Method* to *Absolute* to be able to set Point Scale
        * set the point sacle to 0.2


* Make use of the Data asset
    * Open up the PCG graph
    * make sure *Graph Settings* is selected in the top bar
    * in the details pane go to instance > Parameters and click the + to add a new property
        * Change the name of the parameter to "DA_vce_mesh"
        * Set the type to *BP_vce_data_asset* and make it an object reference
        * Click the dropdown (that should say None) and select the *DA_vce_meshes* (which is based on the BP_vce_data_asset blueprint)
    * Then we can get the data asset parameter
        * in the pcg graph, RMB click > Graph Parameters: select *Get DA_vce_meshes*
    * Add a *Get Property From Object Path*
        * Connect the output of the *Get DA_vce_meshes* to the input of the input of the *Get Property From Object Path* node.
        * Set the *Property Name* to "mesh_data" -> the name of the variable we created in the *BP_vce_data_asset* blueprint (that we used as a base for our Data Asset)
        This varaible has the data type of the *F_vce_mesh* struct that has mesh_id and mesh variables.
        * To inspect the data asset we can select the *Get Property From Object Path* and press A
            * If you do not see anything in the inspection (geometry spreadsheet) make sure you select the PCG graph in the bottom left side (and the the BP parent is not selected)

* Spawn static mesh by mesh ID
    * To be able to use the mesh_id stored on the alembic points we need to add a *Match and Set Attributes* node
        * In the pcg graph RMB > and start typing "matc..." select *Match And Set Attributes*
        * Then we need to select which attribute to match and set
            * Settings > Match Attributes : Enable it
            * *Input Attribute* : "mesh_id"
            * *Match Attribute* : "mesh_id"
        * Connect the output of the *Load Alembic* node to the *in* input of the Match And Set Attributes node
        * Connect the *Out* output from the *Get Property From Object Path* node to the *Match Data* input of the Match And Set Attributes node.
* Staic Mesh Spawner (by attribute)
    * In the PCG graph create a *Static Mesh Spawner*
        * Set the Mesh Selector > Mesh Selector Type : *PCGMeshSelectorByAttribute*
        * Set the *Attribute Name* : *mesh* (as it is called in the Data Asset, named in the Struct)
        * Connect the output of the *Match And Set Attributes* node to the *In* input of the *Static Mesh Spawner* node.


# override materials

* With the static mesh spwaner selected, in the details pane
    * Mesh Selector > By Attribute Material Overrides
        * Add an item to the array, in our stuct that we based our data asset on we callled the variable "material"
        * through the attribute "material" we can get the path to the material (as set in the data asset)
        * in our case we called it "material"


# per instance data

* With the static mesh spwaner selected, in the details pane:
    * Instance Data Packer -> Instance Data Packer Type -> *PCGInstanceDataPackerByAttribute*
    * Add item to the array, then select the name of the attribute to use as value
        * to do, add more attributres an test to load them
    * Then we can use the *Per Instance Custom Data* node in the Material to access the data.
        * note that we access the data with the index in the array






# set alembic path on the root BP actor node

* Open up the "BP_vce_pcg_actor" blueprint
    * add a variable to the "BP_vce_pcg_actor"
    * call it "alembic_filepath"
    * set the data type to *File Path*
    * make sure it is public
    * Set the category to something that makes sense (this is optional, but nice to organize)
* open up the PCG graph "PCG_vce_graph"
    * add a *Get Actor Property* node
    * set the Settings > Property Name : alembic_filepath
        * this will get the alembic_filepath varaible from the BP actor
*  On the load alembic node expand the inputs by clicking on the downwards arrow at the bottom
    * connect the output from the *Get Actor Property* to the *FGile Path* in put on the Load Alembic node

# add a button to regenerate the PCG graph on the root BP actor node

* Open up the "BP_vce_pcg_actor" blueprint
    * add a function, call it "Regenerate PCG"
    * with the finction selected, enable Graph > Call in Editor
    * drag in the *PCG* component to the newly createed function
    * drag out from the PCG output pin and release in the graph
        * add a generate function
        * start tyoeing "gen..." sekect PCG > Generate
        * enable *Force*
    * Connect the pitput pin from the custom function "regenerate_pcg" to the inpout exec pin on the "Generate" node





# still todo!!!!

* open up the blueprint
    * Add a variable, call it "global_scale"
    * set the type to *Float* and make it public
    * with the variable selected, in the details pane set TheVariable > Category : "VCE" (or whatever makes sense to you)

https://www.youtube.com/watch?v=tmGduvvj03g



-->